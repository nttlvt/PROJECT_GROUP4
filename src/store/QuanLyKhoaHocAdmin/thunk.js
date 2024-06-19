import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { QuanLyKhoaHocService } from "../../services/QuanLyKhoaHocService";



export const quanLyKhoaHocGet = createAsyncThunk('QuanLyKhoaHocAdmin / quanLyKhoaHocGetThunk',
    async (param, { rejectWithValue }) => {
        try {
            console.log('param',);
            const response = await QuanLyKhoaHocService.getKhoaHocList(param)
            console.log('result',response)
            return response
        }
        catch (err) {
            return rejectWithValue(err)
        }

    }

)
export const quanLyKhoaHocPost = createAsyncThunk('QuanLyKhoaHocAdmin / quanLyKhoaHocPostThunk',
    async (payload, { rejectWithValue }) => {
        try {
            console.log(payload);
            const result = await QuanLyKhoaHocService.postThemKhoaHoc(payload)
            return result
        }
        catch (err) {
            return rejectWithValue(err)
        }

    }

)
export const quanLyKhoaHocDelete = createAsyncThunk('QuanLyKhoaHocAdmin / quanLyKhoaHocDeleteThunk',
    async (payload, { rejectWithValue }) => {
        try {
            console.log(payload);
            const result = await QuanLyKhoaHocService.deleteKhoaHoc(payload)
            return result
        }
        catch (err) {
            return rejectWithValue(err)
        }

    }

)
export const quanLyKhoaHocPut = createAsyncThunk('QuanLyKhoaHocAdmin / quanLyKhoaHocPutThunk',
    async (payload, { rejectWithValue }) => {
        try {
            console.log(payload);
            const result = await QuanLyKhoaHocService.putKhoaHoc(payload)
            return result
        }
        catch (err) {
            return rejectWithValue(err)
        }

    }

)