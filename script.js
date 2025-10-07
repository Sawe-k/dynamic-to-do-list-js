// Wait for the HTML to fully load
document.addEventListener('DOMContentLoaded', () => {
    //Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
//Create the addTask Function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
     // Create the task list item
    const li = document.createElement('li');
    li.textContent = taskText;
    const removeBtn = document.createElement('button');
    // Create a remove button
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
             // Remove task when button is clicked
            removeBtn.onclick = function() {
                taskList.removeChild(li);
            };       
             // Append elements
            li.appendChild(removeBtn);
            taskList.appendChild(li);
            taskInput.value = '';
    }
      // Attach Event Listeners
  // Click event for the Add Task button
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                addTask();
            }
      });  
    });