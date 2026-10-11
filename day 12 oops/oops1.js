
// 1.class

// class creation

class Employee {
    //instance initialisation
    setEmployee(id, name, designation, salary) {   //empid,empname etc..are the keys of our object
        this.empid = id,
            this.empname = name,
            this.empdesignation = designation,
            this.empsalary = salary
        console.log("Employee details created");
    }
    printEmployee() {
        console.log(this.empid, this.empname, this.empdesignation, this.empsalary)
    }
}

// // // to be execute a class then we need to create an object
// // onject/instance
// object creation syntax:
// object_name=new class_name();

emp = new Employee();
// objects1
emp.setEmployee(1000, 'Manoj', "Developer", 30000);
emp.printEmployee();

// object 2

emp.setEmployee(1001, "Rizwan", "Sap analyst", 65000);
emp.printEmployee();