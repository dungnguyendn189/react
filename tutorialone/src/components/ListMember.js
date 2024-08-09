export default function ListMember({ items, onDeleteItem, onStrikethrough }) {
  const handleClick = (id) => {
    if (!id) return;
    onDeleteItem(id);
  };

  function handleStrikeThrough(e) {
    onStrikethrough(e);
  }

  return (
    <div className="list-member">
      {items.map((item) => (
        <div className="member-item" key={item.id}>
          <input
            className="member-checkbox"
            type="checkbox"
            value={item.killMe}
            onChange={(e) => handleStrikeThrough(item.id)}
          />
          <p className={item.killMe === true ? "title-throught" : "title-name"}>
            {item.name}
          </p>
          <button
            className="title-button"
            onClick={(id) => handleClick(item.id)}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}
