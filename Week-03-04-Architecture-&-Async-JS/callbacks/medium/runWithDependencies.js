// Problem Description – Task Execution with Dependencies
//
// You are given a set of asynchronous tasks where some tasks depend
// on the completion of others.
// Your goal is to execute each task only after all of its dependencies
// have been successfully completed.
// The solution should ensure correct execution order and handle
// dependency relationships properly.
//
// Each task is asynchronous and must invoke a callback when finished.
// Invoke finalCallback after all tasks have completed, or with an error
// if any task fails.

function runWithDependencies(tasks, finalCallback) {
  const results = {};
  const running = new Set();
  let hasError = false;

  function checkManager() {
    if (hasError) return;

    tasks.forEach((task) => {
      if (results[task.id] || running.has(task.id)) {
        return;
      }

      const canStart = task.deps.every((dep) => {
        return results[dep] !== undefined;
      });

      if (canStart) {
        running.add(task.id);

        task.run((err, result) => {
          if (hasError) return;

          if (err) {
            hasError = true;
            return finalCallback(err);
          }

          // save result
          results[task.id] = result;

          // remove from running
          running.delete(task.id);

          if (Object.keys(results).length === tasks.length) {
            return finalCallback(null, results);
          } else {
            checkManager();
          }
        });
      }
    });
  }

  checkManager();
}

module.exports = runWithDependencies;
