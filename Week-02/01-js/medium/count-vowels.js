/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
     Once you've implemented the logic, test your code by running
  - "npm run test-count-vowels"
*/

function countVowels(str) {
  let count = 0;
  for (const i of str.toLowerCase()) {
    if ("aeiou".includes(i)) {
      count++
    }
  }

  return count;
}

module.exports = countVowels;