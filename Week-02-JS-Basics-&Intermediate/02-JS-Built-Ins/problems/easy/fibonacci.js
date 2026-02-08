/*
  Write two functions to generate the Fibonacci sequence:

  1. `fibonacci` (Iterative Version):
     - Takes an integer `n` as input and returns an array containing the first `n` numbers in the Fibonacci sequence.
     - The Fibonacci sequence is calculated iteratively.
  
  2. `fibonacciRecursive` (Recursive Version):
     - Takes an integer `n` as input and returns the `n`-th number in the Fibonacci sequence using recursion.
  
  What is the Fibonacci sequence?
  - The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers.

  Example:
  - Input: 10
  - Output (Iterative): [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  - Output (Recursive): 34
  
  - Input: 5
  - Output (Iterative): [0, 1, 1, 2, 3]
  - Output (Recursive): 3

  - Input: 1
  - Output (Iterative): [0]
  - Output (Recursive): 0
  
  - Input: 0
  - Output (Iterative): []
  - Output (Recursive): 0

  Note:
  - The iterative function should return the first `n` numbers of the sequence.
  - The recursive function should return the `n`-th Fibonacci number (0-based index).

  Once you've implemented the logic, test your code by running
  - `npm run test-fibonacci`
*/

// Iterative Fibonacci function
function fibonacci(n) {
  if (n === 0) return [];
  if (n === 1) return [0];

  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    const newNumber = arr[i - 1] + arr[i - 2];
    arr.push(newNumber);
  }

  return arr;
}

console.log(fibonacci(1));

// Recursive Fibonacci function
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(1));

module.exports = { fibonacci, fibonacciRecursive };
