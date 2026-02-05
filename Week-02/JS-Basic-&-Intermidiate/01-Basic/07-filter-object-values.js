/*
  Question: Filter object by values > 50
  Input: { a: 20, b: 60, c: 40, d: 90 }
  Output: { b: 60, d: 90 }
*/

// solution
const numbers = { a: 20, b: 60, c: 40, d: 90 };

const entries = Object.entries(numbers);

const filteredEntries = entries.filter((entry) => {
  const value = entry[1];

  return value > 50;
});

const result = Object.fromEntries(filteredEntries);

console.log(result);
