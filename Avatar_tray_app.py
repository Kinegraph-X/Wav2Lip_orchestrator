# nuitka-project: --windows-icon-from-ico=avatar_icon.ico
# nuitka-project: --include-data-file=avatar_icon.png=avatar_icon.png
# nuitka-project: --include-data-file="Chatty Avatar.lnk=Chatty Avatar.lnk"
# nuitka-project: --include-data-file="Chatty Avatar (Controler).lnk=Chatty Avatar (Controler).lnk"
# nuitka-project: --include-data-files=.env.example=.env.example
# nuitka-project: --windows-console-mode=disable


from pystray import Icon, MenuItem, Menu
from PIL import Image
import subprocess
import os
import re
import validate_env_vars_tray

# Paths
EXECUTABLE_NAME = "Avatar_orchestrator.exe"
EXECUTABLE_PATH = os.path.abspath(EXECUTABLE_NAME)
EXECUTABLE_NAME = os.path.basename(EXECUTABLE_PATH)
ICON_IMAGE_PATH = os.path.abspath("Avatar_icon.png")

# Load custom icon image
def load_icon(image_path):
    return Image.open(image_path)

# Orchestrator control functions
def start_orchestrator(icon, item):
    if re.search('Man', item.text) :
        subprocess.Popen(f'"{EXECUTABLE_PATH}" --ssh_addr {os.getenv("SSH_ADDR")} --avatar_type "generic_man"', shell=True)
    elif re.search('Woman', item.text):
        subprocess.Popen(f'"{EXECUTABLE_PATH}" --ssh_addr {os.getenv("SSH_ADDR")} --avatar_type "generic_woman"', shell=True)
    elif re.search('EBU_n19', item.text):
        subprocess.Popen(f'"{EXECUTABLE_PATH}" --ssh_addr {os.getenv("SSH_ADDR")} --avatar_type "EBU_n19"', shell=True)

# Orchestrator control functions
def start_orchestrator_local(icon, item):
    if re.search('Man', item.text) :
        subprocess.Popen(f'"{EXECUTABLE_PATH}" --ssh_addr {os.getenv("SSH_ADDR")} --avatar_type "generic_man" --dist', shell=True)
    elif re.search('Woman', item.text):
        subprocess.Popen(f'"{EXECUTABLE_PATH}" --ssh_addr {os.getenv("SSH_ADDR")} --avatar_type "generic_woman" --dist', shell=True)
    elif re.search('EBU_n19', item.text):
        subprocess.Popen(f'"{EXECUTABLE_PATH}" --ssh_addr {os.getenv("SSH_ADDR")} --avatar_type "EBU_n19" --dist', shell=True)

def stop_orchestrator(icon, item):
    subprocess.call(f"taskkill /IM {EXECUTABLE_NAME} /F", shell=True)

def quit_app(icon, item):
    subprocess.call(f"taskkill /IM {EXECUTABLE_NAME} /F", shell=True)
    icon.stop()

# Tray menu
menu = Menu(
    MenuItem("Start Avatar Orchestrator (Man)", start_orchestrator),
    MenuItem("Start Avatar Orchestrator (Woman)", start_orchestrator),
    MenuItem("Start Avatar Orchestrator (EBU_n19)", start_orchestrator, visible = True if os.getlogin() == 'arte' else False),
    # MenuItem("Start Avatar Orchestrator (local server, Man only)", start_orchestrator_local),
    MenuItem("Stop Avatar Orchestrator", stop_orchestrator),
    MenuItem("Quit", quit_app),
)

# Create and run the tray icon
icon = Icon(
    "Avatar Orchestrator Control",
    load_icon(ICON_IMAGE_PATH),
    menu=menu,
)
icon.run()
