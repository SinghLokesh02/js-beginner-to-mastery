// We can also declare variables using the let keyword

// The main difference between let and var is that let is block scoped and var is function scoped. And the variable declared using let can be updated but not re-declared.but in case of var we can re-declare and update the variable.

// Declare variables using let
let name = "Lokesh Singh";
let age = 22;

// Output the variables

console.log("Name: " , name);
console.log("Age: " , age);


// Update the value of the variable
age = 23;

// Output the updated value of the variable
console.log("Updated Age: " , age);


// We will learn more about block scope and function scope later