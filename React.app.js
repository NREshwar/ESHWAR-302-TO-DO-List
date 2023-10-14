import React, { useState, useEffect } from 'react';
import tasksData from './tasks.json';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData.tasks);
  }, []);

  const handleTaskToggle = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTasks(updatedTasks);
    // Update the JSON file with the updated data
    // You may need a backend server for this in a real application
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskToggle(task.id)}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
