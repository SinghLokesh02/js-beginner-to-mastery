// Some Method

/*
Definition:
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

Syntax:
array.some(callback(element, index, array), thisArg)
- callback: Function to test each element.
  - element: The current element being processed.
  - index (optional): The index of the current element.
  - array (optional): The array some() was called upon.
- thisArg (optional): Value to use as 'this' when executing the callback.
*/

// Example 1: Check if Any Number is Greater Than 3
const numbers = [1, 2, 3, 4, 5];
const hasGreaterThanThree = numbers.some(num => num > 3);
console.log(hasGreaterThanThree); // Output: true

// Example 2: Check if Any Element is Negative
const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); // Output: false

// Example 3: Verify if Any Element is a Boolean
const mixedArray = [1, 'hello', true, null];
const containsBoolean = mixedArray.some(element => typeof element === 'boolean');
console.log(containsBoolean); // Output: true

/*
Important Points:
1. some() stops iterating as soon as a truthy test result is encountered.
2. Returns false for an empty array.
3. Does not modify the original array.
4. Useful for quick checks to verify if a condition is met by at least one element.
*/
