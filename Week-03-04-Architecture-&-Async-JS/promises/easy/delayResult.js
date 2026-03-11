
// // Problem Description – Delayed Success (Sleep Wrapper)
// //
// // You are given a value and a delay time in milliseconds.
// // Your task is to implement delayResult(value, ms).
// //
// // The function must return a Promise that resolves with the given value
// // only after ms milliseconds.


function delayResult(value, ms) {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, ms)
    })

    return promise;
}

module.exports = delayResult;