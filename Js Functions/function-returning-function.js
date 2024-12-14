// Functions Returning Functions in JavaScript

/*
Definition:
A function can return another function in JavaScript. This enables the creation of higher-order functions and dynamic behavior.

Key Points:
1. Functions returning functions allow for closures and data encapsulation.
2. Common use cases include function factories, currying, and dynamic function generation.

Syntax:
function outerFunction() {
  return function innerFunction() {
    // Code
  };
}
*/

// Example 1: Basic Function Returning Another Function
function outer() {
    return function inner() {
      console.log("Inner function executed!");
    };
  }
  
  const func = outer();
  func(); // Output: Inner function executed!
  
  // Example 2: Function Factory
  function multiplier(factor) {
    return function (num) {
      return num * factor;
    };
  }
  
  const double = multiplier(2);
  const triple = multiplier(3);
  
  console.log(double(5)); // Output: 10
  console.log(triple(5)); // Output: 15
  
  // Example 3: Closures with Functions Returning Functions
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  
  const counter = createCounter();
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  console.log(counter()); // Output: 3
  
  /*
  Notes:
  - Functions returning functions often involve closures, where the inner function retains access to the variables of the outer function.
  - They enable flexible and reusable code patterns.
  - Frequently used in libraries and frameworks for creating dynamic behaviors.
  */
  