import { configureStore } from "@reduxjs/toolkit";
import userRegisterSlice from "../slices/UserRegister/userRegisterSlice.js";

// create central store
export const store = configureStore({
    reducer: {
        user: userRegisterSlice
    }
})