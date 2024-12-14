// Sets in JavaScript

/*
Definition:
A Set is a collection of unique values. It does not allow duplicate elements.
Sets are particularly useful for ensuring data uniqueness or removing duplicates from arrays.

Key Points:
1. Sets are unordered collections.
2. Common methods:
   - add(value): Adds a value to the set.
   - delete(value): Removes a value from the set.
   - has(value): Checks if a value is present in the set.
   - clear(): Removes all elements from the set.
   - size: Returns the number of elements in the set.
*/

// Example 1: Creating and Using a Set
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate values are ignored.
set.add(3);

console.log(set); // Output: Set { 1, 2, 3 }
console.log(set.size); // Output: 3
console.log(set.has(2)); // Output: true

set.delete(2);
console.log(set); // Output: Set { 1, 3 }

// Example 2: Removing Duplicates from an Array
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueSet = new Set(array);
const uniqueArray = [...uniqueSet];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

/*
Notes:
- Sets maintain unique values but do not guarantee any specific order.
- Spread operator ([...set]) or Array.from(set) can convert a set back to an array.
- Use cases include removing duplicates or checking for membership efficiently.
*/
