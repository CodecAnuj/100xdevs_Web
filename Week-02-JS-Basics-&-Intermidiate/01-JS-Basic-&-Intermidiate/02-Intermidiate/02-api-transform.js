/*
  Question: Transform API response to object (id -> name)
  Input: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
  Output: { 1: "Alice", 2: "Bob" }
*/

// solution
const input = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const result = input.reduce((acc, cur) => {
  acc[cur.id] = cur.name;

  return acc;
}, {});

console.log(result);
