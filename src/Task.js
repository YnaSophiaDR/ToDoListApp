import React, { useState } from "react";

const Task = ({ task, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.description);

  const handleEdit = () => {
    if (editedTask.trim()) {
      onEdit(task.id, editedTask, task.completed);
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleToggleComplete = () => {
    onEdit(task.id, editedTask, !task.completed); // Toggle completion status
    setIsEditing(false); // Set editing to false when completing the task
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    }
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          onKeyPress={handleKeyPress}
          autoFocus
        />
      ) : (
        <span className="task-description">{task.description}</span>
      )}
      <button
        onClick={isEditing ? handleEdit : handleToggleComplete} // Toggle between editing and completing
        className="edit-button"
      >
        {isEditing ? "Save" : "Complete"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Task;
