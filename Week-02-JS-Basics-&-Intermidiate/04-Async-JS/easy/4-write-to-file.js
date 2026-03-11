// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

// Start
console.log("Program started");

// Data to write
const content = "Hello from Node.js!\nThis file was written asynchronously.";

//Async write
fs.writeFile("a.txt", content, "utf-8", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully");
});

// Expensive synchronous task
console.log("Starting expensive operation...");

let count = 0;
for (let i = 0; i < 1e9; i++) {
  count += i;
}

console.log("Expensive operation finished");
console.log("Count:", count);

console.log("Program ended");
