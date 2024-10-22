import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            //payload : NewItems
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            //payload : pizzaID
            state.cart = state.cart.filter(
                (state) => state.pizzaId !== action.payload
            );
        },
        incresItemQuantity(state, action) {
            const item = state.cart.find((state) => state.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decresItemQuantity(state, action) {
            const item = state.cart.find((state) => state.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;
            if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
        },
        clearCart(state) {
            state.cart = [];
        }
    }
});


export const { addItem, deleteItem, incresItemQuantity, decresItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const getTotalCartQuantity = (state) => state.cart.cart.reduce((total, item) => total + item.quantity, 0)
export const getTotalCartPriceCard = (state) => state.cart.cart.reduce((total, item) => total + item.totalPrice, 0)
export const getCard = (state) => state.cart.cart
export const getCurrentQualityById = id => state => state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0


// reselect
