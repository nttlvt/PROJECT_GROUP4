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
        // Xử lý khi request đang được thực hiện
      })
      .addCase(registerCoursesThunk.fulfilled, (state, action) => {
        // Xử lý khi request thành công
        // action.payload chứa dữ liệu trả về từ API
      })
      .addCase(registerCoursesThunk.rejected, (state, action) => {
        // Xử lý khi request bị lỗi
        // action.error chứa thông tin lỗi
      });
  },
});
