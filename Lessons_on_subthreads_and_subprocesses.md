# QUESTION : 

For my further understanding of this issue, how should I handle the print instructions from a threaded function in a subprocess ? (when I don't have this kind of event loop that tkinter uses)

---
---
---


Handling `print` instructions from a threaded function in a subprocess without causing collisions in stdout requires careful management of how threads and the subprocess interact with shared resources (like `sys.stdout`). Here are some strategies to address this issue:

### **1. Use a Thread-Safe Logger**
Instead of using `print`, which writes directly to `sys.stdout`, use Python’s `logging` module. The `logging` module is thread-safe and can redirect log messages to a file, stdout, or another stream without interference.

#### **Example: Using `logging` in the Subprocess**
```python
import logging
import threading

# Configure logging
logging.basicConfig(
    level=logging.DEBUG,
    format='[%(asctime)s] [%(threadName)s] %(message)s',
    handlers=[logging.StreamHandler()]
)

def threaded_function():
    for i in range(5):
        logging.info(f"Thread is running: {i}")

def main():
    thread = threading.Thread(target=threaded_function, name="WorkerThread")
    thread.start()

    for i in range(5):
        logging.info(f"Main process iteration: {i}")

    thread.join()

if __name__ == "__main__":
    main()
```

This ensures all output from different threads in the subprocess is serialized, avoiding collisions.

---

### **2. Redirect `print` to a Thread-Safe Stream**
If you must use `print`, you can redirect `sys.stdout` and `sys.stderr` to a thread-safe wrapper.

#### **Example: Redirecting `sys.stdout`**
```python
import sys
import threading
import queue

class ThreadSafeStream:
    def __init__(self, stream):
        self.stream = stream
        self.lock = threading.Lock()

    def write(self, message):
        with self.lock:
            self.stream.write(message)
            self.stream.flush()

    def flush(self):
        with self.lock:
            self.stream.flush()

# Redirect stdout
sys.stdout = ThreadSafeStream(sys.stdout)

def threaded_function():
    for i in range(5):
        print(f"Thread message: {i}")

def main():
    thread = threading.Thread(target=threaded_function)
    thread.start()

    for i in range(5):
        print(f"Main message: {i}")

    thread.join()

if __name__ == "__main__":
    main()
```

This approach ensures thread safety for `print` operations within the subprocess.

---

### **3. Use a Queue for Inter-Thread Communication**
Instead of printing directly from threads, you can use a `queue.Queue` to collect messages from threads and process them in a single output thread or loop.

#### **Example: Using `queue.Queue`**
```python
import threading
import queue

output_queue = queue.Queue()

def threaded_function():
    for i in range(5):
        output_queue.put(f"Thread message: {i}")

def output_handler():
    while True:
        message = output_queue.get()
        if message == "STOP":
            break
        print(message)

def main():
    thread = threading.Thread(target=threaded_function)
    output_thread = threading.Thread(target=output_handler)

    thread.start()
    output_thread.start()

    thread.join()
    output_queue.put("STOP")  # Signal the output thread to stop
    output_thread.join()

if __name__ == "__main__":
    main()
```

In this example, threads only enqueue messages, and a single output thread handles printing, avoiding collisions.

---

### **4. Redirect Output in the Subprocess to a File**
If you don’t need to handle stdout in real-time, you can redirect the subprocess’s output (including threaded prints) to a file. This avoids the need for complex inter-thread handling.

#### **Example: Redirecting Output**
In the subprocess:
```python
import sys

# Redirect stdout and stderr to a file
with open('output.log', 'w') as log_file:
    sys.stdout = log_file
    sys.stderr = log_file

    def threaded_function():
        for i in range(5):
            print(f"Thread message: {i}")

    def main():
        thread = threading.Thread(target=threaded_function)
        thread.start()

        for i in range(5):
            print(f"Main message: {i}")

        thread.join()

    if __name__ == "__main__":
        main()
```

---

### **Best Practices**
1. **Prefer `logging`:** It’s the most robust and flexible solution for threaded applications.
2. **Avoid Direct Access to `sys.stdout`:** Use wrappers or dedicated threads for writing to stdout.
3. **Use `queue.Queue` for Coordination:** This decouples message generation and output handling.
4. **Centralize Output Logic:** Handle all output in a single thread to prevent conflicts.

By applying these practices, you can ensure that `print` (or equivalent) statements in a multithreaded subprocess execute safely without interfering with stdout or causing threading issues.



---
---
---


# QUESTION :

As I had not written lots of code using multimedia and sys accesses, I've been struggling for the past days a lot with foreign code not handling threading very cleanly.
Why is there so much issues with threading in every parts of python, when we have processes, which ensure safe isolation and much fewer sharing of ressources ?

---
---
---



You're absolutely right that threading in Python often introduces complexities and potential issues, especially in I/O-heavy or multimedia applications. Here's why threading can be problematic and how it compares to processes, along with details on shared `sys` members in Python threads:

---

### **Why Is Threading Problematic in Python?**

1. **Global Interpreter Lock (GIL):**
   - Python's GIL ensures that only one thread executes Python bytecode at a time in a single process. This makes threading inefficient for CPU-bound tasks and introduces potential contention for shared resources in I/O-bound tasks.
   - Even when threads are performing non-blocking operations, the GIL can result in unexpected delays and contention.

2. **Shared State Between Threads:**
   - Threads share the same memory space, making it easy to accidentally overwrite or corrupt shared resources like file descriptors, sockets, or `sys` objects.

3. **Thread Safety Requires Care:**
   - Most libraries aren't inherently thread-safe unless explicitly designed to be. Developers must handle synchronization, locks, and resource contention manually.

4. **Difficulty in Debugging:**
   - Debugging threading issues, such as race conditions or deadlocks, is significantly harder than debugging process-based isolation issues.

5. **Lack of True Isolation:**
   - Threads are not isolated. They can inadvertently affect the parent thread's state or resources, as seen with `sys.stdout`.

---

### **Why Use Processes Instead of Threads?**

1. **True Isolation:**
   - Processes have separate memory spaces, so resources like `sys.stdout`, file descriptors, and global variables are not shared unless explicitly shared via `multiprocessing` constructs.

2. **Avoids GIL Limitations:**
   - Each process gets its own GIL, enabling true parallelism for CPU-bound tasks.

3. **Easier Debugging:**
   - Issues in one process are less likely to propagate to others, making problems easier to isolate.

4. **More Predictable Resource Management:**
   - Processes provide clearer boundaries and lifecycle management, especially for resource-heavy tasks like multimedia handling.

---

### **Why Threads Are Still Used**
- **Lightweight:** Threads use less memory and startup time compared to processes.
- **Shared State Can Be Useful:** Threads can quickly share data without serialization overhead.
- **Good for I/O-Bound Tasks:** For tasks that are primarily I/O-bound (e.g., web scraping, event-driven systems), threads can be efficient.

---

### **Shared `sys` Members Across Threads**

In Python, threads within the same process share the following `sys` members:

1. **`sys.stdout` and `sys.stderr`:**
   - These represent the standard output and error streams. Since they are shared across threads, simultaneous writes can cause interleaving or corruption of output.

2. **`sys.stdin`:**
   - This represents standard input. Multiple threads attempting to read from `sys.stdin` can cause blocking or unexpected behavior.

3. **`sys.modules`:**
   - The module cache is shared across threads. This allows threads to import and use modules already loaded by the process, but it also introduces potential issues with mutable module-level variables.

4. **`sys.path`:**
   - The module search path is shared. Modifications to `sys.path` in one thread affect the entire process.

5. **`sys.argv`:**
   - The command-line arguments are shared across threads.

6. **`sys.excepthook`:**
   - The global exception hook is shared. If one thread sets a custom exception hook, it affects all threads in the process.

7. **`sys.flags` and `sys.version`:**
   - Flags and version information are shared, but these are read-only and unlikely to cause conflicts.

---

### **Recommendations for Handling Shared `sys` Members**

1. **Redirect Standard Streams Locally:**
   - Use `contextlib.redirect_stdout` or similar to locally redirect streams without affecting other threads.
     ```python
     from contextlib import redirect_stdout
     import io

     def thread_task():
         buffer = io.StringIO()
         with redirect_stdout(buffer):
             print("This is thread-specific output.")
         print(buffer.getvalue())  # Use the thread-specific buffer
     ```

2. **Isolate State with Processes:**
   - For tasks requiring separate standard streams or modules, processes provide isolation by default.

3. **Avoid Global Modifications:**
   - Minimize modifying `sys.path` or other shared attributes in threaded code.

4. **Thread-Safe Logging:**
   - Use `logging` instead of `print` for outputs.

5. **Synchronization for Shared Resources:**
   - Use `threading.Lock` to serialize access to shared resources like `sys.stdout`.

---

### **When to Choose Threads vs Processes**

| **Threads** | **Processes** |
|-------------|---------------|
| Lightweight tasks with frequent communication between workers | Resource-intensive tasks or those requiring strict isolation |
| I/O-bound workloads (e.g., network calls, file I/O) | CPU-bound workloads (e.g., data processing, simulations) |
| Need shared memory/state | Need isolated state or independent execution environments |
| Real-time responsiveness | Background or independent tasks |

---

By understanding the nuances of shared resources in Python threads and applying best practices like `logging`, local redirection, or process-based isolation, you can write cleaner and more robust code. Let me know if you want further clarification or examples!



---
---
---


# QUESTION : 

What I don't uderstand clearly, is why the python community hasn't developped best practices when using shared states accros threads.
It may come from the fact that using an event loop isn't straightforward in python, and designing an event bus imply writing additional code. Coming from other languages, that would be my goto, as it allows me to clearly identify where the state of the application resides, not having to think of the state of each thread, as it is encapsulated by design.

---
---
---



You’ve touched on a critical pain point in Python's threading ecosystem: the lack of universally adopted best practices for managing shared state. Your observations are insightful, and they align with challenges many developers face when threading and concurrency are introduced into Python applications. Here's an exploration of why this situation exists and what could improve it:

---

### **Why Python Lacks Standardized Best Practices for Shared State**

1. **Python's Historical Simplicity:**
   - Python is designed to be beginner-friendly, emphasizing simplicity and readability. Concepts like threads and shared state management are inherently complex and go against the grain of Python's "batteries-included" philosophy. 
   - As a result, Python’s standard library includes tools like `threading`, but it doesn’t prescribe patterns like event buses or immutable states, which are more advanced and language-specific concepts.

2. **GIL Reduces Perceived Need for Threading Best Practices:**
   - The Global Interpreter Lock (GIL) limits Python's ability to execute multiple threads concurrently. This has led many in the Python community to favor multiprocessing or asynchronous programming (e.g., `asyncio`) over threading.
   - The focus on `asyncio` has shifted attention away from traditional thread management.

3. **Diverse Ecosystem:**
   - Python is used in a wide range of domains—web development, scientific computing, machine learning, and more. Each has different requirements for concurrency. This diversity makes it challenging to develop universal best practices for threading.
   - For example, a web developer might lean toward `asyncio`, while a scientific programmer might prefer `multiprocessing`.

4. **Lack of Built-In Event-Driven Architecture:**
   - Unlike languages like JavaScript (Node.js) or frameworks like Akka for Scala, Python doesn’t come with an event-driven architecture or event bus by default. Libraries like `pyev` or `pynng` exist but are not widely adopted, partly due to Python’s emphasis on simplicity.

5. **Concurrency is Inherently Hard:**
   - Managing shared state across threads is challenging in any language. Without explicit enforcement mechanisms like `const` in C++ or immutable types in functional programming languages, it’s easy for developers to introduce bugs.

---

### **What Could Improve the Situation?**

1. **Promoting an Event-Driven Paradigm:**
   - An event-driven architecture simplifies state management by decoupling components. Python’s `asyncio` is a step in this direction, but it can feel cumbersome for developers used to simpler paradigms.
   - A higher-level library or framework with built-in event buses and clear patterns could help establish best practices. For example:
     - **ReactiveX (RxPy):** Introduces reactive programming concepts, allowing state management through streams.
     - **Celery:** Task queues for distributed systems, with an implicit event-driven approach.

2. **Adopting Immutable State:**
   - Libraries like `dataclasses` and `attrs` make it easier to define immutable objects. Promoting their use in threading scenarios could reduce the risk of shared state corruption.
     ```python
     from dataclasses import dataclass

     @dataclass(frozen=True)
     class AppState:
         counter: int
     ```

3. **Thread-Safe State Management Libraries:**
   - Inspired by Redux in JavaScript, a library for managing state transitions through actions could work well in Python.
     ```python
     # Example of Redux-like state in Python
     class Store:
         def __init__(self, reducer, initial_state):
             self.state = initial_state
             self.reducer = reducer

         def dispatch(self, action):
             self.state = self.reducer(self.state, action)
     ```

4. **Improved Documentation and Tutorials:**
   - The Python community could benefit from more examples and patterns for threading, like:
     - Using `queue.Queue` for communication.
     - Avoiding mutable shared state.
     - Examples of thread-safe decorators and utilities.

5. **Standardized Libraries for Concurrency:**
   - A robust, officially supported concurrency library that abstracts away threading, multiprocessing, and async complexities could unify best practices.



### **Why Event-Driven Programming Isn’t Mainstream in Python**

- **Steep Learning Curve:** While event loops and buses are powerful, they require a deeper understanding of design patterns, which can deter beginners.
- **Lack of Built-In Support:** Developers have to rely on third-party libraries or implement their own event buses, which adds complexity.
- **Alternative Paradigms Already Exist:** Python’s support for `asyncio`, `multiprocessing`, and threading creates multiple ways to handle concurrency, diluting the need for a single approach like event-driven programming.



If event loops and buses resonate with you, consider frameworks like `RxPy`, `asyncio`, or even building your own lightweight event bus tailored to your needs. By encapsulating state and communication, you can avoid much of the pain traditionally associated with threading. Let me know if you’d like help designing an event bus in Python!


---
---
---


# QUESTION :

I had problems implementing events (as I was probably doing it in random ways), and sometimes having a while loop not catching the state change of an event. (maybe due to the order in which the threads are thottled, and the handling in infinite loops, which can't be blocking, in relation with the GIL, or... what else ? How are infinite loops handled in the context of threading ?)

---
---
---


Understanding the subtleties of using `threading.Event` in Python and how infinite loops interact with threading and the Global Interpreter Lock (GIL) is key to effective concurrency. Let’s address your concerns systematically:

---

### **`threading.Event` Overview**

- A `threading.Event` object manages an internal flag that can be set (`set()`), cleared (`clear()`), or waited on (`wait()`).
- Threads can check the state of the flag using `is_set()`, and they can block until the flag is set using `wait()`.

### **Challenges with `threading.Event` and Infinite Loops**

1. **Thread Scheduling and GIL:**
   - The GIL allows only one thread to execute Python bytecode at a time, even on multi-core CPUs. Threads are switched by the Python interpreter periodically or when performing I/O operations.
   - An infinite loop that doesn’t perform I/O or explicitly release the GIL (e.g., by calling `time.sleep()`) can monopolize the GIL, starving other threads.

2. **Polling vs. Blocking:**
   - If you use `is_set()` in a tight loop to poll the event’s state, it creates a busy-wait scenario, consuming CPU unnecessarily.
     ```python
     while not event.is_set():
         pass  # Busy-waiting
     ```
   - Such loops can prevent the thread scheduler from efficiently switching between threads, especially if the thread doesn’t yield (e.g., via `time.sleep()`).

3. **Race Conditions:**
   - If threads don’t synchronize properly, an event might be missed, especially if it’s set and cleared quickly. For example:
     ```python
     event.set()
     event.clear()  # The other thread might miss the state change if it checks in between.
     ```

4. **Order of Execution:**
   - Threads may not execute in the expected order due to the nondeterministic nature of thread scheduling, making debugging challenging.

---

### **Best Practices When Using `threading.Event`**

1. **Use `wait()` Instead of Polling:**
   - Instead of polling with `is_set()`, use `wait(timeout)` to block until the event is set or a timeout occurs. This reduces CPU usage and avoids busy-waiting.
     ```python
     event = threading.Event()

     def worker():
         print("Waiting for the event...")
         event.wait()  # Blocks until the event is set
         print("Event received!")

     threading.Thread(target=worker).start()
     time.sleep(2)
     event.set()
     ```

2. **Avoid Clearing Events Too Quickly:**
   - If you need to clear an event after setting it, ensure the waiting threads have enough time to react. Alternatively, use separate events for different stages or actions.

3. **Ensure the Loop Yields:**
   - If you must use an infinite loop, ensure it includes a yielding mechanism like `time.sleep()` or I/O operations to allow other threads to run.
     ```python
     while not event.is_set():
         time.sleep(0.1)  # Yield CPU for 100ms
     ```

4. **Combine Events with a Condition:**
   - To handle complex scenarios where multiple threads depend on conditions, combine `threading.Event` with `threading.Condition`.
     ```python
     condition = threading.Condition()

     def worker():
         with condition:
             condition.wait()  # Waits until notified
             print("Condition met!")

     threading.Thread(target=worker).start()
     time.sleep(2)
     with condition:
         condition.notify()  # Notify waiting threads
     ```

5. **Use `set()` for Long-Lived States:**
   - If an event represents a persistent state, you can leave it set until explicitly cleared, ensuring that threads don’t miss the signal.

6. **Debug Thread Timing with Logging:**
   - Add logging or print statements to debug the timing and interaction between threads.

---

### **How Infinite Loops Work in the Context of Threading**

An infinite loop interacts with threading and the GIL as follows:

1. **Without I/O or Yielding:**
   - An infinite loop that doesn’t include any I/O or explicit yielding (e.g., `time.sleep()`) will monopolize the GIL. This prevents other threads from executing, even if they are ready.

     ```python
     def busy_loop():
         while True:
             pass  # No I/O or yielding

     threading.Thread(target=busy_loop).start()
     ```
     This will starve other threads and make the program unresponsive.

2. **With I/O or Yielding:**
   - Including I/O operations like `print()` or sleep calls in the loop releases the GIL, allowing other threads to run.
     ```python
     def cooperative_loop():
         while True:
             print("Working...")
             time.sleep(0.1)  # Yield to other threads
     ```

3. **Impact of GIL on Other Threads:**
   - Python uses a fair scheduling mechanism to ensure all threads get a chance to execute. However, the actual switching depends on whether the thread holding the GIL releases it.

4. **Efficient Waiting:**
   - Instead of infinite loops, use blocking mechanisms like `wait()` or `Queue.get()` to avoid busy-waiting.

---

### **Pattern for Safe Infinite Loops with `threading.Event`**

Here’s a robust pattern for an infinite loop using `threading.Event`:

```python
import threading
import time

stop_event = threading.Event()

def worker():
    while not stop_event.is_set():  # Loop until the stop event is set
        print("Working...")
        time.sleep(1)  # Yield to allow other threads to execute
    print("Worker exiting...")

# Start the worker thread
worker_thread = threading.Thread(target=worker)
worker_thread.start()

# Let it run for 5 seconds
time.sleep(5)

# Signal the worker thread to stop
stop_event.set()

# Wait for the worker thread to finish
worker_thread.join()
print("Main thread exiting...")
```

---

### **Key Takeaways**

1. **Avoid Tight Loops:** Use blocking calls like `wait()` or include explicit yielding mechanisms.
2. **Use Events for Coordination:** `threading.Event` is ideal for signaling between threads but must be used with care to avoid race conditions.
3. **Understand GIL Behavior:** Python’s GIL affects how threads interact, particularly in compute-heavy tasks or tight loops.
4. **Design Responsively:** Ensure threads cooperate and don’t monopolize the GIL.


---
---
---


# QUESTION :

request_thread = ThreadWithReturnValue(target = session.get, args = (ngrok_url,), kwargs = {"params" : {"next_batch" : 'True'}})
    try:
        request_thread.start()
        response = request_thread.join()
    except Exception as e:
        print(f'Polling connection failed : {str(e)}')
    else:
        content_type = response.headers.get('content-type').split(";")[0].lower()

But using threading like that doesn't allow the try/except block to catch "ConnectionRefusedError: [WinError 10061]"

---
---
---



### ThreadWithReturnVakye must remember exceptions raised in its context, and re-raise them on join()

OK, my implem was missing that (bloody Stack-overflow...)

## Alternative Approach: Use concurrent.futures.ThreadPoolExecutor
If you don’t need a custom threading class, Python’s concurrent.futures module provides a simpler way to handle exceptions and return values from threads:

```python
from concurrent.futures import ThreadPoolExecutor

with ThreadPoolExecutor() as executor:
    future = executor.submit(session.get, ngrok_url, params={"next_batch": 'True"})
    try:
        response = future.result()  # This will raise exceptions from the thread
    except ConnectionRefusedError as e:
        print(f"Polling connection failed: {str(e)}")
    except Exception as e:
        print(f"An unexpected error occurred: {str(e)}")
    else:
        content_type = response.headers.get('content-type').split(";")[0].lower()

```


---
---
---

Stack overflow

# How can I get the return value of a function passed to multiprocessing.Process?

---
---
---

### Use a shared variable to communicate. For example, like this,

Example Code:

```python
import multiprocessing


def worker(procnum, return_dict):
    """worker function"""
    print(str(procnum) + " represent!")
    return_dict[procnum] = procnum


if __name__ == "__main__":
    manager = multiprocessing.Manager()
    return_dict = manager.dict()
    jobs = []
    for i in range(5):
        p = multiprocessing.Process(target=worker, args=(i, return_dict))
        jobs.append(p)
        p.start()

    for proc in jobs:
        proc.join()
    print(return_dict.values())
```

---
---
---