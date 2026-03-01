// Problem Description – Preemptive Priority Task Scheduler
//
// You are required to build a scheduler that executes async tasks
// based on priority.
//
// Higher-priority tasks should be executed before lower-priority ones.
// Long-running tasks must periodically yield control back to the scheduler
// so that newly arrived high-priority tasks can be processed.
//
// True preemption is not possible in JavaScript, so tasks must cooperate
// by yielding execution voluntarily.
//
// Once you've implemented the logic, test your code by running
//   - `npm run Scheduler`

class Scheduler {
  constructor() {
    this.queue = [];
    this.running = false;
    this.onAllFinished = null;
  }

  schedule(task, priority = 0) {
    this.queue.push({ task, priority });
    this.queue.sort((a, b) => b.priority - a.priority);
  }

  run(onAllFinished) {
    this.onAllFinished = onAllFinished;

    const runNext = () => {
      if (this.running) return;

      if (this.queue.length === 0) {
        if (this.onAllFinished) this.onAllFinished(null);
        return;
      }

      const item = this.queue.shift();
      this.running = true;

      item.task((err) => {
        this.running = false;

        if (err) {
          if (this.onAllFinished) this.onAllFinished(err);
          return;
        }
        runNext();
      });
    };

    runNext();
  }
}

module.exports = Scheduler;
