// Filter Method

/*
Definition:
The filter() method creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.

Syntax:
array.filter(callback(element, index, array), thisArg)
- callback: Function to test each element.
  - element: The current element being processed.
  - index (optional): The index of the current element.
  - array (optional): The array filter() was called upon.
- thisArg (optional): Value to use as 'this' when executing the callback.
*/

// Example 1: Filter Even Numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4, 6]

// Example 2: Filter Words Longer Than 3 Characters
const words = ['cat', 'elephant', 'dog', 'bat'];
const longWords = words.filter(word => word.length > 3);
console.log(longWords); // Output: ['elephant']

// Example 3: Filter Objects by Property
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 }
];
const adults = people.filter(person => person.age >= 18);
console.log(adults); // Output: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]

/*
Important Points:
1. filter() does not change the original array; it creates a new one.
2. If no elements pass the test, it returns an empty array.
3. Suitable for creating subsets of data.
4. Useful for data processing and extracting specific items.
*/