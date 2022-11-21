import { configureStore } from "@reduxjs/toolkit";
import { sliceReducer } from "./Slices/cartSlice";
import productSlice  from "./Slices/productSlice";

const store = configureStore({
    reducer:{
        cart: sliceReducer,
        product: productSlice ,
    }
})

export default store