import { createSlice } from "@reduxjs/toolkit";
import { quanLyKhoaHocThunkAction } from ".";
const initialState = {
    danhSachKhoaHoc: [{}],
    searchPraram: '',
}

export const { reducer: QuanLyKhoaHocAdminReducer, actions: QuanLyKhoaHocAdminActions } = createSlice({
    name: 'QuanLyKhoaHocAdmin',
    initialState,
    reducers: {
        searchKhoaHoc: (state, action) => {
            console.log(action)
            state.searchPraram = action.payload
console.log('1',state.searchPraram)
        }
    },



    extraReducers: (builder) => {
        builder
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocPost.pending, (state, action) => {
                console.log('pendding');
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocPost.fulfilled, () => {
                console.log('fulfilled');

            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocPost.rejected, () => {
                console.log('rejected');

            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocGet.pending, (state, action) => {
                console.log('pendding');
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocGet.fulfilled, (state, action) => {
                console.log('payload', action);
                console.log('fulfilled');
                state.danhSachKhoaHoc = action.payload

            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocGet.rejected, () => {
                console.log('rejected');

            })

            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocDelete.pending, (state, action) => {
                console.log('pendding');
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocDelete.fulfilled, () => {
                console.log('fulfilled');

            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocDelete.rejected, () => {
                console.log('rejected');

            })

            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocPut.pending, (state, action) => {
                console.log('pendding');
            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocPut.fulfilled, () => {
                console.log('fulfilled');

            })
            .addCase(quanLyKhoaHocThunkAction.quanLyKhoaHocPut.rejected, () => {
                console.log('rejected');

            })

    }
})