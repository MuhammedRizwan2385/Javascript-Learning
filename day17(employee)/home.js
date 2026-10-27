const username=localStorage.getItem("username");

console.log(username);
head1.innerHTML=`Welcome ${username}`;

function logout(){
    localStorage.clear();
    window.location.href="index.html";
}

// adding a new employee details to the local storage
function addEmployee(){
    const employee={
        id:empid.value,
        name:empname.value,
        address:empaddr.value,
        desig:empdesg.value,
        exp:empexp.value,
        sal:empsal.value,
    }

    if(employee.id in localStorage){
        alert("Employee already exist");
    }
    else{
      localStorage.setItem(employee.id,JSON.stringify(employee));

      alert("Employee details added");
      empid.value="";
      empname.value="";
      empaddr.value="";
      empdesg.value="";
      empexp.value="";
      empsal.value="";
    }

}

function search(){
    
    let key=emp.value;
    const employee=JSON.parse(localStorage.getItem(key))
    // console.log(employee);

    result.innerHTML=`
    <div class="card" style="width:18rem">
    <h3>Employee Details</h3>
    <ul class="list-group list-group-flush">
     <li class="list-group-item">${employee.id}</li>
     <li class="list-group-item">${employee.name}</li>
     <li class="list-group-item">${employee.address}</li>
     <li class="list-group-item">${employee.desig}</li>
     <li class="list-group-item">${employee.exp}</li>
     <li class="list-group-item">${employee.sal}</li>
    </ul>
    </div>
    `
     


}
