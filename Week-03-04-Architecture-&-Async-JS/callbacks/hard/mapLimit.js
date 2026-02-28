// Problem Description – Parallel Execution with Concurrency Limit
//
// You need to execute many asynchronous tasks (e.g., image downloads),
// but only a fixed number are allowed to run at the same time to avoid
// resource exhaustion.
//
// This problem tests concurrency control and result ordering.
//
// Requirements:
// - Accept an array of tasks and a concurrency limit.
// - Run at most `limit` tasks in parallel until all are completed.
// - Return results in the original task order via onAllFinished.
//
// Once you've implemented the logic, test your code by running
//   - `npm run mapLimit`

function mapLimit(tasks, limit, onAllFinished) {
  let results = new Array(tasks.length);
  let nextIndex = 0;
  let runningCount = 0;
  let completedCount = 0;
  let hasError = false;

  function startNext() {
    if (hasError) return;
    if (runningCount >= limit) return;
    if (nextIndex >= tasks.length) return;

    let currentindex = nextIndex;
    nextIndex++;
    runningCount++;

    tasks[currentindex]((err, res) => {
      if (hasError) return;

      if (err) {
        hasError = true;
        onAllFinished(err);
        return;
      }
      results[currentindex] = res;
      runningCount--;
      completedCount++;

      if (completedCount === tasks.length) {
        onAllFinished(null, results);
      } else {
        startNext();
      }
    });
  }

  while (runningCount < limit && nextIndex < tasks.length) {
    startNext();
  }
}

module.exports = mapLimit;
