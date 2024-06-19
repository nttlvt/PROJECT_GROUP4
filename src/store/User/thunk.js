import { createAsyncThunk } from "@reduxjs/toolkit";
import { qlNguoiDungServices } from "../../services/qlNguoiDung.service";

export const registerThunk = createAsyncThunk('quanLyNguoiDung/register', async (payload, {rejectWithValue}) => {
    try {
        const response = await qlNguoiDungServices.dangKy(payload)
        return response
    } catch (err) {
        return rejectWithValue(err)
    }
})

export const loginThunk = createAsyncThunk(
    'quanLyNguoiDung/login',
    async (payload, { rejectWithValue}) => {
        try {
            const result = await qlNguoiDungServices.dangNhap(payload)
            return result.data
        }
        catch (err) {
            return rejectWithValue(err)
        }

    }
)

export const addUserThunk = createAsyncThunk('themNguoiDung/add', async (formData, {rejectWithValue}) => {
    try {
        const response = await qlNguoiDungServices.addUser(formData)
        return response.data
    } catch (err) {
        return rejectWithValue("Lỗi khi gửi yêu cầu add user: " + err.message);
    }
})

export const deleteUserThunk = createAsyncThunk('xoaNguoiDung/delete', async (TaiKhoan, {rejectWithValue}) => {
    try {
        const response = await qlNguoiDungServices.deleteUser(TaiKhoan)
        return response
    } catch (err) {
        return rejectWithValue("Lỗi khi gửi yêu cầu xóa user: " + err.message);
    }
})

