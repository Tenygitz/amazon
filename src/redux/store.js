import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./cart";
import basketReducer from "./basket"

export const store=configureStore({
    reducer:{
    user:userReducer,
    basket:basketReducer
    }
})