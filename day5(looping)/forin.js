// The for...in loop is used to iterate over the student object and print all  its properties.

// The object key is assigned to the variable key.
// student[key] is used to access the value of key.

const student={
    sname:"Monica",
    class:7,
    age:12
};
console.log(student);
console.log(student['sname']);
console.log(student.sname);
console.log(student.age);

for (let i in student)
{   //listing the properties
    //first keyname->value
    console.log(`${i} -> ${student[i]}`);
}

// example 2
const salaries={
    Jack:24000,
    paul:34000,
    monica:55000
}

// the for in loop is used to iterate over the properties of the salaries object. then the string $ is added to each value of the object

for (let i in salaries){
    console.log(`${i} : $${salaries[i]}`);
}