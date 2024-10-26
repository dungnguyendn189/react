import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../ultils/helper";
import {
  addCart,
  getCurrentQualityById,
  deleteCard,
} from "../../slice/cartSlice";
import UpdateQuantity from "../cart/updateQuantity";

function MenuItem({ menu }) {
  const { id, name, unitPrice, imageUrl, ingredients, soldOut } = menu;

  const dispatch = useDispatch();

  const handleAdd = () => {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: 1 * unitPrice,
    };
    dispatch(addCart(newItem));
  };

  const isCurrentQuantity = useSelector(getCurrentQualityById(id)) > 0;
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow justify-between pt-0.5">
        <div className="h-24 flex flex-col justify-between">
          <div className="">
            <p className="text-start text-base text-stone-800">{name}</p>
            <p className="text-start text-xs text-stone-400">
              {ingredients.join(", ")}
            </p>
          </div>
          {soldOut ? (
            <p className="text-start text-stone-500 text-sm">Solt Out</p>
          ) : (
            <p className="text-start">{formatCurrency(unitPrice)}</p>
          )}
        </div>
        <div>
          {!isCurrentQuantity && !soldOut && (
            <div className="flex items-center gap-4">
              <Button type="small" onClick={handleAdd}>
                Add
              </Button>
            </div>
          )}

          {isCurrentQuantity && (
            <div className="flex items-center gap-2">
              <UpdateQuantity id={id} />

              <Button type="small" onClick={() => dispatch(deleteCard(id))}>
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
