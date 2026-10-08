// print word count from the given text


words = text.split(" ");

wordcount = {};
words.map(word => word in wordcount? wordcount[word]+= 1 : wordcount[word] = 1);

console.log(wordcount);



