/*
  Question: Find the largest value key
  Input: { a: 10, b: 50, c: 20 }
  Output: "b"
*/

// solution
// const scores = { a: 10, b: 50, c: 20 };

// let maxKey = "";
// let maxValue = 0;

// for (const key in scores) {
//   let currentValue = scores[key];

//   if (currentValue > maxValue) {
//     maxValue = currentValue;
//     maxKey = key;
//   }
// }

// console.log(maxKey);

// another way
const scores = { a: 10, b: 50, c: 20 };

const entries = Object.entries(scores);

const winnerEntry = entries.reduce((champion, challenger) =>
  //   if (challenger[1] > champion[1]) {
  //     return challenger;
  //   } else {
  //     return champion
  //   }

  challenger[1] > champion[1] ? challenger : champion,
);

console.log(winnerEntry[0]);
