import { Outlet, useNavigation } from 'react-router';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';
import { getCard } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';

function AppLayOut() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      {isLoading && <Loader />}
      <Header />
      <div className='overflow-scroll'>
        <main className='max-w-3xl'>
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayOut;
