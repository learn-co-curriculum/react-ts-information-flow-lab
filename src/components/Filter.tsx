import React from "react";

interface Props {
  onCategoryChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

function Filter({ onCategoryChange }: Props) {
  return (
    <div className="Filter">
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
