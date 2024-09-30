import CreateCustomer from "./feautes/customers/CreateCustomer";
import Customer from "./feautes/customers/Customer";
import AccountOperations from "./feautes/accounts/AccountOperations";
import BalanceDisplay from "./feautes/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
