import React, { useEffect, useState } from "react";
import { useGetCourseList } from "../../hook/useGetCourseList";
import { Input, Pagination, Select } from "antd";
import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import { useGetCategoryCourses } from "../../hook/useGetCategoryCourses";
import { useInView } from "react-intersection-observer";
import "animate.css";
import './list.css'

export const ListCourses = () => {
  const { data: courses } = useGetCourseList();
  const { data: category} = useGetCategoryCourses()

  //Search
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter courses based on selected category
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    setCurrentPage(1)
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
    console.log(filteredCourses)
  }, [selectedCategory, searchTerm, courses]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // Số lượng mục trên mỗi trang
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const limitedCourses = filteredCourses  ? filteredCourses.slice(startIndex, endIndex) : (courses ? courses.slice(startIndex, endIndex) : []) ;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger the animation when 10% of the component is in view
  }); 
  return (
    <div className="mx-[200px]">
      <h2 className="text-3xl font-semibold text-center text-black pt-[50px]">
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
      <div className="flex justify-between mt-[30px]">
        <SearchOutlined style={{ marginRight: 8 }} />
        <Input
          type="text"
          placeholder="Tìm kiếm khóa học"
          className="border rounded px-2 mr-2"
          style={{ width: "calc(100% - 260px)" }}
          onChange={handleSearch}
        />
        <Select
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
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
        {limitedCourses.map((course) => (
          <div
            key={course.id}
            className={`grid grid-cols-1 md:grid-cols-2 p-4 rounded-lg shadow-lg hover:border-blue-100 border-solid border-[2px] cursor-pointer ${
              inView ? "animate__animated animate__fadeInUp animate__slow" : ""
            }`}
            style={{ height: "230px" }}
          >
            <div className="flex justify-center md:justify-start items-center">
              <img
                src={course.hinhAnh}
                alt="..."
                className="rounded-lg"
                style={{ width: "190px", height: "170px" }}
              />
            </div>
            <div className="flex flex-col justify-center relative">
              <div className="absolute top-0 left-0">
                <h3 className="text-xl font-bold">{truncateText(course.tenKhoaHoc, 21)}</h3>
                <p className="mt-1">{truncateText(course.moTa, 183)}</p>
              </div>

              <p className="text-red-500 italic absolute bottom-0 left-0">  
                Lượt xem: {course.luotXem}
              </p>
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
    </div>
  );
};
