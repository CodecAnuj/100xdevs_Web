/*
  Question: Count word occurrences in array
  Input: ["apple", "banana", "apple", "orange", "banana", "apple"]
  Output: { apple: 3, banana: 2, orange: 1 }
*/

// solution
// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// let count = {};

// for (let fruit of fruits) {
//   if (count[fruit] === undefined) {
//     count[fruit] = 1;
//   } else {
//     count[fruit] = count[fruit] + 1;
//   }
// }

// console.log(count);


//another way
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;

  return acc;
}, {});

console.log(count);

// practice
// const orders = [
//   { id: 1, status: "pending", amount: 500 },
//   { id: 2, status: "delivered", amount: 200 },
//   { id: 3, status: "cancelled", amount: 100 },
//   { id: 4, status: "delivered", amount: 300 },
// ];

// const totalRevenue = orders
//   .filter((order) => {
//     if (order.status === "delivered") {
//       return true;
//     }
//   })
//   .reduce((acc, order) => {

//     return acc + order.amount;
//   }, 0);

// const totalRevenue = orders
//   .filter((order) => order.status === "delivered")
//   .reduce((acc, order) => acc + order.amount, 0);

// console.log(totalRevenue);
