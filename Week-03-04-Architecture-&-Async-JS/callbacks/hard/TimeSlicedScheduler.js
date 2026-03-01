// Problem Description – Time-Sliced Task Scheduler
//
// You are required to build a scheduler that prevents long-running tasks
// from blocking the event loop.
//
// Tasks must periodically yield control back to the scheduler so that
// higher-priority or newly arrived tasks can execute.
//
// This simulates cooperative multitasking used in UI frameworks.

class TimeSlicedScheduler {
  constructor() {
    this.queue = [];
  }

  schedule(task) {
    this.queue.push(task);
  }

  async run() {
    while (this.queue.length) {
      const task = this.queue.shift();

      // Wait for task to complete
      await task();

      // Yield to event loop (time slice break);
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }
}

module.exports = TimeSlicedScheduler;
