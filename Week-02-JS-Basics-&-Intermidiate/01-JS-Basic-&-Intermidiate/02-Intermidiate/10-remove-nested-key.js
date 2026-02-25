/*
  Question: Remove deeply nested key from object
  Input: { a: { b: { c: 1, d: 2 } } }, remove "c"
  Output: { a: { b: { d: 2 } } }
*/

// solution
const input = { a: { b: { c: 1, d: 2 } } };
const remove = "c";

function removeDeepKey(obj, targetKey) {
  for (const key in obj) {
    if (key === targetKey) {
      delete obj[key];
    } else if (typeof obj[key] === "object") {
      removeDeepKey(obj[key], targetKey);
    }
  }

  return obj;
}

const result = removeDeepKey(input, remove);

console.log(result);
