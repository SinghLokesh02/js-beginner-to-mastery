// Sort Method

/*
Definition:
The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting elements into strings.

Syntax:
array.sort(compareFunction)
- compareFunction (optional): Specifies a function that defines the sort order.
  - If omitted, elements are converted to strings and sorted lexicographically.
  - compareFunction(a, b): Returns a value:
    - < 0: a comes before b
    - 0: a and b are equal
    - > 0: a comes after b
*/

// Example 1: Sorting Numbers in Ascending Order
const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Example 2: Sorting Numbers in Descending Order
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [5, 4, 3, 2, 1]

// Example 3: Sorting Strings Alphabetically
const fruits = ['banana', 'apple', 'cherry', 'date'];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

// Example 4: Sorting with Case Sensitivity
const mixedCaseFruits = ['Banana', 'apple', 'Cherry', 'date'];
mixedCaseFruits.sort((a, b) => a.localeCompare(b));
console.log(mixedCaseFruits); // Output: ['apple', 'Banana', 'Cherry', 'date']

/*
Important Points:
1. sort() modifies the original array.
2. Without compareFunction, elements are sorted as strings.
3. For numerical sorting, always provide a compareFunction.
4. localeCompare() can be used for sorting strings with case sensitivity or in specific locales.
5. Be cautious with large arrays, as sort() can have significant performance overhead.
*/
