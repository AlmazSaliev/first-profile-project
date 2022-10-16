import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiFetch from "../../hooks/apiFetch";

export const GetAllApartment = createAsyncThunk(
  "apartment/GetAllApartment",
  async () => {
    try {
      const data = await apiFetch({ url: "/api/apartment/getall" });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const PostApartment = createAsyncThunk(
  "apartment/PostApartment",
  async (obj) => {
    try {
      const data = await apiFetch({
        url: "/api/apartment/post",
        method: "POST",
        body: obj,
      });
      return data;
    } catch (e) {
      throw e;
    }
  }
);

export const DeleteApartment = createAsyncThunk(
  "apartment/DeleteApartment",
  async (id, { dispatch }) => {
    try {
      const data = await apiFetch({
        url: `/api/apartment/delete/${id}`,
        method: "DELETE",
      });
      dispatch(GetAllApartment());
      return data;
    } catch (e) {
      throw e;
    }
  }
);

const initialState = {
  apartment: JSON.parse(localStorage.getItem("apartment")) || [],
  status: null,
  statusoneapartment: false,
};

const AllDataApartment = createSlice({
  name: "apartment",
  initialState,
  extraReducers: {
    [GetAllApartment.fulfilled]: (state, action) => {
      localStorage.setItem("apartment", JSON.stringify(action.payload));
      state.apartment = action.payload;
      state.status = "success";
    },
    [GetAllApartment.rejected]: (state) => {
      state.status = "error";
    },
    [PostApartment.fulfilled]: (state) => {
      state.statusoneapartment = !state.statusoneapartment;
    },
    [PostApartment.rejected]: (state) => {
      state.statusoneapartment = !state.statusoneapartment;
    },
  },
});
export default AllDataApartment;
