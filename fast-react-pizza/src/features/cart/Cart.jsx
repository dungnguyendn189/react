import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCard } from './cartSlice';
import EmptyCart from './EmptyCart';

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15
//   }
// ];

function Cart() {
  const cart = useSelector(getCard);
  const userName = useSelector((state) => state.user.userName);
  const dispacth = useDispatch();
  const handleClear = () => {
    dispacth(clearCart());
  };
  if (!cart.length) return <EmptyCart />;
  return (
    <div className='px-3 py-4'>
      <LinkButton to='/menu'>&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {userName}</h2>

      <ul className='mt-3 divide-y divide-stone-200 border-b'>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className='mt-6 space-x-2'>
        <Button to='/order/new' type='primary'>
          Order pizzas
        </Button>
        <Button type='secondary' onClick={handleClear}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
