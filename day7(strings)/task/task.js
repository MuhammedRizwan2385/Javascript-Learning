/*1 What will be output the following print statement in js
console.log("hari\"".length) */

// console.log("hari\"".length);

// note string.length returns the length of a string.

//2 Explore the includes, startswith and endswith function of a string

// includes
// let text = "Lets visit kollam.Its a nice place."
// console.log(text.includes("kollam"));
// console.log(text.includes("kerala"));

// startswith
// console.log(text.startsWith("Lets"));
// console.log(text.endsWith("Hai"));

/*3 Extract the amount out of  the string
    "Please give Rs 10000"*/

let str = "Please give Rs 10000";
amount = str.match(/\d+/);
console.log(amount[0]);




/*4 Try to Change  4th character of a given string
    "Where you able to do it?"*/

// Actually strings are immutable means it cant be changed but we can convert it to array and modify it.

// let text1 = "Rizvan";
// let text1Array = text1.split("");
// text1Array[3] = 'w';
// text1 = text1Array.join("");
// console.log(text1);


//5 Note on All string methods with programs

//refer book

/*6 Write a function to check if two strings are anagrams of each other. Anagrams have the same characters but in a different order. For example, "listen" and "silent" are anagrams.*/

// function anagrams(str1,str2){
//     if(str1.length!=str2.length)
//         return "not anagrams";

//     str1=str1.toLowerCase();
//     str2=str2.toLowerCase();
//     let a=str1.split("").sort().join("");
//     let b=str2.split("").sort().join("");
//     if(a==b){
//         return "anagrams";
//     }
//     else{
//         return "not anagrams";
//     }

// }
// var str1="listen";
// var str2="silent";
// console.log(anagrams(str1,str2));


//7 Write a function to count the number of vowels and consonants in a given string.

function vowelsconsonants(word) {
    var vowelCount = 0, consonantCount = 0;
    for (let i of word) {
        if (i == 'A' || i == 'a' || i == 'E' || i == 'e' || i == 'I' || i == 'i' || i == 'O' || i == 'o' || i == 'U' || i == 'u') {
            vowelCount += 1;
        }
        else {
            consonantCount += 1;
        }
    }
    console.log("vowelcount:", vowelCount);
    console.log("Consonantcount:", consonantCount);

}
var word = "silent";
vowelsconsonants(word);

//8 Write a function that capitalizes the first letter of each word in a sentence. For example, "hello world" should become "Hello World.“

function capitalise(sentence) {
    var newsentence = sentence.split(" ");
    for (let i = 0; i < newsentence.length; i++) {
        newsentence[0] = newsentence[0][0].toUpperCase() + newsentence[0].slice(1);
    }
    newsentence = newsentence.join(" ")
    console.log(newsentence);

}
capitalise("hello world");


/*9 Implement a function to perform basic string compression using the counts of repeated characters. For example, the string "aabcccccaaa" would become "a2b1c5a3.“*/

/*10 Implement a basic string compression without creating a separate function. Use loops and conditional statements to create the compressed string.*/