import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (searchValue) => {
    setSearchText(searchValue);
  };

  const handleItemFormSubmit = (newItem) => {
   
    console.log("New item submitted:", newItem);
    
  };

  const itemsToDisplay = items.filter((item) => {
    const categoryMatches =
      selectedCategory === "All" || item.category === selectedCategory;
    const searchTextMatches = item.name.toLowerCase().includes(searchText.toLowerCase());

    return categoryMatches && searchTextMatches;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
