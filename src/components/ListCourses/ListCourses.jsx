import React, { useEffect, useState } from "react";
import { useGetCourseList } from "../../hook/useGetCourseList";
import { Input, Modal, Pagination, Select } from "antd";
import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import { useGetCategoryCourses } from "../../hook/useGetCategoryCourses";
import { useInView } from "react-intersection-observer";
import "animate.css";
import "./list.css";
import "../css/responsive.css";
import { useDispatch, useSelector } from "react-redux";
import { registerCoursesThunk } from "../../store/Courses/thunk";
import { useGetDetailUser } from "../../hook/useGetDetailUser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constant/config";

export const ListCourses = () => {
  const { data: courses } = useGetCourseList();
  const { data: category } = useGetCategoryCourses();
  const navigate = useNavigate();
  //register courses
  const { userLogin } = useSelector((state) => state.quanLyNguoiDung);
  const { data: userInfo } = useGetDetailUser();
  const registeredCourseIds = userInfo?.chiTietKhoaHocGhiDanh.map(
    (course) => course.maKhoaHoc
  );
  const isCourseRegistered = (courseId) => {
    return registeredCourseIds?.includes(courseId);
  };

  const dispatch = useDispatch();
  //Search
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter courses based on selected category
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
    let filtered = courses;
    if (selectedCategory) {
      filtered = filtered.filter(
        (course) => course.danhMucKhoaHoc.maDanhMucKhoahoc === selectedCategory
      );
    }
    if (searchTerm) {
      filtered = filtered.filter((course) =>
        course.tenKhoaHoc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredCourses(filtered);
  }, [selectedCategory, searchTerm, courses]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const mdPageSize = 4;
  const smPageSize = 3

  const getEffectivePageSize = () => {
    const isMD = window.innerWidth <= 768; // Adjust breakpoint as needed
    return isMD ? mdPageSize : pageSize;
  };

  const startIndex = (currentPage - 1) * getEffectivePageSize();
  const endIndex = startIndex + getEffectivePageSize();
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const limitedCourses = filteredCourses
    ? filteredCourses.slice(startIndex, endIndex)
    : courses
    ? courses.slice(startIndex, endIndex)
    : [];

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger the animation when 10% of the component is in view
  });

  // register courses
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [agree, setAgree] = useState("");
  const [showError, setShowError] = useState(false);

  const handleAgreeChange = (e) => {
    setAgree(e.target.value);
    setShowError(false); // Ẩn thông báo lỗi khi người dùng thay đổi nội dung input
  };

  const handleRegisterClick = (course) => {
    setSelectedCourse(course);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    if (agree.trim().toLowerCase() !== "đồng ý") {
      setShowError(true); // Hiển thị thông báo lỗi nếu giá trị nhập vào không chính xác
      return;
    }
    // Xử lý logic khi người dùng xác nhận đúng
    const payload = {
      maKhoaHoc: selectedCourse.maKhoaHoc,
      taiKhoan: userLogin.payload.taiKhoan,
    };

    dispatch(registerCoursesThunk(payload));
    navigate(PATH.detail);
    toast.success("Bạn đã đăng ký khóa học thành công!");
    setShowConfirmation(false);
  };
  return (
    <div className="list-courses lg:mx-[200px] md:mx-[40px]">
      <h2 className="text-3xl font-semibold text-center text-black pt-[50px] px-[20px] md:px-0">
        CÁC CHƯƠNG TRÌNH ĐÀO TẠO LẬP TRÌNH TẠI IIG
      </h2>
      <img
        loading="lazy"
        decoding="async"
        width={261}
        height={25}
        src="https://aptech.fpt.edu.vn/tuyensinh/wp-content/uploads/2021/12/icon_title.png"
        className="m-auto"
        alt
      />
      <div className="flex md:flex-row flex-col justify-between mt-[30px]">
        <div className="flex md:mx-0 mx-[10px] w-full">
          <SearchOutlined className="me-2"/>
          <Input
            type="text"
            placeholder="Tìm kiếm khóa học"
            className="border rounded-md px-2 mr-2 search-course md:w-full"
            onChange={handleSearch}
          />
        </div>

        <Select
          className="mx-[30px] md:mt-0 mt-[10px] "
          style={{ width: 250 }}
          placeholder="Chọn danh mục khóa học"
          onChange={handleCategoryChange}
          suffixIcon={<FilterOutlined />}
          allowClear
        >
          {/* Render options based on available categories */}
          {category?.map((option) => (
            <Option key={option.id} value={option.maDanhMuc}>
              {option.maDanhMuc}
            </Option>
          ))}
        </Select>
      </div>

      {/* render khóa học */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-10 gap-10 mt-8 md:ms-0 mx-3"
      >
        {limitedCourses.map((course) => (
          <div
            key={course.id}
            className={`lg:h-[230px] md:h-[200px] h-[230px] md:px-[10px] grid grid-cols-2 p-5 rounded-lg hover:shadow-lg hover:border-blue-100 border-solid border-[3px] cursor-pointer ${
              inView ? "animate__animated animate__fadeInUp" : ""
            }`}
          >
            <div className="flex lg:justify-center md:justify-start justify-normal items-center">
              <img
                src={course.hinhAnh}
                alt="..."
                className="rounded-lg lg:w-[190px] lg:h-[180px] md:w-[140px] md:h-[120px] w-[120px] h-[100px]"
              />
            </div>
            <div className="md:mt-[5px] flex flex-col justify-center relative">
              <div className="absolute top-0 left-0">
                <h3 className="lg:text-xl text-lg font-bold line-clamp-1">
                  {course.tenKhoaHoc}
                </h3>
                <p className="mt-1 line-clamp-4">{course.moTa}</p>
              </div>
              <div className="flex gap-1 absolute bottom-0 left-0 lg:text-[14px] md:text-[12px]">
                <p className="text-red-500 italic lg:mt-3">
                  Lượt xem: {course.luotXem}
                </p>
                {isCourseRegistered(course.maKhoaHoc) ? (
                  <button
                    className="btn !bg-gray-400 lg:ms-1 lg:w-[120px] lg:h-[35px] md:w-[117px] md:h-[35px] w-[115px] h-[53px]"
                    disabled
                    style={{
                      cursor: "not-allowed",
                    }}
                  >
                    Đã đăng ký
                  </button>
                ) : (
                  <button
                    className="btn ms-1 md:w-[120px] md:h-[35px] w-[115px] h-[53px]"
                    onClick={() => handleRegisterClick(course)}
                  >
                    Đăng ký
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* phan trang  */}
      <div className="mt-8 flex justify-center">
        <Pagination
          current={currentPage}
          total={courses ? courses.length : 0}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
      <Modal
        title="Xác nhận ghi danh khóa học"
        open={showConfirmation}
        onCancel={() => setShowConfirmation(false)}
        footer={[
          <button
            key="cancel"
            className="btn me-3 w-[90px]"
            onClick={() => setShowConfirmation(false)}
          >
            Hủy
          </button>,
          <button key="confirm" className="btn" onClick={handleConfirm}>
            Xác nhận
          </button>,
        ]}
      >
        <p>Bạn xác nhận ghi danh khóa học?</p>
        <p className="mb-5">Vui lòng ghi chữ "Đồng ý" vào ô dưới đây:</p>
        <input
          type="text"
          className={`border rounded px-2 py-1 mb-2 w-full ${
            showError ? "border-red-500" : ""
          }`}
          value={agree}
          onChange={handleAgreeChange}
        />
        {showError && (
          <p className="text-red-500">Vui lòng nhập chính xác: 'Đồng ý'</p>
        )}
      </Modal>
    </div>
  );
};
