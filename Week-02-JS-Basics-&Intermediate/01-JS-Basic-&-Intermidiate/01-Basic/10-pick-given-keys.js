/*
  Question: Pick only given keys from object
  Input: { name: "Rahul", age: 23, city: "Noida" }, keys: ["name", "city"]
  Output: { name: "Rahul", city: "Noida" }
*/

// solution
const inputObj = { name: "Rahul", age: 23, city: "Noida" };
const allowedKeys = ["name", "city"];
const entries = Object.entries(inputObj);

const filteredEntries = entries.filter((entry) => {
  const key = entry[0];

  return allowedKeys.includes(key);
});

const result = Object.fromEntries(filteredEntries);

console.log(result);
