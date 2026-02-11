function fetchWithTimeout(url, ms, callback) {
  let isDone = false;
  let timerId;

   timerId = setTimeout(() => {
    if (!isDone) {
      isDone = true;
      callback(new Error("Request Timed Out"));
    }
  }, ms);

  fetch(url, (err, data) => {
    if (!isDone) {
      isDone = true;
      clearTimeout(timerId);
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    }
  });
}

module.exports = fetchWithTimeout;
