document.addEventListener('DOMContentLoaded', () => { // wait for page to be loaded
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); //get text in the input place

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        li.appendChild(deleteButton);

        // Add task to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";

        // Add event listener to toggle "completed"
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Add event listener for the delete button
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents the li click event from firing
            taskList.removeChild(li);
        });
    }

    // Event listener for the add button
    addButton.addEventListener('click', addTask);
});