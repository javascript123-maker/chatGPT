
let tasks = [];
function addTask() {
  

  const userInput = document.getElementById('task-input');
  const userText = userInput.value;

  if (userText !== '') {
    
    tasks.push({text : userText, completed : false});
    
    userInput.value = '';
    displayTasks();
  }
  
}

function displayTasks(filter = 'all') {
  
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = ''; // Clears any existing content inside the <ul> This ensures that the list is reset before displaying updated tasks, avoiding duplicates.

  tasks.filter((task) => filter === 'all' || filter === 'completed' && task.completed )
  .forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
       <span onclick="toggleTask(${index})">${task.text}</span>
       <button onclick="deleteTask(${index})">Delete</button>
    `;
    
    taskList.appendChild(li);
  })


}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function filterTasks(filter) {
  displayTasks(filter);
}

