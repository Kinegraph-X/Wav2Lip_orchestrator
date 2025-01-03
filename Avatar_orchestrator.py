# nuitka-project: --product-name=Avatar_orchestrator
# nuitka-project: --product-version=1.0.0
# nuitka-project: --file-description="An AI powered talking avatar (orchestrator module)"
# nuitka-project: --copyright="Kinegraphx"
# nuitka-project: --windows-console-mode=disable

# nuitka-project: --include-data-dir=front=front
# nuitka-project: --include-data-dir=static=static
# nuitka-project: --include-data-files=.env.example=.env.example


import validate_env_vars
# from mdns_service import start_mdns_service
from threading import Thread
import webbrowser, time
from flask import Flask
from routes.worker_routes import worker_routes
from workers.manager import WorkerManager  # Adjust the import path if necessary

host='127.0.0.1'
port = 51312
# zeroconf_instance, service_info = start_mdns_service(port)

# Flask app
def create_app():
	# Initialize the Manager and WorkerManager
	worker_manager = WorkerManager() # manager

	# Create the Flask app
	flask_app = Flask(__name__)

	# Register the blueprint, passing the WorkerManager instance
	flask_app.register_blueprint(worker_routes(worker_manager))

	return flask_app

def start_app():
	try:
		app = create_app()
		app.run(host=host, port=port, threaded=True)

	except KeyboardInterrupt:
		pass
	except Exception as e:
		print('Unknown Exception in Orchestrator : {e}')
	# finally:
	# 	zeroconf_instance.unregister_service(service_info)
	# 	zeroconf_instance.close()

if __name__ == '__main__':
	flask_thread = Thread(target=start_app, daemon=True)
	flask_thread.start()

	time.sleep(1)  # Ensure server has time to start; adjust as needed
	webbrowser.open(f"http://{host}:{port}")

	try:
		while flask_thread.is_alive():
			time.sleep(0.1)
	except KeyboardInterrupt:
		print("Application closed.")