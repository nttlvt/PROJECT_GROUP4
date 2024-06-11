import { createSlice } from "@reduxjs/toolkit";
import { registerCoursesThunk } from "./thunk";

const initialState = {
  
};

export const {
  reducer: quanLyKhoaHocReducer,
  actions: quanLyKhoaHocActions,
} = createSlice({
  name: "quanLyKhoaHoc",
  initialState,
  //Xứ lý action đồng bộ
  reducers: {
    
  },

  extraReducers: (builder) => {
    builder
    .addCase(registerCoursesThunk.pending, (state) => {
        
      })
      .addCase(registerCoursesThunk.fulfilled, (state, action) => {
        
      })
      .addCase(registerCoursesThunk.rejected, (state, action) => {
        
      });
  },
});
