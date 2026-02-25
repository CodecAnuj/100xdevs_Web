/*
  Write a function `findDuplicates` which takes an array as input and returns an array containing all the duplicate elements.

  What are duplicates?
  - Elements that appear more than once in the array are considered duplicates.

  Example:
  - Input: [10, 20, 30, 10, 40]
  - Output: [10]

  - Input: [1, 2, 3, 4, 5]
  - Output: []

  - Input: []
  - Output: []

  Once you've implemented the logic, test your code by running
  - `npm run test-duplicates`
*/

function findDuplicates(arr) {
  // const counts = {};
  // for (let num of arr) {
  //   counts[num] = (counts[num] || 0) + 1;
  // }

  // const result = [];
  // for (const key in counts) {
  //   if (counts[key] > 1) {
  //     result.push(Number(key));
  //   }
  // }
  // return result

  // Better approach
  const seen = new Set();
  const duplicates = new Set();

  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  // Array.from() turns a Set {10} into an Array [10]
  return Array.from(duplicates)
}

console.log(findDuplicates([10, 20, 30, 10, 40]));

module.exports = findDuplicates;
