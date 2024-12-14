// Maps in JavaScript

/*
Definition:
A Map is a collection of key-value pairs where keys can be of any data type, making it more flexible than plain JavaScript objects.

Key Points:
1. Maintains insertion order of elements.
2. Common methods:
   - set(key, value): Adds or updates a key-value pair.
   - get(key): Retrieves the value associated with a key.
   - delete(key): Removes a key-value pair.
   - has(key): Checks if a key exists in the map.
   - clear(): Removes all key-value pairs.
   - size: Returns the number of elements in the map.
*/

// Example 1: Creating and Using a Map
const map = new Map();
map.set("name", "Alice");
map.set("age", 25);
map.set("isStudent", true);

console.log(map); // Output: Map { 'name' => 'Alice', 'age' => 25, 'isStudent' => true }
console.log(map.get("name")); // Output: Alice
console.log(map.has("age")); // Output: true

map.delete("isStudent");
console.log(map); // Output: Map { 'name' => 'Alice', 'age' => 25 }

// Example 2: Iterating Over a Map
map.set("country", "Wonderland");

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
  // Output:
  // name: Alice
  // age: 25
  // country: Wonderland
}

// Example 3: Converting a Map to an Array
const mapArray = Array.from(map);
console.log(mapArray); // Output: [['name', 'Alice'], ['age', 25], ['country', 'Wonderland']]

/*
Notes:
- Maps are useful when keys are not just strings or need guaranteed insertion order.
- Use Object.entries() for plain objects if you need similar key-value iteration.
- Use cases include storing metadata, configuration options, or any data where keys are dynamic.
*/
