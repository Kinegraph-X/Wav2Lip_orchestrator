import os, platform, sys
from datetime import datetime
import re
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
			queue.put(f"NoValidConnectionsError || SSHException {self.username} {self.hostname}: {e}")
			raise ConnectionError(f"Failed to connect to {self.username} {self.hostname}: {e}")
		except (Exception) as e:
			queue.put(f"EXCEPTION || SSHException {self.username} {self.hostname}: {e}")
			raise Exception(f"Failed to connect to {self.username} {self.hostname}: {e}")
		
		self.client.get_transport().set_keepalive(10)
		queue.put(f'{get_time()} INFO : Connected to SSH server')

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
					pid = None
					for line in iter(stdout.readline, ""):
						line = line.strip()
						if (len(line) and line != "ProcessId"):
							pid = line
							break
					if pid:
						self.client.exec_command(f'taskkill /pid {pid} /f')
						queue.put(f"{get_time()} INFO : SIGINT sent to {os} server for pid {pid}")
					else:
						queue.put(f"{get_time()} ERROR : error while sending SIGINT to {os} server for pid {pid}")
				else:
					try:
						stdin, stdout, stderr = self.client.exec_command('ps aux | grep daemon.py')
						
						# processes = stdout.read().decode('utf-8')
						# queue.put(f"{get_time()} DEBUG: ps aux output: {processes}")
						pid = None
						pid_match = re.search('\d+', stdout.read().strip().decode('utf-8'))
						stdout.channel.close()
						stderr.channel.close()
						queue.put(f"{get_time()} DEBUG: re search output: {pid_match}")
						
						if pid_match:
							pid = pid_match.group(0)
							queue.put(f"{get_time()} INFO : re match for pid {pid}")
							# stdin, stdout, stderr = self.client.exec_command(f'echo "that command worked"')
							# test_command = stdout.read().strip().decode('utf-8')
							# stdout.channel.close()
							# stderr.channel.close()
							# queue.put(f'Next command {test_command}')
							# stdin, stdout, stderr = self.client.exec_command(f'kill 0 {pid}')
							# queue.put(f'Just a try {stdout.read().strip()}')
							# stdout.channel.close()
							# stderr.channel.close()
							stdin, stdout, stderr = self.client.exec_command(f"kill -9 {pid}")
							exit_status = stdout.channel.recv_exit_status()
							# time.sleep(2)
							stdout.channel.close()
							stderr.channel.close()
						
						# Verify process no longer exists
						# stdin, stdout, stderr = self.client.exec_command(f"ps -p {pid}")
						# if not stdout.read().strip():
						# 	queue.put(f"{get_time()} INFO : Successfully terminated process {pid}")
						# else:
						# 	queue.put(f"{get_time()} ERROR : Failed to terminate process {pid}")
						# stdout.channel.close()
						# stderr.channel.close()
						queue.put(f"{get_time()} INFO : SIGINT sent to {os} server for pid {pid} with exit status {exit_status}")
					except Exception as e:
						queue.put(f"{get_time()} ERROR : while SIGINT to {os} server for pid {pid}")

				
			except Exception as e:
				import os
				exc_type, exc_obj, exc_tb = sys.exc_info()
				fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
				queue.put(f'{e} {exc_type} {fname} {exc_tb.tb_lineno}')
				raise Exception(f'Exception raised when sending SIGTERM to the distant server : {e} {exc_type} {fname} {exc_tb.tb_lineno}')
	
	def run_command(self, command, queue, interrupt_conn = None):
		
		if not self.client:
			raise ConnectionError("SSH connection is not established.")
		try:
			queue.put(f"{get_time()} INFO : Running a command on the remote server")
			stdin, stdout, stderr = self.client.exec_command(command, get_pty=True)

			threading.Thread(target = self.read_output, args = (stdout, stderr, queue), daemon = True).start()

		except Exception as e:
			raise Exception(f"Failed to execute command '{command}': {e}")

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
			if error:
				queue.put(f'{get_time()} : ERROR : SSH server command failed {error}')
			
			# abrupt exit code is expected
			# if exit_status != 0:
			# 	raise RuntimeError(f"Command failed: {error}")
			queue.put(f'{get_time()} : INFO : SSH server readeline closed with exit code {exit_status}: no stderr will be shown')
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
		