/*
  Question: Count even and odd numbers in array
  Input: [1, 2, 3, 4, 5, 6]
  Output: { even: 3, odd: 3 }
*/

// solution
const arr = [1, 2, 3, 4, 5, 6];

const StartValue = { even: 0, odd: 0 };

const result = arr.reduce((acc, cur) => {
  if (cur % 2 == 0) {
    acc.even += 1;
  } else {
    acc.odd += 1;
  }

  return acc;
}, StartValue);

console.log(result);
