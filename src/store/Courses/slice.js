import { createSlice } from "@reduxjs/toolkit";
import { registerCoursesThunk } from "./thunk";
import { deleteCoursesThunk } from "./thunkDelete";
import { toast } from "react-toastify";

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
      .addCase(deleteCoursesThunk.fulfilled, (state, action) => {
        toast.success('Bạn đã hủy ghi danh thành công!')
      })
      .addCase(deleteCoursesThunk.rejected, (state, action) => {
       
      });
  },
});
