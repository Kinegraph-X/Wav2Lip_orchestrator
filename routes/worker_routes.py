from flask import Blueprint, jsonify, request
from workers.manager import WorkerManager
from workers.worker_states import WorkerState

worker_routes = Blueprint("worker_routes", __name__)
manager = WorkerManager()

@worker_routes.route("/start_worker", methods=["POST"])
def start_worker():
    data = request.json
    name = data.get("name")
    #target = getattr(your_worker_targets, data.get("target"))
    try:
        manager.start_worker(name)
        return jsonify({"message": f"Worker {name} started successfully."})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@worker_routes.route("/stop_worker", methods=["POST"])
def stop_worker():
    data = request.json
    name = data.get("name")
    try:
        manager.stop_worker(name)
        return jsonify({"message": f"Worker {name} stopped successfully."})
    except Exception as e:
        print(str(e))
        return jsonify({"error": str(e)}), 400

@worker_routes.route("/status_worker/<name>", methods=["GET"])
def status_worker(name):
    status = manager.get_worker_status(name)
    return jsonify(status)
