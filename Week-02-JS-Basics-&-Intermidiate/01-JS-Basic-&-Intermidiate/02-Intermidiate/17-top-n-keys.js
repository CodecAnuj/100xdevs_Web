/*
  Question: Find top N keys by value
  Input: { a: 10, b: 50, c: 30, d: 40 }, N = 2
  Output: ["b", "d"]
*/

const input = { a: 10, b: 50, c: 30, d: 40 };
const N = 2;

const resukt = Object.entries(input)
  .sort((a, b) => b[1] - a[1])
  .slice(0, N)
  .map((entry) => entry[0]);

console.log(result);
