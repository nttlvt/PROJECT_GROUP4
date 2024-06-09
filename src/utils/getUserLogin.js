import { LOCAL_USER_LOGIN_KEY } from "../constant/localStogare";

export const getUserLogin = () => {
    const userLogin = localStorage.getItem(LOCAL_USER_LOGIN_KEY);

    if (!userLogin) return null; // Trả về null nếu không có dữ liệu trong localStorage

    try {
        return JSON.parse(userLogin);
    } catch (error) {
        console.error("Error parsing localStorage data:", error);
        return null; // Trả về null nếu không thể phân tích cú pháp dữ liệu thành JSON
    }
};
