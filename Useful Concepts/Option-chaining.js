// Optional Chaining in JavaScript

/*
Definition:
Optional chaining (?.) is an operator that allows safe access to deeply nested object properties,
returning undefined instead of throwing an error if a property does not exist.

Key Points:
1. Works on objects, arrays, and function calls.
2. Prevents errors caused by trying to access properties of null or undefined.
3. Does not affect non-existent properties after ?. and returns undefined.
*/

// Example 1: Accessing Nested Object Properties
const user = {
    name: "Alice",
    address: {
      city: "Wonderland",
      postalCode: "12345",
    },
  };
  
  console.log(user.address?.city); // Output: Wonderland
  console.log(user.contact?.phone); // Output: undefined
  
  // Example 2: Optional Chaining with Arrays
  const users = [{ name: "John" }, null, { name: "Doe" }];
  console.log(users[1]?.name); // Output: undefined
  console.log(users[2]?.name); // Output: Doe
  
  // Example 3: Optional Chaining with Function Calls
  const obj = {
    greet: () => "Hello",
  };
  
  console.log(obj.greet?.()); // Output: Hello
  console.log(obj.farewell?.()); // Output: undefined
  
  /*
  Notes:
  - Optional chaining is particularly useful for APIs or dynamic data sources where properties may not always exist.
  - Avoid overusing optional chaining to prevent masking bugs or undefined values.
  */
  