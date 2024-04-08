import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onEdit, onDelete, filterOption, onClearAll }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filterOption === "all") {
      return true; // Show all tasks
    } else if (filterOption === "completed") {
      return task.completed; // Show only completed tasks
    } else if (filterOption === "ongoing") {
      return !task.completed; // Show only active tasks
    }
    return true;
  });

  return (
    <div>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
