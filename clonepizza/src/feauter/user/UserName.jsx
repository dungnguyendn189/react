import { useSelector } from "react-redux";

function UserName() {
  const userName = useSelector((state) => state.user.userName);
  console.log(userName);

  return <div className="hidden md:block">{userName}</div>;
}

export default UserName;
