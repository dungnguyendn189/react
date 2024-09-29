import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const accountReducer = useSelector((store) => store.acount.balance);

  return <div className="balance">{formatCurrency(accountReducer)}</div>;
}

export default BalanceDisplay;
