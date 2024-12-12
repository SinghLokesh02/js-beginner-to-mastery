# JavaScript Closures

## Overview  
In JavaScript, a **closure** is a combination of a function and its surrounding lexical environment. Closures allow a function to access variables defined outside its immediate scope, even after the outer function has finished executing.

---

## 1. What is a Closure?  

A **closure** is created when a function:  
- **Retains access** to its lexical scope.  
- Can **access and modify variables** from its parent scope.  

### Example:  
```javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const closureFunction = outerFunction("Hello");
closureFunction("World"); // Outputs: Outer: Hello, Inner: World
```

**Explanation:**  
- `innerFunction` forms a closure over `outerVariable`, retaining access to it even after `outerFunction` has executed.

---

## 2. Key Features of Closures  

1. **Access to Parent Scope Variables:**  
   A closure can access variables declared in its parent function.

2. **Persistence of State:**  
   Closures "remember" their environment, making them useful for maintaining state.

3. **Encapsulation:**  
   Closures help create private variables and methods, protecting them from external access.

---

## 3. Use Cases of Closures  

### 1. **Data Privacy**  
Closures can create private variables that are inaccessible outside the function.  
```javascript
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(`Count: ${count}`);
  };
}

const increment = counter();
increment(); // Count: 1
increment(); // Count: 2
```

### 2. **Function Factories**  
Closures can generate functions with preset values.  
```javascript
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

### 3. **Callbacks and Event Handlers**  
Closures are often used in asynchronous programming, especially with event listeners and callbacks.  
```javascript
function setupClickHandler(message) {
  document.getElementById("btn").addEventListener("click", function () {
    alert(message);
  });
}

setupClickHandler("Button clicked!");
```

---

## 4. Limitations and Considerations  

1. **Memory Usage:**  
   Closures can consume memory since they keep variables in scope even after the parent function has executed.

2. **Debugging Complexity:**  
   Debugging closures can be challenging due to retained variables and scope chains.

---

## 5. Benefits of Closures  

- **Encapsulation:** Closures provide a way to create private state.  
- **State Management:** Useful for maintaining state across function executions.  
- **Modularity:** Encourages cleaner and modular code.  

---

## References  

- [MDN Web Docs - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)  
- [JavaScript Info - Closures](https://javascript.info/closure)  

---

## License  

This document is licensed under the [MIT License](LICENSE).