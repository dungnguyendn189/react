import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayOut from "./ui/AppLayout";
import Home from "./ui/Home";
import Error from "./ui/error";
import MenuList, { loader as menuLoader } from "./feauter/menu/MenuList";
import Cart from "./feauter/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./feauter/order/CreateOrder";
import Order, { loader as loaderOrder } from "./feauter/order/Order";

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <MenuList />,
        errorElement: <Error />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      { path: "/order/:orderId", element: <Order />, loader: loaderOrder },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
