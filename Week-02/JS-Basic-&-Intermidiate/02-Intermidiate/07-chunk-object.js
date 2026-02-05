/*
  Question: Chunk object entries into groups of size
  Input: { a: 1, b: 2, c: 3, d: 4 }, size = 2
  Output: [ [["a",1],["b",2]], [["c",3],["d",4]] ]
*/

// solution
const input = { a: 1, b: 2, c: 3, d: 4 };
const size = 2;

const entries = Object.entries(input);

const chunkObject = entries.reduce((acc, cur) => {
  const lastBox = acc[acc.length - 1];

  if (!lastBox || lastBox.length === size) {
    acc.push([cur]);
  } else {
    lastBox.push(cur);
  }

  return acc;
}, []);

console.log(chunkObject);
