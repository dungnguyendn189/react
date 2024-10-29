import { useDispatch, useSelector } from "react-redux";
import { clearCard, getCart } from "../../slice/cartSlice";
import EmptyCart from "./EmptyCard";
import LinkButton from "../../ui/LinkButton";
import CardItem from "./CartItem";
import Button from "../../ui/Button";

function Cart() {
  const cart = useSelector(getCart);
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-3 py-2 divide-y-1">
      <LinkButton to="/menu">&larr; Back to Menu</LinkButton>
      <h2 className="my-6 text-xl font-semibold ">Your Cart , {userName}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b ">
        {cart.map((item) => (
          <CardItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="my-4 flex gap-2">
        <Button type="primary">Order</Button>
        <Button type="primary" onClick={() => dispatch(clearCard())}>
          Clear Order
        </Button>
      </div>
    </div>
  );
}

export default Cart;
