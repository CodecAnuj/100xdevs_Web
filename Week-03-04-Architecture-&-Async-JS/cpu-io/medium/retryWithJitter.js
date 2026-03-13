// Problem Description – Retry with Exponential Backoff and Jitter

// You are required to implement a retry mechanism for an asynchronous task that fails.
// On each retry, the delay before the next attempt should increase, and a small random “jitter”
// should be added to the delay to prevent synchronized retries that can overload a server.
// The process should stop once the task succeeds or the maximum retry limit is reached.

async function retryWithJitter(fn, retries = 3, baseDelay = 1000) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === retries) {
        throw error;
      }

      const delay = baseDelay * 2 ** attempt;
      const jitter = Math.random() * 0.2 * delay;
      const totalDelay = delay + jitter;

      await new Promise((resolve) => setTimeout(resolve, totalDelay));
    }
  }
}

module.exports = retryWithJitter;
