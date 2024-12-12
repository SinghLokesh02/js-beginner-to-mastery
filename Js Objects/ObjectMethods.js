// Object Methods

// In JavaScript, objects have built-in methods that can be used to perform common tasks. Some of the commonly used object methods are:

let obj = {
    name: "John",
    age: 30,
    city: "New York"
}


// Object.keys(): This method is used to return an array of the object's own enumerable property names.
console.log(Object.keys(obj)); // Output: [ 'name', 'age', 'city' ]


// Object.values(): This method is used to return an array of the object's own enumerable property values.
console.log(Object.values(obj)); // Output: [ 'John', 30, 'New York' ]


// Object.entries(): This method is used to return an array of key-value pairs for each property in the object.
console.log(Object.entries(obj)); // Output: [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]


// Object.assign(): This method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
let newObj = Object.assign(obj);
console.log(newObj); // Output: { name: 'John', age: 30, city: 'New York' }


// Object.freeze(): This method is used to freeze an object. A frozen object can no longer be changed.
Object.freeze(obj);
obj.name = "Jane"; // This will not change the value of the name property
console.log(obj); // Output: { name: 'John', age: 30, city: 'New York' }


// Object.seal(): This method is used to seal an object. A sealed object can have its existing properties changed, but cannot have new properties added or existing properties deleted.

Object.seal(obj);
obj.country = "USA"; // This will not change the value of the country property
console.log(obj); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }

// hasOwnProperty(): This method is used to check if an object has a property with the specified name. It returns true if the object has the property, otherwise it returns false.

console.log(obj.hasOwnProperty("name")); // Output: true
console.log(obj.hasOwnProperty("country")); // Output: true
console.log(obj.hasOwnProperty("email")); // Output: false


 

