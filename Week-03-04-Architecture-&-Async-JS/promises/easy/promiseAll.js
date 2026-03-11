// Problem Description – Custom Implementation of Promise.all

// You are required to implement your own version of Promise.all without using the built-in method.
// The function should accept an array of values that may include Promises or plain constants.
// It must resolve with an array of results in the same order once all inputs resolve, or reject immediately if any input rejects.
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (!Array.isArray(promises)) {
      reject(new TypeError("Input must be an array"));
    }

    if (promises.length === 0) {
      resolve([]);
    }

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((result) => {
          results[i] = result;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    }
  });
}

module.exports = promiseAll;
