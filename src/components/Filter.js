import React, { useState, useEffect } from "react";

function Filter({ onCategoryChange, onSearchChange, search}) {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSearchText(search);
  }, [search]);

  function handleSearchChange(event) {
    const value = event.target.value;
    setSearchText(value);
    onSearchChange(value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
