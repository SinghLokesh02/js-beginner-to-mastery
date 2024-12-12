// Reduce Method

/*
Definition:
The reduce() method executes a reducer function on each element of the array, resulting in a single output value. It is often used for accumulating values.

Syntax:
array.reduce(callback(accumulator, currentValue, index, array), initialValue)
- callback: Function to execute on each element.
  - accumulator: The accumulated result from the previous callback execution.
  - currentValue: The current element being processed.
  - index (optional): The index of the current element.
  - array (optional): The array reduce() was called upon.
- initialValue (optional): A value to use as the first argument to the first call of the callback.
*/

// Example 1: Sum of Numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

// Example 2: Concatenate Strings
const words = ['Hello', 'world', 'from', 'reduce'];
const sentence = words.reduce((acc, curr) => acc + ' ' + curr);
console.log(sentence); // Output: 'Hello world from reduce'

// Example 3: Find Maximum Value
const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc));
console.log(max); // Output: 5

// Example 4: Grouping by Property
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 }
];
const groupedByAge = people.reduce((acc, person) => {
  const key = person.age >= 18 ? 'adults' : 'minors';
  acc[key] = acc[key] || [];
  acc[key].push(person);
  return acc;
}, {});
console.log(groupedByAge);
// Output: { adults: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }], minors: [{ name: 'Bob', age: 17 }] }

/*
Important Points:
1. reduce() can handle a variety of tasks: summing, flattening arrays, grouping data, etc.
2. The initialValue is optional but crucial for empty arrays or specific accumulator types.
3. Careful design of the reducer function is necessary to avoid errors.
4. Does not modify the original array.
*/
