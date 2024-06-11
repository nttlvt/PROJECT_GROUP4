import React, { useEffect, useState } from "react";
import "../cssFixed/fixed.css";
import "./detail.css";
import { useGetDetailUser } from "../../hook/useGetDetailUser";

export const UserDetail = () => {
  const { data: userInfo } = useGetDetailUser();
  console.log(userInfo);

  return (
    <div className="maTop">
      <div className="container mx-auto mt-10 p-5">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">
            Thông tin cá nhân
          </h2>
          <div className="space-y-4">
            <p className="text-lg">
              <strong className="font-semibold">Tài khoản:</strong>{" "}
              {userInfo?.taiKhoan}
            </p>
            <p className="text-lg">
              {" "}
              {/* Làm lớn hơn */}
              <strong className="font-semibold">Họ tên:</strong>{" "}
              {userInfo?.hoTen}
            </p>
            <p className="text-lg">
              {" "}
              {/* Làm lớn hơn */}
              <strong className="font-semibold">Số điện thoại:</strong>{" "}
              {userInfo?.soDT}
            </p>
            <p className="text-lg">
              {" "}
              {/* Làm lớn hơn */}
              <strong className="font-semibold">Loại người dùng:</strong>{" "}
              {userInfo?.maLoaiNguoiDung}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-5">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h3 className="text-3xl font-semibold mb-4 border-b pb-2">
            Khóa học đã ghi danh
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
            {userInfo?.chiTietKhoaHocGhiDanh.map((course) => (
              <div
                key={course.maKhoaHoc}
                className="bg-white rounded-lg shadow-md"
              >
                <img
                  src={course.hinhAnh}
                  alt={course.tenKhoaHoc}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-4">
                    {course.tenKhoaHoc}
                  </h4>
                  <p className="text-gray-700 text-lg mb-4 h-16 overflow-hidden"> {/* Đặt chiều cao cố định và ẩn tràn */}
                    {course.moTa}
                  </p>
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>Lượt xem:</strong> {course.luotXem}
                  </p>
                  <p className="text-gray-700 text-lg mb-5">
                    <strong>Ngày tạo:</strong>{" "}
                    {new Date(course.ngayTao).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 text-lg">
                    <strong>Đánh giá:</strong> {course.danhGia}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex justify-center items-center mt-4 border-[5px] border-gray-200 rounded-lg p-2 h-[456px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-gray-300 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11 9V6a1 1 0 00-2 0v3H6a1 1 0 000 2h3v3a1 1 0 002 0v-3h3a1 1 0 000-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
