import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slice/userSlice"
import cartReducer from "./slice/cartSlice"

const store = configureStore({
    reducer: {
        user: useReducer,
        cart: cartReducer,
    }
})

export default store;