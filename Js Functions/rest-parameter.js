// Rest Parameters in JavaScript

/*
Definition:
Rest parameters allow functions to accept an indefinite number of arguments as an array.

Key Points:
1. Syntax: Represented by three dots `...` before the parameter name.
2. Used to handle functions with variable numbers of arguments.
3. Rest parameters must be the last parameter in the function.

Syntax:
function functionName(param1, param2, ...rest) {
  // function body
}
*/

// Example 1: Basic Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); // Output: 10
  console.log(sum(10, 20)); // Output: 30
  
  // Example 2: Mixing Regular and Rest Parameters
  function greet(greeting, ...names) {
    return `${greeting}, ${names.join(" and ")}!`;
  }
  
  console.log(greet("Hello", "Alice", "Bob")); // Output: Hello, Alice and Bob!
  
  // Example 3: Using Rest Parameters in Array Destructuring
  function display(first, second, ...others) {
    console.log("First:", first);
    console.log("Second:", second);
    console.log("Others:", others);
  }
  
  display(1, 2, 3, 4, 5); // Outputs:
  // First: 1
  // Second: 2
  // Others: [3, 4, 5]
  
  /*
  Notes:
  - Rest parameters simplify handling multiple arguments.
  - Use when you need to work with dynamic or unknown numbers of inputs.
  */
  