import { createSlice } from "@reduxjs/toolkit";

const LoggedSlice = createSlice({
    name: 'logged',
    initialState: false,
    reducers: {
        setLogged: (state, actions) => {
            return state = actions.payload
        },
    }
});

export const { setLogged } = LoggedSlice.actions;

export default LoggedSlice.reducer