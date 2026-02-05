/*
  Question: Check if two objects are deeply equal
  Input: { a: { x: 1, y: 2 } }, { a: { x: 1, y: 2 } }
  Output: true
*/

// solution
const obj1 = { a: { x: 1, y: 2 } };
const obj2 = { a: { x: 1, y: 2 } };

function checkEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (let key of key1) {
    if (!key2.includes(key) || !checkEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

console.log(checkEqual(obj1, obj2));
