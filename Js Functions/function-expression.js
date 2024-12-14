// Function Expression

/*
Definition:
A function expression creates a function and assigns it to a variable. The function can be named or anonymous. Unlike function declarations, function expressions are not hoisted.

Syntax:
const variableName = function [functionName](parameters) {
  // Function body
};

Key Points:
1. Function expressions are not hoisted, so they must be defined before they are used.
2. Can be anonymous (no name) or named (useful for recursion or debugging).
3. Useful for creating functions as part of expressions (e.g., callbacks).
*/

// Example 1: Anonymous Function Expression
const greet = function () {
    console.log("Hello, World!");
  };
  greet(); // Output: Hello, World!
  
  // Example 2: Named Function Expression
  const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
  };
  console.log(factorial(5)); // Output: 120
  
  // Example 3: Function Expression as a Callback
  setTimeout(function () {
    console.log("Executed after 1 second");
  }, 1000);
  
  /*
  Notes:
  - Function expressions are especially useful in functional programming.
  - Named function expressions allow for self-referencing, enabling recursion.
  - Prefer `const` over `var` to avoid accidental reassignments.
  */