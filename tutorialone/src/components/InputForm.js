import { useState } from "react";

export default function InputForm({ onAddName }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    onAddName(name);
    setName("");
  };

  return (
    <div>
      <form className="form-input" onSubmit={handleSubmit}>
        <label>Nhập tên những kẻ giết bạn hôm nay 🗡️🔪</label>
        <input
          placeholder="Tên kẻ giết bạn"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="button">Add</button>
      </form>
    </div>
  );
}
