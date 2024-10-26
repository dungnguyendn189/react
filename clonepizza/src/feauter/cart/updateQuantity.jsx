import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decItemQuantity,
  getCurrentQualityById,
  increItemQuantity,
} from "../../slice/cartSlice";

function UpdateQuantity({ id }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQualityById(id));
  return (
    <div className="flex gap-2 items-center">
      <Button type="round" onClick={() => dispatch(increItemQuantity(id))}>
        +
      </Button>
      <span className="text-sm font-semibold">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(decItemQuantity(id))}>
        -
      </Button>
    </div>
  );
}

export default UpdateQuantity;
