import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUSES = {
    IDLE : "idle",
    LOADING: "loading",
    ERROR: "error"
}

const productSlice = createSlice({
    name:"products",
    initialState:{
        data:[],
        status: STATUSES,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchproduct.pending, (state, action) => {
            state.status = STATUSES.LOADING
        });
        builder.addCase(fetchproduct.fulfilled, (state, action) => {
            state.status = STATUSES.IDLE
            state.data = action.payload
        });
        builder.addCase(fetchproduct.rejected, (state, action) => {
            state.status = STATUSES.ERROR
        });

    }
})

export const fetchproduct = createAsyncThunk("product/fetch",async()=>{
    const data = await fetch("https://fakestoreapi.com/products")
    const product = data.json()
    console.log(product);
    return product;
})

const {reducer} = productSlice;

export default reducer