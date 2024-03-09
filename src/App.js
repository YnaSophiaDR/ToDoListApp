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

  const handleAddTask = (newTask) => {
    const newTaskList = [
      ...tasks,
      { id: Date.now(), description: newTask, completed: false },
    ];
    setTasks(newTaskList);
  };

  const handleEditTask = (id, updatedTask, isCompleted) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, description: updatedTask, completed: isCompleted }
        : task
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

  return (
    <div className="container">
      <Header />
      <Title />
      <AddTask addTask={handleAddTask} />
      <DropdownMenu onFilterChange={handleFilterChange} />
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
