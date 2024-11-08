// 5HY79N

import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { useEffect } from "react";
import { calcMinutesLeft, formatDate } from "../../ultils/helper";
import OrderItem from "./OrderItem";
import { formatCurrency } from "../../ultils/helper";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher]
  );

  const {
    cart,
    customer,
    estimatedDelivery,
    id,
    orderPrice,
    priority,
    priorityPrice,
    status,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6">
      <div className="flex flex-wrap items-center justify-between">
        <p className="font-semibold text-stone-500 text-2xl">
          Order #{id} status
        </p>
        <div className="flex gap-4 font-semibold text-stone-500 my-4 text-2xl">
          {priority && (
            <span className="text-sm  text-white px-4 py-2 rounded-full  bg-red-500">
              Priority
            </span>
          )}
          <span className="text-sm  text-white px-4 py-2 rounded-full  bg-green-500">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between my-4 bg-gray-300 py-4 px-3">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)}`
            : "Order should have arrived"}
        </p>

        <p className="text-stone-500">
          (Estimated delivery : {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="my-4 divide-y border-b-2 ">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngeredients={fetcher.state === "loading"}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)
                ?.ingredients ?? []
            }
          />
        ))}
      </ul>
      <div className="bg-stone-200 px-4 py-4 flex flex-col gap-3 text-stone-500">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priorityPrice && (
          <p>Price Priority: {formatCurrency(priorityPrice)}</p>
        )}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}
export default Order;

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
