import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state, action){
            console.log("hello", action)
            state.push(action.payload) 
        }
    }
})

const {actions, reducer} = slice;
const {add} = actions;
export {add, reducer as sliceReducer }