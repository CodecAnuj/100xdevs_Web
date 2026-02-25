/*
  Question: Sort array of objects by name then age
  Input: [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Alice", age: 22 }
  ]
  Output: [
    { name: "Alice", age: 22 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
  ]
*/

// solution
const input = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 },
];

input.sort((a, b) => a.name.localeCompare(b.name) || a.age - b.age);

console.log(input);
