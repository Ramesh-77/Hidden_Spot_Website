import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api
export const getRegisteredUserData = createAsyncThunk(
  "registeredUser/getData",
  async (args, {rejectWithValue}) => {
    const response = await axios.get(
      "http://localhost:8000/api/v1/users/get-registered-users"
    );
    try {
      const result = await response?.data;
      return result;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
);

const initialState = {
  registeredUser: {},
  error: null,
  loading: false,
  status: null,
};

const registeredUserDataSlice = createSlice({
  name: "registeredUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRegisteredUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRegisteredUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.registeredUser = action.payload;
      })
      .addCase(getRegisteredUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default registeredUserDataSlice.reducer;
