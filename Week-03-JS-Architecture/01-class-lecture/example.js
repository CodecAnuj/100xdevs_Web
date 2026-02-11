/* ---------------------------- Synchronous code ---------------------------- */
// function sum(n) {
//     let ans = 0;
//     for (let i = 1; i <= n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }

// const ans1 = sum(100);
// console.log(ans1);
// const ans2 = sum(1000);
// console.log(ans2);
// const ans3 = sum(10000);
// console.log(ans3);

/* ----------------------------- Async File Read ---------------------------- */

// const fs = require("fs");// ? The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.

// function naamprint(err, contents) {
//     console.log(contents);
// }

// fs.readFile("./a.txt", "utf-8", naamprint);

// let ans = 0;
// for (let i = 1; i <= 1000000; i++) {
//     ans = ans + i;
// }
// console.log(ans);

/* ------------------------------- setTimeout ------------------------------- */
// * setTimeout: “Run this after at least X ms”
// function run() {
// 	console.log("I will run after 1s");
// }

// setTimeout(run, 1000);
// console.log("I will run immedietely");

/* ------------------------------- setInterval ------------------------------ */
//* setInterval: “Run this every X ms (ish)”
// let c = 0;
// setInterval(() => {
//     console.log("Time",c);
//     c++;
// }, 1000);
//! “It tries to schedule every 1 second.”

function run() {
    setTimeout(() => {
        console.log("Tick");
        run();
    }, 1000);
}

run();
console.log("Heyyyyyyyyyyyyyyy");
