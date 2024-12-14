// Function Declarations are Hoisted

/*
Definition:
In JavaScript, function declarations are hoisted to the top of their scope. This means they can be invoked before they are defined in the code.

Key Points:
1. Function declarations are hoisted with their entire definition.
2. Only function declarations are hoisted; function expressions and arrow functions are not.
3. Hoisting applies only within the scope where the function is declared.

Syntax:
function functionName(parameters) {
  // Function body
}
*/

// Example 1: Hoisting a Function Declaration
console.log(sayHello()); // Output: Hello, World!

function sayHello() {
  return "Hello, World!";
}

// Example 2: Function Expression is NOT Hoisted
try {
  console.log(add(2, 3)); // Throws TypeError: add is not a function
} catch (e) {
  console.error(e);
}

const add = function (a, b) {
  return a + b;
};

// Example 3: Block Scope Hoisting
{
  try {
    greet(); // ReferenceError: greet is not defined
  } catch (e) {
    console.error(e);
  }

  function greet() {
    console.log("Hi there!");
  }

  greet(); // Output: Hi there!
}

/*
Notes:
- Hoisting allows calling functions before their declaration, aiding flexibility.
- For better readability, define functions before usage.
- Understand the difference between declarations and expressions to avoid runtime errors.
*/
