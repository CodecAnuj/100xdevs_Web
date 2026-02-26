// Problem Description – Hedged Request
//
// You have a Primary async source and a Secondary backup.
// Start the Primary immediately. If it is slow, start the Secondary.
//
// Return the first successful result and ignore the rest.
// Only fail if both fail, and ensure the callback runs once.
//
// Requirements:
// - Start Primary immediately.
// - Start Secondary after timeoutMs if needed.
// - First success wins.
// - Callback must be called exactly once.

function hedgedRequest(primary, secondary, timeoutMs, onComplete) {
  let finished = false;
  let primaryError = null;
  let secondaryError = null;
  let secondaryStarted = false;

  function tryFail() {
    if (primaryError && secondaryError && !finished) {
      finished = true;
      onComplete(secondaryError); // both failed
    }
  }

  // Start Primary immediately
  primary((err, result) => {
    if (finished) return;

    if (!err) {
      finished = true;
      onComplete(null, result);
    } else {
      primaryError = err;
      tryFail();
    }
  });

  // Start Secondary after timeout
  setTimeout(() => {
    if (finished) return;

    secondaryStarted = true;

    secondary((err, result) => {
      if (finished) return;

      if (!err) {
        finished = true;
        onComplete(null, result);
      } else {
        secondaryError = err;
        tryFail();
      }
    });
  }, timeoutMs);
}

module.exports = hedgedRequest;
