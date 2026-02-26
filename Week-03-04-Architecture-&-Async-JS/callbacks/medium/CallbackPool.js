// Problem Description – Asynchronous Worker Pool
//
// You are required to create a worker pool that manages the execution
// of asynchronous tasks.
// The pool should ensure that no more than N tasks are running concurrently,
// while any additional tasks are queued.
// As tasks complete, queued tasks should start automatically.
// Each task must invoke its callback with its result when finished.

class CallbackPool {
  constructor(limit) {
    this.limit = limit;
    this.active = 0;
    this.queue = [];
  }

  run(task, onComplete) {
    if (this.active < this.limit) {
      // start imediately
      this.active++;
      task((error, result) => {
        this.active--;
        onComplete(error, result);
        this._next();
      });
    } else {
      this.queue.push({ task, onComplete });
    }
  }

  _next() {
    if (this.queue.length > 0 && this.active < this.limit) {
      // dequeue
      const item = this.queue.shift();
      this.run(item.task, item.onComplete);
    }
  }
}

module.exports = CallbackPool;
