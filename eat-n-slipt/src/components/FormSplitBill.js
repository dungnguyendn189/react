import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, handleSplitBill }) {
  const [bill, setBill] = useState("");
  const [userPaid, setUserPaid] = useState("");
  const [selectedUser, setSelectedUser] = useState("user");
  const paidFriend = bill ? bill - userPaid : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill && !userPaid) return;
    handleSplitBill(selectedUser === "user" ? paidFriend : -userPaid);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💵 Bill Total</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🙆 Your expense</label>
      <input
        type="text"
        value={userPaid}
        onChange={(e) =>
          setUserPaid(
            Number(e.target.value) > bill ? userPaid : Number(e.target.value)
          )
        }
      />
      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidFriend} />
      <label>💵 Who is paying the bill?</label>
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
