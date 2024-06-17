export const BASE_URL = "https://elearningnew.cybersoft.edu.vn/api";
export const TOKENCYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MyIsIkhldEhhblN0cmluZyI6IjA5LzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTcyNTg0MDAwMDAwMDAiLCJuYmYiOjE2OTY4NzA4MDAsImV4cCI6MTcyNTk4NzYwMH0.a30YDpRRs8DiVygvNfzGZr-a9fge4_6hBAu8wYOBE4o";
export const getAuthToken = () => {
  return localStorage.getItem("accessToken");
};
export const QUERY_KEY_COURSE_LIST = "GetDanhSachKhoaHoc";
export const QUERY_KEY_CATEGORY_COURSE_LIST = "GetCategoryKhoaHoc";
export const QUERY_KEY_DETAIL_USER = "GetDetailUser";
export const QUERY_KEY_REGISTER = "RegisterCourses";
export const QUERY_KEY_INFO_COURSE = "GetInfoCourses;"
