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
    postThemKhoaHoc: async (formData) => {
        try {
            const response = axios.post('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh', formData, {
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT,
                    // 'Authorization': 'Bearer ' + getAuthToken(),
                },

            })
            return response
        }
        catch (err) {
            console.log('post err', err)
        }
    },
    deleteKhoaHoc: (maKhoaHoc) => {
        axios.delete(`https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`,
            {
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT,
                    'Authorization': 'Bearer ' + getAuthToken(),
                },
            })

    },
    putKhoaHoc: (formData) => {
        try {
            const response = axios.post('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHocUpload', formData, {
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT,
                    'Authorization': 'Bearer ' + getAuthToken(),
                },

            })
            return response
        }
        catch (err) {
            console.log('post err', err)
        }

    },
    getMaDanhMucKhoaHoc: async () => {
        try {
            const result = await axios.get(`https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
                {
                    headers: {
                        TokenCybersoft: TOKENCYBERSOFT,
                    },
                })
            console.log('result ma', result)
            return result.data
        }
        catch (error) {
            console.log(error)
        }
    },
    postNguoiDungChuaGhiDanh: async (maKhoaHoc) => {
        try {
            const response = await axios.post('https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh', { maKhoaHoc: maKhoaHoc },
                {
                    headers: {
                        TokenCybersoft: TOKENCYBERSOFT,
                        'Authorization': 'Bearer ' + getAuthToken(),
                    }
                }
            )
            console.log('postNguoiDungChuaGhiDanh', response)
            return response
        }
        catch (err) {
            return err
        }
    },
    postNguoiDungChoGhiDanh: async (maKhoaHoc) => {
        try {
            const response = await axios.post('https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet', { maKhoaHoc: maKhoaHoc },
                {
                    headers: {
                        TokenCybersoft: TOKENCYBERSOFT,
                        'Authorization': 'Bearer ' + getAuthToken(),
                    }
                }
            )
            console.log('postNguoiDungChoGhiDanh', response)
            return response
        }
        catch (err) {
            return err
        }
    },
    postNguoiDungDaGhiDanh: async (maKhoaHoc) => {
        try {
            const response = await axios.post('https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc', { maKhoaHoc: maKhoaHoc },
                {
                    headers: {
                        TokenCybersoft: TOKENCYBERSOFT,
                        'Authorization': 'Bearer ' + getAuthToken(),
                    }
                }
            )
            console.log('postNguoiDungDaGhiDanh', response)
            return response
        }
        catch (err) {
            return err
        }
    },
    postGhiDanhNguoiDung: async (payload) => {
        try {
            const response = await axios.post('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/GhiDanhKhoaHoc', payload,
                {
                    headers: {
                        TokenCybersoft: TOKENCYBERSOFT,
                        'Authorization': 'Bearer ' + getAuthToken(),
                    }
                }
            )
            console.log('postGhiDanhNguoiDung', response)
            return response
        }
        catch (err) {
            return err
        }
    },
    deleteGhiDanhNguoiDung: async (payload) => {
        try {
            const response = await axios.post('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh', payload,
                {
                    headers: {
                        TokenCybersoft: TOKENCYBERSOFT,
                        'Authorization': 'Bearer ' + getAuthToken(),
                    }
                }
            )
            console.log('deleteGhiDanhNguoiDung', response)
            return response
        }
        catch (err) {
            return err
        }
    },
    postKhoaHocChuaGhiDanh: async (payload) => {
        try {
            const response = await axios.post('https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh', payload,
                {
                    headers: {
                        TokenCybersoft: TOKENCYBERSOFT,
                        'Authorization': 'Bearer ' + getAuthToken(),
                    }
                }
            )
            console.log('postGhiDanhKhoaHoc', response)
            return response
        }
        catch (err) {
            return err
        }
    },
    postKhoaHocChoGhiDanh: async (taiKhoan) => {
        try {
            const response = await axios.post('https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet', { taiKhoan: taiKhoan },
                {
                    headers: {
                        TokenCybersoft: TOKENCYBERSOFT,
                        'Authorization': 'Bearer ' + getAuthToken(),
                    }
                }
            )
            console.log('postKhoaHocChoGhiDanh', response)
            return response
        }
        catch (err) {
            return err
        }
    },
    postKhoaHocDaGhiDanh: async (taiKhoan) => {
        try {
            const response = await axios.post('https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet', { taiKhoan: taiKhoan },
                {
                    headers: {
                        TokenCybersoft: TOKENCYBERSOFT,
                        'Authorization': 'Bearer ' + getAuthToken(),
                    }
                }
            )
            // console.log('postKhoaHocDaGhiDanh', response)
            return response
        }
        catch (err) {
            return err
        }
    },
}