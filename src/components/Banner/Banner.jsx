import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const Banner = () => {
  return (
    <div>
      <div className="banner bg-white" style={{ marginTop: "112px" }}>
        <h2 className="text-3xl font-semibold text-center text-black mb-6 pt-[50px]">
          6 LÝ DO NÊN HỌC LẬP TRÌNH TẠI IIG APTECH
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper container mt-[30px]"
        >
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <div
                className="relative"
                style={{ width: "1000px", height: "600px" }}
              >
                <img
                  className="w-full h-full rounded-md"
                  src="https://funix.edu.vn/wp-content/uploads/2022/01/con-so-0.png"
                  alt="Python"
                />
                <p className="absolute bottom-0 left-0 des_banner">
                  Với 25 năm kinh nghiệm giảng dạy CNTT – Lập Trình tại Việt
                  Nam, bạn được đào tạo bài bản từ số 0, sát với thực tế
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center">
              <div
                className="relative"
                style={{ width: "1000px", height: "600px" }}
              >
                <img
                  className="w-full h-full rounded-md"
                  src="https://iigvietnam.com/wp-content/uploads/2021/08/gioi-thieu-iig.jpg"
                  alt="Python"
                />
                <p className="absolute bottom-0 left-0 des_banner">
                  Được ưu tiên thực tập và giới thiệu việc làm tại các công ty
                  thành viên thuộc Tập đoàn IIG
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <div
                className="relative"
                style={{ width: "1000px", height: "600px" }}
              >
                <img
                  className="w-full h-full rounded-md"
                  src="https://tuvanthitracnghiem.com/uploads/news/2021_03/1_iuon.jpg"
                  alt="Python"
                />
                <p className="absolute bottom-0 left-0 des_banner">
                  70% thời lượng là thực hành, được học thẳng vào chuyên ngành,
                  không học các môn đại cương
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <div
                className="relative"
                style={{ width: "1000px", height: "600px" }}
              >
                <img
                  className="w-full h-full rounded-md"
                  src="https://iigvietnam.com/wp-content/uploads/2021/09/20-2-scaled.jpg"
                  alt="Python"
                />
                <p className="absolute bottom-0 left-0 des_banner">
                  Được dạy & học trên nền tảng EduNext độc quyền của Tập đoàn
                  IIG, rèn giũa kỹ năng tư duy phản biện, giải quyết vấn đề
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <div
                className="relative"
                style={{ width: "1000px", height: "600px" }}
              >
                <img
                  className="w-full h-full rounded-md"
                  src="https://khamphahue.com.vn/Portals/0/Medias/Nam2022/T11/HueCIT-don-tiep-Aptech-An-Do.1.jpg"
                  alt="Python"
                />
                <p className="absolute bottom-0 left-0 des_banner">
                  Bằng tốt nghiệp ADSE do Tập đoàn Aptech Ấn Độ cấp có giá trị
                  toàn cầu, có thể làm việc tại các doanh nghiệp trong & ngoài
                  nước
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
