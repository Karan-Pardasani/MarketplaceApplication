import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: "auth",
    initialState:{
        auth: {
            token: localStorage.getItem("token") || null
        }
    },
    reducers:{
        setToken: (state, action) => {
            state.auth.token = action.payload.token;
        }
    }
})

export const { setToken } = authSlice.actions

export default authSlice.reducer