/*
  Question: Count number of keys in object
  Input: { a: 1, b: 2, c: 3 }
  Output: 3
*/

// solution
const input = { a: 1, b: 2, c: 3 };

const keys = Object.keys(input);
// console.log(keys)

const count = keys.length;

console.log(count);
