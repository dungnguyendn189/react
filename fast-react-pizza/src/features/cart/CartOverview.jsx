import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPriceCard, getTotalCartQuantity } from '../cart/cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  // const pizza = useSelector((state) => state.cart.cart);
  // const total = pizza.reduce((sum, item) => sum + item.quantity, 0);
  // const totalPrice = pizza.reduce((sum, item) => sum + item.totalPrice, 0);
  const total = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPriceCard);

  if (!total) return null;

  return (
    <div className='flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base'>
      <p className='space-x-4 font-semibold text-stone-300 sm:space-x-6'>
        <span>{total} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
