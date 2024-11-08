import { formatCurrency } from "../../ultils/helper";

function OrderItem({ item, isLoadingIngeredients, ingredients }) {
  console.log(ingredients);
  const { name, quantity, totalPrice } = item;
  return (
    <li>
      <div>
        <div className="flex py-1 gap-2 justify-between">
          <span>
            {quantity}&times; {name}
          </span>
          <p>{formatCurrency(totalPrice)}</p>
        </div>
      </div>
      <p className="text-sm text-stone-500 italic">
        {isLoadingIngeredients ? "Loading..." : ingredients.join(",")}
      </p>
    </li>
  );
}

export default OrderItem;
