/*
  Question: Swap keys and values of object
  Input: { a: "x", b: "y", c: "z" }
  Output: { x: "a", y: "b", z: "c" }
*/

// solution
// const oldObj = { a: "x", b: "y", c: "z" };

// const newObj = {};

// for (const key in oldObj) {
//   let value = oldObj[key];

//   newObj[value] = key;
// }

// console.log(newObj);

// another way

const oldObj = { a: "x", b: "y", c: "z" };

const entries = Object.entries(oldObj);

const swappedEntries = entries.map((entry) => {
  const key = entry[0]; // "a"
  const value = entry[1]; // "x"

  return [value, key];
});

const result = Object.fromEntries(swappedEntries);

console.log(result);
