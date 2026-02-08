/*
  Write a function `countVowels` which takes a string as input and returns the count of vowels (both uppercase and lowercase) in the string.

  What are vowels?
  - Vowels are the characters: a, e, i, o, u (case-insensitive).

  Example:
  - Input: "hello world"
  - Output: 3

  - Input: "AEIOUaeiou"
  - Output: 10

  - Input: "xyz"
  - Output: 0

  - Input: ""
  - Output: 0

  Note:
  - The function should count vowels in any alphanumeric string.
  - It should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countVowels`
*/

function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }

  return count;
}

const input = "hello world";

// Better Approach using (regex)
// function countVowels(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }

// console.log(countVowels(input));

module.exports = { countVowels };
