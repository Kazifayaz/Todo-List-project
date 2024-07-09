// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    // Trim the input value
    var taskContent = taskInput.value.trim();
  
    // If input is empty, show alert and return
    if (taskContent === "") {
      alert("Please enter your task.");
      return;
    }
  
    // Create task item elements
    var taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    
    var taskText = document.createElement("span");
    taskText.textContent = taskContent;
    taskItem.appendChild(taskText);
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function() {
      taskItem.remove();
    });
    taskItem.appendChild(deleteButton);
  
    // Add click event to mark task as completed
    taskItem.addEventListener("click", function() {
      taskItem.classList.toggle("completed");
    });
  
    // Append task item to task list and clear input
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
  