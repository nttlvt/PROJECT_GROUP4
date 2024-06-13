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

    editUser: async (formData) => {
        try {
            const response = await api.put('/QuanLyNguoiDung/CapNhatThongTinNguoiDung', formData);
            
            // Đảm bảo payload là một object có thể serializable
            const payload = {
                ...response.data,
                headers: {
                    'content-type': response.headers['content-type']
                }
            };
    
            return payload;
        } catch (error) {
            console.error('Error edit user:', error);
            throw error;
        }
    }
};
