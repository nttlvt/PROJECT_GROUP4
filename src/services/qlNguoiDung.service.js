import axios from "axios";
import { BASE_URL, TOKENCYBERSOFT } from "../constant/constant";
import { api } from "./API/api";

export const qlNguoiDungServices = {
    dangKy: (payload) =>
        axios.post(`${BASE_URL}/QuanLyNguoiDung/DangKy`, payload, {
        headers: {
            TokenCybersoft: TOKENCYBERSOFT,
        },
    }),

    dangNhap: (payload) =>
        axios.post(`${BASE_URL}/QuanLyNguoiDung/DangNhap`, payload, {
        headers: {
            TokenCybersoft: TOKENCYBERSOFT,
        },
    }),
  
    getDetailUser: async () => {
        return api.post(`${BASE_URL}/QuanLyNguoiDung/ThongTinTaiKhoan`);
    },
};
