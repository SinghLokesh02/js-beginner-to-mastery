// Parameter Destructuring in JavaScript

/*
Definition:
Parameter destructuring allows function arguments to be unpacked into variables directly from objects or arrays.

Key Points:
1. Makes code cleaner and more readable when working with objects or arrays.
2. Commonly used with objects to extract specific properties.
3. Supports default values for destructured parameters.

Syntax:
function functionName({ key1, key2, ... }) {
  // use key1, key2
}
*/

// Example 1: Destructuring Object Parameters
function displayUser({ name, age, city }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
  }
  
  const user = { name: "Alice", age: 25, city: "Wonderland" };
  displayUser(user); // Output: Name: Alice, Age: 25, City: Wonderland
  
  // Example 2: Destructuring with Default Values
  function greet({ name = "Guest", greeting = "Hello" }) {
    console.log(`${greeting}, ${name}!`);
  }
  
  greet({ name: "John" }); // Output: Hello, John!
  greet({}); // Output: Hello, Guest!
  
  // Example 3: Destructuring Array Parameters
  function sum([num1, num2]) {
    return num1 + num2;
  }
  
  console.log(sum([5, 10])); // Output: 15
  
  // Example 4: Nested Destructuring
  function displayFullUser({ name, address: { city, country } }) {
    console.log(`Name: ${name}, City: ${city}, Country: ${country}`);
  }
  
  const fullUser = {
    name: "Bob",
    address: { city: "Paris", country: "France" },
  };
  displayFullUser(fullUser); // Output: Name: Bob, City: Paris, Country: France
  
  /*
  Notes:
  - Destructuring simplifies handling of complex objects and arrays.
  - Always provide default values when destructuring to handle missing properties gracefully.
  */
  