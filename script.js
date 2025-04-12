// Constructor function for Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add method to Person's prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Constructor function for Employee (inherits from Person)
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call Person constructor with this context
  this.jobTitle = jobTitle;
}

// Set up inheritance: Employee.prototype inherits from Person.prototype
Employee.prototype = Object.create(Person.prototype);

// Fix the constructor pointer (optional but good practice)
Employee.prototype.constructor = Employee;

// Add method to Employee's prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Create instances
const person = new Person("Alice", 25);
person.greet();

const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();
