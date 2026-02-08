/*
  Question: Find student with highest average mark
  Input: { A: [80, 90], B: [70, 75, 85] }
  Output: "A"
*/

// solution
const student = { A: [80, 90], B: [70, 75, 85] };

const entries = Object.entries(student);
// console.log(entries);

const studentAverage = entries.map((entry) => {
  const name = entry[0];
  const marks = entry[1];

  const sum = marks.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  const avg = sum / marks.length;

  return [name, avg];
});

// console.log(studentAverage);

const winner = studentAverage.reduce((champion, challenger) =>
  challenger[1] > champion[1] ? challenger : champion,
);

console.log(winner[0]);
