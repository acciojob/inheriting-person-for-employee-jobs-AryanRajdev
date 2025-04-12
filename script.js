<!DOCTYPE html>
<html>
<head>
  <title>Old School Classes</title>
</head>
<body>
  <script>
    // Constructor function for Person
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }

    // Corrected log format for Cypress test
    Person.prototype.greet = function () {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };

    // Constructor function for Employee (inherits from Person)
    function Employee(name, age, jobTitle) {
      Person.call(this, name, age);
      this.jobTitle = jobTitle;
    }

    // Inherit from Person
    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.constructor = Employee;

    // Also match Cypress log expectations
    Employee.prototype.jobGreet = function () {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    };

    // Make classes available on window for Cypress
    window.Person = Person;
    window.Employee = Employee;
  </script>
</body>
</html>

