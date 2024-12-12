// Fill Method

/*
Definition:
The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It modifies the original array.

Syntax:
array.fill(value, start, end)
- value: The value to fill the array with.
- start (optional): The start index (default is 0).
- end (optional): The end index (default is array.length).
*/

// Example 1: Fill Entire Array
const numbers = [1, 2, 3, 4];
numbers.fill(0);
console.log(numbers); // Output: [0, 0, 0, 0]

// Example 2: Fill from a Specific Index
const partialFill = [1, 2, 3, 4];
partialFill.fill(5, 1);
console.log(partialFill); // Output: [1, 5, 5, 5]

// Example 3: Fill a Range of Indices
const rangeFill = [1, 2, 3, 4];
rangeFill.fill(9, 1, 3);
console.log(rangeFill); // Output: [1, 9, 9, 4]

// Example 4: Using fill() on an Empty Array
const emptyArray = new Array(5).fill('x');
console.log(emptyArray); // Output: ['x', 'x', 'x', 'x', 'x']

/*
Important Points:
1. fill() modifies the original array.
2. If start >= array.length, no changes are made.
3. If start < 0 or end < 0, it is treated as array.length + start/end.
4. Useful for initializing arrays or replacing elements within a range.
*/
