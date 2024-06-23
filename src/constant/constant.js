export const BASE_URL = "https://elearningnew.cybersoft.edu.vn/api";
export const TOKENCYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MyIsIkhldEhhblN0cmluZyI6IjE2LzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyOTAzNjgwMDAwMCIsIm5iZiI6MTY5Njg3MDgwMCwiZXhwIjoxNzI5MTg0NDAwfQ._HrEe-Nmfst4upbWtIGcUIJ6CIbknZMHAlp8JbVhlRA";
export const getAuthToken = () => {
  return localStorage.getItem("accessToken");
};
export const QUERY_KEY_COURSE_LIST = "GetDanhSachKhoaHoc";
export const QUERY_KEY_CATEGORY_COURSE_LIST = "GetCategoryKhoaHoc";
export const QUERY_KEY_DETAIL_USER = "GetDetailUser";
export const QUERY_KEY_REGISTER = "RegisterCourses";
export const QUERY_KEY_USER_LIST = "GetDanhSachUser"
export const QUERY_KEY_USER_SEARCH = "GetSearchUser"
export const QUERY_KEY_INFO_COURSE = "GetInfoCourses;"
