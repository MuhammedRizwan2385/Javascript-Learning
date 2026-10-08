var n1=500;
var name="riz";
var age="25";

/*JavaScript Number() Method: The Number() method is used to create a primitive type Number object. It takes one parameter which is the value of the number. This value could be passed with a string and the Number function will try to represent it as a number. If the argument could not be converted into a number, it returns a NaN value. This NaN value is not a valid number and cannot be used in any mathematical calculation. */

console.log(Number(age));
console.log(Number("500the"));//the can't be converted to number therefore NaN

/*JavaScript parseInt() Method: The parseInt() method is used to parse a string and convert it to an integer of a specified radix.
 It takes two parameters, the string to be parsed and the radix to be used. 
 The radix is an integer between 2 and 36 which represents the base of the number. 
 If parseInt() encounters a character while parsing that does not conform to the specified radix, it will ignore the character and all succeeding characters. 
 It then returns the value parsed up to that point as an integer.
 Spaces that are leading or trailing are allowed in this case.
 If the function gets the first character and cannot convert it to a number, it will return NaN unless the radix is bigger than 10. 
 This NaN value is not a valid number for any radix and cannot be used in any mathematical calculation. */

console.log(parseInt("500.25647"));
console.log(parseInt("500 256 789"));
console.log(parseInt("100px"));


// The parseFloat() method parses a value as a string and returns the first number.
/*If the first character cannot be converted, NaN is returned.

Leading and trailing spaces are ignored.

Only the first number found is returned.*/
// syntax : parseFloat(value)

console.log(parseFloat("12.5Kg")); //12.5
console.log(parseFloat("abnn"));

console.log(String(n1));

/*In JavaScript NaN is short for "Not-a-Number".

The isNaN() method returns true if a value is NaN.

The isNaN() method converts the value to a number before testing it.

*/
console.log(isNaN(Number(age)));
console.log(isNaN("thee")); //true because first it will convert to number datatype then when checking it is not number it has only alphabets
console.log(isNaN("5656"))//false because it is number

