/*
  Write a function `countOccurrences` which takes an array as input and returns an object representing the frequency of each element in the array.

  What is frequency?
  - The frequency of an element is the number of times it appears in the array.

  Example:
  - Input: [10, 20, 10, 30, 20, 20]
  - Output: { 10: 2, 20: 3, 30: 1 }

  - Input: [1, 2, 3, 1, 2, 1]
  - Output: { 1: 3, 2: 2, 3: 1 }

  - Input: []
  - Output: {}

  Once you've implemented the logic, test your code by running
  - `npm run test-occurrences`
*/

// function countOccurrences(arr) {
//   const counts = {};
//   for (let num of arr) {
//     counts[num] = (counts[num] || 0) + 1;
//   }

//   return counts;
// }


// Advanced using reduce
function countOccurrences(arr) {
  return arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;

    return acc;
  }, {});
}

const input = [10, 20, 10, 30, 20, 20];

console.log(countOccurrences(input));

module.exports = countOccurrences;
