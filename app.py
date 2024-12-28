"""
from flask import Flask
from routes.worker_routes import worker_routes

# Flask app
app = Flask(__name__)
app.register_blueprint(worker_routes)

if __name__ == '__main__':
	try:
		app.run(host='0.0.0.0', port=3001, threaded=True)
	except (Exception, KeyboardInterrupt):
		pass
"""

from flask import Flask
from routes.worker_routes import worker_routes
from multiprocessing import Manager
from workers.manager import WorkerManager  # Adjust the import path if necessary

# Flask app
def create_app():
	# Initialize the Manager and WorkerManager
	manager = Manager()
	worker_manager = WorkerManager() # manager

	# Create the Flask app
	flask_app = Flask(__name__)

	# Register the blueprint, passing the WorkerManager instance
	flask_app.register_blueprint(worker_routes(worker_manager))

	return flask_app

if __name__ == '__main__':
	# try:
	app = create_app()
	app.run(host='127.0.0.1', port=3001, threaded=True)
	"""
	except (Exception, KeyboardInterrupt):
		pass
	"""
