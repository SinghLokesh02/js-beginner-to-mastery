// Array destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

const arr = [1, 322, 123, 434, 51, 6, 457, 8];

// Old way
var a = arr[0];
var b = arr[1];

// New way with array destructuring
const [x, y] = arr;
console.log(x, y); // Output: 1 2


// Destructuring with rest operator
const [first, ...rest] = arr;
console.log(first, rest); // Output: 1 [322, 123, 434, 51, 6, 457, 8]


// Destructuring with default values
const [p, q, r = 0] = [1, 2];
console.log(p, q, r); // Output: 1 2 0


// Skipping the values while destructuring
const [m, , , n] = arr;
console.log(m, n); // Output: 1 434


// Destructuring with nested arrays and objects
const nested = [1, [2, 3], 4];
const [o, [t, l], z] = nested;
console.log(o, t, l, z); // Output: 1 2 3 4
