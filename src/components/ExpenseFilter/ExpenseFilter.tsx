import React from "react";

const ExpenseFilter = () => {
  return (
    <select
      name="search-categories"
      id="search-categories"
      className="form-select"
    >
      <option value="">All Categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
