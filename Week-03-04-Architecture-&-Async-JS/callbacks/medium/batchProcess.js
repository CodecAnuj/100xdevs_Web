// Problem Description – Ordered Parallel Batcher
//
// You need to process many items in parallel, but with a fixed
// concurrency limit to avoid resource exhaustion.
//
// Tasks should start as soon as a slot is free, and the final
// results must preserve the original input order.
//
// Requirements:
// - Run at most `limit` workers in parallel.
// - Preserve the original order of results.
// - Start new work as soon as one finishes.
// - Stop and return an error if any task fails.

// items = [2,43,7,8] , return [2,43,7,8]

function batchProcess(items, limit, worker, onComplete) {
  let index = 0;
  let active = 0;
  let complete = 0;
  let stopped = false;

  let results = new Array(items.length);
  if (items.length == 0) {
    return onComplete(null, []);
  }
  function start() {
    while (active < limit && index < items.length && stopped == false) {
      let currentindex = index;
      let item = items[index];
      active++;
      index++;

      worker(item, (err, res) => {
        if (stopped) return;
        if (err) {
          stopped = true;
          return onComplete(err, res);
        }
        results[currentindex] = res;
        active--;
        complete++;
        if (complete == items.length) {
          stopped = true;
          return onComplete(null, results);
        }
        if (complete < items.length) {
          start();
        }
      });
    }
  }
  start();
}

module.exports = batchProcess;
