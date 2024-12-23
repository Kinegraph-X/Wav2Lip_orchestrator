import os
import threading, paramiko
from paramiko.ssh_exception import SSHException, NoValidConnectionsError
from signal import Signals
from config import main_config as config
from dotenv import load_dotenv
load_dotenv()
import time

paramiko.util.log_to_file("paramiko_debug.log")

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

	def connect_to_server(self):
		"""Establish an SSH connection to the remote server."""
		# self.stop_event = threading.Event()
		try:
			self.client = paramiko.SSHClient()
			self.client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
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
			raise ConnectionError(f"Failed to connect to {self.hostname}: {e}")

	def disconnect(self):
		"""Close the SSH connection."""
		if self.client:
			self.client.close()
			self.client = None

	def send_sigint(self, callback):
		callback("send_sigint called")
		if self.client:
			print("SIGINT sent to server")
			self.client.exec_command('pkill -SIGINT python3')

	def run_command(self, command, callback):
		callback("Running a command on the remote server")
		if not self.client:
			raise ConnectionError("SSH connection is not established.")
		try:
			stdin, stdout, stderr = self.client.exec_command(command)
			
			# Read stdout in real-time
			for line in iter(stdout.readline, ""):
				"""
				if self.stop_event.is_set():
					self.queue.put(line.strip())  # Store in queue
					callback("stop_event set")
					break
				"""
				if callback:
					callback(line.strip())  # Send to orchestrator

			callback("no more lines")
			stdout.channel.close()
			
			exit_status = stdout.channel.recv_exit_status()
			# output = stdout.read().decode().strip()
			# error = stderr.read().decode().strip()
			error = ""
			if exit_status != 0:
				raise RuntimeError(f"Command failed: {error}")
			# print(f'SSH server returned stdout : {output} & stderr : {error}')
			# return output
		except Exception as e:
			raise RuntimeError(f"Failed to execute command '{command}': {e}")

	def is_server_reachable(self):
		"""Check if the server is reachable."""
		try:
			self.connect_to_server()
			self.disconnect()
			return True
		except ConnectionError:
			return False
