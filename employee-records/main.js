let employees = []

function Employee (name, jobTitle, salary, jobStatus="Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.jobStatus = jobStatus
}

Employee.prototype.printEmployeeForm = function () {
    console.log("Name: " + this.name + " Job Title: " + this.jobTitle + " Salary: " + this.salary + " Status: " + this.jobStatus)
}

let jackson = new Employee("Jackson", "Software Developer", "$100,000")
jackson.printEmployeeForm()

let david = new Employee("David", "Video Editor", "$2,000", "Part Time")
david.printEmployeeForm()

let andrew = new Employee ("Andrew", "Accountant", "$70,000")
andrew.printEmployeeForm()

employees.push(jackson, david, andrew)
console.log(employees)