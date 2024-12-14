// Iterables in JavaScript

/*
Definition:
An iterable is an object that can be iterated over, such as arrays, strings, maps, and sets.
They implement a method called [Symbol.iterator], which returns an iterator object for traversal.

Key Points:
1. Common iterables: Arrays, Strings, Maps, Sets.
2. Iteration is done using loops like for...of or manually with the iterator object.
*/

// Example 1: Iterating over an Array
const numbers = [10, 20, 30];
for (const num of numbers) {
  console.log(num); // Outputs: 10, 20, 30
}

// Example 2: Iterating over a String
const text = "Hello";
for (const char of text) {
  console.log(char); // Outputs: H, e, l, l, o
}

// Example 3: Using Symbol.iterator Manually
const iterableArray = [1, 2, 3];
const iterator = iterableArray[Symbol.iterator]();

console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }
console.log(iterator.next()); // Output: { value: 3, done: false }
console.log(iterator.next()); // Output: { value: undefined, done: true }

/*
Notes:
- Not all objects in JavaScript are iterable; only those implementing [Symbol.iterator] are.
- Useful for iterating through collections in a clean and readable way.
*/
