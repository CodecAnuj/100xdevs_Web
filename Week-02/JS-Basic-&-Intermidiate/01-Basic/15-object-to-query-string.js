/*
  Question: Convert object to query string
  Input: { name: "Alice", age: 25 }
  Output: "name=Alice&age=25"
*/

// solution
const params = { name: "Alice", age: 25 };

const entries = Object.entries(params);

const stringArray = entries.map((entry) => {
  const key = entry[0];
  const value = entry[1];

  return `${key}=${value}`;
});

const queryString = stringArray.join("&");

console.log(queryString);
