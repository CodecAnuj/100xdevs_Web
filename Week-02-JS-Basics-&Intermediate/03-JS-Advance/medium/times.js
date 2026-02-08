/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let sum = 1;
    let i = 0;
    while (n >= i) {
        sum += i;
        i++;
    }
    return sum;
}

// let start = new Date();
// let ans = calculateTime(1000000000);
// let end = new Date();
// console.log((end - start) / 1000);

let start = performance.now()
let ans = calculateTime(1000000000);
let end = performance.now()
console.log((end - start) / 1000);

console.log(ans);