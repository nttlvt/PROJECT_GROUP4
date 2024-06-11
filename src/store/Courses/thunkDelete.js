import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyCoursesServices } from "../../services/qlCourses.service";

export const deleteCoursesThunk = createAsyncThunk('quanLyKhoaHoc/delete', async (payload, {rejectWithValue}) => {
    try {
        const response = await quanLyCoursesServices.deleteCourses(payload)
        return response
    } catch (err) {
    }
})
