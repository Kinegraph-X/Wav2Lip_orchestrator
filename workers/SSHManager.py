import os, platform, sys
from datetime import datetime
import threading, paramiko
from paramiko.ssh_exception import SSHException, NoValidConnectionsError
from signal import Signals
from config import main_config as config
from dotenv import load_dotenv
load_dotenv()
import time


# paramiko.util.log_to_file("paramiko_debug.log")

def get_time():
	current_datetime = datetime.now()
	return current_datetime.strftime("%Y-%m-%d %H:%M:%S") + " :"

class SSHManager:
	def __init__(self, full_address, key_file = None, password = None, stop_event = None, port=22, timeout=10):
		username, server_addr = full_address.split("@")
		
		self.hostname = server_addr
		self.username = username
		self.password = password
		self.key_file = key_file
		self.port = port
		self.timeout = timeout
		self.client = None
		self.stop_event = stop_event

		self.client = paramiko.SSHClient()
		self.client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

	def connect_to_server(self, queue = None):
		# self.stop_event = threading.Event()
		try:
			if self.key_file:
				self.client.connect(
					hostname=self.hostname,
					username=self.username,
					key_filename=self.key_file,
					port=self.port,
					timeout=self.timeout
				)
			else:
				self.client.connect(
					hostname=self.hostname,
					username=self.username,
					password=self.password,
					port=self.port,
					timeout=self.timeout
				)
		except (NoValidConnectionsError, SSHException) as e:
			queue.put(f"EXCEPTION : {e}")
			raise ConnectionError(f"Failed to connect to {self.hostname}: {e}")

	def disconnect(self, queue):
		if self.client:
			self.client.close()
			self.client = None
			queue.put(f"{get_time()} INFO : SSH Client closed")

	def send_sigint(self, queue):
		if self.client:
			try:
				stdin, stdout, stderr = self.client.exec_command('echo %OS%')
				if b'windows' in stdout.read().strip().lower():
					os = "win"
				else:
					os = 'unix-like'

				if os == "win":
					stdin, stdout, stderr = self.client.exec_command('wmic process where "commandline like \'%daemon.py%\'" get processid')
					for line in iter(stdout.readline, ""):
						line = line.strip()
						if (len(line) and line != "ProcessId"):
							pid = line
							break

					self.client.exec_command(f'taskkill /pid {pid} /f')
				else:
					stdin, stdout, stderr = self.client.exec_command('echo $!')
					pid = stdout.read().strip()
					self.client.exec_command(f"kill -9 {pid}")

				queue.put(f"{get_time()} INFO : SIGINT sent to {os} server for pid {pid}")
			except Exception as e:
				import os
				exc_type, exc_obj, exc_tb = sys.exc_info()
				fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
				raise Exception(f'Exception raised when sending SIGTERM to the distant server : {e} {exc_type} {fname} {exc_tb.tb_lineno}')
	
	def run_command(self, command, queue, interrupt_conn = None):
		
		if not self.client:
			raise ConnectionError("SSH connection is not established.")
		try:
			queue.put(f"{get_time()} INFO : Running a command on the remote server")
			stdin, stdout, stderr = self.client.exec_command(command)

			threading.Thread(target = self.read_output, args = (stdout, stderr, queue), daemon = True).start()

		except Exception as e:
			raise RuntimeError(f"Failed to execute command '{command}': {e}")

	def read_output(self, stdout, stderr, queue):
		try:
			for line in iter(stdout.readline, ""):
				if queue:
					queue.put(line.strip())  # Send to orchestrator

			queue.put(f"{get_time()} : INFO : no more lines returned by SSH")
			stdout.channel.close()
			exit_status = stdout.channel.recv_exit_status()
			# output = stdout.read().decode().strip()
			error = stderr.read().decode().strip()
			
			# abrupt exit code is expected
			# if exit_status != 0:
			# 	raise RuntimeError(f"Command failed: {error}")
			queue.put(f'{get_time()} : INFO : SSH server readeline closed : no stderr will be shown')
		except Exception as e:
			queue.put(f'Thread reading the output of SSH was terminated with an exception : {e}')

	def is_server_reachable(self):
		"""Check if the server is reachable."""
		try:
			self.connect_to_server()
			self.disconnect()
			return True
		except ConnectionError:
			return False
		