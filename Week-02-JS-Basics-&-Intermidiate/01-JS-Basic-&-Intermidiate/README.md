# 🚀 JavaScript Logic Building Assignments

Total Questions: **40**
Focus: **Arrays & Objects Manipulation**

---

## 🔹 Part 1: Basic (20 Questions)

**1. Sum values in object arrays**

- Input:
  ```javascript
  { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
  ```
- Output:
  ```javascript
  { food: 60, travel: 20, bills: 100 }
  ```

**2. Count word occurrences in array**

- Input:
  ```javascript
  ["apple", "banana", "apple", "orange", "banana", "apple"];
  ```
- Output:
  ```javascript
  { apple: 3, banana: 2, orange: 1 }
  ```

**3. Swap keys and values of object**

- Input:
  ```javascript
  { a: "x", b: "y", c: "z" }
  ```
- Output:
  ```javascript
  { x: "a", y: "b", z: "c" }
  ```

**4. Find the largest value key**

- Input:
  ```javascript
  { a: 10, b: 50, c: 20 }
  ```
- Output:
  ```javascript
  "b";
  ```

**5. Flatten object of arrays into one array**

- Input:
  ```javascript
  { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
  ```
- Output:
  ```javascript
  ["apple", "banana", "carrot", "pea"];
  ```

**6. Group people by city**

- Input:
  ```javascript
  [
    { name: "A", city: "Delhi" },
    { name: "B", city: "Mumbai" },
    { name: "C", city: "Delhi" },
  ];
  ```
- Output:
  ```javascript
  { Delhi: ["A", "C"], Mumbai: ["B"] }
  ```

**7. Filter object by values > 50**

- Input:
  ```javascript
  { a: 20, b: 60, c: 40, d: 90 }
  ```
- Output:
  ```javascript
  { b: 60, d: 90 }
  ```

**8. Find student with highest average mark**

- Input:
  ```javascript
  { A: [80, 90], B: [70, 75, 85] }
  ```
- Output:
  ```javascript
  "A";
  ```

**9. Unique values across all object arrays**

- Input:
  ```javascript
  { x: [1,2,3], y: [2,3,4], z: [4,5] }
  ```
- Output:
  ```javascript
  [1, 2, 3, 4, 5];
  ```

**10. Pick only given keys from object**

- Input:
  ```javascript
  { name: "Rahul", age: 23, city: "Noida" }, ["name","city"]
  ```
- Output:
  ```javascript
  { name: "Rahul", city: "Noida" }
  ```

**11. Find student with highest average mark**

- Input:
  ```javascript
  { A: [80, 90], B: [70, 75, 85] }
  ```
- Output:
  ```javascript
  "A";
  ```

**12. Sort object entries by values (ascending)**

- Input:
  ```javascript
  { a: 3, b: 1, c: 2 }
  ```
- Output:
  ```javascript
  [
    ["b", 1],
    ["c", 2],
    ["a", 3],
  ];
  ```

**13. Count number of keys in object**

- Input:
  ```javascript
  { a: 1, b: 2, c: 3 }
  ```
- Output:
  ```javascript
  3;
  ```

**14. Capitalize string values inside object**

- Input:
  ```javascript
  { name: "alice", city: "delhi" }
  ```
- Output:
  ```javascript
  { name: "Alice", city: "Delhi" }
  ```

**15. Convert object to query string**

- Input:
  ```javascript
  { name: "Alice", age: 25 }
  ```
- Output:
  ```javascript
  "name=Alice&age=25";
  ```

**16. Count even and odd numbers in array**

- Input:
  ```javascript
  [1, 2, 3, 4, 5, 6];
  ```
- Output:
  ```javascript
  { even: 3, odd: 3 }
  ```

**17. Find common keys between two objects**

- Input:
  ```javascript
  { a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }
  ```
- Output:
  ```javascript
  ["b", "c"];
  ```

**18. Convert array of objects to lookup by id**

- Input:
  ```javascript
  [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ];
  ```
- Output:
  ```javascript
  { 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }
  ```

**19. Check if all values in object are numbers**

- Input:
  ```javascript
  { a: 1, b: "hello", c: 3 }
  ```
- Output:
  ```javascript
  false;
  ```

**20. Find longest string among object values**

- Input:
  ```javascript
  { a: "apple", b: "banana", c: "kiwi" }
  ```
- Output:
  ```javascript
  "banana";
  ```

---

## 🔸 Part 2: Intermediate (20 Questions)

**1. Sum all transactions per user**

- Input:
  ```javascript
  [
    { user: "A", amount: 100 },
    { user: "B", amount: 200 },
    { user: "A", amount: 50 },
  ];
  ```
- Output:
  ```javascript
  { A: 150, B: 200 }
  ```

**2. Transform API response to object (id → name)**

- Input:
  ```javascript
  [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  ```
- Output:
  ```javascript
  { 1: "Alice", 2: "Bob" }
  ```

**3. Remove falsy values from object**

- Input:
  ```javascript
  { a: 0, b: null, c: "hello", d: undefined, e: 5 }
  ```
- Output:
  ```javascript
  { c: "hello", e: 5 }
  ```

**4. Check for permissions from roles**

- Input:
  ```javascript
  roles = { admin: ["read", "write"], user: ["read"], staff: ["write"] };
  ((checkRole = "user"), (action = "write"));
  ```
- Output:
  ```javascript
  false;
  ```

**5. Transform array of orders into revenue per category**

- Input:
  ```javascript
  [
    { id: 1, category: "electronics", price: 100 },
    { id: 2, category: "clothes", price: 50 },
    { id: 3, category: "electronics", price: 200 },
  ];
  ```
- Output:
  ```javascript
  { electronics: 300, clothes: 50 }
  ```

**6. Remove duplicate objects by id**

- Input:
  ```javascript
  [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" },
  ];
  ```
- Output:
  ```javascript
  [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ];
  ```

**7. Chunk object entries into groups of size**

- Input:
  ```javascript
  { a: 1, b: 2, c: 3, d: 4 }, size = 2
  ```
- Output:
  ```javascript
  [
    [
      ["a", 1],
      ["b", 2],
    ],
    [
      ["c", 3],
      ["d", 4],
    ],
  ];
  ```

**8. Group translation strings by key (Invert Structure) [HARD]**

- Input:
  ```javascript
  {
    en: { hello: "Hello", bye: "Goodbye" },
    fr: { hello: "Bonjour", bye: "Au revoir" },
    es: { hello: "Hola" }
  }
  ```
- Output:
  ```javascript
  {
    hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
    bye: { en: "Goodbye", fr: "Au revoir" }
  }
  ```

**9. Build index of ids grouped by category**

- Input:
  ```javascript
  [
    { id: 1, category: "fruit" },
    { id: 2, category: "veggie" },
    { id: 3, category: "fruit" },
  ];
  ```
- Output:
  ```javascript
  { fruit: [1,3], veggie: [2] }
  ```

**10. Remove deeply nested key from object**

- Input:
  ```javascript
  { a: { b: { c: 1, d: 2 } } }, remove "c"
  ```
- Output:
  ```javascript
  {
    a: {
      b: {
        d: 2;
      }
    }
  }
  ```

**11. Check if two objects are deeply equal**

- Input:
  ```javascript
  { a: { x: 1, y: 2 } }, { a: { x: 1, y: 2 } }
  ```
- Output:
  ```javascript
  true;
  ```

**12. Deep flatten nested arrays inside object**

- Input:
  ```javascript
  { a: [1, [2, [3]]], b: [4, [5]] }
  ```
- Output:
  ```javascript
  { a: [1,2,3], b: [4,5] }
  ```

**13. Find most repeated word across categories**

- Input:
  ```javascript
  { fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }
  ```
- Output:
  ```javascript
  "apple";
  ```

**14. Find intersection of all arrays in object**

- Input:
  ```javascript
  { a: [1,2,3], b: [2,3,4], c: [3,4,5] }
  ```
- Output:
  ```javascript
  [3];
  ```

**15. Deep merge two nested objects**

- Input:
  ```javascript
  { a: { x: 1, y: 2 } }, { a: { y: 3, z: 4 } }
  ```
- Output:
  ```javascript
  { a: { x: 1, y: 3, z: 4 } }
  ```

**16. Nested object destructuring**

- Input:
  ```javascript
  { user: { profile: { name: "Alice", age: 25 } } }
  ```
- Output:
  ```javascript
  ("Alice", 25);
  ```

**17. Find top N keys by value**

- Input:
  ```javascript
  { a: 10, b: 50, c: 30, d: 40 }, N = 2
  ```
- Output:
  ```javascript
  ["b", "d"];
  ```

**18. Sort array of objects by name then age**

- Input:
  ```javascript
  [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Alice", age: 22 },
  ];
  ```
- Output:
  ```javascript
  [
    { name: "Alice", age: 22 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ];
  ```

**19. Reconcile two lists (missing + extra items)**

- Input:
  ```javascript
  expected: ["a","b","c"], actual: ["b","c","d"]
  ```
- Output:
  ```javascript
  { missing: ["a"], extra: ["d"] }
  ```

**20. Merge two objects (no sum, override second)**

- Input:
  ```javascript
  { a: 10, b: 20 }, { a: 5, c: 15 }
  ```
- Output:
  ```javascript
  { a: 5, b: 20, c: 15 }
  ```
