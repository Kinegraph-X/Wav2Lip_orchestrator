import os, signal, select, time
import multiprocessing, threading, queue
from multiprocessing import Process
import subprocess
from workers.SSHManager import SSHManager
from dotenv import load_dotenv
load_dotenv()
from config import main_config as config
from args_parser import args

if args.ssh_addr.split("@")[1] == "localhost":
	key_file = os.getenv("SSH_KEY_PATH")
else:
	key_file = os.getenv("SSH_PUBLIC_KEY_FILE")

class ServerWorker(Process):
	name = "server"

	def __init__(self, **kwargs):
		super(ServerWorker, self).__init__()
		self.state = None
		self.print_queue = None
		self.dest_con, self.origin_con = multiprocessing.Pipe()
		
	def run(self):
		try:
			self.ssh_manager = SSHManager(args.ssh_addr, key_file=key_file)
			self.ssh_manager.connect_to_server()

			try:
				self.ssh_manager.run_command(config.run_server_command, self.print_queue, self.dest_con)

				while not self.dest_con.poll(timeout = 0.1):
					continue
				
				self.ssh_manager.send_sigint(self.print_queue)
				self.ssh_manager.disconnect(self.print_queue)
			except RuntimeError as e:
				self.print_queue.put(f"Failed to run the command start the server: {e}")
				raise RuntimeError(f"Failed to run the command start the server: {e}")
		except Exception as e:
			self.print_queue.put(f'Raised exception in ServerWorker {str(e)}')
		
	def terminate(self):
		self.origin_con.send('stop')
		time.sleep(2)
		super().terminate()

class PlaybackWorker(Process):
	name = "playback"
	exit_flag_path = "../Wav2Lip_resident/exit_flag.txt"

	def __init__(self, **kwargs):
		super(PlaybackWorker, self).__init__()
		# self.dest_con = None
		# self.origin_con = None
		self.dest_con, self.origin_con = multiprocessing.Pipe()
		self.state = None
		self.print_queue = None
		self.output_queue = None

	def run(self):
		self.output_queue = multiprocessing.Queue()
		try:
			command = 'python -u video_playback_vlc.py'
			sp = subprocess.Popen(command, cwd = "../Wav2Lip_resident/", stdout=subprocess.PIPE)

			# Start a thread to read the output (problem with sys.stdout, shared accross threads in the subprocess, colliding with reading it from another process)
			threading.Thread(target=self.read_subprocess_output, args=(sp, self.output_queue), daemon=True).start()

			while not self.dest_con.poll(timeout = 0.1):
				try:
					line = self.output_queue.get_nowait()
					# self.print_callback(self.get_name(), line)
					self.print_queue.put(line)
				except KeyboardInterrupt:
					print('Keyboard Interrupt')
				except queue.Empty:
					pass
			
			with open(self.exit_flag_path, "w") as f:
				f.write("EXIT")

			# self.print_callback(self.get_name(), "about to kill the playback worker")
			self.print_queue.put("about to kill the playback worker")

			sp.terminate()
			sp.wait(timeout=5)

			if self.print_queue:
				# self.print_callback(self.get_name(), "Playback subprocess terminated.")
				self.print_queue.put("Playback subprocess terminated.")

		except Exception as e:
			# self.print_callback(self.get_name(), f'Raised exception in PlaybackWorker {str(e)}')
			self.print_queue.put(f'Raised exception in PlaybackWorker {str(e)}')

		finally:
			if os.path.exists(self.exit_flag_path):
				os.remove(self.exit_flag_path)
				if self.print_queue:
					# self.print_callback(self.get_name(), "Exit flag reset (deleted).")
					self.print_queue.put("Exit flag reset.")
		
	def terminate(self):
		self.origin_con.send(True)

		self.join(timeout=5)

		if self.is_alive():
			super().terminate()
			if self.print_queue:
				self.print_queue.put("Playback forcefully terminated.")

	def read_subprocess_output(self, sp, queue):
		for line in iter(sp.stdout.readline, b''):
			queue.put(line.decode('utf-8'))


class ClientWorker(Process):
	name = "client"

	def __init__(self, **kwargs):
		super().__init__()
		# self.dest_con = None
		# self.origin_con = None
		self.dest_con, self.origin_con = multiprocessing.Pipe()
		self.state = None
		self.print_queue = None
		self.output_queue = None
		
	def run(self):
		self.output_queue = multiprocessing.Queue()
		try:
			command = 'python -u worker.py'
			sp = subprocess.Popen(command, cwd = "../Wav2Lip_resident/", stdout=subprocess.PIPE)

			# Start a thread to read the output (problem with sys.stdout, shared accross threads in the subprocess, colliding with reading it from another process)
			threading.Thread(target=self.read_subprocess_output, args=(sp, self.output_queue), daemon=True).start()

			while not self.dest_con.poll(timeout = 0.1):
				try:
					line = self.output_queue.get_nowait()
					# self.print_callback(str(line))
					print(str(line))
					self.print_queue.put(str(line.strip()))
				except KeyboardInterrupt:
					print('Keyboard Interrupt')
				except queue.Empty:
					pass

			# self.print_callback("about to kill the client worker")
			self.print_queue.put("about to kill the client worker")

			sp.terminate()
			sp.wait(timeout=5)

			if self.print_queue:
				# self.print_callback("Client subprocess terminated.")
				self.print_queue.put("Client subprocess terminated.")

		except KeyboardInterrupt:
			self.print_queue.put(f'Keyboard interrupt received in ClientkWorker {str(e)}')
		except Exception as e:
			# self.print_callback(f'Raised exception in PlaybackWorker {str(e)}')
			self.print_queue.put(f'Raised exception in ClientkWorker {str(e)}')
		
	def terminate(self):
		self.origin_con.send(True)

		self.join(timeout=5)

		if self.is_alive():
			super().terminate()
			if self.print_queue:
				# self.print_callback("Client forcefully terminated.")
				self.print_queue.put("Client forcefully terminated.")
		# else:
			# self.print_callback(self.get_name(), "Client terminate method end reached.")

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