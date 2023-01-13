import React from "react";

function Filter({ category , onCategoryChange, onFocusOn, searchString, onSearchChange }) {
  return (
    <div className="Filter">
      <input type="text" name="search" onInput={onSearchChange} onClick={onFocusOn} placeholder="Search..." value={searchString} />
      <select value={category} name="filter" onClick={onFocusOn} onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
