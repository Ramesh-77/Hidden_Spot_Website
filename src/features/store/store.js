import { configureStore } from "@reduxjs/toolkit";
import userRegisterSlice from "../slices/UserRegister/userRegisterSlice.js";
import getRegisterUserSlice from "../slices/GetRegisterUser/getRegisterUserSlice.js";
import menuSlice from "../slices/Menu/menuSlice.js";
import itemSlice from "../slices/Item/itemSlice.js";

// create central store
export const store = configureStore({
    reducer: {
        user: userRegisterSlice,
        registeredUsers: getRegisterUserSlice,
        menu: menuSlice,
        item: itemSlice,
       
    }
})