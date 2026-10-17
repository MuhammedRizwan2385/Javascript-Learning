// to get the data from local storage -getItem(key:string,value:string)

const username=localStorage.getItem('uname');
console.log(username);
head1.innerHTML=`welcome ${username}`

// to remove the data from local storage -removeItem(key:string)

function logout()
{
    localStorage.clear();
    window.location.href='index.html'
}