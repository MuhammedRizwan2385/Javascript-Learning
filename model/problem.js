// fact
// function fact(n)
// {
//     if(n==1)
//     {
//         return n;
//     }
//     return n*fact(n-1);
// }
// console.log(fact(5));

// obj
// var myobj = {
//     name: "riz",
//     age: 21,
//     clg: "tkmit"
// };
// for (let i in myobj) {
//     console.log(`${i}:${myobj[i]}`);
// }

// max of three or more
// function maxofthree(...numbers) {
//     return Math.max(...numbers);
// }
// console.log(maxofthree(13, 5, 6, 10, 15, 0));

// vowels

// str = "hai,hello"
// vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'O', 'o', 'U', 'u'];
// count = 0;
// Array.from(str).filter(item => vowels.includes(item) ? count += 1 : count = count);
// console.log(count);

// random number

// function randomgenerate() {
//     return Math.floor(Math.random() * 100);
// }
// console.log(randomgenerate());

// reverse string 

// function reversestring(str){
//     var newstr="";
//     for(let i of str)
//     {
//         newstr=i+newstr;
//     }
//     return newstr
// }
// console.log(reversestring("hello"));

// leap year or not

// year = 2024;
// if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
//     console.log("leap year");
// }
// else {
//     console.log("not leap year");
// }

// 

// degree to fareheit

// function dtof(degree) {
//     return (degree * 9 / 5) + 32;
// }
// console.log(dtof(1).toFixed(2));

// function ftod(f) {
//     return (f - 32) * 5 / 9;
// }
// console.log(ftod(1).toFixed(2));

// 5. Write a program that converts a given number of days into years, months, and days 
// (Assume 1 year = 365 days, 1 month = 30 days)

// let days = 396;
// let year = Math.floor(days / 365);
// days = days % 365;
// let month = Math.floor(days / 30);
// days = days % 30;
// console.log(`year:${year} month:${month} days=${days}`);

// Write a program that prints the Fibonacci sequence up to the 10th term. (3)

// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// n = 10;
// for (let i = 0; i < n; i++) {
//     console.log(fibonacci(i));
// }

// 10. Write a program that accepts a number and checks if it is a perfect square

// n=24;
// let sq=Math.sqrt(n);
// if(Number.isInteger(sq)){
//     console.log("perfect square");
// }
// else{
//     console.log("not perfect square");
// }