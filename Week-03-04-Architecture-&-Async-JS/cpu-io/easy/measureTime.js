// Problem Description – Measure Async Execution Time
//
// Your task is to implement a function that takes an asynchronous function `fn`
// and returns the time it took to execute in milliseconds.
//
// Requirements:
// 1. The function should return the duration in ms (rounded to nearest integer or float)
// 2. The function should handle errors (if fn throws, you should still catch the time or rethrow)
// 3. Use performance.now() or Date.now() for timing.

async function measureTime(fn) {
  try {
    const start = performance.now();
    await fn();
    const end = performance.now() - start;
    return end;
  } catch (error) {
    throw error;
  }
}

module.exports = measureTime;
