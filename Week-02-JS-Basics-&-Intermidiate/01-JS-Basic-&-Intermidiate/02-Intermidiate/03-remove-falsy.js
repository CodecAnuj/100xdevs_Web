/*
  Question: Remove falsy values from object
  Input: { a: 0, b: null, c: "hello", d: undefined, e: 5 }
  Output: { c: "hello", e: 5 }
*/

// solution
const input = { a: 0, b: null, c: "hello", d: undefined, e: 5 };

const entries = Object.entries(input);

const removeFalsy = entries.filter((entry) => {
  const value = entry[1];
  //   console.log(value);

  if (value) {
    return value;
  }
});

const result = Object.fromEntries(removeFalsy);

console.log(result);
