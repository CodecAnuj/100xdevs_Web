// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

function once(fn) {
  let result = null;
  let finish = false;
  let running = false;
  let queue = [];

  return function (...params) {
    let callback = params.pop();

    if (finish) {
      return callback(...result);
    }

    queue.push(callback);

    if (running) {
      queue.push(callback);
      return
    }

    running = true;

    fn(...params, (...args) => {
      result = args;
      finish = true;

      while (queue.length > 0) {
        let cb = queue.shift();
        cb(...result)
      }
    })
  };
}


// explanation
// function once(fn) {
//   let result = null; // To store [err, data1, data2...]
//   let finish = false; // Flag: Is calculation done?
//   let running = false; // Flag: Is function currently running?
//   let queue = []; // Queue for all callers (including the first one)

//   return function (...params) {
//     let callback = params.pop();

//     if (finish) {
//       // If finished, return cached result immediately
//       return callback(...result);
//     }

//     // Push everyone to queue.
//     // Logic: Even the first caller waits in queue until fn completes.
//     queue.push(callback);

//     // If 'fn' is already running, we stop here.
//     // The queue will be processed when 'fn' finishes.
//     if (running) {
//       return;
//     }

//     running = true; // Mark as running

//     fn(...params, (...args) => {
//       // Save all arguments (error + data) to support any callback signature
//       result = args;
//       finish = true;

//       // Process the queue and send result to all waiting callbacks
//       while (queue.length) {
//         let cb = queue.shift();
//         cb(...result);
//       }
//     });
//   };
// }

module.exports = once; /*  */
