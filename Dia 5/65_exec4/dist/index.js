"use strict";
class Employee {
    constructor(title, salary) {
        this.title = title;
        this.salary = salary;
    }
}
const employee = new Employee('Engineer', 110000);
console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);
