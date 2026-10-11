pattern="ABCABBC";

// find first recursive character from the given pattern

// output:A

out={};
for(let char of pattern){
    if(char in out){
        console.log(`First recursive character : ${char}`);
        break;
    }
    else{
        out[char]=1;
    }
}