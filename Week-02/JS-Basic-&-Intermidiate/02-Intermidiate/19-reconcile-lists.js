/*
  Question: Reconcile two lists (missing + extra items)
  Input: expected: ["a","b","c"], actual: ["b","c","d"]
  Output: { missing: ["a"], extra: ["d"] }
*/

const expected = ["a", "b", "c"];
const actual = ["b", "c", "d"];

const missing = expected.filter((item) => !actual.includes(item));

const extra = actual.filter((item) => !expected.includes(item));

const result = { missing, extra };

console.log(result);

// Advanced Version:
const actualSet = new Set(actual);
const missing = expected.filter(item => !actualSet.has(item));