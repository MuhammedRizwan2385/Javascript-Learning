/*/1. Write a program to find GCD/HCF of 2 numbers HCF (highest common factor)


HCF(12,36)=12;

12={1,12,2,6,3,4}

36={1,36,2,18,3,12,4,9,6}
*/

var n1=48;
var n2=18;
console.log(gcd(n1,n2));
function gcd(a,b)
{

    if(b==0)
    {
        return a;
    }
    return gcd(b,a%b);
}

/*2. Write a program to check a number armstrong or not
input=153;
output=1^3 + 5^3 + 3^3 = 1+125+27=153 */

var input=153;
var inputcopy=153;
var result=0;
var sum=0;
while(input>0)
{
    rem=input%10;
    result=rem**3;
    sum=sum+result;
    input=Math.floor(input/10);
}
if(sum==inputcopy)
{
    console.log("The Number is armstrong");
}
else{
     console.log("The Number is not armstrong");
   
}

/*3. Write a program to print the pattern using nested looping
    1
    22
    333
    4444
*/
for (row = 1; row <= 4; row++) {
    str = "";
    for (column = 1; column <=row; column++) {
        str +=row;
    }
    console.log(str);
}

/*4. Write a program to print the pattern using nested looping - full pyramid
                                                                   
*/

var n=5;
for(row=1;row<=n;row++)
{let line="";
 line +=" ".repeat(n - row);
 line +="*".repeat(row * 2 - 1);
 console.log(line);
 

}

/*We take the number of rows as input from the user using prompt() and convert it into a number with parseInt().

The outer loop first adds spaces to move the stars toward the center and then adds stars with spaces.

Stars increase in each row to form a full pyramid shape, creating a simple star pattern program.*/