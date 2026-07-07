console.log("Welcome to Employee Wage Computation Program");

class EmployeeWages {

    constructor() {
        this.EMPLOYEE_RATE_PER_HOUR = 20;
        this.FULL_DAY_HOURS = 8;
        this.PART_TIME_HOURS = 4;
        this.TOTAL_WORKING_DAYS = 20;
        this.employeeType = Math.floor(Math.random() * 2) + 1;
        this.totalWage = 0;
        this.totalWorkingHours = 0;
        console.log(`Employee Type : ${this.employeeType === 1 ? "Full Time" : "Part Time"}`);
    }

    totalEmolpyeeWages = (employeeType, totalWorkingHours) => {
        let employeeCheck = Math.floor(Math.random() * 2);
        let totalWorkHour = totalWorkingHours
        let totalWage = 0;
        if (employeeCheck) {
            switch (employeeType) {
                case 1:
                    let fullTimeWage = this.EMPLOYEE_RATE_PER_HOUR * this.FULL_DAY_HOURS;
                    totalWage += fullTimeWage;
                    totalWorkingHours += this.FULL_DAY_HOURS;
                    console.log("Status : Present");
                    console.log(`Employee Wage is: ${fullTimeWage}`);
                    break;
                case 2:
                    let partTimeWage = this.EMPLOYEE_RATE_PER_HOUR * this.PART_TIME_HOURS;
                    totalWage += partTimeWage;
                    totalWorkingHours += this.PART_TIME_HOURS;
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

}

let totalWorkingHours = 0;
let totalWage = 0;
let employeeWages = new EmployeeWages();

for (let day = 1; day <= 20; day++) {
    if (totalWorkingHours >= 100) break;
    let result = employeeWages.totalEmolpyeeWages(employeeWages.employeeType, employeeWages.totalWorkingHours);
    totalWage += result.totalWage;
    totalWorkingHours += result.totalWorkingHours;
}

console.log(`Total Wage for the month: ${totalWage}`);
console.log(`Total Working Hours for the month: ${totalWorkingHours}`);