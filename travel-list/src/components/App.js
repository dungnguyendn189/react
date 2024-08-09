import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  console.log(items);
  function handleDeletedAllItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (confirmed) setItems([]);
  }
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  const handleDeletedItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeletedItem={handleDeletedItem}
        onToggleItem={handleToggleItem}
        onDeletedAllItems={handleDeletedAllItems}
      />
      <Stats items={items} />
    </div>
  );
}
