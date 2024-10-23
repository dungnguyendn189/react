import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOverView from "../feauter/cart/CartOverView";

function AppLayOut() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-scroll mx-auto text-center">
        <main className="max-w-3xl ">
          <Outlet />
        </main>
      </div>
      <CartOverView />
    </div>
  );
}

export default AppLayOut;
