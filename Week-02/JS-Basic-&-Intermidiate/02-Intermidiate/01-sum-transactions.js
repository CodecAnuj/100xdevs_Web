/*
  Question: Sum all transactions per user
  Input: [
    { user: "A", amount: 100 },
    { user: "B", amount: 200 },
    { user: "A", amount: 50 }
  ]
  Output: { A: 150, B: 200 }
*/

// solution
const transactions = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 },
];

const sumOfTransactions = transactions.reduce((acc, cur) => {
  const user = cur.user;
  console.log(user);
  const amount = cur.amount;
  console.log(amount);

  console.log(acc);

  if (acc[user]) {
    acc[user] += amount;
  } else {
    acc[user] = amount;
  }

  return acc;
}, {});

console.log(sumOfTransactions);
