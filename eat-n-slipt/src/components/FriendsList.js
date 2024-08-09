import Button from "./Button";

function FriendsList({ friendsList, handleSelectFriend, selectedFriend }) {
  return (
    <ul>
      {friendsList.map((friend) => (
        <Friend
          friend={friend}
          handleSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

const Friend = ({ friend, handleSelectFriend, selectedFriend }) => {
  const isSelect = selectedFriend && selectedFriend.id === friend.id;
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className="green">Ban no toi {Math.abs(friend.balance)} VND</p>
      )}
      {friend.balance < 0 && (
        <p className="red">Toi no ban {Math.abs(friend.balance)}VND</p>
      )}
      {friend.balance === 0 && <p>Xoa no</p>}
      <Button onClick={() => handleSelectFriend(friend)}>
        {isSelect ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default FriendsList;
