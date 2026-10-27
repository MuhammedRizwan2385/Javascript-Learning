function login(){
    const username=document.getElementById("uname").value;
    console.log(username);
    localStorage.setItem("username",username);
    window.location.href="home.html";
}