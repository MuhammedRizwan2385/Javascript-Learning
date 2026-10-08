//Task 1: write a program to print largest of three numbers

// var n1=15,n2=20,n3=8;
// if((n1>n2)&&(n1>n3)){
//     console.log(`${n1} is larger`);
// }
// else if ((n2>n1)&&(n2>n3)){
//     console.log(`${n2} is larger`);
// }
// else{
//     console.log(`${n3} is larger`);
// }

// Task 2: Difference between while loop and do while loop.
// Task 3: Difference between break and continue.
// Task 4:multiplication table for 5 using do while

// var num=5;
// var i=1;
// do{
//     console.log(`${num} * ${i} = ${num*i}`);
//     i=i+1;

// }while(i<=10);

// Task 5:Write a program  to print the marks of a student in an object using for loop
		// Stud={ Amal=78,Kiran=98,Rahul=87}
const stud={
    Amal:78,
    Kiran:98,
    Rahul:87
};
for(let i in stud){
    console.log(`${i} : ${stud[i]}`);
}
