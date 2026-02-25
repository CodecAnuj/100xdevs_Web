/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
   Once you've implemented the logic, test your code by running
  - "npm run test-largest-element"
*/

function findLargestElement(numbers) {
  if (numbers.length === 0) return undefined;

  let max = -Infinity;

  numbers.forEach((ele) => {
    if (max < ele) {
      max = ele;
    }
  });
  return max;
}

// let arr = [3, 7, 2, 9, 1]
// let result = findLargestElement(arr);
// console.log(result);

module.exports = findLargestElement;
