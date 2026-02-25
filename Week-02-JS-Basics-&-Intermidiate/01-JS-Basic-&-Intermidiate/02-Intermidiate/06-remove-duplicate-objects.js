/*
  Question: Remove duplicate objects by id
  Input: [{ id: 1, name: "A" }, { id: 2, name: "B" }, { id: 1, name: "A" }]
  Output: [{ id: 1, name: "A" }, { id: 2, name: "B" }]
*/

// solution

const input = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
];

const uniqueList = input.reduce((acc, cur) => {
  const exists = acc.find((item) => item.id === cur.id);

  if (!exists) {
    acc.push(cur);
  }

  return acc;
}, []);

console.log(uniqueList);
