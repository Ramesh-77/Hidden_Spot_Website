import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { successToast } from "../../../utils/Toast/successToast";
import { errorToast } from "../../../utils/Toast/errorToast";

const add_menu_base_url = "http://localhost:8000/api/v1/menu/add-menu";
// add menu
export const addMenu = createAsyncThunk(
  "menu/add-menu",
  async (data, { rejectWithValue }) => {
    const response = await axios.post(add_menu_base_url, data);
    try {
      return await response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// get menu
const get_menu_base_url = "http://localhost:8000/api/v1/menu/get-menu";

export const getMenu = createAsyncThunk(
  "menu/get-menu",
  async (args, { rejectWithValue }) => {
    const response = await axios.get(get_menu_base_url);
    try {
      return await response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// update

export const updateMenu = createAsyncThunk(
  "menu/update-menu",
  async ({ admin, menuName, productId }, { rejectWithValue }) => {
    const response = await axios.put(
      `http://localhost:8000/api/v1/menu/update-menu/${productId}`,
      { admin, menuName }
    );
    try {
      return await response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  menu: [],
  loading: false,
  error: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(addMenu.fulfilled, (state, action) => {
        state.loading = false;
        // checking whether state.menu is array or not
        if (!Array.isArray(state.menu)) {
          state.menu = [];
        }
        state.menu.push(action.payload);
        // state.menu.push(action.payload);
        successToast("New Menu added successfully ");
      })
      .addCase(addMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        errorToast("Menu has already been added, please add new");
      })

      // get menu builder
      .addCase(getMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.menu = action.payload;
      })
      .addCase(getMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // update menu
      .addCase(updateMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.menu = action.payload;
        successToast("Menu has been updated successfully")

      })
      .addCase(updateMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
