// Object Destructuring

const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};

// Before ES6
// const name = person.name;
// const age = person.age;
// const city = person.city;
// console.log(name, age, city);  Output: John Doe 30 New York

// With ES6
const {name, age, city} = person;
console.log(name, age, city); // Output: John Doe 30 New York


// Destructuring with different variable names
const {name: personName, age: personAge, city: personCity} = person;
console.log(personName, personAge, personCity); // Output: John Doe 30 New York


// Destructuring with default values
const {name: personName1, age: personAge1, city: personCity1, job = 'Developer'} = person;
console.log(personName1, personAge1, personCity1, job); // Output: John Doe 30 New York Developer


