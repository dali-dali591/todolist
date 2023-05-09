
let tasks = [];
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let newTask = taskInput.value;
  tasks.push(newTask);
  deleteTask();
  taskInput.value = "";
}
function deleteTask() {
  let taskList = $("#taskList")[0];
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.innerText = tasks[i];
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function() {
      tasks.splice(i, 1);
      deleteTask();
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  }
}