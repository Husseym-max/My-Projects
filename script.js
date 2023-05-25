// Retrieve the necessary elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Store the tasks
let tasks = [];

// Handle form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  const taskText = input.value.trim(); // Get the task text
  if (taskText !== '') {
    addTask(taskText); // Add the task to the list
    input.value = ''; // Clear the input field
    input.focus(); // Set the focus back to the input field
  }
});

// Add a new task
function addTask(taskText) {
  const task = { text: taskText, completed: false }; // Create a task object

  tasks.push(task); // Add the task to the array

  renderTasks(); // Update the list
}

// Render the tasks
function renderTasks() {
  todoList.innerHTML = ''; // Clear the list

  tasks.forEach(function(task, index) {
    const li = document.createElement('li'); // Create an <li> element

    const checkbox = document.createElement('input'); // Create a checkbox
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      toggleTaskCompleted(index); // Toggle the completed status
    });

    if (task.completed) {
      li.classList.add('completed'); // Add a class to indicate completed task
      checkbox.checked = true; // Check the checkbox if task is completed
    }

    const span = document.createElement('span'); // Create a <span> element
    span.textContent = task.text; // Set the text content

    const deleteButton = document.createElement('button'); // Create a delete button
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteTask(index); // Delete the task
    });


    li.appendChild(checkbox); // Append the checkbox to the <li>
    li.appendChild(span); // Append the <span> to the <li>
    li.appendChild(deleteButton); // Append the delete button to the <li>

    todoList.appendChild(li); // Append the <li> to the <ul>
});
}
// Delete a task
function deleteTask(index) {
    tasks.splice(index, 1); // Remove the task from the array
  
    renderTasks(); // Update the list
  }