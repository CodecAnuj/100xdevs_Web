/*
  Question: Build index of ids grouped by category
  Input: [
    { id: 1, category: "fruit" },
    { id: 2, category: "veggie" },
    { id: 3, category: "fruit" }
  ]
  Output: { fruit: [1,3], veggie: [2] }
*/

// solution
const input = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" },
];

const result = input.reduce((acc, cur) => {
  // console.log(cur)
  // console.log(cur.category)

  const { id, category } = cur;

  acc[category] = acc[category] || [];

  acc[category].push(id);

  return acc;
}, {});

console.log(result);
