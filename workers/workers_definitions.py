import os, time
from datetime import datetime
import multiprocessing, threading, queue
from multiprocessing import Process
import subprocess
from workers.SSHManager import SSHManager
from dotenv import load_dotenv
load_dotenv()
from args_parser import args
from config import main_config

if args.ssh_addr.split("@")[1] == "localhost":
	key_file = os.getenv("SSH_KEY_FILE")
else:
	key_file = os.getenv("SSH_PUBLIC_KEY_FILE")

def get_time():
	current_datetime = datetime.now()
	return current_datetime.strftime("%Y-%m-%d %H:%M:%S") + " :"

class ServerWorker(Process):
	name = "server"
	remote_env_init_command = main_config.remote_env_init_command

	def __init__(self, debug=False, dist=False, avatar_type = '', **kwargs):
		super(ServerWorker, self).__init__()
		self.debug = debug
		self.dist = dist
		self.state = None
		self.print_queue = None
		self.dest_con, self.origin_con = multiprocessing.Pipe()
		
	def run(self):
		try:
			self.ssh_manager = SSHManager(args.ssh_addr, key_file=key_file)
			self.ssh_manager.connect_to_server(self.print_queue)
			try:
				if self.debug:
					server_command = f"cd {os.path.abspath('../Wav2Lip_with_cache')} && python -u daemon.py"
				elif self.dist:
					server_command = f"cd {os.path.abspath('../../../Wav2Lip_with_cache')} && python -u daemon.py"
				else:
					# don't forget to adapt the remote env init command to the actual ssh env of your provider (in config.py)
					server_command = f'{self.remote_env_init_command} cd Wav2Lip_with_cache && python -u daemon.py'

				self.ssh_manager.run_command(server_command, self.print_queue, self.dest_con)

				while not self.dest_con.poll(timeout = 0.1):
					continue
				
				self.ssh_manager.send_sigint(self.print_queue)
				self.print_queue.put(f"{get_time()} INFO : Confirmed function returnd after sending SIGINT")
				self.ssh_manager.disconnect(self.print_queue)
			except RuntimeError as e:
				self.print_queue.put(f"Failed to run the command start the server: {e}")
				raise Exception(f"Failed to run the command start the server: {e}")
		except Exception as e:
			self.print_queue.put(f'Raised exception when SSH-ing in ServerWorker {str(e)}')
			raise Exception(f"Raised exception when SSH-ing in ServerWorker {str(e)}")
		
	def terminate(self):
		self.origin_con.send('stop')
		time.sleep(8)
		super().terminate()

class PlaybackWorker(Process):
	name = "playback"

	def __init__(self, debug=False, dist=False, avatar_type = '', **kwargs):
		super(PlaybackWorker, self).__init__()
		self.debug = debug
		self.dist = dist
		self.avatar_type = avatar_type
		if self.debug:
			self.exit_flag_path = "../Wav2Lip_resident/exit_flag.txt"
		elif self.dist:
			self.exit_flag_path = "../video_playback/exit_flag.txt"
		else:
			self.exit_flag_path = "exit_flag.txt"
		self.dest_con, self.origin_con = multiprocessing.Pipe()
		self.state = None
		self.print_queue = None
		self.output_queue = None

	def run(self):
		self.output_queue = multiprocessing.Queue()
		try:
			# command = 'python -u video_playback_vlc.py'
			if self.debug:
				executable_path = os.path.abspath(f"../Wav2Lip_resident/Avatar_video_playback.dist/Avatar_video_playback.exe --avatar_type {self.avatar_type}")
			elif self.dist:
				executable_path = os.path.abspath(f"../video_playback/Avatar_video_playback.exe --avatar_type {self.avatar_type}")
			else:
				executable_path = os.path.abspath(f"Avatar_video_playback.exe --avatar_type {self.avatar_type}")

			sp = subprocess.Popen(
				# command,
				executable_path,
				# "../Wav2Lip_resident/",
				stdout=subprocess.PIPE
			)

			# Start a thread to read the output (problem with sys.stdout, shared accross threads in the subprocess, colliding with reading it from another process)
			threading.Thread(target=self.read_subprocess_output, args=(sp, self.output_queue), daemon=True).start()

			while not self.dest_con.poll(timeout = 0.1):
				try:
					line = self.output_queue.get_nowait()
					self.print_queue.put(line)
				except KeyboardInterrupt:
					print('Keyboard Interrupt')
				except queue.Empty:
					pass
			
			with open(self.exit_flag_path, "w") as f:
				f.write("EXIT")

			self.print_queue.put(f"{get_time()} INFO : about to kill the playback worker")

			sp.terminate()
			sp.wait(timeout=5)

			if self.print_queue:
				self.print_queue.put(f"{get_time()} INFO : Playback subprocess terminated.")

		except Exception as e:
			self.print_queue.put(f'Raised exception in PlaybackWorker {str(e)}')

		finally:
			if os.path.exists(self.exit_flag_path):
				os.remove(self.exit_flag_path)
				if self.print_queue:
					self.print_queue.put(f"{get_time()} INFO : Exit flag reset.")
		
	def terminate(self):
		self.origin_con.send(True)

		self.join(timeout=5)

		if self.is_alive():
			super().terminate()
			if self.print_queue:
				self.print_queue.put(f"{get_time()} INFO : Playback forcefully terminated.")

	def read_subprocess_output(self, sp, queue):
		for line in iter(sp.stdout.readline, b''):
			queue.put(line.decode('utf-8'))


class ClientWorker(Process):
	name = "client"

	def __init__(self, debug=False, dist=False, avatar_type = None, **kwargs):
		super().__init__()
		self.debug = debug
		self.dist = dist
		self.avatar_type = avatar_type
		self.dest_con, self.origin_con = multiprocessing.Pipe()
		self.state = None
		self.print_queue = None
		self.output_queue = None
		
	def run(self, ):
		self.output_queue = multiprocessing.Queue()
		try:
			# command = 'python -u worker.py'
			if self.debug:
				executable_path = os.path.abspath(f"../Wav2Lip_resident/Avatar_runner.dist/Avatar_runner.exe --avatar_type {self.avatar_type}")
			elif self.dist:
				executable_path = os.path.abspath(f"../runner/Avatar_runner.exe --avatar_type {self.avatar_type}")
			else:
				executable_path = os.path.abspath(f"Avatar_runner.exe --avatar_type {self.avatar_type}")
			sp = subprocess.Popen(
				executable_path,
				# cwd = "../Wav2Lip_resident/",
				stdout=subprocess.PIPE
			)

			# Start a thread to read the output (problem with sys.stdout, shared accross threads in the subprocess, colliding with reading it from another process)
			threading.Thread(target=self.read_subprocess_output, args=(sp, self.output_queue), daemon=True).start()

			while not self.dest_con.poll(timeout = 0.1):
				try:
					line = self.output_queue.get_nowait()
					self.print_queue.put(str(line.strip()))
				except KeyboardInterrupt:
					print('Keyboard Interrupt')
				except queue.Empty:
					pass

			self.print_queue.put(f"{get_time()} INFO : about to kill the client worker")

			sp.terminate()
			sp.wait(timeout=5)

			if self.print_queue:
				self.print_queue.put(f"{get_time()} INFO : Client subprocess terminated.")

		except KeyboardInterrupt:
			self.print_queue.put(f'Keyboard interrupt received in ClientkWorker')
		except Exception as e:
			self.print_queue.put(f'Raised exception in ClientkWorker {str(e)}')
		
	def terminate(self):
		self.origin_con.send(True)

		self.join(timeout=5)

		if self.is_alive():
			super().terminate()
			if self.print_queue:
				self.print_queue.put(f"{get_time()} INFO : Client forcefully terminated.")

	def read_subprocess_output(self, sp, queue):
		for line in iter(sp.stdout.readline, b''):
			queue.put(line.decode('utf-8'))

workers = {
	"server" : ServerWorker,
	"playback" : PlaybackWorker,
	"client" : ClientWorker
}

"""
import pickle
worker = ClientWorker()
for attr, value in worker.__dict__.items():
    try:
        pickle.dumps(value)
    except Exception as e:
        print(f"Attribute {attr} is not picklable: {e}")

"""