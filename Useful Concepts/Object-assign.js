// Object.assign in JavaScript

/*
Definition:
Object.assign is a method used to copy the values of all enumerable own properties from one or more source objects to a target object.

Key Points:
1. Creates a shallow copy of the source objects.
2. Used for cloning objects or merging multiple objects into one.
3. Does not copy inherited or non-enumerable properties.
*/

// Example 1: Cloning an Object
const original = { a: 1, b: 2 };
const clone = Object.assign({}, original);

console.log(clone); // Output: { a: 1, b: 2 }
console.log(clone === original); // Output: false (They are separate objects)

// Example 2: Merging Multiple Objects
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const merged = Object.assign({}, obj1, obj2, obj3);

console.log(merged); // Output: { a: 1, b: 2, c: 3 }

// Example 3: Modifying the Target Object
const target = { x: 10 };
Object.assign(target, { y: 20, z: 30 });

console.log(target); // Output: { x: 10, y: 20, z: 30 }

/*
Notes:
- Object.assign only performs a shallow copy. Nested objects or arrays will not be deeply cloned.
- If two source objects have the same key, the value from the last object takes precedence.
- Use JSON methods or libraries like Lodash for deep cloning.
*/
