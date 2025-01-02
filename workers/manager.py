import sys, multiprocessing
from multiprocessing import get_context
# if getattr(sys, 'frozen', False):

ctx = get_context('spawn')  # Explicitly get a new context with 'spawn'
multiprocessing.freeze_support()
multiprocessing.set_start_method('spawn', force=True)

from args_parser import args as cmd_line_args

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
        self.workers[name] = self.worker_ctors[name](debug = cmd_line_args.debug, dist = cmd_line_args.dist, avatar_type = cmd_line_args.avatar_type)
        self.workers[name].print_queue = self.message_queues[name]
        self.workers[name].state = WorkerState.STOPPED

    def start_worker(self, name, *args):
        if name in self.workers and self.workers[name].state == WorkerState.RUNNING:
            raise RuntimeError(f"ERROR : {name} : Worker is already running.")
        elif name not in self.workers:
            raise RuntimeError(f"No instance available for Worker {name}.")
        if cmd_line_args.ssh_addr:
            try:
                # for ssh connecting processes, don't forget to adapt the remote env init command to the actual ssh env of your provider (in config.py)
                self.workers[name].start()
                self.workers[name].state = WorkerState.RUNNING
            except Exception as e:
                raise e

        return self.format_status(name, f"{self.workers[name].state.value}")

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

        if worker.state == WorkerState.RUNNING and not worker.is_alive():
            worker.state = WorkerState.ERROR
        return self.format_status(name, f"{worker.state.value}")

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
