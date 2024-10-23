import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayOut from "./ui/AppLayout";
import Home from "./ui/Home";
import Error from "./ui/error";
import MenuList, { loader as menuLoader } from "./feauter/menu/MenuList";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
