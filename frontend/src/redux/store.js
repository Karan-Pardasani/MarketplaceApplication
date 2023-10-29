import { configureStore } from "@reduxjs/toolkit";
import authReducer from './user/auth/authSlice';
import flashMessageReducer from './message/flashMessageSlice';
import userInfoReducer from './user/userInfo/userInfoSlice';
import {productTemplateReducer} from './productTemplate/productTemplateSlice';

export default configureStore({
    reducer: {
        user: authReducer,
        userInfo: userInfoReducer,
        productTemplate: productTemplateReducer, 
        flashMessages: flashMessageReducer
    },
})