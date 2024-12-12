// Dot vs bracket notation in Object

let person = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "painting", "coding"],
    "full name": "John Doe",
};

console.log(person.name); // Output: John
console.log(person["name"]); // Output: John

console.log(person["full name"]); // Output: John Doe

// Dot notation cannot be used to access properties with spaces in their names because it will be interpreted as two separate properties. In such cases, bracket notation should be used.

