// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

function once(fn) {
  let catchedResult = null;
  let finish = false;
  let running = false;
  const queue = [];
  return function (...params) {
    let callback = params.pop();

    if (finish) {
      return callback(...catchedResult);
    }

    if (running) {
      queue.push(callback);
      return;
    }

    running = true;

    fn(...params, (err, ...args) => {
      finish = true;

      catchedResult = [err, ...args];

      callback(err, ...args);

      while (queue.length > 0) {
        const waitingCb = queue.shift();
        waitingCb(err, ...args);
      }
    });
  };
}1

module.exports = once; /*  */
