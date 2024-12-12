// forEach Method

/*
Definition:
The forEach() method executes a provided function once for each array element. It is often used to iterate over an array and perform operations.

Syntax:
array.forEach(callback(element, index, array), thisArg)
- callback: Function to execute on each element.
  - element: The current element being processed.
  - index (optional): The index of the current element.
  - array (optional): The array forEach() was called upon.
- thisArg (optional): Value to use as 'this' when executing the callback.
*/

// Example 1: Iterating Over an Array
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));
// Output:
// 1
// 2
// 3
// 4

// Example 2: Using Index
numbers.forEach((num, index) => console.log(`Index ${index}: ${num}`));
// Output:
// Index 0: 1
// Index 1: 2
// Index 2: 3
// Index 3: 4

// Example 3: Modifying Elements (Note: Original Array Remains Unchanged)
numbers.forEach((num, index, arr) => arr[index] = num * 2);
console.log(numbers); // Output: [2, 4, 6, 8]

/*
Important Points:
1. forEach() does not return a new array; it returns undefined.
2. It cannot be stopped or interrupted (unlike a for loop).
3. It modifies the array if changes are made to the elements within the callback.
4. Suitable for side effects like logging or updating external variables.
*/
