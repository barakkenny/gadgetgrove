import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/utils/userSlice";
import cartReducer from '@/utils/cartSlice'
import itemReducer from '@/utils/itemSlice'


const appStore = configureStore({
    reducer: {
      user: userReducer,
      cart : cartReducer,
      itemQuantity: itemReducer, 
      },
})

export default appStore