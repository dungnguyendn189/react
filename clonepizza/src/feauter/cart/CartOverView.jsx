import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverView() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="flex items-center px-4 py-4 bg-stone-800 text-white justify-between text-sm uppercase">
      <p className="space-x-4 font-semibold">
        <span>30 Pizza</span>
        <span>30$</span>
      </p>
      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
}

export default CartOverView;
