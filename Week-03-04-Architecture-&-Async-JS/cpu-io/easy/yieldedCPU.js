// Problem Description – Yielding a CPU-Intensive Task
//
// You are given a CPU-heavy computation that runs inside a loop.
// Instead of blocking the event loop completely, your task is to
// periodically yield control back to the event loop.
//
// By using setTimeout inside an async function, the computation
// should pause every fixed number of iterations, allowing other
// asynchronous tasks (like timers or I/O callbacks) to run.

async function yieldedCPU(iterations) {
  let sum = 0;
  for (let i = 0; i < iterations; i++) {
    // CPU work
    sum += i;

    if (i > 0 && i % 1000 === 0) {
      await new Promise((resolve) => {
        setTimeout(resolve, 0);
      });
    }
  }

  return sum;
}

module.exports = yieldedCPU;
