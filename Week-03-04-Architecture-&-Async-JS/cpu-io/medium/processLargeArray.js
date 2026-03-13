// Problem Description – Non-Blocking Large Array Processing

// You are given a very large array containing around 100,000 items that must be processed.
// Your task is to implement a strategy that performs this processing without blocking the main thread, ensuring the browser UI remains responsive.
// The solution should break the work into smaller chunks and schedule them asynchronously.

async function processLargeArray(items, processFn, chunkSize = 100) {
  let index = 0;

  return new Promise((resolve, reject) => {
    function processChunk() {
      let processed = 0;

      while (processed < chunkSize && index < items.length) {
        processFn(items[index]);
        index++;
        processed++;
      }

      if (index < items.length) {
        setTimeout(processChunk, 0);
      } else {
        resolve();
      }
    }

    processChunk();
  });
}

module.exports = processLargeArray;
