// Introduction to Callback Functions in JavaScript

/*
Definition:
A callback function is a function passed as an argument to another function.
It allows a function to execute code after a specific task has been completed.

Key Points:
1. Enables asynchronous programming by ensuring functions execute in the correct order.
2. Commonly used in event handling, API calls, and array methods like map, filter, and reduce.
3. Can be anonymous or named functions.

Syntax:
function mainFunction(callback) {
  // Perform some task
  callback();
}
*/

// Example 1: Basic Callback Function
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  function farewell() {
    console.log("Goodbye!");
  }
  
  greet("Alice", farewell);
  // Output:
  // Hello, Alice!
  // Goodbye!
  
  // Example 2: Callback with Anonymous Function
  function performOperation(a, b, callback) {
    const result = a + b;
    callback(result);
  }
  
  performOperation(5, 10, function (sum) {
    console.log(`The sum is: ${sum}`);
  });
  // Output: The sum is: 15
  
  // Example 3: Using Callbacks with Array Methods
  const numbers = [1, 2, 3, 4];
  numbers.forEach(function (num) {
    console.log(`Processing number: ${num}`);
  });
  // Output:
  // Processing number: 1
  // Processing number: 2
  // Processing number: 3
  // Processing number: 4
  
  /*
  Notes:
  - Callback functions are the foundation of asynchronous operations in JavaScript.
  - Helps in maintaining a sequence of tasks.
  - Often replaced by Promises or async/await in modern JavaScript for better readability.
  */
  