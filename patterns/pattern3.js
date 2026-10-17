/*

 // pattern -3 Inverted Right-Angled Triangle 

 Enter rows for Inverted Right-Angled Triangle: 5
* * * * * 
* * * * 
* * * 
* * 
* 

=== Code Execution Successful ===

 */

n=5;
for(let i=n;i>=1;i--)
{   let row="";
    for(let j=1;j<=i;j++)
    {row+="*";

    }
    console.log(row);
}