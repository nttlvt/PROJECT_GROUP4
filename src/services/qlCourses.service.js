import { api } from "./API/api";

export const quanLyCoursesServices = {
  getCourseList: async (tenKhoaHoc = "") => {
    try {
      if (tenKhoaHoc.trim() != "") {
        const response = await api.get(
          `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01&tenKhoaHoc=${tenKhoaHoc}`
        );
        return response;
      }
      const response = await api.get(
        "/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
      );
      return response;
    } catch (error) {
      console.error("Error fetching courses list:", error);
    }
  },

  getCategoryCourses: async () => {
    return api.get(`/QuanLyKhoaHoc/LayDanhMucKhoaHoc`);
  },
};
