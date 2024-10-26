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
        },
        deleteCard(state, action) {
            state.cart = state.cart.filter(state => state.pizzaId !== action.payload)
        },
        increItemQuantity(state, action) {
            const item = state.cart.find(state => state.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice
        },
        decItemQuantity(state, action) {
            const item = state.cart.find(state => state.pizzaId === action.payload)
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice
            if (item.quantity === 0) cartSlice.caseReducers.deleteCard(state, action)
        },
        clearCard(state) {
            state.cart = [];
        }
    }
})

export const getCart = (state) => state.cart.cart
export const totalQuantity = state => state.cart.cart.reduce((total, item) => total + item.quantity, 0);
export const totalPrice = state => state.cart.cart.reduce((total, item) => total + item.totalPrice, 0);
export const getCurrentQualityById = id => state => state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0


export const { addCart, deleteCard, increItemQuantity, decItemQuantity, clearCard } = cartSlice.actions;
export default cartSlice.reducer;

