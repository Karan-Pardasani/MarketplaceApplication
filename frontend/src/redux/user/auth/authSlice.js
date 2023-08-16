import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: "auth",
    initialState:{
        auth: {
            token: localStorage.getItem("token") || null
        },
        info: {
            firstname: null,
            lastname: null,
            username: null
        }
    },
    reducers:{
        setToken: (state, action) => {

            state.auth.token = action.payload.token;
        },

        setUserInfo: (state, action) => {

            state.info.firstname = action.payload.firstname;
            state.info.lastname = action.payload.lastname;
            state.info.username = action.payload.username;

        }
    }
})

export const { setToken } = authSlice.actions

export default authSlice.reducer