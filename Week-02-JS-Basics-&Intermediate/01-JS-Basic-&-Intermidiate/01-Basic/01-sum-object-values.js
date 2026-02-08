/*
  Question: Sum values in object arrays
  Input: { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
  Output: { food: 60, travel: 20, bills: 100 }
*/

// solution
// const expenses = {
//   food: [10, 20, 30],
//   travel: [5, 15],
//   bills: [40, 60],
// };

// const finalResult = {};

// for (let category in expenses) {
//   let amounts = expenses[category];

//   let sum = 0;

//   for (let money of amounts) {
//     sum = sum + money;
//   }

//   finalResult[category] = sum;
// }

// console.log(finalResult);

// another way
const expenses = {
  food: [10, 20, 30],
  travel: [5, 15],
  bills: [40, 60],
};

const entries = Object.entries(expenses);

const newEntries = entries.map((entry) => {
  const key = entry[0];
  const values = entry[1];

  const total = values.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return [key, total];
});

const result = Object.fromEntries(newEntries);

console.log(result);
