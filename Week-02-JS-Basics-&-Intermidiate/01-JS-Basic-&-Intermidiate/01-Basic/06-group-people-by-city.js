/*
  Question: Group people by city
  Input: [
    { name: "A", city: "Delhi" },
    { name: "B", city: "Mumbai" },
    { name: "C", city: "Delhi" }
  ]
  Output: { Delhi: ["A", "C"], Mumbai: ["B"] }
*/

// solution
// const people = [
//   { name: "A", city: "Delhi" },
//   { name: "B", city: "Mumbai" },
//   { name: "C", city: "Delhi" },
// ];

// const result = {};

// for (const person of people) {
//   let city = person.city;
//   let name = person.name;

//   if (result[city] === undefined) {
//     result[city] = [];
//   }

//   result[city].push(name);
// }

// console.log(result);

// another way
const people = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" },
];

const result = people.reduce((acc, person) => {
  const city = person.city;
  const name = person.name;

  if (!acc[city]) {
    acc[city] = [];
  }

  acc[city].push(name);

  return acc;
}, {});

console.log(result);
