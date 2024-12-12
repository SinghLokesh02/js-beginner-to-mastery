// For In Loop

// The `for...in` loop is used to iterate over the enumerable properties of an object. It can be used to iterate over the properties of an array, but it is not recommended because it may iterate over the properties that are inherited from the prototype chain.

/*
Syntax:
for (variable in object) {
    code block to be executed
}
*/

// Example:

const numbers = [1, 2, 3, 4, 5];
// Iterate over the elements

console.log("Iterating over the array:");
for (let index in numbers) {
  console.log(index, "=>", numbers[index]);
}
