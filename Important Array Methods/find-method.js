// Find Method

/*
Definition:
The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

Syntax:
array.find(callback(element, index, array), thisArg)
- callback: Function to execute on each element.
  - element: The current element being processed.
  - index (optional): The index of the current element.
  - array (optional): The array find() was called upon.
- thisArg (optional): Value to use as 'this' when executing the callback.
*/

// Example 1: Find the First Even Number
const numbers = [1, 3, 7, 8, 10];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // Output: 8

// Example 2: Finding an Object in an Array
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
const user = users.find(user => user.id === 2);
console.log(user); // Output: { id: 2, name: 'Bob' }

// Example 3: Returning Undefined if No Match
const noMatch = numbers.find(num => num > 15);
console.log(noMatch); // Output: undefined

/*
Important Points:
1. find() returns the first matching element, not an array.
2. If no elements match the condition, it returns undefined.
3. Useful for retrieving a single element that meets a specific criterion.
4. It stops iterating through the array as soon as a match is found.
*/
