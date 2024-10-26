import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverView from "../feauter/cart/CartOverView";
import Loader from "./Loader";

function AppLayOut() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll sm:mx-auto ">
        <main className="max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverView />
    </div>
  );
}

export default AppLayOut;
