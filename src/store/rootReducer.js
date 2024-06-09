import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./User/slice";



export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
})