// Default Parameters in JavaScript

/*
Definition:
Default parameters allow you to initialize function parameters with default values if no argument is passed or if the argument is `undefined`.

Key Points:
1. Default parameters enhance function flexibility and reduce the need for additional condition checks.
2. Defaults are only used when the argument is `undefined`.
3. Default parameters can be any valid JavaScript expression.

Syntax:
function functionName(param1 = defaultValue1, param2 = defaultValue2) {
  // function body
}
*/

// Example 1: Basic Default Parameters
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  
  greet("Alice"); // Output: Hello, Alice!
  greet(); // Output: Hello, Guest!
  
  // Example 2: Using Expressions as Default Values
  function calculateArea(length = 1, width = length * 2) {
    return length * width;
  }
  
  console.log(calculateArea(5, 10)); // Output: 50
  console.log(calculateArea(5)); // Output: 50 (width defaults to length * 2)
  console.log(calculateArea()); // Output: 2 (length defaults to 1, width defaults to 2)
  
  // Example 3: Undefined vs Null in Default Parameters
  function test(value = "Default Value") {
    console.log(value);
  }
  
  test(undefined); // Output: Default Value
  test(null); // Output: null (null is treated as a valid value)
  
  /*
  Notes:
  - Default parameters are evaluated at call time, meaning if a default is based on another parameter, the order of parameters matters.
  - Always consider performance when using complex expressions as default values.
  */
  
  // Example 4: Function with Multiple Default Parameters
  function createUser(username = "Anonymous", role = "User", active = true) {
    return {
      username,
      role,
      active,
    };
  }
  
  console.log(createUser()); // Output: { username: 'Anonymous', role: 'User', active: true }
  console.log(createUser("JohnDoe")); // Output: { username: 'JohnDoe', role: 'User', active: true }
  console.log(createUser("Admin", "Administrator", false)); // Output: { username: 'Admin', role: 'Administrator', active: false }
  
  /*
  Advantages:
  1. Reduces code for handling undefined parameters.
  2. Enhances code readability and maintainability.
  3. Prevents unexpected `undefined` values.
  */
  