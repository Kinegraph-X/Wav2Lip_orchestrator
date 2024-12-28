import os
from dotenv import load_dotenv
load_dotenv()
from args_parser import args


class MainConfig():
    run_server_command = ""
    server_status_command = ""
    def __init__(self):
        if args.ssh_addr.split("@")[1] == "localhost":
            self.run_server_command = f'python -u "{os.getenv("SERVER_PATH")}daemon.py"'
        else:
            self.run_server_command = f'python -u Wav2Lip_with_cache/daemon.py'
        return
    
main_config = MainConfig()