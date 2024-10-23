import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";

function CreateNewUser() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateName(userName));
    setUserName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm sm:text-base mt-2">
        👋 Welcome! Please start by telling us your name:
      </p>
      <input
        type="text"
        placeholder="Your full name"
        className="input mb-3 w-72"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <div>
        {userName ? <Button type="primary">Start ordering</Button> : ""}
      </div>
    </form>
  );
}

export default CreateNewUser;
