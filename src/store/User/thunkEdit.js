import { createAsyncThunk } from "@reduxjs/toolkit";
import { qlNguoiDungServices } from "../../services/qlNguoiDung.service";

export const editUserThunk = createAsyncThunk('quanLyNguoiDung/edit', async (formData, {rejectWithValue}) => {
    try {
        const response = await qlNguoiDungServices.editUser(formData)
        return response
    } catch (err) {
        return rejectWithValue("Lỗi khi gửi yêu cầu cập nhật user: " + err.message);
    }
})
