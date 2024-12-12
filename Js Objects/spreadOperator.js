// Spread Operator in Object

const person = {
    name: 'John',
    age: 25,
    city: 'New York'
};

// Using the spread operator to create a new object
const newPerson = {...person, job: 'Developer', city: 'Los Angeles'};
console.log(newPerson);

// Using the spread operator to update a property
const updatedPerson = {...person, age: 30};
console.log(updatedPerson);

// Using the spread operator to merge two objects

const person2 = {
    name: 'Jane',
    city: 'Chicago'
};

const mergedPerson = {...person,...person2};
console.log(mergedPerson);



 