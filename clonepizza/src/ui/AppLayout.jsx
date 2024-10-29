import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverView from "../feauter/cart/CartOverView";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { getCart } from "../slice/cartSlice";

function AppLayOut() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const item = useSelector(getCart);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="no-scrollbar overflow-scroll">
        <main className="max-w-3xl sm:mx-auto">
          <Outlet />
        </main>
      </div>
      {item.length > 0 && <CartOverView />}
    </div>
  );
}

export default AppLayOut;
