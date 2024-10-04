import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "./feautes/accounts/accountSlice";
import customerReducer from "./feautes/customers/customerSlice";
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  acount: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) ,);

export default store;
