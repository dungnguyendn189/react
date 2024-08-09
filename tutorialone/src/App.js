import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import SortItem from "./components/SorItem";

const initialItems = [
  { id: 1, name: "Passports", quantity: 1, killMe: false },
  { id: 2, description: "Socks", quantity: 1, packed: false },
];

function App() {
  const [items, setItems] = useState([]);
  let sortItems = items;
  const handleDeleteItem = (e) => {
    const result = items.filter((item) => e !== item.id);
    setItems(result);
  };

  const handleAddName = (e) => {
    e &&
      setItems((items) => [
        ...items,
        { id: Date.now(), name: e, killMe: false },
      ]);
  };

  const handleStrikethrough = (e) => {
    setItems(
      items.map((item) =>
        item.id === e ? { ...item, killMe: !item.killMe } : item
      )
    );
  };

  return (
    <div className="app">
      <div className="container">
        <Header />
        <InputForm onAddName={handleAddName} />
        <body className="body">
          <SortItem
            sortItems={sortItems}
            items={items}
            setItems={setItems}
            handleDeleteItem={handleDeleteItem}
            handleStrikethrough={handleStrikethrough}
          />
        </body>
        <Footer items={items} sortItems={sortItems} />
      </div>
    </div>
  );
}

export default App;
