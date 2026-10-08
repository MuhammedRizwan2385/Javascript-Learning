// print all vowels in the string

str="hai hello";
vowels=['a','e','i','o','u',"A","E","I","O","U"];//array
// print the vowles present in str
Array.from(str).filter(char=>vowels.includes(char)).forEach(char=>console.log(char));

let text = "ABCDEFG";
console.log(Array.from(text));