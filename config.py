import os
from dotenv import load_dotenv
load_dotenv()
from args_parser import args


class MainConfig():
    run_server_command = ""
    remote_env_init_command = "source /settings/.lightningrc && "
    def __init__(self):
        if args.ssh_addr.split("@")[1] == "localhost":
            self.run_server_command = f'cd "{os.getenv("SERVER_PATH")}" && python -u daemon.py'
        else:
            self.run_server_command = f'python -u Wav2Lip_with_cache/daemon.py'
        return
    
main_config = MainConfig()