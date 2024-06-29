import React, { useEffect, useState } from "react";
import { ModalAuth } from "../Modal/ModalAuth";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Popover } from "antd";
import { UserIcon } from "../../assets/icon/UserIcon";
import { quanLyNguoiDungActions } from "../../store/User/slice";
import "../css/responsive.css";
import "./header.css";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { PATH } from "../../constant/config";
import { UserOutlined } from "@ant-design/icons";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setIsModalOpen(true);
  };
  const closeAuthModal = () => setIsModalOpen(false);

  const { userLogin } = useSelector((state) => state.quanLyNguoiDung);

  const handleLogout = () => {
    dispatch(quanLyNguoiDungActions.logOut());
    toast.success("Bạn đã đăng xuất thành công!");
    navigate(PATH.home);
  };

  useEffect(() => {

    if (!userLogin || userLogin.payload.maLoaiNguoiDung !== "GV") {
      return;
    }


    const adminButton = document.getElementById("adminButton");

    if (adminButton) {
      adminButton.style.display = "block";
    }
  }, [userLogin]);


  const handleAdminClick = () => {

    navigate(PATH.homeadmin);
  };

  return (
    <div className="header fixed top-0 left-0 z-40">
      <div className="header_top lg:px-[200px] md:px-[50px] px-0 lg:gap-0 md:gap-5">
        {/* phone */}
        <div class="md:flex flex-row gap-1.5 md:items-center md:justify-center md:pt-2 phone hidden pb-2">
          <div class="flex flex-row justify-center pt-[2px]">
            <svg width="16" height="16">
              <g clip-path="url(#clip0_1534_7)">
                <path
                  d="M12.4323 9.46033C12.4297 9.45776 12.4273 9.4552 12.4247 9.45264C12.4236 9.45154 12.4223 9.4502 12.4209 9.44897L11.5249 8.55298C11.2731 8.30103 10.9382 8.16235 10.582 8.16235C10.228 8.16235 9.89491 8.29944 9.64357 8.54846C9.64174 8.55017 9.64003 8.552 9.6382 8.55371L9.162 9.03003L6.96901 6.83691L7.44509 6.36072C7.44692 6.35901 7.44863 6.35718 7.45033 6.35547C7.96584 5.83521 7.96449 4.99255 7.44594 4.474L6.55129 3.57922C6.54958 3.57751 6.54799 3.57593 6.5464 3.57434C6.29457 3.323 5.95998 3.18457 5.60427 3.18457C5.24965 3.18457 4.91615 3.32214 4.66469 3.57178C4.66127 3.5752 4.65785 3.57861 4.65456 3.58215L4.24367 3.99292C4.02748 4.20911 3.86159 4.375 3.85512 4.38159C3.2206 5.01599 3.07228 6.02734 3.43752 7.22937C3.77199 8.33032 4.50795 9.4884 5.50966 10.4902C6.9081 11.8887 8.62074 12.7573 9.97902 12.7573C10.6508 12.7573 11.2178 12.5455 11.6165 12.1467C11.6248 12.1385 11.8541 11.9092 12.1265 11.6368L12.4247 11.3386C12.4252 11.3381 12.4257 11.3376 12.4263 11.337C12.9386 10.823 12.9435 9.98938 12.4402 9.46912C12.4376 9.46606 12.4348 9.46301 12.4323 9.46033ZM11.7652 10.6722C11.7623 10.675 11.7595 10.6779 11.7567 10.6808L11.4636 10.9739C11.1959 11.2416 10.9699 11.4677 10.9553 11.4821C10.7312 11.7062 10.4027 11.8198 9.97902 11.8198C8.87709 11.8198 7.38307 11.0377 6.17262 9.82739C5.27773 8.9325 4.62502 7.91309 4.33449 6.95679C4.07839 6.11414 4.14528 5.41711 4.51833 5.04407L4.90651 4.65588L5.32387 4.23853C5.32546 4.23694 5.32692 4.23547 5.32839 4.23389C5.40273 4.16174 5.50038 4.12207 5.60427 4.12207C5.70864 4.12207 5.8069 4.16223 5.88149 4.23523C5.88246 4.23633 5.88356 4.23743 5.88478 4.23853L6.78298 5.13684C6.9374 5.29126 6.9374 5.54248 6.78298 5.6969C6.78273 5.69714 6.78249 5.69751 6.78212 5.69775V5.69788L5.9745 6.50549C5.79152 6.6886 5.79152 6.98535 5.9745 7.16846L8.83058 10.0244C8.91847 10.1124 9.03774 10.1617 9.162 10.1617C9.28639 10.1617 9.40566 10.1123 9.49355 10.0244L10.296 9.22168C10.299 9.21899 10.3018 9.21606 10.3046 9.21326C10.3792 9.14014 10.4776 9.09985 10.582 9.09985C10.6878 9.09985 10.7871 9.14111 10.862 9.21582L11.7578 10.1116L11.7598 10.1136C11.7608 10.1146 11.7617 10.1156 11.7626 10.1166C11.9149 10.2698 11.9157 10.5179 11.7652 10.6722Z"
                  fill="white"
                ></path>
                <path
                  d="M13.6569 2.34314C12.1459 0.832153 10.137 0 8 0C5.86304 0 3.85413 0.832153 2.34314 2.34314C0.832153 3.85425 0 5.86316 0 8C0 10.1368 0.832153 12.1459 2.34314 13.6569C3.85413 15.1678 5.86316 16 8 16C10.1368 16 12.1458 15.1678 13.6569 13.6569C15.1678 12.1459 16 10.137 16 8C16 5.86316 15.1678 3.85425 13.6569 2.34314ZM8 15.0625C4.10571 15.0625 0.9375 11.8942 0.9375 8C0.9375 4.10583 4.10571 0.937622 8 0.9375C11.8943 0.937622 15.0625 4.10583 15.0625 8C15.0624 11.8943 11.8942 15.0625 8 15.0625Z"
                  fill="white"
                ></path>
              </g>
            </svg>
          </div>
          <p class="text-white p-0 m-0">1900636929</p>
        </div>
        {/* search */}
        <div className="search flex lg:pt-2 ps-2 md:mx-0 ms-[5px]">
          <input
            id="search"
            placeholder="Tìm kiếm"
            className="input md:w-[310px] w-[280px]"
            type="text"
          />
          <span className="pt-[2px]">
            <svg width="16" height="16">
              <path
                d="M15.7 14.3L11.5 10.1C11.3 9.9 11 9.8 10.7 9.8C11.5 8.8 12 7.4 12 6C12 2.7 9.3 0 6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C7.4 12 8.8 11.5 9.8 10.6C9.8 10.9 9.8 11.2 10.1 11.4L14.3 15.6C14.5 15.8 14.8 15.9 15 15.9C15.2 15.9 15.5 15.8 15.7 15.6C16.1 15.3 16.1 14.7 15.7 14.3ZM6 10.5C3.5 10.5 1.5 8.5 1.5 6C1.5 3.5 3.5 1.5 6 1.5C8.5 1.5 10.5 3.5 10.5 6C10.5 8.5 8.5 10.5 6 10.5Z"
                fill="white"
              ></path>
              <defs>
                <clipPath id="clip0_431_824">
                  <rect width="16" height="16" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
        {/* button */}
        <div className="flex flex-row items-center justify-center gap-4">
          {userLogin ? (
            <>
              <Popover
                placement="bottom"
                title={`Xin chào, ${userLogin.payload.hoTen}`}
                content={
                  <div className="flex flex-col">
                    <NavLink
                      className="text-red-500 italic mb-2 underline cursor-pointer hover:text-red-300"
                      to={PATH.detail}
                    >
                      Thông tin cá nhân
                    </NavLink>
                    <button className="logout-button" onClick={handleLogout}>
                      Đăng xuất
                    </button>
                  </div>
                }
                trigger="click"
              >
                <div className="flex items-center gap-2 font-bold me-3 md:me-0">
                  <Avatar size={"large"} icon={<UserIcon />} />
                  <div className="lg:block hidden">{userLogin.payload.hoTen}</div>
                </div>

              </Popover>
              {userLogin && userLogin.payload.maLoaiNguoiDung === "GV" && (
                <Button
                  id="adminButton"
                  className="admin-button"
                  icon={<UserOutlined />}
                  onClick={handleAdminClick}
                >
                  Admin
                </Button>
              )}
            </>
          ) : (
            <div className="wap">
              <Popover
                placement="bottom"
                content={
                  <div className="flex flex-col md:w-[220px] gap-2 font-bold">
                    <button
                      className="bg-[orange] md:w-full w-[100px] text-white font-700 text-sm rounded-lg py-1.5 h-[35px]"
                      onClick={() => openAuthModal("login")}
                    >
                      <div>Đăng nhập</div>
                    </button>
                    <button
                      className="bg-green-700 md:w-full w-[100px] text-white font-700 text-sm rounded-lg py-1.5 h-[35px]"
                      onClick={() => openAuthModal("register")}
                    >
                      <div>Đăng ký</div>
                    </button>
                  </div>
                }
                trigger="click"
              >
                <div className="sm:hidden me-2 mt-1">
                  <button id="hamburgerBtn" className="text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </Popover>

              <div className="hidden md:flex flex-row w-[220px] gap-2 font-bold absolute md:static">
                <button
                  className="bg-[orange] w-full text-white font-700 text-sm rounded-lg py-1.5 h-[35px]"
                  onClick={() => openAuthModal("login")}
                >
                  <div>Đăng nhập</div>
                </button>
                <button
                  className="bg-green-700 w-full text-white font-700 text-sm rounded-lg py-1.5 h-[35px]"
                  onClick={() => openAuthModal("register")}
                >
                  <div>Đăng ký</div>
                </button>
              </div>
            </div>
          )}
        </div>
        <ModalAuth
          isOpen={isModalOpen}
          onRequestClose={closeAuthModal}
          initialMode={authMode}
        />
      </div>
      <div className="header_bot lg:px-[277px] md:px-[70px]">
        <img
          src="https://elearning.iigvietnam.com/images/logo.png"
          alt="logo"
          className="cursor-pointer"
          onClick={() => navigate(PATH.home)}
        />
        <Popover
          placement="bottom"
          overlayClassName="custom-popover-nav w-full"
          content={
            <div className="flex flex-col py-2">
              <div className="group">
                <div className="py-2 px-3 inline-flex items-center h-full cursor-pointer text-base font-bold">
                  <span className="mr-1 line-clamp-1 hover:text-green-500">Khóa tự học</span>
                </div>
              </div>
              <div className="group">
                <div className="py-2 px-3 inline-flex items-center h-full cursor-pointer text-base font-bold">
                  <span className="mr-1 line-clamp-1 hover:text-green-500">Góc học viên</span>
                </div>
              </div>
              <div className="group">
                <div className="py-2 px-3 inline-flex items-center h-full cursor-pointer text-base font-bold hover:text-green-500">
                  <span className="mr-1 line-clamp-1 hover:text-green-500">Cam kết đầu ra</span>
                </div>
              </div>
              <div className="group">
                <a
                  className="py-2 px-3 inline-flex items-center h-full cursor-pointer text-base font-bold hover:text-green-500"
                  href="/news"
                >
                  <span className="mr-1 line-clamp-1 hover:text-green-500">Tin tức</span>
                </a>
              </div>
            </div>
          }
          arrowPointAtCenter={true}
          overlayInnerStyle={{ padding: 0 }}
          trigger="click"
        >
          <div className="sm:hidden me-2 mt-1">
            <button className="text-black p-1 ms-[100px] hamburgerBtn absolute right-5 top-[60px]">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </Popover>

        <div className="w-full items-center justify-center md:flex hidden lg:ms-[310px] md:m-0">
          <div className="flex">
            <div className="group">
              <div className="py-2 px-3 inline-flex items-center h-full cursor-pointer text-base font-bold">
                <span className="mr-1 line-clamp-1 hover:text-green-500">Khóa tự học</span>
              </div>
              <div className="absolute pt-5 z-10 hidden bg-white rounded-b-lg group-hover:block">
                <a
                  className="font-bold px-4 py-2 block cursor-pointer min-w-[100px]"
                  href="/self-study-course/4dfcc26e-f707-410f-8acc-110c37e8f7b4"
                >
                  FrontEnd
                </a>
                <a
                  className="font-bold px-4 py-2 block cursor-pointer min-w-[100px]"
                  href="/self-study-course/f9851345-741f-4364-890d-9e53a8010b50"
                >
                  BackEnd
                </a>
              </div>
            </div>
            <div className="group">
              <div className="py-2 px-3 inline-flex items-center h-full cursor-pointer text-base font-bold">
                <span className="mr-1 line-clamp-1 hover:text-green-500">Góc học viên</span>
              </div>
              <div className="absolute pt-5 z-10 hidden bg-white rounded-b-lg group-hover:block">
                <a
                  className="font-bold px-4 py-2 block cursor-pointer min-w-[100px]"
                  href="/mock-test/c1a11094-9c08-45a5-841e-e32f94c4840d"
                >
                  Stories
                </a>
                <a
                  className="font-bold px-4 py-2 block cursor-pointer min-w-[100px]"
                  href="/mock-test/82950bd4-8fc6-4e27-be5d-d1861d547123"
                >
                  Thư viện ảnh
                </a>
                <a
                  className="font-bold px-4 py-2 block cursor-pointer min-w-[100px]"
                  href="/mock-test/1ee3cb4d-21d8-4aa6-b913-b0b208eea190"
                >
                  Cảm nhận học viên
                </a>
                <a
                  className="font-bold px-4 py-2 block cursor-pointer min-w-[100px]"
                  href="/mock-test/182fe997-f5e1-4793-9323-d38cf18df068"
                >
                  Bài test kỹ năng
                </a>
              </div>
            </div>
            <div className="group">
              <div className="py-2 px-3 inline-flex items-center h-full cursor-pointer text-base font-bold hover:text-green-500">
                <span className="mr-1 line-clamp-1">Cam kết đầu ra</span>
              </div>
            </div>
            <div className="group">
              <a
                className="py-2 px-3 inline-flex items-center h-full cursor-pointer text-base font-bold hover:text-green-500"
                href="/news"
              >
                <span className="mr-1 line-clamp-1">Tin tức</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
