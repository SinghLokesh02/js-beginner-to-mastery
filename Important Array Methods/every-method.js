// Every Method

/*
Definition:
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

Syntax:
array.every(callback(element, index, array), thisArg)
- callback: Function to test each element.
  - element: The current element being processed.
  - index (optional): The index of the current element.
  - array (optional): The array every() was called upon.
- thisArg (optional): Value to use as 'this' when executing the callback.
*/

// Example 1: Check if All Numbers are Positive
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // Output: true

// Example 2: Check if All Elements are Even
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Output: false

// Example 3: Verify All Elements are Strings
const items = ['apple', 'banana', 'cherry'];
const allStrings = items.every(item => typeof item === 'string');
console.log(allStrings); // Output: true

/*
Important Points:
1. every() stops iterating as soon as a falsy test result is encountered.
2. Returns true for an empty array (vacuous truth).
3. Does not modify the original array.
4. Useful for validation and ensuring data consistency.
*/
