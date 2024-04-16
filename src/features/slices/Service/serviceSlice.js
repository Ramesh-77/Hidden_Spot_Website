import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { successToast } from "../../../utils/Toast/successToast";
import { errorToast } from "../../../utils/Toast/errorToast";


// add service
export const addService = createAsyncThunk(
  "service/add-service",
  async (data, { rejectWithValue }) => {
    const response = await axios.post("http://localhost:8000/api/v1/menu/add-service", data);
    try {
      return await response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// get service

export const getService = createAsyncThunk(
  "service/get-service",
  async (args, { rejectWithValue }) => {
    const response = await axios.get("http://localhost:8000/api/v1/menu/get-service");
    try {
      return await response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


const initialState = {
  service: [],
  loading: false,
  error: null,
};

// create service slice
export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addService.pending, (state) => {
        state.loading = true;
      })
      .addCase(addService.fulfilled, (state, action) => {
        state.loading = false;
        // checking whether state.service is array or not
        if (!Array.isArray(state.service)) {
          state.service = [];
        }
        state.service.push(action.payload);
        successToast("New Service added successfully ");
      })
      .addCase(addService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        errorToast("Service has already been added, please add new");
      })

      // get service builder
      .addCase(getService.pending, (state) => {
        state.loading = true;
      })
      .addCase(getService.fulfilled, (state, action) => {
        state.loading = false;
        state.service = action.payload;
      })
      .addCase(getService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
     
  },
});

export default serviceSlice.reducer;
