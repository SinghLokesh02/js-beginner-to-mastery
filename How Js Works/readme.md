# How JavaScript Works  

This guide explains the fundamental concepts of how JavaScript operates under the hood. Understanding these topics is essential for writing efficient and predictable code.

---

## Table of Contents  

1. [Global Execution Context](#1-global-execution-context)  
2. [This and Window in Global Execution Context](#2-this-and-window-in-global-execution-context)  
3. [Hoisting](#3-hoisting)  
4. [Are Let and Const Hoisted? What is a Reference Error?](#4-are-let-and-const-hoisted-what-is-a-reference-error)  
5. [Function Execution Context](#5-function-execution-context)  
6. [Scope Chain and Lexical Environment](#6-scope-chain-and-lexical-environment)  

---

### 1. Global Execution Context  

The **Global Execution Context (GEC)** is the first execution context created when JavaScript code runs. It comprises two main components:  
- **Global Object:** Refers to `window` in browsers or `global` in Node.js.  
- **this Keyword:** Refers to the global object in the GEC.  

**Example:**  
```javascript
console.log(this); // Outputs the global object
console.log(window === this); // true in browsers
```  

---

### 2. This and Window in Global Execution Context  

In the **GEC**, `this` points to the global object (`window` in browsers).  

**Example:**  
```javascript
console.log(this === window); // true
var name = "JavaScript";
console.log(window.name); // Outputs: JavaScript
```  

---

### 3. Hoisting  

**Hoisting** is a behavior where variable and function declarations are moved to the top of their scope during the compile phase.  

**Key Points:**  
- Variables declared with `var` are hoisted but initialized as `undefined`.  
- Function declarations are fully hoisted.  

**Example:**  
```javascript
console.log(myVar); // Outputs: undefined
var myVar = 10;

sayHello(); // Outputs: "Hello, World!"
function sayHello() {
  console.log("Hello, World!");
}
```  

---

### 4. Are Let and Const Hoisted? What is a Reference Error?  

Yes, `let` and `const` are hoisted, but they are not initialized. Accessing them before their declaration results in a **Reference Error** due to the **Temporal Dead Zone (TDZ)**.  

**Example:**  
```javascript
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;

const b = 10;
console.log(b); // Outputs: 10
```  

---

### 5. Function Execution Context  

When a function is called, a new **Function Execution Context (FEC)** is created. It consists of:  
- **Variable Object:** Stores function arguments and local variables.  
- **Scope Chain:** Links the function's variables to its outer environment.  
- **this Keyword:** Refers to the object that invokes the function.  

**Example:**  
```javascript
function greet() {
  var message = "Hi there!";
  console.log(message);
}
greet(); // Outputs: Hi there!
```  

---

### 6. Scope Chain and Lexical Environment  

**Scope Chain:** A mechanism to access variables from outer environments.  
**Lexical Environment:** The environment where the code is physically written, determining the scope.  

**Example:**  
```javascript
function outer() {
  let outerVar = "Outer";
  
  function inner() {
    let innerVar = "Inner";
    console.log(outerVar); // Accesses outer scope variable
  }
  
  inner();
}
outer();
```  

---

## Conclusion  

By understanding how JavaScript creates execution contexts, hoists variables, and manages scope, you can write more predictable and efficient code. These concepts form the foundation of JavaScript's behavior and execution model.  

---

## License  

This repository is licensed under the [MIT License](LICENSE).  