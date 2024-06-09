import axios from "axios";
import { BASE_URL, TOKENCYBERSOFT } from "../constant/constant";

export const qlNguoiDungServices = {
    dangKy: (payload) =>
        axios.post(`${BASE_URL}/QuanLyNguoiDung/DangKy`, payload, {
            headers: {
                TokenCybersoft: TOKENCYBERSOFT
            }
        }),

    dangNhap: (payload) =>
        axios.post(`${BASE_URL}/QuanLyNguoiDung/DangNhap`, payload, {
            headers: {
                TokenCybersoft: TOKENCYBERSOFT
            }
        })
}