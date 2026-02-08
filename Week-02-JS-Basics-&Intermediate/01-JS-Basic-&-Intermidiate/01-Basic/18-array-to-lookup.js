/*
  Question: Convert array of objects to lookup by id
  Input: [{ id: 1, name: "A" }, { id: 2, name: "B" }]
  Output: { 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }
*/

// solution
const input = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

const lookup = input.reduce((acc, item) => {
  acc[item.id] = item;
  // console.log(acc);

  return acc;
}, {});

console.log(lookup);
