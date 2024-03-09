import React from "react";

const DropdownMenu = ({ onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
    </select>
  );
};

export default DropdownMenu;
