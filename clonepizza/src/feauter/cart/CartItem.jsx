import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../ultils/helper";
import {
  decItemQuantity,
  increItemQuantity,
  getCurrentQualityById,
} from "../../slice/cartSlice";

function CardItem({ item }) {
  const { name, pizzaId, quantity, totalPrice, unitPrice } = item;
  const dispatch = useDispatch();
  const currentValue = useSelector(getCurrentQualityById(pizzaId));

  return (
    <li className="flex items-center justify-between py-1 ">
      <div>
        {quantity}x {name}
      </div>
      <div className="flex items-center gap-2">
        <p className="font-">{formatCurrency(totalPrice)}</p>
        <Button
          type="round"
          onClick={() => dispatch(increItemQuantity(pizzaId))}
        >
          +
        </Button>
        {currentValue}
        <Button type="round" onClick={() => dispatch(decItemQuantity(pizzaId))}>
          -
        </Button>
        <Button type="small">Deleted</Button>
      </div>
    </li>
  );
}

export default CardItem;
