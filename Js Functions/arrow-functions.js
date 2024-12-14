// Arrow Functions

/*
Definition:
Arrow functions provide a concise syntax for writing functions. They are always anonymous and do not have their own `this` context.

Syntax:
(parameters) => expression

Key Points:
1. Implicit return: When there is a single expression, the result is automatically returned.
2. Lexical `this`: Arrow functions inherit `this` from their enclosing scope.
3. Shorter and cleaner syntax compared to traditional functions.
4. Cannot be used as constructors (no `new` keyword).
*/

// Example 1: Simple Arrow Function
const greet = () => {
    console.log("Hello, World!");
  };
  greet(); // Output: Hello, World!
  
  // Example 2: Arrow Function with Parameters
  const add = (a, b) => a + b;
  console.log(add(5, 3)); // Output: 8
  
  // Example 3: Arrow Function with Single Parameter (Parentheses optional)
  const square = x => x * x;
  console.log(square(4)); // Output: 16
  
  // Example 4: Arrow Function Without Parameters
  const sayHi = () => "Hi there!";
  console.log(sayHi()); // Output: Hi there!
  
  // Example 5: Lexical `this`
  const obj = {
    name: "Alice",
    greet: function () {
      setTimeout(() => {
        console.log(`Hello, ${this.name}!`);
      }, 1000);
    },
  };
  obj.greet(); // Output: Hello, Alice!
  
  /*
  Notes:
  - Use arrow functions for callbacks and when `this` context inheritance is needed.
  - Avoid using arrow functions for methods in objects where a unique `this` is required.
  - Arrow functions are best suited for non-method functions.
  */
  