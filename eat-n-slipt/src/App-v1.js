// import { useState } from "react";

// const initialFriends = [
//   {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: "Sarah",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: "Anthony",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//   },
// ];

// function Button({ children, onClick }) {
//   return (
//     <button className="button" onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// export default function App() {
//   const [showAddFriend, setShowAddFriend] = useState(false);
//   const [friends, setFriends] = useState(initialFriends);
//   const [selectFriend, setSelectedFriend] = useState(null);

//   function handleShowAddFriend() {
//     setShowAddFriend(!showAddFriend);
//     setSelectedFriend(null);
//   }

//   function handleAddFriend(friend) {
//     setFriends((friends) => [...friends, friend]);
//     setShowAddFriend(false);
//   }

//   function handleSelection(friend) {
//     // console.log(friend);
//     // setSelectedFriend(friend);
//     setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
//     setShowAddFriend(false);
//   }

//   function handleSplitBill(value) {
//     console.log(value);
//     setFriends((friends) =>
//       friends.map((friend) =>
//         friend.id === selectFriend.id
//           ? { ...friend, balance: friend.balance + value }
//           : friend
//       )
//     );
//     setSelectedFriend(null);
//   }

//   return (
//     <div className="app">
//       <div className="sidebar">
//         <FriendList
//           friends={friends}
//           onSelection={handleSelection}
//           selectFriend={selectFriend}
//         />
//         {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
//         <Button onClick={handleShowAddFriend}>
//           {showAddFriend ? "Close" : "Add friend"}
//         </Button>
//       </div>
//       {selectFriend && (
//         <FormSplitBill
//           selectFriend={selectFriend}
//           onSplitBill={handleSplitBill}
//         />
//       )}
//     </div>
//   );
// }

// function FriendList({ friends, onSelection, selectFriend }) {
//   return (
//     <ul>
//       {friends.map((friend) => (
//         <Friend
//           friend={friend}
//           key={friend.id}
//           onSelection={onSelection}
//           selectFriend={selectFriend}
//         />
//       ))}
//     </ul>
//   );
// }

// function Friend({ friend, onSelection, selectFriend }) {
//   const isSelected = selectFriend?.id === friend.id;
//   return (
//     <li className={isSelected ? "selected" : ""}>
//       <img src={friend.image} alt={friend.name} />
//       <h3>{friend.name}</h3>
//       {friend.balance < 0 && (
//         <p className="red">
//           You own {friend.name} {Math.abs(friend.balance)}${" "}
//         </p>
//       )}
//       {friend.balance > 0 && (
//         <p className="green">
//           {friend.name} owns you {Math.abs(friend.balance)}${" "}
//         </p>
//       )}
//       {friend.balance === 0 && <p>You and {friend.name} are even</p>}

//       <Button onClick={() => onSelection(friend)}>
//         {isSelected ? "Close" : "Select"}
//       </Button>
//     </li>
//   );
// }

// function FormAddFriend({ onAddFriend }) {
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");

//   const id = crypto.randomUUID();
//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!name || !image) return;
//     const newFriend = {
//       id,
//       name,
//       image: `${image}?=${id}`,
//       balance: 0,
//     };
//     onAddFriend(newFriend);
//     setName("");
//     setImage("https://i.pravatar.cc/48");
//   }

//   return (
//     <form className="form-add-friend" onSubmit={handleSubmit}>
//       <label>👻 Friend Name</label>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <label>🖼️ Image Url</label>
//       <input
//         type="text"
//         value={image}
//         onChange={(e) => setImage(e.target.value)}
//       />
//       <Button>Add</Button>
//     </form>
//   );
// }

// function FormSplitBill({ selectFriend, onSplitBill }) {
//   const [bill, setBill] = useState("");
//   const [paidByUser, setPaidByUser] = useState("");
//   const [whoIsPaying, setWhoIsPaying] = useState("user");
//   const paidByFriend = bill ? bill - paidByUser : "";

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!bill || !paidByUser) return;
//     onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
//   }

//   return (
//     <form className="form-split-bill" onSubmit={handleSubmit}>
//       <h2>Split a bill with {selectFriend.name}</h2>
//       <label>💵 Bill Total</label>
//       <input
//         type="text"
//         value={bill}
//         onChange={(e) => setBill(Number(e.target.value))}
//       />
//       <label>🙆 Your expense</label>
//       <input
//         type="text"
//         value={paidByUser}
//         onChange={(e) =>
//           setPaidByUser(
//             Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
//           )
//         }
//       />
//       <label>🧑‍🤝‍🧑 {selectFriend.name}'s expense</label>
//       <input type="text" disabled value={paidByFriend} />
//       <label>💵 Who is paying the bill?</label>
//       <select
//         value={whoIsPaying}
//         onChange={(e) => setWhoIsPaying(e.target.value)}
//       >
//         <option value="user">You</option>
//         <option value="friend">{selectFriend.name}</option>
//       </select>
//       <Button>Split bill</Button>
//     </form>
//   );
// }
