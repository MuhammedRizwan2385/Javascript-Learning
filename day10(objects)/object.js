//  // // // Objects- collection of key/value pairs.

var a = [10, 20, 30];
console.log(typeof (a)); // array is also treated as object

var employee = {
    id: 1,
    name: "Rizwan",
    designation: "Developer",
    salary: 85000,
    experience: 4
};

// display the employee object

console.log(employee);

// for fetching particular value from an object
// object_name["key"] or object_name.key

console.log(employee.name);
console.log(employee["salary"]);


// // // // To check whether a particular key is present in the employee object. we can use in operator.

//  // in operator returns boolean value

// check experience.

console.log("experience" in employee);
console.log("gender" in employee);


//  add or insert new key/value pairs to object
//  // object_name["key"]=value;
//  or  object_name.keyname=value;

// adding gender
employee["gender"] = "male";

// adding isvaccinated

employee.isvaccinated = true;

console.log(employee);

// add vaccine

employee.vaccine = "covieshield";
console.log(employee);

// updating vaccine.

employee.vaccine = "Covaxin";

// incrementing salary

employee.salary += 5000;

console.log(employee);

// printing key and value one by one

for (let key in employee) {
    console.log(`${key} : ${employee[key]}`);
}

// for deleting a key from object use delete keyword

delete employee.experience;
console.log(employee); //deleted experience



