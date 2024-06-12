class Employee {  
  constructor(public title: string, public salary: number) {}
}

const employee = new Employee('Engineer', 110000);

console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);

// Reduzindo esse código:

// class Employee {
//   title: string;
//   salary: number;
//   constructor(title: string, salary: number) {
//     this.title = title;
//     this.salary = salary;
//   }
// }

// const employee = new Employee('Engineer', 100000);

// console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);