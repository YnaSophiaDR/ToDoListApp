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
      {isEditing ? (
        <button className="button save-button" onClick={handleEdit}>
          Save
        </button>
      ) : (
        <button className="button modify-button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}
      <button className="button" onClick={handleDelete}>
        Delete
      </button>
      {!isEditing && (
        <button className="button complete-button" onClick={handleToggleComplete}>
          {task.completed ? "Undo" : "Complete"}
        </button>
      )}
    </li>
  );
};

export default Task;
