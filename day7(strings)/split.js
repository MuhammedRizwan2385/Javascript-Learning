// The String method

// split- split a string into substrings using the specified separator and return them as an array.

// it takes 2 arguments.-separator and limit.

//  the split() method divides a string into an array of substrings using the provided delimiter.

let str = "Luminar";
console.log(str.split());
console.log(str.split(''));
console.log(str.split(','));
console.log(str.split('', 5));//separator and limit

// can u provide an example of using the split()method with the limit parameter?

const longText = "This is a long sentence with many wirds";
// limitedWords will be ['this','is','a','long'];

const limitedWords = longText.split(" ", 4);
console.log(limitedWords);