# Basics of Programming in JavaScript  

## Overview  
This repository is a beginner-friendly guide to understanding the basics of programming with JavaScript. Whether you're new to coding or looking to strengthen your foundation, this guide covers essential topics with detailed explanations and examples.

---

## Contents  

1. [Hello World Program](#1-hello-world-program)  
2. [Declare Variable Using var](#2-declare-variable-using-var)  
3. [More About Variables](#3-more-about-variables)  
4. [Let](#4-let)  
5. [Const](#5-const)  
6. [String Indexing](#6-string-indexing)  
7. [Useful String Methods](#7-useful-string-methods)  
8. [Template Strings](#8-template-strings)  
9. [Null, Undefined, BigInt, typeof](#9-null-undefined-bigint-typeof)  
10. [Booleans and Comparison Operators](#10-booleans-and-comparison-operators)  
11. [Truthy and Falsy Values](#11-truthy-and-falsy-values)  
12. [If-Else Statement](#12-if-else-statement)  
13. [Ternary Operator](#13-ternary-operator)  
14. [Logical Operators (`&&`, `||`)](#14-logical-operators)  
15. [Nested If-Else](#15-nested-if-else)  
16. [If-ElseIf-Else](#16-if-elseif-else)  
17. [Switch Statement](#17-switch-statement)  
18. [While Loop](#18-while-loop)  
19. [While Loop Examples](#19-while-loop-examples)  
20. [For Loop](#20-for-loop)  
21. [For Loop Examples](#21-for-loop-examples)  
22. [Break and Continue Keywords](#22-break-and-continue-keywords)  

---

### 1. Hello World Program  

The "Hello World" program is the simplest way to get started with JavaScript.  

**Code Example:**  
```javascript
console.log("Hello, World!");
```  

**Explanation:**  
- `console.log()` is used to print messages to the console.  

---

### 2. Declare Variable Using var  

`var` is used to declare variables in JavaScript.  

**Code Example:**  
```javascript
var name = "John";
console.log(name);
```  

**Explanation:**  
- `var` allows re-declaration and is function-scoped.  

---

### 3. More About Variables  

Variables store data that can be used and modified later in the program.  

**Important Points:**  
- Variable names must start with a letter, `$`, or `_`.  
- JavaScript is case-sensitive.  

---

## Rules for Naming Variables in JavaScript

---

When declaring variables in JavaScript, it’s important to follow specific rules and best practices to ensure clarity and maintainability in your code. Here are the key guidelines:

### 1. **Use Valid Characters**
- Variable names can include letters, digits, underscores (`_`), and dollar signs (`$`).
- They must **begin with a letter**, an underscore, or a dollar sign. For example:
  ```javascript
  let myVariable; // Valid
  let _myVariable; // Valid
  let $myVariable; // Valid
  let 1variable; // Invalid (cannot start with a digit)
  ```

### 2. **Avoid Reserved Keywords**
- Do not use JavaScript reserved keywords like `var`, `let`, `const`, `function`, etc., as variable names.
  ```javascript
  let function; // Invalid
  ```

### 3. **Case Sensitivity**
- Variable names are case-sensitive. For example, `myVariable` and `MyVariable` are treated as different variables.

### 4. **Use Descriptive Names**
- Choose meaningful names that describe the variable’s purpose to improve code readability.
  ```javascript
  let count = 10; // Descriptive
  let x = 10; // Not descriptive
  ```

### 5. **Follow Camel Case Convention**
- Use camelCase for variable names, starting with a lowercase letter. For example:
  ```javascript
  let myVariableName; // Recommended
  let MyVariableName; // Avoid (Pascal Case is typically for classes)
  ```

### 6. **Avoid Using Magic Numbers**
- Instead of hardcoding numbers or values, assign them to well-named variables.
  ```javascript
  let maxUsers = 100; // Clear purpose
  let x = 100; // Ambiguous
  ```

### 7. **No Special Characters or Spaces**
- Avoid spaces and special characters other than `_` and `$` in variable names.
  ```javascript
  let my-variable; // Invalid
  let my variable; // Invalid
  ```

### 8. **Keep Names Short Yet Descriptive**
- Strike a balance between brevity and clarity. Avoid overly long names.
  ```javascript
  let userCount; // Good
  let totalNumberOfUsersInTheSystem; // Too long
  ```

### 9. **Constants in Uppercase**
- Use uppercase letters and underscores (`_`) for constants to differentiate them from regular variables.
  ```javascript
  const MAX_LIMIT = 50; // Recommended for constants
  ```

### 10. **Avoid Global Variables**
- Declare variables inside functions or blocks to avoid polluting the global scope, which can lead to conflicts.

---

### 4. Let  

`let` is used to declare block-scoped variables.  

**Code Example:**  
```javascript
let age = 25;
console.log(age);
```  

**Explanation:**  
- Variables declared with `let` cannot be re-declared but can be updated.  

---

### 5. Const  

`const` is used for variables whose value cannot be reassigned.  

**Code Example:**  
```javascript
const PI = 3.14;
console.log(PI);
```  

**Explanation:**  
- Use `const` for values that should not change.  

---

### 6. String Indexing  

Strings in JavaScript are zero-indexed.  

**Code Example:**  
```javascript
let str = "Hello";
console.log(str[0]); // Output: H
```  

**Explanation:**  
- Indexing allows access to individual characters.  

---

### 7. Useful String Methods  

Some commonly used string methods:  
- `length`: Get string length.  
- `toUpperCase()`: Convert to uppercase.  
- `toLowerCase()`: Convert to lowercase.  
- `includes()`: Check if a substring exists.  

---

### 8. Template Strings  

Template strings simplify string concatenation using backticks `` ` ``.  

**Code Example:**  
```javascript
let name = "John";
console.log(`Hello, ${name}!`);
```  

**Explanation:**  
- Use `${}` to embed variables.  

---

### 9. Null, Undefined, BigInt, typeof  

**Key Points:**  
- `null`: Represents the intentional absence of a value.  
- `undefined`: A variable declared but not assigned a value.  
- `BigInt`: Used for integers larger than `Number.MAX_SAFE_INTEGER`.  

**Code Example:**  
```javascript
let bigIntNum = 12345678901234567890n;
console.log(typeof bigIntNum); // Output: bigint
```  

---

### 10. Booleans and Comparison Operators  

Booleans represent `true` or `false`.  

**Comparison Operators:**  
- `==`: Equality check.  
- `===`: Strict equality check.  
- `<, >, <=, >=`: Comparisons.  

---

### 11. Truthy and Falsy Values  

**Falsy Values:**  
- `0`, `""`, `null`, `undefined`, `NaN`, `false`.  

**Truthy Values:**  
- All other values.  

---

### 12. If-Else Statement  

**Code Example:**  
```javascript
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```  

---

### 13. Ternary Operator  

**Code Example:**  
```javascript
let result = age > 18 ? "Adult" : "Minor";
console.log(result);
```  

---

### 14. Logical Operators  

**Operators:**  
- `&&`: Logical AND.  
- `||`: Logical OR.  

---

### 15. Nested If-Else  

**Code Example:**  
```javascript
if (age > 18) {
  if (age > 60) {
    console.log("Senior Citizen");
  } else {
    console.log("Adult");
  }
}
```  

---

### 16. If-ElseIf-Else  

**Code Example:**  
```javascript
if (age < 18) {
  console.log("Child");
} else if (age < 60) {
  console.log("Adult");
} else {
  console.log("Senior Citizen");
}
```  

---

### 17. Switch Statement  

**Code Example:**  
```javascript
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  default: console.log("Other Day");
}
```  

---

### 18. While Loop  

**Code Example:**  
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```  

---

### 19. While Loop Examples  

Find sum of numbers from 1 to 10 using a while loop.  

**Code Example:**  
```javascript
let sum = 0, i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum); // Output: 55
```  

---

### 20. For Loop  

**Code Example:**  
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```  

---

### 21. For Loop Examples  

Print even numbers between 1 and 10.  

**Code Example:**  
```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```  

---

### 22. Break and Continue Keywords  

- **Break:** Terminates the loop.  
- **Continue:** Skips the current iteration.  

**Code Example:**  
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```  

---

## Conclusion  

This repository is a step-by-step guide to mastering the basics of JavaScript. Explore, practice, and enhance your skills!  

---

## License  

This repository is licensed under the [MIT License](LICENSE).  