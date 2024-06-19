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
      const response = await api.put(
        "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        formData
      );

      const payload = {
        ...response.data,
        headers: {
          "content-type": response.headers["content-type"],
        },
      };

      return payload;
    } catch (error) {
      console.error("Error edit user:", error);
      throw error;
    }
  },

  addUser: async (formData) => {
    try {
    const response = await api.post(
      "/QuanLyNguoiDung/ThemNguoiDung",
      formData
    );

    const payload = {
      ...response.data,
      headers: {
        "content-type": response.headers["content-type"],
      },
    };

    return payload;
  } catch (error) {
    console.error("Error add user:", error);
    throw error;
  }
  },

  getListUser: async () => {
    return api.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
  },

  deleteUser: async (TaiKhoan) => {
    return api.delete(`/QuanLyNguoiDung/XoaNguoiDung/?TaiKhoan=${TaiKhoan}`)
  },

  searchUser: async (tuKhoa) => {
    return api.get(`/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${tuKhoa}`)
  }
};
