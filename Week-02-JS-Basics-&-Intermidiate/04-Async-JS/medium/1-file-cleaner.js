// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require("fs");

// Step 1: Read the file asynchronously
fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log("Original Content:");
  console.log(data);

  // Step 2: Remove extra spaces
  // \s+  -> matches one or more whitespace characters
  const cleanedData = data.replace(/\s+/g, " ").trim();

  // Step 3: Write cleaned content back to the same file
  fs.writeFile("data.txt", cleanedData, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }

    console.log("\nFile cleaned successfully!");
    console.log("Updated Content:");
    console.log(cleanedData);
  });
});

// Step 4: Expensive operation to show async behavior
let sum = 0;
for (let i = 0; i < 1e9; i++) {
  sum += i;
}
console.log("\nExpensive operation completed:", sum);