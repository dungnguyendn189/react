import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "../../slice/userSlice";
import { useNavigate } from "react-router-dom";

function CreateNewUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName) return;
    dispatch(updateName(userName));
    navigate("/menu");
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
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
