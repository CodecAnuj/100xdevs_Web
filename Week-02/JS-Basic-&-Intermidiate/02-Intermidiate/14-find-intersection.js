/*
  Question: Find intersection of all arrays in object
  Input: { a: [1,2,3], b: [2,3,4], c: [3,4,5] }
  Output: [3]
*/

// solution
const input = {
  a: [1, 2, 3],
  b: [2, 3, 4],
  c: [3, 4, 5],
};

const arrays = Object.values(input);

const result = arrays.reduce((acc, curr) => {
  return acc.filter((item) => curr.includes(item));
});

console.log(result);
