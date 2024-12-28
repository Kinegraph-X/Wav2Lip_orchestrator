import sys, json
from flask import Blueprint, jsonify, request, Response
from flask_cors import cross_origin
from workers.manager import WorkerManager
from workers.worker_states import WorkerState

from datetime import datetime
import logging
logger = logging.getLogger('Orchestrator')
logger.setLevel(logging.INFO)
handler = logging.StreamHandler(sys.stdout)
formatter = logging.Formatter("%(asctime)s;%(levelname)s;%(message)s", "%Y-%m-%d %H:%M:%S")
handler = logging.StreamHandler(sys.stdout).setFormatter(formatter)
logger.addHandler(handler)

def worker_routes(manager):
    worker_routes = Blueprint("worker_routes", __name__)
    # manager = WorkerManager()

    def get_time():
        current_datetime = datetime.now()
        return current_datetime.strftime("%Y-%m-%d %H:%M:%S") + " :"

    @worker_routes.route("/start_worker", methods=["POST"])
    @cross_origin(headers=['Content-Type'], origins=['http://127.0.0.1:5000']) 
    def start_worker():
        data = request.json
        name = data.get("name")
        #target = getattr(your_worker_targets, data.get("target"))
        try:
            manager.start_worker(name)
            return jsonify({"type" : "success", "message": f"{get_time()} SUCCESS : Request for {name} startup transmitted successfully."})
        except Exception as e:
            return jsonify({"type" : "error", "message" : f"{get_time()} {str(e)}"}), 200

    @worker_routes.route("/stop_worker", methods=["POST"])
    @cross_origin(headers=['Content-Type'], origins=['http://127.0.0.1:5000']) 
    def stop_worker():
        data = request.json
        name = data.get("name")
        try:
            status_obj = manager.stop_worker(name)
            return jsonify({"type" : "end_status", "message": f"{get_time()} SUCCESS : Request for {name} stop transmitted successfully.", "message_stack" : status_obj['message_stack']})
        except Exception as e:
            return jsonify({"type" : "error", "message" : f"{get_time()} {str(e)}"}), 200

    @worker_routes.route("/status_worker", methods=["POST"])
    @cross_origin(headers=['Content-Type'], origins=['http://127.0.0.1:5000']) 
    def status_worker():
        data = request.json
        name = data.get("name")
        status = manager.get_worker_status(name)
        if not type(status["message_stack"]) is list:
            print(type(status["message_stack"]))
            if type(status["message_stack"]) is str:
                status["message_stack"] = [status["message_stack"]]
            else:
                status["message_stack"] = []
        return jsonify({
            "type" : "status",
            "status": f'{get_time()} {status["status"]}',
            "message_stack" : status["message_stack"]
            }), 200
    
    """
    @worker_routes.route("/status_worker", methods=["OPTIONS"])
    @cross_origin(headers=['Content-Type'], origins=['http://127.0.0.1:5000']) 
    def status_CORS():
        return Response(
		'',
		content_type='text/html',
		headers= headers
        )
    

    
    @worker_routes.route("/start_worker", methods=["OPTIONS"])
    @cross_origin(headers=['Content-Type'], origins=['http://127.0.0.1:5000']) 
    def start_CORS():
        return Response(
		'',
		content_type='text/html',
		headers= headers
        )
    

    @worker_routes.route("/stop_worker", methods=["OPTIONS"])
    def stop_CORS():
        return Response(
		'',
		content_type='text/html',
		headers= headers
        )
    """
    
    return worker_routes