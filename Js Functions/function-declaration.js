// Function Declaration

/*
Definition:
A function declaration defines a named function with the function keyword. The function can be called anywhere in the scope after its declaration.

Syntax:
function functionName(parameters) {
  // Function body
}

Key Points:
1. Function declarations are hoisted, meaning they are available throughout their enclosing scope before they are defined.
2. A function name is mandatory in function declarations.
3. They are suitable for creating reusable blocks of code.
*/

// Example 1: Simple Function Declaration
function greet() {
    console.log("Hello, World!");
  }
  greet(); // Output: Hello, World!
  
  // Example 2: Function with Parameters
  function add(a, b) {
    return a + b;
  }
  console.log(add(5, 3)); // Output: 8
  
  // Example 3: Function with Default Parameters
  function multiply(a, b = 1) {
    return a * b;
  }
  console.log(multiply(5)); // Output: 5 (b defaults to 1)
  
  /*
  Notes:
  - Always use descriptive names for functions to improve code readability.
  - Functions can be nested within other functions for scoping purposes.
  - Avoid polluting the global scope by encapsulating functions within modules or closures when possible.
  */
  