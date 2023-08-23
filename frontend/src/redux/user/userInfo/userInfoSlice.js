import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        info: {
            firstname: null,
            lastname: null,
            username: null
        }
    },
    reducers: {
        setUserInfo: (state, action) => {
            state.info.firstname = action.payload.firstname;
            state.info.lastname = action.payload.lastname;
            state.info.username = action.payload.username;
        }
    }
});

export const {setUserInfo} = userInfoSlice.actions;

export default userInfoSlice.reducer;