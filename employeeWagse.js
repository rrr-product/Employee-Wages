console.log("Welcome to Employee Wage Computation Program");

const EMPLOYEE_RATE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;
const TOTAL_WORKING_DAYS = 20;

let employeeType = Math.floor(Math.random() * 2) + 1;
let totalWage = 0;
let totalWorkingHours = 0;
console.log(`Employee Type : ${employeeType === 1 ? "Full Time" : "Part Time"}`);

const totalEmolpyeeWages = (employeeType, totalWorkingHours) => {
    let employeeCheck = Math.floor(Math.random() * 2);
    let totalWorkHour = totalWorkingHours
    let totalWage = 0;
    if (employeeCheck) {
        switch (employeeType) {
            case 1:
                let fullTimeWage = EMPLOYEE_RATE_PER_HOUR * FULL_DAY_HOURS;
                totalWage += fullTimeWage;
                totalWorkingHours += FULL_DAY_HOURS;
                console.log("Status : Present");
                console.log(`Employee Wage is: ${fullTimeWage}`);
                break;
            case 2:
                let partTimeWage = EMPLOYEE_RATE_PER_HOUR * PART_TIME_HOURS;
                totalWage += partTimeWage;
                totalWorkingHours += PART_TIME_HOURS;
                console.log("Status : Present");
                console.log(`Employee Wage is: ${partTimeWage}`);
                break;
        }    
    } else {
        console.log("Status : Absent");
        console.log("Employee Wage is: 0");
    }
    return {totalWage, totalWorkingHours};
}


for (let day = 1; day <= TOTAL_WORKING_DAYS; day++) {
    if (totalWorkingHours >= 100) break;
    let result = totalEmolpyeeWages(employeeType, totalWorkingHours);
    totalWage += result.totalWage;
    totalWorkingHours = result.totalWorkingHours;
}

console.log(`Total Wage for the month: ${totalWage}`);
console.log(`Total Working Hours for the month: ${totalWorkingHours}`);