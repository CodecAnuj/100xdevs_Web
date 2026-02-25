/*
  Question: Flatten object of arrays into one array
  Input: { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
  Output: ["apple", "banana", "carrot", "pea"]
*/

// solution
// const data = {
//   fruits: ["apple", "banana"],
//   veggies: ["carrot", "pea"],
// };

// const result = [];

// for (let key in data) {
//   const smallArray = data[key];

//   for (let item of smallArray) {
//     result.push(item);
//   }
// }

// console.log(result);

//another way
const data = {
  fruits: ["apple", "banana"],
  veggies: ["carrot", "pea"],
};

const arrays = Object.values(data);

const flatArray = arrays.flat();

console.log(flatArray);
