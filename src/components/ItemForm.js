import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({
        id: uuid(),
        name: e.target.name.value,
        category: e.target.category.value
      })
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" required/>
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
