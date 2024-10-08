import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header>
      <Link to='/'>Fast React Pizze Co.</Link>
      <SearchOrder />
      <p className='text-3xl font-bold underline'>Dung Nguyen</p>
    </header>
  );
}

export default Header;
