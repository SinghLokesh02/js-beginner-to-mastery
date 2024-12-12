// Object Basics

// Object is a non-primitive data type in JavaScript. It is a collection of key-value pairs.

// Create a new object using the object literal syntax

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
}

// Create a new object using the object constructor
var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;


// Accessing properties using dot notation
console.log(person.firstName); // Output: John
console.log(person.lastName); // Output: Doe


// Accessing properties using bracket notation
console.log(person["firstName"]); // Output: John
console.log(person["lastName"]); // Output: Doe

// Adding new properties
person.city = "New York";
console.log(person.city); // Output: New York

// Updating existing properties
person.age = 40;

// Deleting properties
delete person.age;
console.log(person);  // Output: { firstName: 'John', lastName: 'Doe', city: 'New York' }

 

