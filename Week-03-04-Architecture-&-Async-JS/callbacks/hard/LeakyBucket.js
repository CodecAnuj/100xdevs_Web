// Problem Description – Leaky Bucket Rate Limiter
//
// You are required to implement a RateLimiter based on the Leaky Bucket algorithm.
//
// The rate limiter has a fixed capacity and processes tasks at a constant rate.
// Tasks are executed in the exact order they are received.
//
// Requirements:
// 1. The bucket has a maximum capacity
// 2. Tasks are processed at a fixed interval (leak rate)
// 3. If the bucket is full, new tasks must be rejected immediately
// 4. Fairness must be preserved (FIFO execution)

class LeakyBucket {
  constructor(capacity, leakRateMs) {
    // Maximum number of pending tasks allowed in the queue
    this.capacity = capacity;

    // Fixed interval (in ms) at which one task is allowed to start
    this.leakRateMs = leakRateMs;

    // FIFO queue to store pending tasks
    this.queue = [];

    // Holds the interval ID (null means not currently leaking)
    this.timer = null;
  }

  add(task, onComplete) {
    // Reject immediately if bucket (pending queue) is full
    if (this.queue.length >= this.capacity) {
      return onComplete(new Error("Rate Limit Exceeded"));
    }

    // Store task and its completion callback
    this.queue.push({ task, onComplete });

    // Start leaking only if not already running
    if (this.timer === null) {
      this.timer = setInterval(() => {
        this._process();
      }, this.leakRateMs);
    }
  }

  _process() {
    if (this.queue.length === 0) {
      clearInterval(this.timer);
      this.timer = null;
      return;
    }

    // Remove next task in FIFO order
    const item = this.queue.shift();

    try {
      // Execute task.
      // Task must call done(err, result) when finished.
      item.task((err, res) => {
        item.onComplete(err, res); // Forward result/error to user
      });
    } catch (err) {
      // Handle synchronous errors thrown by task
      item.onComplete(err);
    }
  }
}

module.exports = LeakyBucket;
