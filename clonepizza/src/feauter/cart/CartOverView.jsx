import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { totalPrice, totalQuantity } from "../../slice/cartSlice";
import { formatCurrency } from "../../ultils/helper/";

function CartOverView() {
  const total = useSelector(totalPrice);
  const quantity = useSelector(totalQuantity);

  return (
    <div className="flex items-center px-4 py-4 bg-stone-800 text-white justify-between text-sm uppercase">
      <p className="space-x-4 font-semibold">
        <span>{quantity} Pizza</span>
        <span>{formatCurrency(total)}</span>
      </p>
      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
}

export default CartOverView;
