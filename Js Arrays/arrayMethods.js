// Array methods

const numbers = [1, 2, 3, 4, 5];
// 1. push() - Adds an element to the end of the array
numbers.push(6);

// 2. pop() - Removes the last element from the array and returns it
const lastElement = numbers.pop();

// 3. shift() - Removes the first element from the array and returns it
const firstElement = numbers.shift();

// 4. unshift() - Adds an element to the beginning of the array
numbers.unshift(0);

// 5. concat() - Merges two or more arrays and returns a new array

const numbers2 = [6, 7, 8];
const mergedArray = numbers.concat(numbers2);

// 6. slice() - Returns a new array containing a shallow copy of a portion of an array
const slicedArray = numbers.slice(1, 3);

// 7. splice() - Removes elements from an array and, if necessary, inserts new elements in their place
numbers.splice(1, 2);

// 8. reverse() - Reverses the order of the elements in an array
numbers.reverse();

// 9. indexOf() - Returns the first index at which a given element can be found in the array
const index = numbers.indexOf(3);

// 10. includes() - Returns true if an element exists in the array, otherwise false
const includes = numbers.includes(3);

// 11. join() - Joins all elements of an array into a string, separated by commas
const joinedArray = numbers.join();
 
// 12. sort() - Sort all elements of an array into a string, separated by commas
numbers.sort();

 