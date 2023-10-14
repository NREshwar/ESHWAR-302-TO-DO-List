
<!DOCTYPE html>
<html>
<head>
    <title>React To-Do List</title>
</head>
<body>
    <h1>React To-Do List</h1>

    <div id="app">
        <input type="text" id="task" placeholder="Add a new task">
        <button id="addTask">Add</button>

        <ul id="taskList">
            <!-- Tasks will be displayed here -->
        </ul>
    </div>

    <script>
        document.getElementById("addTask").addEventListener("click", function() {
            const taskText = document.getElementById("task").value;

            if (taskText.trim() === "") {
                alert("Task description can't be empty");
            } else {
                const taskItem = document.createElement("li");
                taskItem.textContent = taskText;

                const taskList = document.getElementById("taskList");
                taskList.appendChild(taskItem);

                document.getElementById("task").value = "";
            }
        });
    </script>
</body>
</html>
