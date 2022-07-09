import { createSlice } from "@reduxjs/toolkit";

export const allowSlice = createSlice({
    name: 'signIn',
    initialState: {
        allow: false,
    },
    reducers: {
        logIn: (state) => {
            state.allow = true;
        },
        logOut: (state) => {
            state.allow = false;
        },
    },
})

export const { logIn, logOut } = allowSlice.actions;

export default allowSlice.reducer;