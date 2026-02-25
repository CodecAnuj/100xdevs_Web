/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/


// Better approach
// class Calculator {
//     constructor() {
//         this.result = 0;
//     }

//     add(n) {
//         this.result += n;
//     }

//     subtract(n) {
//         this.result -= n;
//     }

//     multiply(n) {
//         this.result *= n;
//     }

//     divide(n) {
//         if (n === 0) throw new Error("Division by zero");
//         this.result /= n;
//     }

//     clear() {
//         this.result = 0;
//     }

//     getResult() {
//         return this.result;
//     }

//     calculate(expr) {
//         // 1️⃣ validate characters (numbers, ops, dot, spaces)
//         if (!/^[0-9+\-*/().\s]+$/.test(expr)) {
//             throw new Error("Invalid characters in expression");
//         }

//         // 2️⃣ remove spaces only
//         const sanitized = expr.replace(/\s+/g, "");

//         // 3️⃣ evaluate safely
//         let value;
//         try {
//             value = Function(`"use strict";return (${sanitized})`)();
//         } catch {
//             throw new Error("Invalid mathematical expression");
//         }

//         // 4️⃣ math sanity check
//         if (!Number.isFinite(value)) {
//             throw new Error("Division by zero");
//         }

//         this.result = value;
//         return value;
//     }
// }

class Calculator {
    constructor() {
        this.result = 0;
    }
    add(value) {
        this.result = this.result + value;
    }
    subtract(value) {
        this.result = this.result - value;
    }
    multiply(value) {
        this.result = this.result * value;
    }
    divide(value) {
        if (value === 0) {
            throw new Error("Zero divide not allowed");
        }
        this.result = this.result / value;
    }
    clear() {
        this.result = 0;
    }
    getResult() {
        return this.result;
    }
    calculate(str) {
        if (/[^0-9+.\-*/()\s]/.test(str)) {
            throw new Error("Invalid characters");
        }
        let data = str.replace(/\s+/g, "");
        try {
            let value = Function(`"use strict"; return (${data})`)();

            if (!Number.isFinite(value)) {
                throw new Error("Division by zero");
            }

            this.result = value;
            return value;
        } catch (err) {
            throw new Error("Invalid expression or division by zero");
        }
    }
}


module.exports = Calculator;
