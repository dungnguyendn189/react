import Button from "./components/Button";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

export const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friendsList, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(null);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };

  const handleAddFriend = (friend) => {
    setFriends((prevState) => [...prevState, friend]);
    setShowAddFriend(false);
  };

  const handleSelectFriend = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend?.id ? null : friend));
  };

  const handleSplitBill = (value) => {
    setFriends(
      friendsList.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friendsList={friendsList}
          selectedFriend={selectedFriend}
          handleSelectFriend={handleSelectFriend}
        />
        {showAddFriend ? (
          <FormAddFriend handleAddFriend={handleAddFriend} />
        ) : null}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}
