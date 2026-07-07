console.log("Welcome to Employee Wage Computation Program");

const EMPLOYEE_RATE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;

let employeeCheck = Math.floor(Math.random() * 2);

if (employeeCheck) {
    let employeeWage = EMPLOYEE_RATE_PER_HOUR * FULL_DAY_HOURS;
    console.log("Employee is Present");
    console.log("Employee Wage is: " + employeeWage);
} else {
    console.log("Employee is Absent");
}