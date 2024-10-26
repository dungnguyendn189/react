import { useSelector } from "react-redux";
import { getCart } from "../../slice/cartSlice";
import EmptyCart from "./EmptyCard";
import LinkButton from "../../ui/LinkButton";

function Cart() {
  const cart = useSelector(getCart);
  const userName = useSelector((state) => state.user.userName);
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="flex my-6 ">
      <LinkButton to="/menu">&larr; Back to Menu</LinkButton>
      <h1 className="my-6 text-xl font-semibold ">Your Cart , {userName}</h1>
    </div>
  );
}

export default Cart;
