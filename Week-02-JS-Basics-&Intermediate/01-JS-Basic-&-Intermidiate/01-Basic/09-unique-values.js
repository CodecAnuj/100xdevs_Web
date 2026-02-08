/*
  Question: Unique values across all object arrays
  Input: { x: [1,2,3], y: [2,3,4], z: [4,5] }
  Output: [1, 2, 3, 4, 5]
*/

// solution
const input = { x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] };

const allNumbers = Object.values(input).flat();
console.log(allNumbers);

const uniqueArray = [...new Set(allNumbers)];

console.log(uniqueArray);
