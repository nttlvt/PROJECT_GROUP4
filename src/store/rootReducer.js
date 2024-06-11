import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./User/slice";
import { quanLyKhoaHocReducer } from "./Courses/slice";

export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyKhoaHoc: quanLyKhoaHocReducer
})