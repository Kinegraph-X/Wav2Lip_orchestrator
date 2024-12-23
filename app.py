from flask import Flask
from routes.worker_routes import worker_routes

# Flask app
app = Flask(__name__)
app.register_blueprint(worker_routes)

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=3001, threaded=True)