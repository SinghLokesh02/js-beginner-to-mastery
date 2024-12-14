// Lexical Scope in JavaScript

/*
Definition:
Lexical scope determines how variable names are resolved in nested functions. A function has access to variables defined in its own scope, as well as in its parent scopes.

Key Points:
1. Lexical scope is determined at compile time, not runtime.
2. Inner functions can access variables of outer functions, but not vice versa.
3. Closures retain the lexical scope of their parent functions even when invoked outside their parent scope.

Syntax:
function outer() {
  const outerVariable = "I am outer!";

  function inner() {
    console.log(outerVariable); // Accessible due to lexical scope
  }

  inner();
}
outer();
*/

// Example 1: Nested Functions Accessing Outer Variables
function outerFunction() {
    const outerVar = "Outer Scope";
  
    function innerFunction() {
      console.log(outerVar); // Output: Outer Scope
    }
  
    innerFunction();
  }
  outerFunction();
  
  // Example 2: Lexical Scope with Closures
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
  
  // Example 3: Variables are Not Accessible in Reverse
  function anotherOuter() {
    const outerVar = "Outer";
  
    function inner() {
      const innerVar = "Inner";
      console.log(outerVar); // Accessible
    }
  
    inner();
  
    try {
      console.log(innerVar); // ReferenceError: innerVar is not defined
    } catch (e) {
      console.error(e);
    }
  }
  anotherOuter();
  
  /*
  Notes:
  - Lexical scoping provides structure and prevents accidental access to variables.
  - It is a key concept for understanding closures and JavaScript's function behavior.
  */
  