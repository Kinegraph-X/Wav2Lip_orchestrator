import os, time
from workers.worker_states import WorkerState
from workers.workers_definitions import workers

# curl -d "{\"name\" : \"server\"}" -H "Content-Type:application/json" -X POST http://localhost:3001/start_worker

class WorkerManager:
    def __init__(self):
        self.workers = workers
        for worker in self.workers.values():
            worker.state = WorkerState.STOPPED
            worker.process = None
            worker.callback = self.read_thread_stdout

    def start_worker(self, name, *args):
        if name in self.workers and self.workers[name].state == WorkerState.RUNNING:
            raise RuntimeError(f"Worker {name} is already running.")

        self.workers[name].start()
        self.workers[name].state = WorkerState.RUNNING

    def stop_worker(self, name):
        worker = self.workers.get(name)
        # print(worker.state)
        if worker and worker.state == WorkerState.RUNNING:
            worker.terminate()
            worker.state = WorkerState.STOPPED

    def get_worker_status(self, name):
        worker = self.workers.get(name)
        if not worker:
            return {"status": WorkerState.STOPPED.value}

        if not worker.is_alive():
            worker.state = WorkerState.ERROR
        return {"status": worker.state.value}

    def restart_worker(self, name, *args):
        self.stop_worker(name)
        self.start_worker(name, *args)

    def read_thread_stdout(self, line):
        print(f"{line} - Tunneled from worker")
