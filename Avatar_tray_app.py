# nuitka-project: --include-data-file=Avatar_icon.png=Avatar_icon.png
# nuitka-project: --include-data-files=.env.example=.env.example
# nuitka-project: --windows-console-mode=disable


from pystray import Icon, MenuItem, Menu
from PIL import Image
import subprocess
import os
import validate_env_vars_tray

# Paths
EXECUTABLE_NAME = "../orchestrator/Avatar_orchestrator.exe"
EXECUTABLE_PATH = os.path.abspath(EXECUTABLE_NAME)
EXECUTABLE_NAME = os.path.basename(EXECUTABLE_PATH)
ICON_IMAGE_PATH = os.path.abspath("Avatar_icon.png")

print(f'"{EXECUTABLE_PATH}" --ssh_addr {os.getenv("SSH_ADDR")}')

# Load custom icon image
def load_icon(image_path):
    return Image.open(image_path)

# Orchestrator control functions
def start_orchestrator(icon, item):
    print("Starting Avatar Orchestrator...")
    subprocess.Popen(f'"{EXECUTABLE_PATH}" --ssh_addr {os.getenv("SSH_ADDR")}', shell=True)

# Orchestrator control functions
def start_orchestrator_local(icon, item):
    print("Starting Avatar Orchestrator...")
    subprocess.Popen(f'"{EXECUTABLE_PATH}" --ssh_addr {os.getenv("SSH_LOCAL_ADDR")}', shell=True)

def stop_orchestrator(icon, item):
    print("Stopping Avatar Orchestrator...")
    subprocess.call(f"taskkill /IM {EXECUTABLE_NAME} /F", shell=True)

def quit_app(icon, item):
    print("Exiting Tray Application...")
    icon.stop()

# Tray menu
menu = Menu(
    MenuItem("Start Avatar Orchestrator", start_orchestrator),
    MenuItem("Start Avatar Orchestrator (local server)", start_orchestrator_local),
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
