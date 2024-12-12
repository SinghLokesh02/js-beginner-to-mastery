# JavaScript Errors

## Overview  
In JavaScript, **errors** occur when the program encounters unexpected situations during execution. Errors disrupt the normal flow of the program but can be handled to ensure the application continues running smoothly.

---

## 1. Error  

An **Error** in JavaScript is an object that provides details about what went wrong during code execution.  

### Common Error Properties:  
- `message`: Description of the error.  
- `name`: Type of the error (e.g., `SyntaxError`, `TypeError`).  
- `stack`: Stack trace (useful for debugging).  

Example:  
```javascript
console.log(a); // ReferenceError: a is not defined
```

---

## 2. Types of Errors  

### **Compile-Time Errors**  
Errors detected by the JavaScript engine during the parsing of code before execution. These include syntax-related issues.  

**Example:**  
```javascript
console.log("Hello) // SyntaxError: Unexpected string
```

### **Runtime Errors**  
Errors that occur during the execution of code, after it has been successfully compiled. These are typically related to logic or unexpected situations in the code.  

**Example:**  
```javascript
let x = 10;
console.log(y); // ReferenceError: y is not defined
```

### Specific Error Types in JavaScript:  

1. **SyntaxError**  
Occurs when there’s a syntax mistake in the code.  
**Example:**  
```javascript
console.log("Hello) // SyntaxError: Unexpected string
```

2. **ReferenceError**  
Occurs when trying to access a variable that doesn’t exist.  
**Example:**  
```javascript
console.log(x); // ReferenceError: x is not defined
```

3. **TypeError**  
Occurs when an operation is performed on an invalid type.  
**Example:**  
```javascript
let num = 5;
num.toUpperCase(); // TypeError: num.toUpperCase is not a function
```

4. **RangeError**  
Occurs when a value is not within the acceptable range.  
**Example:**  
```javascript
let arr = [];
arr.length = -1; // RangeError: Invalid array length
```

5. **URIError**  
Occurs when an invalid URI function is used.  
**Example:**  
```javascript
decodeURI('%'); // URIError: URI malformed
```

---

## 3. `throw` Statement and Its Use  

The `throw` statement allows you to create custom errors. It stops the execution of the program and passes the error to be handled.  

### Syntax:  
```javascript
throw expression;
```

### Example:  
```javascript
let age = -1;
if (age < 0) {
  throw new Error("Age cannot be negative.");
}
```

---

## 4. `try`, `catch`, and `finally` Blocks  

The `try-catch-finally` construct is used for error handling in JavaScript.  

### Components:  

1. **`try` block**: Code that might throw an error.  
2. **`catch` block**: Code to handle the error.  
3. **`finally` block**: Code that executes regardless of whether an error occurred or not.  

### Syntax:  
```javascript
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that will always execute
}
```

### Example:  
```javascript
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("An error occurred: " + error.message);
} finally {
  console.log("Execution complete.");
}
```

---

## Benefits of Error Handling  

- **Prevents application crashes:** Allows programs to handle errors gracefully.  
- **Provides clear feedback to users:** Helps users understand what went wrong.  
- **Improves debugging efficiency:** Offers detailed error information, making issues easier to resolve.  

---

## References  

- [MDN Web Docs - Errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)  
- [JavaScript Info - Error Handling](https://javascript.info/try-catch)  

---

## License  

This document is licensed under the [MIT License](LICENSE).