//[rollno, name, class, markofmaths, markofphy,markofchem]
arr = [
    [1, 'manu', 12, 45, 65, 70],
    [2, 'amal', 10, 67, 86, 75],
    [3, 'sara', 12, 86, 87, 90],
    [4, 'vimal', 10, 86, 56, 93],
    [5, 'shaju', 12, 56, 61, 70],
    [6, 'kavita', 10, 55, 56, 60],
]

//1 sort the student in descending order of markofmaths

console.log("student in descending order of mark of maths");
arr.sort((s1, s2) => s2[3] - s1[3]).forEach(s => console.log(s[1], s[3]));

//2 find all students who are in class 10th

console.log("all students who are in class 10th");
arr.filter(s => s[2] === 10).forEach(s => console.log(s[1], s[2]));

//3 print the names of all students

console.log("Name of all students");
arr.forEach(s => console.log(s[1]));

//4 print the details of kavita

console.log("Details of kavitha are:");
console.log(arr.filter(s => s[1] === "kavita").flat());

//5 print 1st student who has least mark in physics  

console.log("1st student who has least mark in physics");
console.log(arr.reduceRight((s1, s2) => s1[4] < s2[4] ? s1 : s2));

//6 Find which student have highest mark in Chemistry   5

console.log("1st student who has highest mark in chemistry");
console.log(arr.reduceRight((s1, s2) => s1[5] > s2[5] ? s1 : s2));


//7 Is amal is present or not?

console.log("Is amal is present or not");
if (arr.some(s => s[1] === "amal")) {
    console.log("Present");
}
else {
    console.log("Absent");
}



//8 print all marks in physics

console.log("all marks in physics");
arr.forEach(s => console.log(s[1], s[4]));



//9 Display only 10th std students names one by one

console.log("10th std students names");
arr.filter(s => s[2] === 10).forEach(s => console.log(s[1]));

//10 Is there any student who are studing in 11th std?

if (arr.some(s => s[2] === 11)) {
    console.log("There are students who are studying in 11th");
}
else {
    console.log("There are no students who are studying in 11th");

}