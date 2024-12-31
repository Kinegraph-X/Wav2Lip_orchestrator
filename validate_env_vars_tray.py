import os, sys
from dotenv import load_dotenv
load_dotenv()

REQUIRED_ENV_VARS = ["SSH_ADDR", "SSH_LOCAL_ADDR"]

def validate_env_vars():
    missing_vars = [var for var in REQUIRED_ENV_VARS if os.getenv(var) is None]
    if missing_vars:
        print(f"Error: Missing required environment variables: {', '.join(missing_vars)}")
        print('Please update the .env file (in "orchestrator/") with these variables and restart the program.')
        sys.exit(1)

validate_env_vars()
