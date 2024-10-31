import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { clearCard, getCart, totalPrice } from "../../slice/cartSlice";
import EmptyCart from "../cart/EmptyCard";
import { useState } from "react";
import store from "../../store";
import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import { formatCurrency } from "../../ultils/helper";
import { fetchAddress } from "../../slice/userSlice";
import { createOrder } from "../../services/apirestaurant";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const {
    userName,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);

  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const totalCartPrice = useSelector(totalPrice);
  const cart = useSelector(getCart);
  const isLoading = addressStatus === "loading";
  const isSubmitting = navigate.state === "submitting";
  const dispatch = useDispatch();
  const withChecked = isChecked ? totalCartPrice * 0.2 : 0;
  const totalPrices = totalCartPrice + withChecked;
  const formErrors = useActionData();
  // console.log(dispatch(fetchAddress()));

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <Form method="POST">
        <h2 className="my-6 font-semibold">Ready to order? Let's go!</h2>
        <div className="my-4 flex items-center gap-5">
          <span className="basis-40">First Name</span>
          <input
            type="text"
            name="customer"
            required
            className="input w-full"
            defaultValue={userName}
          />
        </div>

        <div className="my-4 flex items-center gap-5">
          <span>Phone Number</span>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="mt-2 p-2 bg-red-100 rounded-md text-red-500 text-xs">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="my-4 flex items-center gap-5 relative">
          <span className="basis-40">Address</span>
          <input
            className="input w-full"
            type="text"
            name="address"
            defaultValue={address}
            required
            disabled={isLoading}
          />
          <div className="absolute z-50 right-1">
            <Button
              type="small"
              disabled={isLoading}
              onClick={(e) => {
                e.preventDefault();
                dispatch(fetchAddress());
              }}
            >
              Location
            </Button>
          </div>
        </div>

        <div className="my-8 flex gap-2">
          <input
            type="checkbox"
            className="h-5 w-5 text-xl"
            name="priority"
            id="priority"
            value={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <span>Want to yo give your order priority?</span>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `${position.latitude},${position.longitude}`
                : ""
            }
          />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting
              ? "Placing order..."
              : `Order Now from ${formatCurrency(totalPrices)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please give us your phoneNumber . Please";
  if (Object.keys(errors).length > 0) return errors;
  const newOrder = await createOrder(order);
  store.dispatch(clearCard());
  // const order = {
  //   ...data,
  //   cart: JSON.parse(data.cart),
  // };
  // return null;
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
