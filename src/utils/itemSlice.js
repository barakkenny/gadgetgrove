import { createSlice } from "@reduxjs/toolkit"

const itemSlice  = createSlice({
    name: 'itemQuantity',
    initialState: {
        value: 0
    },
    reducers: {
        incrementItem: (state) => {
            state.value += 1;
        },
        decrementItem: (state) => {
            state.value -= 1;
        }
    }
})

export const {incrementItem, decrementItem, initialCount} = itemSlice.actions;
export default itemSlice.reducer;