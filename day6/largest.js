// write a program to print largest,second largest and sorted order among 3 numbers

let n1 = 48;
let n2 = 1200;
let n3 = 300;
if (n1 > n2 && n1 > n3) {
    console.log(`Largest is ${n1}`);
    if (n2 > n3) {
        console.log(`Second largest is ${n2}`);
        console.log(`Third  largest is ${n3}`);
    }
    else {
        console.log(`Second largest is ${n3}`);
        console.log(`Third  largest is ${n2}`);
    }
}
if (n2 > n1 && n2 > n3) {
    console.log(`Largest is ${n2}`);
    if (n1 > n3) {
        console.log(`Second largest is ${n1}`);
        console.log(`Third  largest is ${n3}`);
    }
    else {
        console.log(`Second largest is ${n3}`);
        console.log(`Third  largest is ${n1}`);
    }
}
if (n3 > n1 && n3 > n2) {
    console.log(`Largest is ${n3}`);
    if (n1 > n2) {
        console.log(`Second largest is ${n1}`);
        console.log(`Third  largest is ${n2}`);
    }
    else {
        console.log(`Second largest is ${n2}`);
        console.log(`Third  largest is ${n1}`);
    }
}