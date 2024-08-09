import { useState } from "react";
import ListMember from "./ListMember";

export default function SortItem({
  items,
  handleDeleteItem,
  handleStrikethrough,
  sortItems,
}) {
  const [option, setOption] = useState("kill");

  if (option === "kill")
    sortItems = items
      .slice()
      .sort((a, b) => Number(b.killMe) - Number(a.killMe));

  if (option === "dontKill")
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.killMe) - Number(b.killMe));

  return (
    <>
      <div className="body-list">
        <h2 className="title">Danh sách báo thù </h2>
        <ListMember
          items={sortItems}
          onDeleteItem={handleDeleteItem}
          onStrikethrough={handleStrikethrough}
        />
      </div>
      <div className="sort-item">
        <label>Sort đối tượng</label>
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value="kill">Kill</option>
          <option value="dontKill">Don't Kill</option>
        </select>
        <button className="button">Submit</button>
      </div>
    </>
  );
}
