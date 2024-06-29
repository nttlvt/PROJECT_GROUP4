import { createSlice } from "@reduxjs/toolkit";
import { quanLyKhoaHocThunkAction } from ".";

const initialState = {
    danhSachKhoaHoc: [],
    searchPraram: '',
    maDanhMucKhoaHoc: '',
    dsNguoiDungChuaGhiDanh: [],
    dsNguoiDungChoGhiDanh: [],
    dsNguoiDungDaGhiDanh: [],
    loading: {
        quanLyKhoaHocPost: false,
        quanLyKhoaHocGet: false,
        quanLyKhoaHocDelete: false,
        quanLyKhoaHocPut: false,
        quanLyMaKhoaHocGet: false,
        quanLyNguoiDungChuaGhiDanh: false,
        quanLyNguoiDungChoGhiDanh: false,
        quanLyNguoiDungDaGhiDanh: false,
        quanLyNguoiDungChuaGhiDanh: false,
        quanLyNguoiDungChoGhiDanh: false,
        quanLyNguoiDungDaGhiDanh: false,
        quanLyKhoaHocChuaGhiDanh: false,
        quanLyKhoaHocChoGhiDanh: false,
        quanLyKhoaHocDaGhiDanh: false,
        quanLyGhiDanhNguoiDung: false,
    },
    dsKhoaHocChuaGhiDanh: [],
    dsKhoaHocChoGhiDanh: [],
    dsKhoaHocDaGhiDanh: [],
};

export const { reducer: QuanLyKhoaHocAdminReducer, actions: QuanLyKhoaHocAdminActions } = createSlice({
    name: 'QuanLyKhoaHocAdmin',
    initialState,
    reducers: {
        searchKhoaHoc: (state, action) => {
            state.searchPraram = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocPost.pending, (state) => {
                state.loading.quanLyKhoaHocPost = true;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocPost.fulfilled, (state) => {
                state.loading.quanLyKhoaHocPost = false;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocPost.rejected, (state, action) => {
                console.log('action 2',action)
                state.loading.quanLyKhoaHocPost = false;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocGet.pending, (state) => {
                state.loading.quanLyKhoaHocGet = true;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocGet.fulfilled, (state, action) => {
                state.loading.quanLyKhoaHocGet = false;
                state.danhSachKhoaHoc = action.payload;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocGet.rejected, (state) => {
                state.loading.quanLyKhoaHocGet = false;
                state.danhSachKhoaHoc = '';
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocDelete.pending, (state,action) => {
                state.loading.quanLyKhoaHocDelete = true;
                console.log('quanLyKhoaHocDelete pending',action);
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocDelete.fulfilled, (state) => {
                state.loading.quanLyKhoaHocDelete = false;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocDelete.rejected, (state, action) => {
                console.log('Rejected action:', action.error.message); 
                state.loading.quanLyKhoaHocDelete = false;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocPut.pending, (state) => {
                state.loading.quanLyKhoaHocPut = true;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocPut.fulfilled, (state, action) => {
                state.loading.quanLyKhoaHocPut = false;
                state.dsNguoiDungChuaGhiDanh = action.payload;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocPut.rejected, (state) => {
                state.loading.quanLyKhoaHocPut = false;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyMaKhoaHocGet.pending, (state) => {
                state.loading.quanLyMaKhoaHocGet = true;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyMaKhoaHocGet.fulfilled, (state, action) => {
                state.loading.quanLyMaKhoaHocGet = false;
                state.maDanhMucKhoaHoc = action.payload;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyMaKhoaHocGet.rejected, (state) => {
                state.loading.quanLyMaKhoaHocGet = false;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyNguoiDungChuaGhiDanh.pending, (state) => {
                state.loading.quanLyNguoiDungChuaGhiDanh = true;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyNguoiDungChuaGhiDanh.fulfilled, (state, action) => {
                state.loading.quanLyNguoiDungChuaGhiDanh = false;
                state.dsNguoiDungChuaGhiDanh = action.payload.data;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyNguoiDungChuaGhiDanh.rejected, (state) => {
                state.loading.quanLyNguoiDungChuaGhiDanh = false;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyNguoiDungChoGhiDanh.pending, (state) => {
                state.loading.quanLyNguoiDungChoGhiDanh = true;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyNguoiDungChoGhiDanh.fulfilled, (state, action) => {
                state.loading.quanLyNguoiDungChoGhiDanh = false;
                state.dsNguoiDungChoGhiDanh = action.payload;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyNguoiDungChoGhiDanh.rejected, (state) => {
                state.loading.quanLyNguoiDungChoGhiDanh = false;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyNguoiDungDaGhiDanh.pending, (state) => {
                state.loading.quanLyNguoiDungDaGhiDanh = true;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyNguoiDungDaGhiDanh.fulfilled, (state, action) => {
                state.loading.quanLyNguoiDungDaGhiDanh = false;
                state.dsNguoiDungDaGhiDanh = action.payload;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyNguoiDungDaGhiDanh.rejected, (state) => {
                state.loading.quanLyNguoiDungDaGhiDanh = false;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyGhiDanhNguoiDung.pending, (state) => {
                state.loading.quanLyGhiDanhNguoiDung = true;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyGhiDanhNguoiDung.fulfilled, (state) => {
                state.loading.quanLyGhiDanhNguoiDung = false;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyGhiDanhNguoiDung.rejected, (state) => {
                state.loading.quanLyGhiDanhNguoiDung = false;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocChuaGhiDanh.pending, (state) => {
                state.loading.quanLyKhoaHocChuaGhiDanh = true;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocChuaGhiDanh.fulfilled, (state, action) => {
                state.loading.quanLyKhoaHocChuaGhiDanh = false;
                state.dsKhoaHocChuaGhiDanh = action.payload.data;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocChuaGhiDanh.rejected, (state) => {
                state.loading.quanLyKhoaHocChuaGhiDanh = false;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocChoGhiDanh.pending, (state) => {
                state.loading.quanLyKhoaHocChoGhiDanh = true;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocChoGhiDanh.fulfilled, (state, action) => {
                state.loading.quanLyKhoaHocChoGhiDanh = false;
                state.dsKhoaHocChoGhiDanh = action.payload.data;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocChoGhiDanh.rejected, (state) => {
                state.loading.quanLyKhoaHocChoGhiDanh = false;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocDaGhiDanh.pending, (state) => {
                state.loading.quanLyKhoaHocDaGhiDanh = true;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocDaGhiDanh.fulfilled, (state, action) => {
                state.loading.quanLyKhoaHocDaGhiDanh = false;
                state.dsKhoaHocDaGhiDanh = action.payload.data;
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocDaGhiDanh.rejected, (state) => {
                state.loading.quanLyKhoaHocDaGhiDanh = false;
            });
    }
});
