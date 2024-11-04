// 5HY79N

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";

function Order() {
  const oder = useLoaderData();
  console.log(oder);

  return (
    <div>
      <h1>AAAAA</h1>
    </div>
  );
}
export default Order;

export async function loader({ params }) {
  console.log(params);
  const order = await getOrder(params.orderId);
  return order;
}
