/*
problem-1 : Right-Angled Triangle Star Pattern
Enter rows for Right-Angled Triangle Pattern: 5
* 
* * 
* * * 
* * * * 
* * * * * 

=== Code Execution Successful ===
*/
n=5;
for(let i=1;i<=n;i++){
    let row="";
    for(let j=1;j<=i;j++)
    {row+="*";

    }
    console.log(row);
}

