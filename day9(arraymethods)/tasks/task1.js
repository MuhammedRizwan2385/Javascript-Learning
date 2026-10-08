// TASK-1

//[id,name,designation,location,salary,experience]
employee = [
    [1000, 'Neel', 'Developer', 'Kochi', 25000, 3],
    [1001, 'Max', 'Tester', 'TVM', 20000, 2],
    [1002, 'Vinod', 'QA', 'KNR', 35000, 4],
    [1003, 'Vyom', 'QA', 'Kochi', 45000, 5],
    [1004, 'Laisha', 'Tester', 'TVM', 55000, 7],
    [1005, 'Aahan', 'Developer', 'TVM', 15000, 1],
    [1006, 'Aahil', 'QA', 'Kochi', 25000, 3],
    [1007, 'Shayan', 'Developer', 'KNR', 30000, 3],
    [1000, 'Nihaan', 'Developer', 'Kochi', 25000, 3],

]

//1 Print all employee name 
console.log("all employee names are: ")
employee.forEach((emp => console.log(emp[1])));


//2 Print total number of employee

console.log(`total number of employees: ${employee.length}`);

//3 Print developer employee details
console.log("Print developer employee details");
console.log(employee.filter((emp => emp[2] === "Developer")));

//4 Print all employee details whose salary > 30000
console.log("all employee details whose salary > 30000");
console.log(employee.filter((emp => emp[4] > 30000)));

//5 Print details of employee Laisha
console.log("Print details of employee Laisha");
console.log(employee.filter((emp => emp[1] === "Laisha")));

//6 Sort employee based on descending order of salary
console.log("Sort employee based on descending order of salary");
console.log(employee.sort((n1, n2) => n2[4] - n1[4]));

//7 sort employee based on ascending order of experience
console.log("sort employee based on ascending order of experience");
console.log(employee.sort((n1, n2) => n1[5] - n2[5]));