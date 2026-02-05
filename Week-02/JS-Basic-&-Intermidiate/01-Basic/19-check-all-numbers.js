/*
  Question: Check if all values in object are numbers
  Input: { a: 1, b: "hello", c: 3 }
  Output: false
*/

// solution
const input = { a: 1, b: "hello", c: 3 };

const values = Object.values(input);

const allNumbers = values.every((val) => typeof val === "number");

console.log(allNumbers);
