import { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

interface Props {
  items: {
    id: number;
    name: string;
    category: string;
  }[];
}

function ShoppingList({ items }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={onCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
