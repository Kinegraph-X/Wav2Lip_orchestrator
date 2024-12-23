from config import main_config as config


class ServerManager():
    def __init__(self, ssh_manager):
        self.ssh_manager = ssh_manager

    def start(self, callback = None):
        try:
            self.ssh_manager.connect_to_server()
            self.ssh_manager.run_command(config.run_server_command, callback)
        except RuntimeError as e:
            raise RuntimeError(f"Failed to run the command start the server: {e}")
        

    def stop(self):
        return
        

    def check_status(self):
        try:
            output = self.ssh_manager.run_command(config.server_status_command)
            return output
        except RuntimeError:
            return "Server is not running or unreachable."
