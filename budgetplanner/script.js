function register(){
    const username=document.getElementById("uname").value;
    const email=document.getElementById("mail").value;
    const password=document.getElementById("pass").value;
    const confirmPassword=document.getElementById("confirmpass").value;

    // checking whether the user already exists
     
    if(username in localStorage){
        alert("User already exists.login with your credentials");

          
        // clearing input fields

        uname.value="";
        mail.value="";
        pass.value="";
        confirmpass.value="";
    }

    // checking whether both passwords are same
    else if(password!==confirmPassword){
        alert("password and confirm password should match");
                
        // clearing input fields

        pass.value="";
        confirmpass.value="";
    }
    // adding new user
    else{
        const user={
            username:username,
            email:email,
            password:password,
        }
        localStorage.setItem(username,JSON.stringify(user));

        // clearing input fields
        uname.value="";
        mail.value="";
        pass.value="";
        confirmpass.value="";

        alert("User successfully registered");
        window.location.href="index.html";

    }
    
}

function login(){
    const loginUsername=document.getElementById("loginuname").value;
    const  loginPassword=document.getElementById("loginpass").value;
    
    if(( loginUsername in localStorage))
    {
        const loginuser=JSON.parse(localStorage.getItem(loginUsername));
        if(loginPassword===loginuser.password){
            localStorage.setItem("loginUname",loginUsername);
            window.location.href="home.html";
        }
        else{
            alert("Invalid Credentials")
            loginpass.value="";
        }
    }
    else{
       

        alert("User not exist.Sign up");
        loginuname.value="";
        loginpass.value="";
    }

}

// welcome

// const homeuser=localStorage.getItem("loginUname");
// head1.innerHTML=`Welcome ${homeuser}`;

// function logout(){

//     window.location.href="index.html";
// }

// income button function

// var totalBalance=0;
// var totalExpense=0;
// function income(){
//     let incomeType=document.getElementById("incometype").value;
//     let incomeAmount=Number(document.getElementById("incomeamount").value);
//     if(incomeAmount<=0||!incomeAmount){
//         alert("Enter a valid Type and Amount");
//         document.getElementById("incomeamount").value="";

//     }
//     else{
//         totalBalance+=incomeAmount;
        
//         taking current date and time
//         let now = new Date();
//         let hours = now.getHours();
//         let minutes = now.getMinutes();
//         let seconds = now.getSeconds();

//         let date=now.getDate();
//         let month=now.getMonth()+1;
//         let year=now.getFullYear();

//         let DateAndTime=`${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;

//        let incomerow = `
//         <tr>
//             <td class="border-0 border-bottom border-2 border-success">${incomeType}</td>
//             <td class="border-0 border-bottom border-2 border-success text-success fw-bold">+${incomeAmount}</td>
//             <td class="border-0 border-bottom border-2 border-success">${totalBalance}</td>
//             <td class="border-0 border-bottom border-2 border-success">${DateAndTime}</td>
//         </tr>
//         `;
//         incomedetails.innerHTML+=incomerow;
//         document.getElementById("balance").innerHTML=`Rs ${totalBalance}/-`

//         alert("Income added successfully");
//         document.getElementById("incomeamount").value="";
//         document.getElementById("incometype").value="";
        
//     }
// }

// function expense(){
//     let expenseType=document.getElementById("expensetype").value;
//     let expenseAmount=Number(document.getElementById("expenseamount").value);
//     if(expenseAmount<=0||!expenseAmount){
//         alert("Enter a valid Type and Amount");
//         document.getElementById("expenseamount").value="";

//     }
//     else{
//         totalBalance-=expenseAmount;
//         totalExpense+=expenseAmount;
        
//         taking current date and time
//         let now = new Date();
//         let hours = now.getHours();
//         let minutes = now.getMinutes();
//         let seconds = now.getSeconds();

//         let date=now.getDate();
//         let month=now.getMonth()+1;
//         let year=now.getFullYear();

//         let DateAndTime=`${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;

//        let expenserow = `
//         <tr>
//             <td class="border-0 border-bottom border-2 border-danger">${expenseType}</td>
//             <td class="border-0 border-bottom border-2 border-danger text-danger fw-bold">-${expenseAmount}</td>
//             <td class="border-0 border-bottom border-2 border-danger">${totalBalance}</td>
//             <td class="border-0 border-bottom border-2 border-danger">${DateAndTime}</td>
//         </tr>
//         `;
//         expensedetails.innerHTML+=expenserow;
//         document.getElementById("expense").innerHTML=`Rs ${totalExpense}/-`
//          document.getElementById("balance").innerHTML=`Rs ${totalBalance}/-`


//         alert("expense added successfully");
//         document.getElementById("expenseamount").value="";
//         document.getElementById("expensetype").value="";

        
//     }
// }



// Welcome user
const homeuser = localStorage.getItem("loginUname");
if (head1) {
    head1.innerHTML = `Welcome ${homeuser}`;
}

// Initialize balances from localStorage for the specific user (default to 0 if none exists)
var totalBalance = Number(localStorage.getItem(`balance_${homeuser}`)) || 0;
var totalExpense = Number(localStorage.getItem(`totalExpense_${homeuser}`)) || 0;

// Load existing table data and balances when the home page loads
window.onload = function() {
    // Load saved income rows
    if (localStorage.getItem(`incomes_${homeuser}`)) {
        document.getElementById("incomedetails").innerHTML = localStorage.getItem(`incomes_${homeuser}`);
    }
    // Load saved expense rows
    if (localStorage.getItem(`expenses_${homeuser}`)) {
        document.getElementById("expensedetails").innerHTML = localStorage.getItem(`expenses_${homeuser}`);
    }
    
    // Update balance and expense displays on screen
    let balanceEl = document.getElementById("balance");
    if (balanceEl) balanceEl.innerHTML = `Rs ${totalBalance}/-`;

    let expenseEl = document.getElementById("expense");
    if (expenseEl) expenseEl.innerHTML = `Rs ${totalExpense}/-`;
};

function logout(){
    window.location.href = "index.html";
}

// Income button function
function income(){
    let incomeType = document.getElementById("incometype").value;
    let incomeAmount = Number(document.getElementById("incomeamount").value);
    
    if(incomeAmount <= 0 || !incomeAmount || incomeType.trim() === ""){
        alert("Enter a valid Type and Amount");
        document.getElementById("incomeamount").value = "";
        return;
    }
    
    totalBalance += incomeAmount;
    
    // Taking current date and time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

    let DateAndTime = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    let incomerow = `
    <tr>
        <td class="border-0 border-bottom border-2 border-success">${incomeType}</td>
        <td class="border-0 border-bottom border-2 border-success text-success fw-bold">+${incomeAmount}</td>
        <td class="border-0 border-bottom border-2 border-success">${totalBalance}</td>
        <td class="border-0 border-bottom border-2 border-success">${DateAndTime}</td>
    </tr>
    `;
    
    let incomeDetailsEl = document.getElementById("incomedetails");
    incomeDetailsEl.innerHTML += incomerow;
    
    // Save updated tables and balance to localStorage specific to this user
    localStorage.setItem(`incomes_${homeuser}`, incomeDetailsEl.innerHTML);
    localStorage.setItem(`balance_${homeuser}`, totalBalance);

    let balanceEl = document.getElementById("balance");
    if (balanceEl) balanceEl.innerHTML = `Rs ${totalBalance}/-`;

    alert("Income added successfully");
    document.getElementById("incomeamount").value = "";
    document.getElementById("incometype").value = "";
}

// Expense button function
function expense(){
    let expenseType = document.getElementById("expensetype").value;
    let expenseAmount = Number(document.getElementById("expenseamount").value);
    
    if(expenseAmount <= 0 || !expenseAmount || expenseType.trim() === ""){
        alert("Enter a valid Type and Amount");
        document.getElementById("expenseamount").value = "";
        return;
    }
    
    totalBalance -= expenseAmount;
    totalExpense += expenseAmount;
    
    // Taking current date and time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

    let DateAndTime = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    let expenserow = `
    <tr>
        <td class="border-0 border-bottom border-2 border-danger">${expenseType}</td>
        <td class="border-0 border-bottom border-2 border-danger text-danger fw-bold">-${expenseAmount}</td>
        <td class="border-0 border-bottom border-2 border-danger">${totalBalance}</td>
        <td class="border-0 border-bottom border-2 border-danger">${DateAndTime}</td>
    </tr>
    `;
    
    let expenseDetailsEl = document.getElementById("expensedetails");
    expenseDetailsEl.innerHTML += expenserow;
    
    // Save updated tables, balance, and total expense to localStorage specific to this user
    localStorage.setItem(`expenses_${homeuser}`, expenseDetailsEl.innerHTML);
    localStorage.setItem(`balance_${homeuser}`, totalBalance);
    localStorage.setItem(`totalExpense_${homeuser}`, totalExpense);

    let expenseEl = document.getElementById("expense");
    if (expenseEl) expenseEl.innerHTML = `Rs ${totalExpense}/-`;

    let balanceEl = document.getElementById("balance");
    if (balanceEl) balanceEl.innerHTML = `Rs ${totalBalance}/-`;

    alert("Expense added successfully");
    document.getElementById("expenseamount").value = "";
    document.getElementById("expensetype").value = "";
}

// Clear all data function for the logged-in user
function clearData(){
    if (confirm("Are you sure you want to clear all your transaction history and balances?")) {
        // Remove user-specific keys from localStorage
        localStorage.removeItem(`incomes_${homeuser}`);
        localStorage.removeItem(`expenses_${homeuser}`);
        localStorage.removeItem(`balance_${homeuser}`);
        localStorage.removeItem(`totalExpense_${homeuser}`);

        // Reset local variables
        totalBalance = 0;
        totalExpense = 0;

        // Clear tables from the UI
        document.getElementById("incomedetails").innerHTML = "";
        document.getElementById("expensedetails").innerHTML = "";

        // Reset balance & expense displays on screen
        let balanceEl = document.getElementById("balance");
        if (balanceEl) balanceEl.innerHTML = `Rs 0/-`;

        let expenseEl = document.getElementById("expense");
        if (expenseEl) expenseEl.innerHTML = `Rs 0/-`;

        alert("All your data has been cleared successfully.");
    }
}