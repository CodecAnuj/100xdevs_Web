// Problem Description – promiseAny(promises)

// You are required to implement a function named promiseAny that accepts an array of Promises.
// The function should return a new Promise that resolves immediately when any one of the input promises resolves successfully.
// If all the promises reject, the returned Promise should reject with an error.

function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    let rejectedCount = 0;
    let errors = [];

    if (!Array.isArray(promises)) {
      return reject(new TypeError("Input must be an array"));
    }

    if (promises.length === 0) {
      return reject(new Error("Empty iterable"));
    }

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          errors[i] = err;
          rejectedCount++;

          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    }
  });
}

module.exports = promiseAny;
