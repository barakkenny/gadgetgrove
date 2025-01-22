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
        removeItem: (state, action) =>{
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        clearCart: (state) =>{
            state.items = []; 
        },
        
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer;