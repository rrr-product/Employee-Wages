console.log("Welcome to Employee Wage Computation Program");

const EMPLOYEE_RATE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;

let employeeType = Math.floor(Math.random() * 2) + 1;
let employeeCheck = Math.floor(Math.random() * 2);

if (employeeCheck) {
    switch (employeeType) {
        case 1:
            let fullTimeWage = EMPLOYEE_RATE_PER_HOUR * FULL_DAY_HOURS;
            console.log("Status : Present");
            console.log("Employee Type : Full Time");
            console.log(`Employee Wage is: ${fullTimeWage}`);
            break;
        case 2:
            let partTimeWage = EMPLOYEE_RATE_PER_HOUR * PART_TIME_HOURS;
            console.log("Status : Present");
            console.log("Employee Type : Part Time");
            console.log(`Employee Wage is: ${partTimeWage}`);
            break;
    }    
} else {
    console.log("Status : Absent");
    console.log(`Employee Type : ${employeeType === 1 ? "Full Time" : "Part Time"}`);
    console.log("Employee Wage is: 0");
}