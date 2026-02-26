// Problem Description – Async Initialization Gate
//
// You are required to design a mechanism for APIs that depend on an
// asynchronous initialization step.
// Any calls made before initialization completes should be queued and
// executed only after the initialization finishes.
// Calls made after initialization should execute immediately.
//
// The initialization task and API functions must invoke callbacks when
// they complete.

class GuardedAPI {
  constructor() {
    this.initialized = false;
    this.initializing = false;
    this.queue = [];
  }

  init(initTask) {
    if (this.initialized || this.initializing) return;

    this.initializing = true;

    initTask((err) => {
      this.initializing = false;

      if (!err) {
        this.initialized = true;
        this._flush();
      } else {
        // fail all queue calls
        while (this.queue.length > 0) {
          const item = this.queue.shift();
          item.onComplete(err);
        }
      }
    });
  }

  call(apiFn, onComplete) {
    if (this.initialized) {
      apiFn(onComplete);
    } else {
      this.queue.push({ apiFn, onComplete });
    }
  }

  _flush() {
    while (this.queue.length > 0) {
      const item = this.queue.shift();
      item.apiFn(item.onComplete);
    }
  }
}

module.exports = GuardedAPI;
