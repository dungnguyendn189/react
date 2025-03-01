import { useSelector } from "react-redux";
import CreateNewUser from "../feauter/user/CreateNewUser";
import Button from "./Button";

function Home() {
  const userName = useSelector((state) => state.user.userName);

  return (
    <div className="py-10 text-center">
      <h1 className="mb-4 font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500 font-semibold">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === "" ? (
        <CreateNewUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue Odering , {userName}
        </Button>
      )}
      {/* <Button type="primary">Start ordering</Button> */}
    </div>
  );
}

export default Home;
