/*
  Question: Nested object destructuring (Log values)
  Input: { user: { profile: { name: "Alice", age: 25 } } }
  Output: "Alice", 25
*/

// solution
const input = {
  user: {
    profile: {
      name: "Alice",
      age: 25,
    },
  },
};

const { user: { profile: { name, age } } } = input;

console.log(name, age);