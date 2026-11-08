function addStudent(){
let studentID=document.getElementById('StudentID').value;
let name=document.getElementById('Name').value;
let course=document.getElementById('Course').value;

if(studentID===""||name===""||course==="")
{
    alert("Fill details");
}

let tableResult=
`
<tr>
<td class="border border-3 me-3 border-black">${studentID}</td>
<td class="border border-3 me-3 border-black">${name}</td>
<td class="border border-3 me-3 border-black">${course}</td>

<td class="border border-3 me-3 border-black">

            <button type="button" onclick="editStudent(this)">
                <img src="pencil.png" width="40px">
            </button>

            <button type="button" onclick="deleteStudent(this)">
                <img src="https://cdn-icons-png.flaticon.com/512/9649/9649838.png" width="40px">
            </button>
</td>
</tr>
`
document.getElementById('result').innerHTML+=tableResult;



}

function editStudent(button) {
    let row = button.closest('tr');
    let tds = row.getElementsByTagName('td');

    // Prompt the user, pre-filling the current values so they don't have to retype everything
    let newId = prompt("Edit Student ID:", tds[0].innerText);
    let newName = prompt("Edit Name:", tds[1].innerText);
    let newCourse = prompt("Edit Course:", tds[2].innerText);

    // Check if the user clicked "Cancel" (returns null) or left fields empty
    if (newId !== null && newName !== null && newCourse !== null) {
        if (newId.trim() !== "" && newName.trim() !== "" && newCourse.trim() !== "") {
            // Directly update the table row's text content
            tds[0].innerText = newId;
            tds[1].innerText = newName;
            tds[2].innerText = newCourse;
        } else {
            alert("Changes cancelled because fields cannot be empty.");
        }
    }
}

function deleteStudent(button){
    let row=button.closest('tr');
    row.remove();
}