function login()
{
    const username=document.getElementById("uname").value;
    console.log(username);
    // add data to localstorage

    localStorage.setItem("uname",username);

    // redirect to home
    window.location.href="home.html";
    
}