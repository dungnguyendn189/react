import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart(state, action) {
            state.cart.push(action.payload);
        }
    }
})

export const getCart = (state) => state.cart.cart

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;

