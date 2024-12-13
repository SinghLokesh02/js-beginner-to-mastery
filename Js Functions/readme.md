# Functions in JavaScript  

## Overview  

Functions are the backbone of JavaScript programming, enabling modular and reusable code. This guide covers a variety of function-related concepts ranging from declarations to advanced topics like parameter destructuring and functions returning functions. These topics provide a solid foundation for understanding and effectively using functions in JavaScript.  

---

## Table of Contents  

1. [Function Declaration](#1-function-declaration)  
2. [Function Expression](#2-function-expression)  
3. [Arrow Functions](#3-arrow-functions)  
4. [Function Declarations Are Hoisted](#4-function-declarations-are-hoisted)  
5. [Function Inside Function](#5-function-inside-function)  
6. [Lexical Scope](#6-lexical-scope)  
7. [Block Scope vs Function Scope](#7-block-scope-vs-function-scope)  
8. [Default Parameters](#8-default-parameters)  
9. [Rest Parameters](#9-rest-parameters)  
10. [Parameter Destructuring](#10-parameter-destructuring)  
11. [Brief Introduction to Callback Functions](#11-brief-introduction-to-callback-functions)  
12. [Functions Returning Functions](#12-functions-returning-functions)  

---

### 1. Function Declaration  

**Definition:**  
A function declaration defines a named function using the `function` keyword.  

**Example:**  
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Alice"); // Output: Hello, Alice!
```  

**Key Points:**  
- Can be used before the declaration due to **hoisting**.  

---

### 2. Function Expression  

**Definition:**  
A function expression defines a function as part of an expression.  

**Example:**  
```javascript
const greet = function (name) {
  console.log(`Hello, ${name}!`);
};

greet("Bob"); // Output: Hello, Bob!
```  

**Key Points:**  
- Function expressions are not hoisted.  
- Often used for anonymous or inline functions.  

---

### 3. Arrow Functions  

**Definition:**  
Arrow functions provide a shorter syntax for writing functions and do not have their own `this` context.  

**Example:**  
```javascript
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

greet("Charlie"); // Output: Hello, Charlie!
```  

**Key Points:**  
- Useful for concise, one-line functions.  
- Cannot be used as constructors.  

---

### 4. Function Declarations Are Hoisted  

**Explanation:**  
Function declarations are moved to the top of their scope during the compilation phase, allowing them to be called before their declaration.  

**Example:**  
```javascript
greet(); // Output: Hello!

function greet() {
  console.log("Hello!");
}
```  

**Key Points:**  
- Only declarations are hoisted, not function expressions.  

---

### 5. Function Inside Function  

**Definition:**  
A function can be defined inside another function, creating a nested structure.  

**Example:**  
```javascript
function outer() {
  console.log("Outer function");

  function inner() {
    console.log("Inner function");
  }

  inner();
}

outer();
// Output:
// Outer function
// Inner function
```  

**Key Points:**  
- Inner functions can access variables from their parent function.  

---

### 6. Lexical Scope  

**Definition:**  
Lexical scope means that a function’s scope is determined by its position in the code during definition, not during execution.  

**Example:**  
```javascript
function outer() {
  const outerVar = "I am outer";

  function inner() {
    console.log(outerVar);
  }

  inner(); // Output: I am outer
}
outer();
```  

**Key Points:**  
- Inner functions can access variables in their outer functions.  

---

### 7. Block Scope vs Function Scope  

**Explanation:**  
- `let` and `const` are block-scoped, meaning they are only accessible within the block `{}` they are defined in.  
- `var` is function-scoped, meaning it is accessible throughout the function.  

**Example:**  
```javascript
if (true) {
  let blockScoped = "Block";
  var functionScoped = "Function";
  console.log(blockScoped); // Output: Block
}

console.log(functionScoped); // Output: Function
// console.log(blockScoped); // Error: blockScoped is not defined
```  

---

### 8. Default Parameters  

**Definition:**  
Default parameters allow initializing function parameters with default values.  

**Example:**  
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("David"); // Output: Hello, David!
```  

---

### 9. Rest Parameters  

**Definition:**  
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.  

**Example:**  
```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```  

---

### 10. Parameter Destructuring  

**Definition:**  
Parameter destructuring allows unpacking values from objects or arrays directly within function parameters.  

**Example:**  
```javascript
function printDetails({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const user = { name: "Emma", age: 25 };
printDetails(user); // Output: Name: Emma, Age: 25
```  

---

### 11. Brief Introduction to Callback Functions  

**Definition:**  
A callback function is a function passed as an argument to another function and executed later.  

**Example:**  
```javascript
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye);
// Output:
// Hello, Alice!
// Goodbye!
```  

---

### 12. Functions Returning Functions  

**Definition:**  
A function can return another function, enabling higher-order programming patterns.  

**Example:**  
```javascript
function createMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10
```  

---

## Conclusion  

Functions are a versatile and integral part of JavaScript. This guide covered everything from basic declarations to advanced topics like rest parameters and functions returning functions. Understanding these concepts is essential for writing efficient and modular JavaScript code.  

---

## License  

This repository is licensed under the [MIT License](LICENSE).