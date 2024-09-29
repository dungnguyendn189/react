import { combineReducers, createStore } from "redux";
import accountReducer from "./feautes/accounts/accountSlice";
import customerReducer from "./feautes/customers/customerSlice";

const rootReducer = combineReducers({
  acount: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
