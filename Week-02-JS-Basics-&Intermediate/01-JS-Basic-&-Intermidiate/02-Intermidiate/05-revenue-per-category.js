/*
  Question: Transform array of orders into revenue per category
  Input: [
    { id: 1, category: "electronics", price: 100 },
    { id: 2, category: "clothes", price: 50 },
    { id: 3, category: "electronics", price: 200 }
  ]
  Output: { electronics: 300, clothes: 50 }
*/

// solution
const orders = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 },
];

const revenuePerCategory = orders.reduce((acc, cur) => {
  const category = cur.category;

  const price = cur.price;

  if (acc[category]) {
    acc[category] += price;
  } else {
    acc[category] = price;
  }

  return acc;
}, {});

console.log(revenuePerCategory);
