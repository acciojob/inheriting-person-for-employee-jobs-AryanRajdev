// Constructor function for Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Match Cypress expected console output
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Constructor function for Employee (inherits from Person)
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // inherit properties
  this.jobTitle = jobTitle;
}

// Inherit from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Match Cypress expected console output
Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Make available globally (for Cypress test)
window.Person = Person;
window.Employee = Employee;


