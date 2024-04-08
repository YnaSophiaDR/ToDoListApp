import React from "react";

const DropdownMenu = ({ onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <select onChange={handleChange} className="drop">
      <option value="all">All</option>
      <option value="ongoing">Ongoing</option>
      <option value="completed">Completed</option>
    </select>
  );
};

export default DropdownMenu;
