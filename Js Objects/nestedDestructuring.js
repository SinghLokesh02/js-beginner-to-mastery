// Nested Object

const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    job: {
        title: 'Software Developer',
        company: 'ABC Inc'
    },
    hobbies: ['reading', 'painting', 'coding']
};

console.log(person.name); // Output: John Doe

// Nested destructuring
const {name, age, city, job: {title, company}} = person;
console.log(name, age, city, title, company); // Output: John Doe 30 New York Software Developer ABC Inc

// Destructuring with default values
const {  city: personCity, job: {title: jobTitle, company: jobCompany, salary = 60000}} = person;
console.log(personCity, jobTitle, jobCompany, salary); // Output: New York Software Developer ABC Inc 60000

// Destructuring with different variable names
const {name: personName, age: personAge, city: personCity1, job: {title: jobTitle1, company: jobCompany1}} = person;
console.log(personName, personAge, personCity1, jobTitle1, jobCompany1); // Output: John Doe 30 New York Software Developer ABC Inc


