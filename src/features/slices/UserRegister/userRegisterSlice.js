import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// register url
const registerURL = "http://localhost:8000/api/v1/users/register";

// connecting server and creating action
export const registerUser = createAsyncThunk(
  "user/createUser",
  async (data, { rejectWithValue }) => {
    const response = await axios.post(registerURL, data);
    // console log
    // console.log("asyncthunk response", response);

    // resolving in tryc
    try {
      const result = await response?.data;
      
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);



// initial state of the user slice
const initialState = {
  users: [],
  loading: false,
  error: null,
  status: null,
};

// creating user register slice
export const userRegisterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // handling pending response
    // [registerUser.pending]: (state) => {
    //   state.loading = true;
    // },
    // // handling fullfilled response
    // [registerUser.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.push.users(action.payload);
    // },
    // // handling rejected response
    // [registerUser.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.users = action.payload;
    // },

    // handle pending - register
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      // handle fullfilled
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      // handle reject
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });

  },
});

export default userRegisterSlice.reducer;
