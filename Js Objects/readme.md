# Objects in JavaScript  

## Overview  
Objects in JavaScript are a collection of key-value pairs that allow you to store and organize data in a structured way. They are one of the most powerful and commonly used features in JavaScript, enabling developers to build complex applications.  

This guide covers essential concepts and operations related to objects, along with examples and best practices.  

---

## Contents  

1. [Introduction to Objects](#1-introduction-to-objects)  
2. [Dot vs Bracket Notation](#2-dot-vs-bracket-notation)  
3. [Iterate Objects](#3-iterate-objects)  
4. [Computed Properties](#4-computed-properties)  
5. [Spread Operator in Objects](#5-spread-operator-in-objects)  
6. [Object Destructuring](#6-object-destructuring)  
7. [Objects Inside Arrays](#7-objects-inside-arrays)  
8. [Nested Destructuring](#8-nested-destructuring)  

---

### 1. Introduction to Objects  

An object is a non-primitive data type that stores data in the form of key-value pairs. Keys in an object are strings or symbols, while values can be of any data type.  

**Code Example:**  
```javascript
const person = {
  name: "John",
  age: 30,
  isEmployed: true,
};
console.log(person.name); // Output: John
console.log(person["age"]); // Output: 30
```  

**Key Points:**  
- Objects are unordered collections.  
- Keys must be unique.  

---

### 2. Dot vs Bracket Notation  

You can access object properties using **dot notation** or **bracket notation**.  

**Dot Notation:** Used when the property name is a valid identifier (e.g., no spaces or special characters).  
**Bracket Notation:** Used when the property name is a string or contains special characters.  

**Code Example:**  
```javascript
const car = {
  brand: "Toyota",
  "model year": 2020,
};

console.log(car.brand); // Output: Toyota
console.log(car["model year"]); // Output: 2020
```  

---

### 3. Iterate Objects  

You can iterate through object properties using a `for...in` loop.  

**Code Example:**  
```javascript
const user = { name: "Alice", age: 25, city: "Paris" };
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
// Output:
// name: Alice
// age: 25
// city: Paris
```  

For modern use cases, `Object.keys()`, `Object.values()`, and `Object.entries()` provide better iteration options.  

**Example:**  
```javascript
console.log(Object.keys(user));   // ["name", "age", "city"]
console.log(Object.values(user)); // ["Alice", 25, "Paris"]
console.log(Object.entries(user)); // [["name", "Alice"], ["age", 25], ["city", "Paris"]]
```  

---

### 4. Computed Properties  

Computed properties allow you to dynamically define keys in an object.  

**Code Example:**  
```javascript
let keyName = "color";
const car = {
  brand: "Ford",
  [keyName]: "red", // Computed property
};
console.log(car); // { brand: "Ford", color: "red" }
```  

---

### 5. Spread Operator in Objects  

The spread operator (`...`) allows you to copy or merge objects.  

**Code Example:**  
```javascript
const user = { name: "Alice", age: 25 };
const additionalInfo = { city: "Paris", country: "France" };
const fullProfile = { ...user, ...additionalInfo };

console.log(fullProfile); 
// Output: { name: "Alice", age: 25, city: "Paris", country: "France" }
```  

---

### 6. Object Destructuring  

Destructuring simplifies the extraction of properties from an object into variables.  

**Code Example:**  
```javascript
const person = { name: "John", age: 30, city: "New York" };
const { name, age } = person;

console.log(name); // Output: John
console.log(age);  // Output: 30
```  

**Default Values in Destructuring:**  
```javascript
const user = { name: "Alice" };
const { name, age = 25 } = user;

console.log(age); // Output: 25 (default value)
```  

---

### 7. Objects Inside Arrays  

Objects can be stored inside arrays, making it easier to represent complex data structures.  

**Code Example:**  
```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

users.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old.`);
});
// Output:
// Alice is 25 years old.
// Bob is 30 years old.
```  

---

### 8. Nested Destructuring  

Destructuring can be applied to objects inside objects or arrays inside objects.  

**Code Example:**  
```javascript
const user = {
  name: "Alice",
  address: {
    city: "Paris",
    country: "France",
  },
};

const { name, address: { city, country } } = user;
console.log(city);   // Output: Paris
console.log(country); // Output: France
```  

---

## Conclusion  

This guide provides a detailed overview of objects in JavaScript. Understanding objects and their associated operations is fundamental to writing effective JavaScript code, as objects are used extensively in most JavaScript programs.  

---

## License  

This repository is licensed under the [MIT License](LICENSE).  