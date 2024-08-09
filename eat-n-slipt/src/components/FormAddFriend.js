import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ handleAddFriend }) {
  const [friend, setFriend] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");

  const id = crypto.randomUUID();

  function handleSubmit(e) {
    e.preventDefault();
    if (!friend || !image) return;
    handleAddFriend({
      id,
      name: friend,
      image: `${image}${id}`,
      balance: 0,
    });
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👻 Friend Name</label>
      <input
        type="text"
        value={friend}
        onChange={(e) => setFriend(e.target.value)}
      />
      <label>🖼️ Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
