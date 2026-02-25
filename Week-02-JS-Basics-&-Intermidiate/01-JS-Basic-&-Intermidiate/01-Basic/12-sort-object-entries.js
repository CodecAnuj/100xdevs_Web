/*
  Question: Sort object entries by values (ascending)
  Input: { a: 3, b: 1, c: 2 }
  Output: [["b",1], ["c",2], ["a",3]]
*/

// solution
const input = { a: 3, b: 1, c: 2 };

const entries = Object.entries(input);
// console.log(entries);

const sortedEntries = entries.sort((entryA, entryB) => {
  const valA = entryA[1];
  //   console.log(valA);

  const valB = entryB[1];
  //   console.log(valB);

  return valA - valB;
});

console.log(sortedEntries);
