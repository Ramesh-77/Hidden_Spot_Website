import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// api handling
export const addItem = createAsyncThunk(
  "item/add-item",
  async (data, { rejectWithValue }) => {
    const response = await axios.post(
      "http://localhost:8000/api/v1/menu/add-item",
      data
    );
    try {
      return await response?.data;
    } catch (error) {
      return rejectWithValue("Error: ", error);
    }
  }
);
export const getItem = createAsyncThunk(
  "item/get-item",
  async (itemData, { rejectWithValue }) => {
    const response = await axios.get(
      "http://localhost:8000/api/v1/menu/get-item",
      itemData
    );
    try {
      return await response?.data;
    } catch (error) {
      return rejectWithValue("Error: ", error);
    }
  }
);

const initialState = {
  item: [],
  error: null,
  loading: false,
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.loading = false;
        if (!Array.isArray(state.item)) {
          state.item = [];
        }
        state.item.push(action.payload);
      })
      .addCase(addItem.rejected, (state, action) => {
        state.loading = false;
        state.error = state.error.message;
      })
      .addCase(getItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(getItem.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(getItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default itemSlice.reducer;
