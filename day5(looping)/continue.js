// program to print the value of i

for(let i=1;i<=5;i++)
{//continue condition
    if(i==3)
    {
        continue;
    /* when i equal to 3 the continue statement executes and it will skip the third iteration.then i becomes 4 and the test condition and other statements is evaluted again.hence 4 and 5 are printed in next iterations. */
    }
    console.log(i);
}