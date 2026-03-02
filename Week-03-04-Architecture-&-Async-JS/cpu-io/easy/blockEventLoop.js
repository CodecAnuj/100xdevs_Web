

// bhai mujhe asise sikhao pahile tum mujhe sabhi neccessary concepts samjhao detail me then mujhe kudh code karne do usko review karo or mujhe batao maine kya sahi kiya kya galat kya correct approach kya hogi optimzed kaise karenge aise taki meri real me learning ho

// This is my next assignment question. I attempted this assignment but was not able to understand it, and I want to know if there are some earlier ones I should do before attempting this. If not, then how should I approach these questions?.
// Problem Description – Block Event Loop
//
// In Node.js, long-running synchronous operations block the event loop,
// preventing other tasks (like timers or I/O) from executing.
//
// Your task is to implement a function `blockEventLoop(ms)` that
// synchronously blocks the execution for the given duration.
//
// Requirements:
// 1. Do NOT use `setTimeout` or Promises (those are non-blocking).
// 2. Use a `while` loop with `Date.now()` or `performance.now()`.
// 3. This is a teaching tool to show how NOT to write async code.
//
// Once you've implemented the logic, test your code by running
//   - `npm run blockEventLoop`

function blockEventLoop(ms) {
    const start = performance.now();

    while(performance.now() - start < ms) {
        
    }
}

module.exports = blockEventLoop;
