import os, signal, select, time
import multiprocessing, threading, queue
from multiprocessing import Process
import subprocess
from workers.SSHManager import SSHManager
from workers.ServerManager import ServerManager
from dotenv import load_dotenv
load_dotenv()
from config import main_config as config
from args_parser import args

if args.ssh_addr.split("@")[1] == "localhost":
	key_file = os.getenv("SSH_KEY_PATH")
else:
	key_file = os.getenv("SSH_PUBLIC_KEY_FILE")

class ServerWorker(Process):
	state = None
	callback = None
	ssh_manager = SSHManager(args.ssh_addr, key_file=key_file)

	def __init__(self, **kwargs):
		super(ServerWorker, self).__init__()

	def run(self):
		try:
			server = ServerManager(self.ssh_manager)
			server.start(self.callback)
		except Exception as e:
			self.callback(f'Raised exception in InitServer {str(e)}')
		
	def terminate(self):
		self.ssh_manager.send_sigint(self.callback)
		self.ssh_manager.disconnect()
		super().terminate()

class PlaybackWorker(Process):
	state = None
	callback = None
	output_queue = queue.Queue()
	exit_flag_path = "../Wav2Lip_resident/exit_flag.txt"

	def __init__(self, **kwargs):
		super(PlaybackWorker, self).__init__()
		self.dest_con, self.origin_con = multiprocessing.Pipe()

	def run(self):
		self.print_callback = self.callback
		try:
			command = 'python -u video_playback_vlc.py'
			sp = subprocess.Popen(command, cwd = "../Wav2Lip_resident/", stdout=subprocess.PIPE)

			# Start a thread to read the output (problem with sys.stdout, shared accross threads in the subprocess, colliding with reading it from another process)
			threading.Thread(target=self.read_subprocess_output, args=(sp, self.output_queue), daemon=True).start()

			while not self.dest_con.poll(timeout = 0.1):
				try:
					line = self.output_queue.get_nowait()
					self.print_callback(line)
				except queue.Empty:
					pass
			
			with open(self.exit_flag_path, "w") as f:
				f.write("EXIT")

			self.print_callback("about to kill the playback")

			sp.terminate()
			sp.wait(timeout=5)

			if self.print_callback:
				self.print_callback("Playback subprocess terminated.")

		except Exception as e:
			self.callback(f'Raised exception in PlaybackWorker {str(e)}')

		finally:
			if os.path.exists(self.exit_flag_path):
				os.remove(self.exit_flag_path)
				if self.print_callback:
					self.print_callback("Exit flag reset (deleted).")
		
	def terminate(self):
		self.origin_con.send(True)

		self.join(timeout=5)

		if self.is_alive():
			super().terminate()
			if self.callback:
				self.callback("Forcefully terminated.")

	def read_subprocess_output(self, sp, queue):
		for line in iter(sp.stdout.readline, b''):
			queue.put(line.decode('utf-8'))

workers = {
	"server" : ServerWorker(),
	"playback" : PlaybackWorker()
}