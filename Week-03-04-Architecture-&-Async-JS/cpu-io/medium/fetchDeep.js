// Problem Description – Recursive Fetch with Redirect Handling

// You are required to fetch data for a given set of IDs.
// Each response may contain a redirectId, indicating that the data should be fetched again using the new ID.
// The process must continue until the final data is reached.
// Your implementation should also detect and prevent infinite redirect loops.

async function fetchDeep(ids, fetcher, maxDepth = 5) {
  // Create parallel tasks for each key
  const tasks = Object.entries(ids).map(async ([key, id]) => {
    let currentId = id;
    let depth = 0;

    while (true) {
      const res = await fetcher(currentId);

      // Final data reached
      if (!res.redirectId) {
        return [key, res];
      }

      // Prevent infinite redirect chains
      if (depth >= maxDepth) {
        throw new Error("Max redirect depth exceeded");
      }

      // Follow redirect
      currentId = res.redirectId;
      depth++;
    }
  });

  // Run all chains in parallel
  const results = await Promise.all(tasks);

  // Convert [key,value] pairs back to object
  return Object.fromEntries(results);
}

module.exports = fetchDeep;
