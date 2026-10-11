// student class
// student rollno,name,mark,grade

class Student {
    constructor(id, name, mark, grade) {
        this.sid = id;
        this.sname = name;
        this.mark = mark;
        this.grade = grade;
        console.log("student data created");

    }
    printDetails() {
        console.log(`Student ID : ${this.sid} student name: ${this.sname} student mark : ${this.mark} student grade : ${this.grade}`);
    }
}

s = new Student("TKI22CS051", "M Muhammed Rizwan", 98, "S");
s.printDetails();

s = new Student("TKI22CS050", "Jyothika M", 89, "A+");
s.printDetails();
