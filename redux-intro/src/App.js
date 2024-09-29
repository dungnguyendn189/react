import CreateCustomer from "./feautes/customers/CreateCustomer";
import Customer from "./feautes/customers/Customer";
import AccountOperations from "./feautes/accounts/AccountOperations";
import BalanceDisplay from "./feautes/accounts/BalanceDisplay";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      ``
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
