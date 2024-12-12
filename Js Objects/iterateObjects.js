// Iterate through Objects

let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

// Iterate over the properties
 
// Using for...in loop
for(let key in person){
    console.log(key + ": " + person[key]);
}

// Using Object.keys() 
Object.keys(person).forEach(key => {
    console.log(key + ": " + person[key]);
});


// Using destructuring
for(let [key, value] of Object.entries(person)){
    console.log(key + ": " + value);
}



