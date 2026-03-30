function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.innerHTML = task + " <button onclick='deleteTask(this)'>X</button>";

    document.getElementById("taskList").appendChild(li);

    saveData();
    input.value = "";
}

function deleteTask(btn) {
    btn.parentElement.remove();
    saveData();
}

function saveData() {
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

function showTasks() {
    document.getElementById("taskList").innerHTML = localStorage.getItem("tasks");
}

showTasks();