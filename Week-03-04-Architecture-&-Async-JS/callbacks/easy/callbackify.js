// Problem Description – callbackify(fn)
//
// You are required to write a function named callbackify that takes a function
// which returns a Promise.
// The function should return a new function that accepts a callback as its
// last argument.

// When the Promise resolves, the callback should be called with `(null, data)`.
// When the Promise rejects, the callback should be called with the error.

function callbackify(promiseFn) {
  return function (...args) {
    const callback = args.pop(); // remove last argument
    promiseFn(...args) // spread remaining args
      .then((data) => callback(null, data)) // success
      .catch((err) => callback(err)); // failure
  };
}

module.exports = callbackify;
