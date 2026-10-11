// TASK - 2
const programmingLanguages = [
  {
    name: "JavaScript",
    yearCreated: 1995,
    paradigms: ["Imperative", "Functional"],
    popular: true,
    creator: "Brendan Eich",
  },
  {
    name: "Python",
    yearCreated: 1991,
    paradigms: ["Imperative", "Object-oriented", "Functional"],
    popular: true,
    creator: "Guido van Rossum",
  },
  {
    name: "Java",
    yearCreated: 1995,
    paradigms: ["Object-oriented", "Imperative"],
    popular: true,
    creator: "James Gosling",
  },
  {
    name: "C++",
    yearCreated: 1983,
    paradigms: ["Object-oriented", "Procedural"],
    popular: true,
    creator: "Bjarne Stroustrup",
  },
  {
    name: "Ruby",
    yearCreated: 1995,
    paradigms: ["Object-oriented", "Imperative"],
    popular: true,
    creator: "Yukihiro Matsumoto",
  },
];

// Question 1: Print the names of all programming languages in the array.

console.log("names of all programming languages");
programmingLanguages.forEach(p => console.log(p.name));
console.log("\n");

// Question 2: Print the total number of programming languages in the array.
console.log("total number of programming languages in the array.");
console.log(programmingLanguages.length);
console.log("\n");
// Question 3: Print the languages that are popular.

console.log("the languages that are popular.");
programmingLanguages.filter(p => p.popular === true).forEach(p => console.log(p.name));
console.log("\n");

// Question 4: Print the names of the languages created after the year 2000.

console.log("the languages created after the year 2000.");
result = programmingLanguages.filter(p => p.yearCreated > 2000);
if (result.length > 0) {
  result.forEach(p => console.log(p.name));
}
else {
  console.log("There are no languages created after 2000");
}
console.log("\n");


// Question 5: Print the languages that are both functional and object-oriented.

console.log(" languages that are both functional and object-oriented.");
programmingLanguages.filter(p => (p.paradigms.includes("Object-oriented")) && (p.paradigms.includes("Functional"))).forEach(p => console.log(p.name));
console.log("\n");

// Question 6: Print the names of the creators of the languages.

console.log("names of the creators of the languages.");
programmingLanguages.forEach(p => console.log(`${p.name} :${p.creator}`));
console.log("\n");


// Question 7: Print the names of languages that have "Script" in their name.

console.log(`the names of languages that have "Script" in their name.`);
programmingLanguages.filter(p => p.name.includes("Script")).forEach(p => console.log(p.name));