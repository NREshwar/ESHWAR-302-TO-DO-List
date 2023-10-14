npx create-react-app todo-list-app
cd todo-list-app
import React from 'react';

function TodoList() {
  return (
    <div>
      <h1>To-Do List</h1>
      {/* Add your To-Do List code here */}
    </div>
  );
}

export default TodoList;
import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    task: ''
  };

  handleInputChange = e => {
    this.setState({ task: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddTask(this.state.task);
    this.setState({ task: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          value={this.state.task}
          onChange={this.handleInputChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default AddTask;
import React from 'react';

function Task(props) {
  return (
    <li>
      {props.task}
      <button onClick={() => props.onDeleteTask(props.id)}>Delete</button>
    </li>
  );
}

export default Task;
import React, { Component } from 'react';
import Task from './Task';
import AddTask from './AddTask';

class TodoList extends Component {
  state = {
    tasks: [
      { id: 1, task: 'Buy groceries' },
      { id: 2, task: 'Go for a walk' }
    ]
  };

  renderTasks() {
    return this.state.tasks.map(task => (
      <Task key={task.id} id={task.id} task={task.task} onDeleteTask={this.handleDeleteTask} />
    ));
  }
handleAddTask = task => {
    const tasks = [...this.state.tasks];
    tasks.push({ id: tasks.length + 1, task });
    this.setState({ tasks });
  };

  handleDeleteTask = id => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({ tasks });
  };

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <AddTask onAddTask={this.handleAddTask} />
        <ul>{this.renderTasks()}</ul>
      </div>
    );
  }
}

export default TodoList;
import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    task: ''
  };

  handleChange = e => {
    this.setState({ task: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddTask(this.state.task);
    this.setState({ task: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.task} onChange={this.handleChange} />
        <button>Add Task</button>
      </form>
    );
  }
}

export default AddTask;
class Task extends Component {
  handleToggleCompleted = () => {
    this.props.onToggleCompleted(this.props.task.id);
  };

  render() {
    const { task } = this.props;

    return (
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={this.handleToggleCompleted}
        />
        {task.text}
      </div>
    );
  }
}
handleToggleCompleted = id => {
  const { tasks } = this.state;
  const index = tasks.findIndex(task => task.id === id);
  const updatedTasks = [
    ...tasks.slice(0, index),
    { ...tasks[index], completed: !tasks[index].completed },
    ...tasks.slice(index + 1)
  ];

  this.setState({ tasks: updatedTasks });
};
state = {
  tasks: [],
  filter: 'all'
};
handleFilterChange = filter => {
  this.setState({ filter });
};

getFilteredTasks = () => {
  const { tasks, filter } = this.state;

  switch (filter) {
    case 'completed':
      return tasks.filter(task => task.completed);
    case 'incomplete':
      return tasks.filter(task => !task.completed);
    default:
      return tasks;
  }
};
render() {
  const { tasks, filter } = this.state;
  const filteredTasks = this.getFilteredTasks();

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTask onAddTask={this.handleAddTask} />
      <div>
        <button onClick={() => this.handleFilterChange('all')} disabled={filter === 'all'}>
          All
        </button>
        <button onClick={() => this.handleFilterChange('completed')} disabled={filter === 'completed'}>
          Completed
        </button>
        <button onClick={() => this.handleFilterChange('incomplete')} disabled={filter === 'incomplete'}>
          Incomplete
        </button>
      </div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} onToggleCompleted={this.handleToggleCompleted} />
      ))}
    </div>
  );
}
