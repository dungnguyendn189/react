
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./feautes/accounts/accountSlice";
import customerReducer from "./feautes/customers/customerSlice";

const store = configureStore({
  reducer: { account: accountReducer, customer: customerReducer }
});
export default store;
