import multiprocessing
from workers.worker_states import WorkerState
from workers.workers_definitions import workers

# curl -d "{\"name\" : \"server\"}" -H "Content-Type:application/json" -X POST http://localhost:3001/start_worker

class WorkerManager:
    def __init__(self):
        self.worker_ctors = workers
        self.workers = {}
        self.message_queues = {}  # A dictionary to store message queues for each worker

        for name in self.worker_ctors:
            self.message_queues[name] = multiprocessing.Queue()  # Each worker gets a unique queue
            self.reset_worker_instance(name)

    def reset_worker_instance(self, name):
        self.workers[name] = self.worker_ctors[name]()
        # self.workers[name].print_callback = self.create_print_callback(name)
        self.workers[name].print_queue = self.message_queues[name]
        self.workers[name].state = WorkerState.STOPPED

    def start_worker(self, name, *args):
        if name in self.workers and self.workers[name].state == WorkerState.RUNNING:
            raise RuntimeError(f"ERROR : {name} : Worker is already running.")
        elif name not in self.workers:
            raise RuntimeError(f"No instance available for Worker {name}.")

        self.workers[name].start()
        self.workers[name].state = WorkerState.RUNNING

        return self.message_queues[name]

    def stop_worker(self, name):
        worker = self.workers[name]
        if worker and worker.state == WorkerState.RUNNING:
            worker.terminate()
            worker.state = WorkerState.STOPPED
            status_obj = self.format_status(name, f"{name} {worker.state.value}")
            self.reset_worker_instance(name)
            return status_obj
        else:
            self.reset_worker_instance(name)
            raise Exception(f"ERROR : {name} : Worker already stopped or not started")

    def get_worker_status(self, name):
        worker = self.workers.get(name)
        if not worker:
            return self.format_status(name, f"ERROR : {name} : No instance available for Worker")
        elif worker.state == WorkerState.STOPPED:
            return self.format_status(name, f"ERROR : {name} : {WorkerState.STOPPED.value}")

        if not worker.is_alive():
            worker.state = WorkerState.ERROR
        return self.format_status(name, f"{name} {worker.state.value}")

    def format_status(self, name, status_string):
        # Get the messages in the queue (non-blocking)
        messages = []
        queue = self.message_queues[name]
        try:
            while not queue.empty():
                messages.append(queue.get_nowait())
        except:
            pass
        return {
            "status": f"{status_string}",
            "message_stack": messages
        }

    def restart_worker(self, name, *args):
        try:
            self.stop_worker(name)
        except Exception as e:
            message = self.format_status(name, str(e))
        self.start_worker(name, *args)

        return message
