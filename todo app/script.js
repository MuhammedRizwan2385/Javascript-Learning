
    function addTask() {
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please fill the form");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <div class="flex justify-evenly mt-6 items-center">
            <img src="https://static.vecteezy.com/system/resources/previews/016/774/516/original/purple-check-mark-icon-on-transparent-background-free-png.png" width="40px">

            <span class="task-text">${task}</span>

            <button type="button" onclick="editTask(this)">
                <img src="pencil.png" width="40px">
            </button>

            <button type="button" onclick="deleteTask(this)">
                <img src="https://cdn-icons-png.flaticon.com/512/9649/9649838.png" width="40px">
            </button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}


function editTask(button) {
    let li = button.parentNode;
    // console.log(li);

    let span = li.querySelector("span");
    console.log(span);

    let currentText = span.textContent;
    let newText = prompt("Enter task", currentText);

    if (newText !== null && newText.trim() !== "") {
        span.textContent = newText;
    }
}

function deleteTask(button){
    let li=button.closest("li");
    li.remove();
    
}