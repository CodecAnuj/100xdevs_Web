/*
  Question: Deep merge two nested objects
  Input: { a: { x: 1, y: 2 } }, { a: { y: 3, z: 4 } }
  Output: { a: { x: 1, y: 3, z: 4 } }
*/

// solution
const obj1 = { a: { x: 1, y: 2 } };
const obj2 = { a: { y: 3, z: 4 } };

function deepMerge(target, source) {
  for (let key in source) {
    const val1 = target[key];
    const val2 = source[key];

    const areBothObjects =
      val1 && typeof val1 === "object" && val2 && typeof val2 === "object";

    if (areBothObjects) {
      // recursion
      deepMerge(val1, val2);
    } else {
      target[key] = val2;
    }
  }

  return target;
}

console.log(deepMerge(obj1, obj2));
