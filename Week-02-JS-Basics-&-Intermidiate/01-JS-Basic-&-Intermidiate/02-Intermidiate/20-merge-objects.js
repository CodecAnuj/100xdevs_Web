/*
  Question: Merge two objects (no sum, override second)
  Input: { a: 10, b: 20 }, { a: 5, c: 15 }
  Output: { a: 5, b: 20, c: 15 }
*/

// solution
const obj1 = { a: 10, b: 20 };
const obj2 = { a: 5, c: 15 };

const result = { ...obj1, ...obj2 };

console.log(result);
