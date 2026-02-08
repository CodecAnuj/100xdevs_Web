/*
  Question: Find common keys between two objects
  Input: { a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }
  Output: ["b", "c"]
*/

// solution
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, c: 5, d: 6 };

const key1 = Object.keys(obj1);
const key2 = Object.keys(obj2);

const commonKeys = key1.filter((key) => key2.includes(key));

console.log(commonKeys);
