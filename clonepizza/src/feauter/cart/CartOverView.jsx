import { Link } from "react-router-dom";

function CartOverView() {
  return (
    <div className="flex items-center px-4 py-4 bg-stone-800 text-white justify-between text-sm uppercase">
      <p className="space-x-4 font-semibold">
        <span>30 Pizza</span>
        <span>30$</span>
      </p>
      <Link>Open Cart &rarr;</Link>
    </div>
  );
}

export default CartOverView;
