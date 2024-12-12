// Splice Method

/*
Definition:
The splice() method changes the contents of an array by removing, replacing, or adding elements. It modifies the original array.

Syntax:
array.splice(start, deleteCount, item1, item2, ...)
- start: The index at which to start changing the array.
- deleteCount (optional): The number of elements to remove. If 0, no elements are removed.
- item1, item2, ... (optional): The elements to add to the array, starting at the start index.
*/

// Example 1: Removing Elements
const numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2);
console.log(numbers); // Output: [1, 4, 5]

// Example 2: Adding Elements
const addItems = [1, 4, 5];
addItems.splice(1, 0, 2, 3);
console.log(addItems); // Output: [1, 2, 3, 4, 5]

// Example 3: Replacing Elements
const replaceItems = [1, 2, 3, 4, 5];
replaceItems.splice(2, 2, 8, 9);
console.log(replaceItems); // Output: [1, 2, 8, 9, 5]

// Example 4: Returning Removed Elements
const removedItems = replaceItems.splice(1, 2);
console.log(removedItems); // Output: [2, 8]
console.log(replaceItems); // Output: [1, 9, 5]

/*
Important Points:
1. splice() directly modifies the original array.
2. Returns an array of removed elements.
3. Useful for inserting, deleting, or replacing elements in an array.
4. Negative start values are treated as array.length + start.
*/
