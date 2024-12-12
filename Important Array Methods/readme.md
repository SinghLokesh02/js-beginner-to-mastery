# Array Methods in JavaScript  

## Overview  

JavaScript arrays come with a rich set of built-in methods to make operations on arrays easier and more efficient. These methods allow developers to manipulate, iterate, and transform arrays in powerful ways. This guide explains essential array methods in JavaScript, with definitions, syntax, and examples tailored for beginners.  

---

## Contents  

1. [forEach Method](#1-foreach-method)  
2. [map Method](#2-map-method)  
3. [filter Method](#3-filter-method)  
4. [reduce Method](#4-reduce-method)  
5. [sort Method](#5-sort-method)  
6. [find Method](#6-find-method)  
7. [every Method](#7-every-method)  
8. [some Method](#8-some-method)  
9. [fill Method](#9-fill-method)  
10. [splice Method](#10-splice-method)  

---

### 1. forEach Method  

**Definition:**  
The `forEach` method executes a provided function once for each array element. It is primarily used for iterating over an array.  

**Syntax:**  
```javascript
array.forEach(callbackFunction(element, index, array))
```  

**Example:**  
```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach((num) => {
  console.log(num * 2); // Outputs: 2, 4, 6, 8
});
```  

---

### 2. map Method  

**Definition:**  
The `map` method creates a new array by applying a provided function to each element of the original array.  

**Syntax:**  
```javascript
array.map(callbackFunction(element, index, array))
```  

**Example:**  
```javascript
const numbers = [1, 2, 3, 4];
const squares = numbers.map((num) => num ** 2);
console.log(squares); // Output: [1, 4, 9, 16]
```  

---

### 3. filter Method  

**Definition:**  
The `filter` method creates a new array containing all elements that pass a given test (return `true`).  

**Syntax:**  
```javascript
array.filter(callbackFunction(element, index, array))
```  

**Example:**  
```javascript
const numbers = [10, 20, 30, 40];
const filtered = numbers.filter((num) => num > 20);
console.log(filtered); // Output: [30, 40]
```  

---

### 4. reduce Method  

**Definition:**  
The `reduce` method applies a function to each element in the array to reduce it to a single value.  

**Syntax:**  
```javascript
array.reduce(callbackFunction(accumulator, currentValue, index, array), initialValue)
```  

**Example:**  
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10
```  

---

### 5. sort Method  

**Definition:**  
The `sort` method sorts the elements of an array in place and returns the sorted array. By default, it sorts as strings.  

**Syntax:**  
```javascript
array.sort(compareFunction(a, b))
```  

**Example (Numbers):**  
```javascript
const numbers = [30, 10, 20, 40];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [10, 20, 30, 40]
```  

**Example (Strings):**  
```javascript
const fruits = ["apple", "orange", "banana"];
fruits.sort();
console.log(fruits); // Output: ["apple", "banana", "orange"]
```  

---

### 6. find Method  

**Definition:**  
The `find` method returns the first element in the array that satisfies the provided condition.  

**Syntax:**  
```javascript
array.find(callbackFunction(element, index, array))
```  

**Example:**  
```javascript
const numbers = [10, 20, 30, 40];
const result = numbers.find((num) => num > 25);
console.log(result); // Output: 30
```  

---

### 7. every Method  

**Definition:**  
The `every` method checks if all elements in the array satisfy a given condition.  

**Syntax:**  
```javascript
array.every(callbackFunction(element, index, array))
```  

**Example:**  
```javascript
const numbers = [10, 20, 30];
const allGreaterThan5 = numbers.every((num) => num > 5);
console.log(allGreaterThan5); // Output: true
```  

---

### 8. some Method  

**Definition:**  
The `some` method checks if at least one element in the array satisfies a given condition.  

**Syntax:**  
```javascript
array.some(callbackFunction(element, index, array))
```  

**Example:**  
```javascript
const numbers = [10, 20, 30];
const hasGreaterThan25 = numbers.some((num) => num > 25);
console.log(hasGreaterThan25); // Output: true
```  

---

### 9. fill Method  

**Definition:**  
The `fill` method modifies all or part of an array with a static value.  

**Syntax:**  
```javascript
array.fill(value, startIndex, endIndex)
```  

**Example:**  
```javascript
const arr = [1, 2, 3, 4];
arr.fill(0, 1, 3);
console.log(arr); // Output: [1, 0, 0, 4]
```  

---

### 10. splice Method  

**Definition:**  
The `splice` method adds or removes elements from an array and optionally inserts new elements.  

**Syntax:**  
```javascript
array.splice(startIndex, deleteCount, item1, item2, ...)
```  

**Example (Remove Elements):**  
```javascript
const arr = [1, 2, 3, 4];
arr.splice(1, 2); 
console.log(arr); // Output: [1, 4]
```  

**Example (Add Elements):**  
```javascript
const arr = [1, 4];
arr.splice(1, 0, 2, 3);
console.log(arr); // Output: [1, 2, 3, 4]
```  

---

## Conclusion  

These array methods are fundamental for working with JavaScript arrays. Mastering them will significantly enhance your ability to manipulate and process data efficiently.  

Happy coding!  

---

## License  

This repository is licensed under the [MIT License](LICENSE).  