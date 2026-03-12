// Problem Description – Async Cache with Time-to-Live (TTL)

// You are required to create an asynchronous cache utility that exposes a get(key, fetcher) method.
// If the requested key already exists in the cache, the cached value should be returned immediately.
// If the key does not exist, the fetcher function should be executed to retrieve the value,
// store it in the cache, and automatically remove the entry after a fixed Time-to-Live (TTL) of 5 seconds.

class AsyncCache {
  constructor(ttl = 5000) {
    this.ttl = ttl;
    this.cache = new Map();
  }

  async get(key, fetcher) {
    
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    const value = await fetcher();

    this.cache.set(key, value);

    setTimeout(() => this.cache.delete(key), this.ttl);

    return value;
  }
}

module.exports = AsyncCache;
