import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./User/slice";
import { quanLyKhoaHocReducer } from "./Courses/slice";
import { QuanLyKhoaHocAdminReducer } from "./QuanLyKhoaHocAdmin";
export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyKhoaHoc: quanLyKhoaHocReducer,
    quanLyKhoaHocAdmin:QuanLyKhoaHocAdminReducer,    
})