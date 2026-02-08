/*
  Write a function `compressWords` which takes an array of strings as input and returns a new array with consecutive duplicate elements compressed. If an element appears consecutively, it is replaced by the element followed by the count of its occurrences.

  Example:
  - Input: ["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"]
  - Output: ["apple2", "banana3", "cherry", "apple2"]

  - Input: ["cat", "dog", "dog", "dog", "cat"]
  - Output: ["cat", "dog3", "cat"]

  - Input: ["one", "two", "three"]
  - Output: ["one", "two", "three"]

  - Input: []
  - Output: []

  Note:
  - The function should handle empty arrays and arrays with no consecutive duplicates.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressWord`
*/

function compressWords(arr) {
  if (arr.length == 0) return [];

  const result = [];
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      if (count > 1) {
        result.push(arr[i - 1] + count);
      } else {
        result.push(arr[i - 1]);
      }
      count = 1;
    }
  }

  if (count > 1) {
    result.push(arr[arr.length - 1] + count);
  } else {
    result.push(arr[arr.length - 1]);
  }

  return result;
}

const input = [
  "apple",
  "apple",
  "banana",
  "banana",
  "banana",
  "cherry",
  "apple",
  "apple",
];
console.log(compressWords(input));

module.exports = compressWords;
