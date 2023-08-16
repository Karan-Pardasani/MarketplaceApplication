import { configureStore } from "@reduxjs/toolkit";
import authReducer from './user/auth/authSlice';
import flashMessageReducer from './message/flashMessageSlice';

export default configureStore({
    reducer: {
        user: authReducer,
        flashMessages: flashMessageReducer
    },
})