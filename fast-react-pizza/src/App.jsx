import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './ui/home';
import Menu from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/menu',
    element: <Menu />
  },
  { path: '/cart', element: <Cart /> },
  { path: '/older/new', element: <CreateOrder /> }
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
