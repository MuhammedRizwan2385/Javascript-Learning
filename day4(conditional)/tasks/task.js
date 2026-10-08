//1. Use logical operators to find whether the age of a person lies between 10 and 20?

var age=9;
if((age>=10)&&(age<=20))
{
    console.log("The age of the person lies between 10 and 20");
}
else{
    console.log("The age of the person not lies between 10 and 20");
}

//2 .Demonstrate the  use of switch case statements in js

// printing days of the week

var number=5;
switch(number)
{case 1 : console.log("Monday");
          break;
 case 2: console.log("Tuesday");
         break;
 case 3: console.log("wednesday");
         break;
case 4: console.log("Thursday");
         break;
case 5: console.log("Friday");
         break;
case 6: console.log("saturday");
         break;
case 7: console.log("sunday");
         break;
default: console.log("Invalid Day");
         break;
}

//3 .Find whether a number is divisible by 2 and 3
var n=10;
if((n%2==0)&&(n%3==0)){
    console.log("number is divisible by 2 and 3");
}
else{
 console.log("number is not divisible by 2 and 3");
}
//4 .Find whether a number is divisible by either 2 or 3

var n=10;
if((n%2==0)||(n%3==0)){
    console.log("number is divisible by either 2 or 3");
}
else{
 console.log("number is not divisible by either 2 or 3");
}

//5 .Print "You can Drive" or "You can't Drive" based on age being greater than 18 using ternary operator
var age=21;
(age>18)? console.log("You can drive"):console.log("You cant drive");