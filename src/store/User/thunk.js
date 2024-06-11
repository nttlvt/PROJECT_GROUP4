import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
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