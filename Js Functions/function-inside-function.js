// Function Inside Function

/*
Definition:
In JavaScript, functions can be nested inside other functions. The inner function can access the variables and parameters of the outer function due to closures.

Key Points:
1. Inner functions are only accessible within the outer function.
2. They create closures, allowing access to the outer function's scope.
3. Inner functions can return values or be used to encapsulate logic.

Syntax:
function outerFunction(parameters) {
  // Outer function body
  function innerFunction(parameters) {
    // Inner function body
  }
  innerFunction(); // Call inner function
}
*/

// Example 1: Simple Function Nesting
function outer() {
    const message = "Outer Function";
  
    function inner() {
      console.log("Inner Function says:", message);
    }
  
    inner();
  }
  outer();
  // Output:
  // Inner Function says: Outer Function
  
  // Example 2: Returning a Function from Another Function
  function createMultiplier(multiplier) {
    return function (number) {
      return number * multiplier;
    };
  }
  
  const double = createMultiplier(2);
  console.log(double(5)); // Output: 10
  
  const triple = createMultiplier(3);
  console.log(triple(5)); // Output: 15
  
  // Example 3: Using Parameters from Outer Function
  function outerWithParam(name) {
    function greet() {
      console.log(`Hello, ${name}!`);
    }
    greet();
  }
  outerWithParam("Alice");
  // Output: Hello, Alice!
  
  /*
  Notes:
  - Inner functions are useful for encapsulating logic.
  - They can help avoid polluting the global namespace.
  - Closures ensure inner functions retain access to the outer function's scope.
  */
  