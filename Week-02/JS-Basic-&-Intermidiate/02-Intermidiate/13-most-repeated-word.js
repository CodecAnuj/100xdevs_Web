/*
  Question: Find most repeated word across categories
  Input: { fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }
  Output: "apple"
*/

// solution
const input = {
  fruits: ["apple", "apple", "banana"],
  drinks: ["apple", "tea"],
};

const allItems = Object.values(input).flat();
console.log(allItems);

const counts = allItems.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

const winner = Object.entries(counts).reduce((champion, challenger) => {
  const [champWord, champCount] = champion;
  const [challengerWord, challengerCount] = challenger;

  if (challengerCount > champCount) {
    return challenger;
  }

  return champion;
});

console.log(winner[0]);
