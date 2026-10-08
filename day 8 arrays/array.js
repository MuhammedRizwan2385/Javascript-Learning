


//array creation
// var vehicle=[]; //declaration

// var vehicle = ["car", "bus", "bike", "plane", 200000, 567000];//initilization

//1 To fetch an item from an array

// console.log(vehicle[0]);


//2 To find the length of the array

// console.log(vehicle.length)

//3 Fetch every element of the array
//   of keyword: to get values in an array

// for (let i of vehicle) {
//     console.log(i);
// }


//4 To insert a new element in an array

// vehicle.push("Auto");
// console.log(vehicle);

// vehicle[vehicle.length] = "5555";
// console.log(vehicle);


//5  To get index position of values stored in an array
//  in keyword :to get index position of values stored in an array.

// for (let j in vehicle) {
//     console.log(j);
// }

//6   Fetch one by one elements of the array

// for (let i of vehicle) {
//     console.log(i);
// }



//To hold an expenses , and 

//Find total expense
//Find maximum expense
//Find minimum expense


// var expenses = [12000, 20000, 34000, 10000, 28000, 15000, 50000];
// var total = 0;
// for (let i of expenses) {
//     total += i;
// }
// console.log(total);
// console.log(Math.max(...expenses)); // we need to specify as rest parameters
// console.log(Math.min(...expenses)); // we need to specify as rest parameters


//Generate new array with values are subtracted from the total sum of the values
//input : var arr= [4,5,6]; (sum=15)
//output: var arr= [11,10,9]

// var sum = 15;
// var arr = [4, 5, 6];

// for (i = 0; i < arr.length; i++) {
//     arr[i] = sum - arr[i];
// }
// console.log(arr);

// find the occurence of a number

// var ary = [10, 24, 5, 43, 50, 17, 2];
// var element = 43;
// var flag = 0;
// for (let i of ary) {
//     if (i == element) {
//         flag = 1;
//         break;
//     }

// }
// (flag == 1) ? console.log("Element is found") : console.log("Element is not found");

// print pairs whose sum=9

// var ar = [2, 3, 4, 5];
// for (let i = 0; i < ar.length; i++) {
//     for (let j = 1; j < ar.length; j++) {
//         if (ar[i] + ar[j] == 9) {
//             console.log(ar[i], ar[j]);
//         }
//     }
// }

var ar = [2, 3, 4, 5];
for (let i of ar) {
    for (let j of ar) {
        if (i + j == 9) {
            console.log(`The pairs are (${i},${j})`);
        }
    }
}

// /Nested Array
//print all elements, whose values are less than 10 in given array
a = [
    [1, 2],
    [10, 22],
    [14, 21],
    [3, 6],
    [5, 9],
    [19, 28],
]

// console.log(a);

// for (let i of a) {
//     for (let j of i) {
//         if (j < 10) {
//             console.log(j);
//         }
//     }
// }

//[id,name,designation,location,salary,experience]

employee = [
    [1000, 'Neel', 'Developer', 'Kochi', 25000, 3], //emp
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

// for (let i of employee) {

//     console.log(i[1]);

// }

//2 Print total number of employee

// console.log(`There are ${employee.length}  employees`);

//3 Print developer employee details

// for (let i of employee) {
//     if (i[2] == "Developer") {
//         console.log(i);
//     }
// }

//4 Print all employee details whose salary > 30000

// console.log("employee details whose salary > 30000");
// for (let i of employee) {
//     if (i[4] > 30000) {
//         console.log(i);
//     }
// }

//5 Print details of employee Laisha

// console.log("details of employee Laisha");
// for (let i of employee) {
//     if (i[1] == "Laisha") {
//         console.log(i);
//     }
// }

//6 Sort employee based on descending order of salary
console.log("descending order of salary");
employee.sort((emp1, emp2) => emp2[4] - emp1[4]);
console.log(employee);

//6 Sort employee based on ascending order of experience
console.log("ascending order of experience");
employee.sort((emp1, emp2) => emp1[5] - emp2[5]);
console.log(employee);


// // // // // // // Note // // // // // 
// Ascending
//array.sort((a, b) => a[index] - b[index]);

// Descending
//array.sort((a, b) => b[index] - a[index]);