// print count of each item in the given array
a=[10,10,20,20,30,30,40,40,50,50,50,60];
b={};
a.map(x=>x in b? b[x]+=1:b[x]=1);
console.log(b);