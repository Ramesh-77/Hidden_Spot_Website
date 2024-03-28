import { configureStore } from "@reduxjs/toolkit";
import userRegisterSlice from "../slices/UserRegister/userRegisterSlice.js";
import getRegisterUserSlice from "../slices/GetRegisterUser/getRegisterUserSlice.js";

// create central store
export const store = configureStore({
    reducer: {
        user: userRegisterSlice,
        registeredUsers: getRegisterUserSlice
    }
})