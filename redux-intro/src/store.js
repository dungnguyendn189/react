import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "./feautes/accounts/accountSlice";
import customerReducer from "./feautes/customers/customerSlice";

const rootReducer = combineReducers({
  acount: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
