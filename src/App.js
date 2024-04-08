import React, { useState } from "react";
import Header from "./Header";
import Title from "./Title";
import AddTask from "./AddTask";
import DropdownMenu from "./DropdownMenu";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterOption, setFilterOption] = useState("all");
  const [isAscending, setIsAscending] = useState(true); // State to track sorting order for quantity
  const [isAlphabetical, setIsAlphabetical] = useState(true); // State to track sorting order for alphabetical order

  const handleAddTask = (newTask) => {
    const newTaskList = [
      ...tasks,
      { id: Date.now(), taskName: newTask, completed: false },
    ];
    setTasks(newTaskList);
  };

  const handleEditTask = (id, updatedTask, isCompleted) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, taskName: updatedTask, completed: isCompleted }
        : task,
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleFilterChange = (selectedOption) => {
    setFilterOption(selectedOption);
  };

  const calculateCompletionPercentage = () => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    const totalTasks = tasks.length;
    return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  };

  const sortTasksByQuantity = () => {
    const sortedTasks = [...tasks].sort((a, b) => {
      const quantityA = parseInt(a.taskName.split(" ")[0]);
      const quantityB = parseInt(b.taskName.split(" ")[0]);
      if (isAscending) {
        return quantityA - quantityB;
      } else {
        return quantityB - quantityA;
      }
    });
    setTasks(sortedTasks);
    setIsAscending(!isAscending); // Toggle sorting order for quantity
  };
  
  const sortTasksAlphabetically = () => {
    const sortedTasks = [...tasks].sort((a, b) => {
      if (isAlphabetical) {
        return a.taskName.localeCompare(b.taskName);
      } else {
        return b.taskName.localeCompare(a.taskName);
      }
    });
    setTasks(sortedTasks);
    setIsAlphabetical(!isAlphabetical); // Toggle sorting order for alphabetical order
  };
  
  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="container">
      <Header />
      <Title />

      <div className="input">
        <DropdownMenu onFilterChange={handleFilterChange} />
        <AddTask addTask={handleAddTask} />
      </div>
      <div className="add-task-container">
        <button className="action-button" onClick={sortTasksByQuantity}>
          Sort Quantity
        </button>
        <button className="action-button" onClick={sortTasksAlphabetically}>
          Sort Alphabetically
        </button>
        <button className="action-button" onClick={clearAllTasks}>
          Clear All
        </button>
      </div>

      <h3>you have {tasks.length} items in list</h3>
      <h3>{calculateCompletionPercentage()}% Completed</h3>
      <TaskList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
        filterOption={filterOption}
      />
    </div>
  );
}

export default App;
