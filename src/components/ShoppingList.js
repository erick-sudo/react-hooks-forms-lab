import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterMode, setFilterMode] = useState("C")
  const [searchString, setSearchString] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleFilterChange(event) {
    const mode = event.target.name === "filter" ? "C" : "S" 
    setFilterMode(mode);
    //alert("Changing Filter Mode")
  }

  function handleSearchChange(event) {
    // Handling change in character
    setSearchString(event.target.value);
    //alert("Changing Search String")
  } 

  function addToShoppingList(newItem) {
    setItems([newItem, ...items])
  }

  const itemsToDisplay = filterMode === "C" 
  ? items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  : items.filter((item) => {
    if (searchString === "") return true;

    return item.name.toLowerCase().includes(searchString.toLowerCase());
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addToShoppingList} />
      <Filter onCategoryChange={handleCategoryChange} searchString={searchString} onFocusOn={handleFilterChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
