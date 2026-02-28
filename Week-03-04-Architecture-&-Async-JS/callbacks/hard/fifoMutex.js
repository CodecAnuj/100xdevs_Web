// Problem Description – Fair FIFO Mutex
//
// Implement a Mutex to control access to an async resource.
//
// Only one task may run at a time. Extra tasks must wait in a queue
// and be executed in FIFO order.
//
// When a task finishes, the lock should be released automatically
// and the next queued task should start.
//
// Requirements:
// - Run immediately if free.
// - Queue when locked (FIFO).
// - Auto-release on task completion.

class Mutex {
  constructor() {
    this.isLocked = false; // flag to track running task
    this.queue = []; // FIFO Queue -> item = { task, onComplete }
  }

  lock(task, onComplete) {
    // If no task is running, start immediately
    if (!this.isLocked) {
      this.isLocked = true;
      this._run(task, onComplete);
    } else {
      // If already locked, push the task into queue
      this.queue.push({ task, onComplete });
    }
  }

  _run(task, onComplete) {
    try {
      // Execute the task
      task((...args) => {
        // Always release lock BEFORE calling user callback
        // This ensures queue continues even if callback throws
        this._release();

        // Call user-provided completion handler
        if (onComplete) onComplete(...args);
      });
      
    } catch (err) {
      // If task throws synchronously,
      // still release lock to avoid deadlock
      this._release();

      if (onComplete) onComplete(err);
    }
  }

  _release() {
    // If no one is waiting, unlock
    if (this.queue.length === 0) {
      this.isLocked = false;
    } else {
      // Otherwise, take next task from queue (FIFO)
      const next = this.queue.shift();

      // Start next task immediately
      this._run(next.task, next.onComplete);
    }
  }
}

module.exports = Mutex;
