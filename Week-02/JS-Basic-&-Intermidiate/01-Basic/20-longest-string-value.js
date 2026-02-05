/*
  Question: Find longest string among object values
  Input: { a: "apple", b: "banana", c: "kiwi" }
  Output: "banana"
*/

// solution

const input = { a: "apple", b: "banana", c: "kiwi" };

const words = Object.values(input);

const longestWord = words.reduce((champion, challenger) =>
  challenger.length > champion.length ? challenger : champion,
);

console.log(longestWord);
