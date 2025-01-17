import { createSlice } from "@reduxjs/toolkit"

const initialCart = () => {
    const storedItems = localStorage.getItem('items');
    return storedItems ? JSON.parse(storedItems) : [];
  };

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:initialCart()
    },
    reducers: {
        addItem: (state, action) =>{
            state.items.push(action.payload)
        },
        removeItem: (state) =>{
            state.items.pop()
        },
        clearCart: (state) =>{
            state.items.length = 0; 
        },
        
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer;