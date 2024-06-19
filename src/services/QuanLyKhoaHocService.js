import axios from "axios";
import { BASE_URL, TOKENCYBERSOFT, getAuthToken } from "../constant/constant";
import { api } from "./API/api";

const GROUP = 'GP01'
export const QuanLyKhoaHocService = {
    getKhoaHocList: async (param) => {
        try {
            const response = await axios.get(
                `${BASE_URL}/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${param}&MaNhom=${GROUP}`,
                {
                    headers: {
                        TokenCybersoft: TOKENCYBERSOFT
                    }
                }
            );
            return response.data; // Return the response data
        } catch (error) {
            throw error; // Throw the error to be caught elsewhere if needed
        }
    },
    postThemKhoaHoc: (payload) =>
        axios.post('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc', payload, {
            headers: {
                TokenCybersoft: TOKENCYBERSOFT,
                'Authorization': 'Bearer ' + getAuthToken(),
            },
        }),
    deleteKhoaHoc: (maKhoaHoc) => {
        axios.delete(`https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`,
            {
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT,
                    'Authorization': 'Bearer ' + getAuthToken(),
                },
            })
    },
    putKhoaHoc: (payload) => {
        axios.put(`https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc`, payload,
            {
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT,
                },
            })

    }
}