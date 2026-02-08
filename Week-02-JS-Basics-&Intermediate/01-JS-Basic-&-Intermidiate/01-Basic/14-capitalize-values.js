/*
  Question: Capitalize string values inside object
  Input: { name: "alice", city: "delhi" }
  Output: { name: "Alice", city: "Delhi" }
*/

// solution
const input = { name: "alice", city: "delhi" };

const entries = Object.entries(input);
// console.log(entries);

const capitalizedEntries = entries.map((entry) => {
  const key = entry[0];
  //   console.log(key);

  const value = entry[1];
  //   console.log(value);

  const newValue = value[0].toUpperCase() + value.slice(1);
  //   console.log(newValue);

  return [key, newValue];
});

const result = Object.fromEntries(capitalizedEntries);

console.log(result);
