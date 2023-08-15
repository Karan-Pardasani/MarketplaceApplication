import { configureStore } from "@reduxjs/toolkit";
import authReducer from './user/auth/authSlice'

export default configureStore({
    reducer: {
        user: authReducer
    },
})