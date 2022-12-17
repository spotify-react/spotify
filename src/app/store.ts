import { configureStore } from "@reduxjs/toolkit";
import LoggedSlice from "./LoggedSlice";


export const store = configureStore({
    reducer:{
        logged: LoggedSlice,
    }
})