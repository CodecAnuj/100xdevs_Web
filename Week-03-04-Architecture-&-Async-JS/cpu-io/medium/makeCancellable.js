// Problem Description – Abortable Promise Wrapper

// You are required to wrap a Promise so that it can be cancelled using an AbortSignal.
// If the signal is aborted before the Promise settles, the wrapper should immediately reject with an appropriate error.
// If not aborted, it should resolve or reject normally.

function makeCancellable(promise, signal) {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      return reject(new Error("Aborted"));
    }

    const onAbort = () => {
      reject(new Error("Aborted"));
    };

    signal.addEventListener("abort", onAbort);

    promise
      .then((value) => {
        signal.removeEventListener("abort", onAbort);
        resolve(value);
      })
      .catch((err) => {
        signal.removeEventListener("abort", onAbort);
        reject(err);
      });
  });
}

module.exports = makeCancellable;
