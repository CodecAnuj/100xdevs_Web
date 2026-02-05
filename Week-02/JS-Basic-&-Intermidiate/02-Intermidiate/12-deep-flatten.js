/*
  Question: Deep flatten nested arrays inside object
  Input: { a: [1, [2, [3]]], b: [4, [5]] }
  Output: { a: [1,2,3], b: [4,5] }
*/

// solution
const input = {
  a: [1, [2, [3]]],
  b: [4, [5]],
};

const result = Object.entries(input).reduce((acc, [key, nestedArray]) => {
  acc[key] = nestedArray.flat(Infinity);

  return acc;
});

console.log(result)