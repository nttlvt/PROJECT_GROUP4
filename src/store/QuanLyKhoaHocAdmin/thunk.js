import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { QuanLyKhoaHocService } from "../../services/QuanLyKhoaHocService";



export const quanLyKhoaHocGet = createAsyncThunk('QuanLyKhoaHocAdmin / quanLyKhoaHocGetThunk',
    async (param, { rejectWithValue }) => {
        try {
            // console.log('param',);
            const response = await QuanLyKhoaHocService.getKhoaHocList(param)
            // console.log('result',response)
            return response
        }
        catch (err) {
            return rejectWithValue(err)
        }

    }

)
export const quanLyKhoaHocPost = createAsyncThunk('QuanLyKhoaHocAdmin / quanLyKhoaHocPostThunk',
    async (formData, { rejectWithValue }) => {
        try {
            // console.log(formData);
            const result = await QuanLyKhoaHocService.postThemKhoaHoc(formData)
            return result
        }
        catch (error) {
            // console.log(rejectWithValue(error))
            return rejectWithValue(err);
        }

    }

)
export const quanLyKhoaHocDelete = createAsyncThunk('QuanLyKhoaHocAdmin / quanLyKhoaHocDeleteThunk',
    async (payload, { rejectWithValue }) => {
        try {
            // console.log(payload);
            const result = await QuanLyKhoaHocService.deleteKhoaHoc(payload)
            return result
        }
        catch (err) {
            return rejectWithValue(err)
        }

    }

)
export const quanLyKhoaHocPut = createAsyncThunk('QuanLyKhoaHocAdmin / quanLyKhoaHocPutThunk',
    async (formData, { rejectWithValue }) => {
        try {

            const result = await QuanLyKhoaHocService.putKhoaHoc(formData)
            return result
        }
        catch (err) {
            return rejectWithValue(err)
        }

    }

)

export const quanLyMaKhoaHocGet = createAsyncThunk('QuanLyKhoaHocAdmin/quanLyMaKhoaHocPutThunk',
    async (_, { rejectWithValue }) => {
        try {
            const result = await QuanLyKhoaHocService.getMaDanhMucKhoaHoc()
            return result
        }
        catch (err) {
            // console.log(rejectWithValue(err));
            return rejectWithValue(err);
        }
    }
)

export const quanLyNguoiDungChuaGhiDanh = createAsyncThunk('QuanLyKhoaHocAdmin/quanLyNguoiDungChuaGhiDanh',
    async (payload, { rejectWithValue }) => {
        try {
            const result = await QuanLyKhoaHocService.postNguoiDungChuaGhiDanh(payload)
            // console.log('quanLyNguoiDungChuaGhiDanh', payload)

            return result
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)
export const quanLyNguoiDungChoGhiDanh = createAsyncThunk('QuanLyKhoaHocAdmin/quanLyNguoiDungChoGhiDanh',
    async (payload, { rejectWithValue }) => {
        try {
            const result = await QuanLyKhoaHocService.postNguoiDungChoGhiDanh(payload)
            // console.log('quanLyNguoiDungChoGhiDanh', payload)

            return result
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)
export const quanLyNguoiDungDaGhiDanh = createAsyncThunk('QuanLyKhoaHocAdmin/quanLyNguoiDungDaGhiDanh',
    async (payload, { rejectWithValue }) => {
        try {
            const result = await QuanLyKhoaHocService.postNguoiDungDaGhiDanh(payload)
            // console.log('quanLyNguoiDungDaGhiDanh', payload)

            return result
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)
export const quanLyGhiDanhNguoiDung = createAsyncThunk('QuanLyKhoaHocAdmin/quanLyGhiDanhNguoiDung',
    async (payload, { rejectWithValue }) => {
        try {
            const result = await QuanLyKhoaHocService.postGhiDanhNguoiDung(payload)
            // console.log('quanLyNguoiDungDaGhiDanh', payload)

            return result
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)
export const quanLyKhoaHocChuaGhiDanh = createAsyncThunk('QuanLyKhoaHocAdmin/quanLyKhoaHocChuaGhiDanh',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await QuanLyKhoaHocService.postKhoaHocChuaGhiDanh(payload)
            // console.log('quanLyNguoiDungDaGhiDanh', payload)

            return response
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)
export const quanLyHuyDanhNguoiDung = createAsyncThunk('QuanLyKhoaHocAdmin/quanLyHuyDanhNguoiDung',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await QuanLyKhoaHocService.deleteGhiDanhNguoiDung(payload)
            // console.log('quanLyNguoiDungDaGhiDanh', payload)

            return response
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)
export const quanLyKhoaHocChoGhiDanh = createAsyncThunk('QuanLyKhoaHocAdmin/quanLyKhoaHocChoGhiDanh',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await QuanLyKhoaHocService.postKhoaHocChoGhiDanh(payload)
            // console.log('postKhoaHocChoGhiDanh', payload)

            return response
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }

)
export const quanLyKhoaHocDaGhiDanh = createAsyncThunk('QuanLyKhoaHocAdmin/quanLyKhoaHocDaGhiDanh',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await QuanLyKhoaHocService.postKhoaHocDaGhiDanh(payload)
            // console.log('postKhoaHocChoGhiDanh', payload)

            return response
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }

)