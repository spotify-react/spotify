import { createSlice } from "@reduxjs/toolkit";

const TokenSlice = createSlice({
    name:'token',
    initialState:'',
    reducers:{
        setToken:(state,actions) =>{
            return state = actions.payload
        }
    }
});

export const {setToken} = TokenSlice.actions;

export default TokenSlice.reducer