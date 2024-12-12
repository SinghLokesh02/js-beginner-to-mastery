// Array of Object/ Object inside an Array 

// Array of Objects
let employees = [
    {name: 'John', age: 30, department: 'IT'},
    {name: 'Jane', age: 25, department: 'HR'},
    {name: 'Mike', age: 35, department: 'Finance'}
];

// Accessing the elements of the array
console.log(employees[0]); // Output: {name: 'John', age: 30, department: 'IT'}
console.log(employees[1].name); // Output: Jane
console.log(employees[2].department); // Output: Finance

// Modifying the elements of the array
employees[0].name = 'Johnny';
console.log(employees[0]); // Output: {name: 'Johnny', age: 30, department: 'IT'}

// Adding a new element to the array
employees.push({name: 'Alice', age: 28, department: 'Marketing'});

// Removing an element from the array
employees.pop();

// Sorting the array by age in ascending order
employees.sort((a, b) => a.age - b.age);

