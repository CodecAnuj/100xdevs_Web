// Problem Description – callbackify(fn)
//
// You are required to write a function named callbackify that takes a function
// which returns a Promise.
// The function should return a new function that accepts a callback as its
// last argument.
// When the Promise resolves, the callback should be called with `(null, data)`.
// When the Promise rejects, the callback should be called with the error.


// ! I cant do this , may done later 
// function callbackify(fn) {
//     return (...fn) => {
//         let last = [...fn].pop();
//         let input = [...fn];
//         let result = fn(input)
//         result.then((v) => {
//                 last(null, v);
//             })
//             .catch((err) => {
//                 last(err);
//             });
//     };
// }

function callbackify(promiseFn) {
    return function (...args) {
      const callback = args.pop();          // remove last argument
      promiseFn(...args)                    // spread remaining args
        .then(data => callback(null, data)) // success
        .catch(err => callback(err));       // failure
    };
  }
  
module.exports = callbackify;

/**
 * function callbackify(promiseFn):

    return function (...args):

        callback = remove last element from args

        resultPromise = promiseFn(...args)

        resultPromise.then(data):
            callback(null, data)

        resultPromise.catch(error):
            callback(error)

 */