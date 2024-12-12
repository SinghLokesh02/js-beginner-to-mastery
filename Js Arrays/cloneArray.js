// Various ways to copy arrays in JavaScript

// Method 1: Using the spread operator (...)
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1]; // Copying arr1 into arr2
console.log(arr2); // Output: [1, 2, 3, 4, 5]


// Method 2: Using the Array.from() method
let arr3 = Array.from(arr1); // Copying arr1 into arr3
console.log(arr3); // Output: [1, 2, 3, 4, 5]


// Method 3: Using the slice() method
let arr4 = arr1.slice(); // Copying arr1 into arr4
console.log(arr4); // Output: [1, 2, 3, 4, 5]


// Method 4: Using the concat() method
let arr5 = [].concat(arr1); // Copying arr1 into arr5
console.log(arr5); // Output: [1, 2, 3, 4, 5]
