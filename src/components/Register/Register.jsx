import {
  ContactsOutlined,
  KeyOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerThunk } from "../../store/User/thunk";
import { useForm, Controller } from "react-hook-form";

export const Register = ({ onSwitchToLogin }) => {
  const classInput = `bg-[#1618230f] px-[20px] py-[12px] w-full transition outline-none rounded-[44px] h-[44px] text-sm font-inter
    border dark:border-slate-700 dark:focus:border-slate-400 
    focus:border-slate-400 border-slate-200 `;

  const dispatch = useDispatch();
  const { isFetchingRegister } = useSelector((state) => state.quanLyNguoiDung);
  
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (values) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => {
        alert("Đăng ký thành công!");
        onSwitchToLogin(); // Chuyển sang trang đăng nhập sau khi đăng ký thành công
      })
      .catch((error) => {
        alert("Đăng ký thất bại: " + error.message);
      });
  };

  return (
    <>
      <div className="">
        <img
          className="mx-auto w-[70px] h-[50px] "
          src="https://elearning.iigvietnam.com/images/logo.png"
          alt="logo"
        />
        <h1 className="hidden sm:block text-[#292929] text-center mt-5 dark:text-slate-200 text-4xl font-bold">
          Đăng ký tài khoản IIG
        </h1>
        <h1 className="block sm:hidden text-[#292929] text-center mt-5 dark:text-slate-200 text-4xl font-bold">
          Đăng ký
        </h1>
      </div>
      <div className="mt-11">
        <Form layout={"vertical"} autoComplete="off" onFinish={handleSubmit(onSubmit)}>
          {/* HỌ TÊN */}
          <Form.Item
            name="hoTen"
            hasFeedback
            className="mb-[10px]"
            validateStatus={errors.hoTen ? 'error' : ''}
            help={errors.hoTen ? errors.hoTen.message : null}
          >
            <Controller
              name="hoTen"
              control={control}
              defaultValue=""
              rules={{
                required: 'Họ và tên là bắt buộc',
                minLength: {
                  value: 4,
                  message: 'Họ và tên phải có ít nhất 4 chữ cái',
                },
              }}
              render={({ field }) => (
                <Input
                  className={classInput}
                  style={{ backgroundColor: "transparent" }}
                  size="large"
                  prefix={<ContactsOutlined />}
                  placeholder="Họ và tên"
                  autoComplete="off"
                  {...field}
                />
              )}
            />
          </Form.Item>

          {/* TÀI KHOẢN */}
          <Form.Item
            name="taiKhoan"
            hasFeedback
            className="mb-[10px]"
            validateStatus={errors.taiKhoan ? 'error' : ''}
            help={errors.taiKhoan ? errors.taiKhoan.message : null}
          >
            <Controller
              name="taiKhoan"
              control={control}
              defaultValue=""
              rules={{
                required: 'Tài khoản là bắt buộc',
                minLength: {
                  value: 6,
                  message: 'Tài khoản phải có ít nhất 6 ký tự',
                },
              }}
              render={({ field }) => (
                <Input
                  className={classInput}
                  style={{ backgroundColor: "transparent" }}
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="Tài khoản"
                  autoComplete="off"
                  {...field}
                />
              )}
            />
          </Form.Item>

          {/* MẬT KHẨU */}
          <Form.Item
            name="matKhau"
            hasFeedback
            className="mb-[10px]"
            validateStatus={errors.matKhau ? 'error' : ''}
            help={errors.matKhau ? errors.matKhau.message : null}
          >
            <Controller
              name="matKhau"
              control={control}
              defaultValue=""
              rules={{
                required: 'Mật khẩu là bắt buộc',
                minLength: {
                  value: 6,
                  message: 'Mật khẩu phải có ít nhất 6 ký tự',
                },
              }}
              render={({ field }) => (
                <Input.Password
                  className={classInput}
                  style={{ backgroundColor: "transparent" }}
                  prefix={<KeyOutlined />}
                  size="large"
                  placeholder="Mật khẩu"
                  autoComplete="off"
                  {...field}
                />
              )}
            />
          </Form.Item>

          {/* EMAIL */}
          <Form.Item
            name="email"
            hasFeedback
            className="mb-[10px]"
            validateStatus={errors.email ? 'error' : ''}
            help={errors.email ? errors.email.message : null}
          >
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ 
                required: 'Email là bắt buộc',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Email không hợp lệ'
                }
              }}
              render={({ field }) => (
                <Input
                  className={classInput}
                  style={{ backgroundColor: "transparent" }}
                  prefix={<MailOutlined />}
                  size="large"
                  placeholder="Email"
                  autoComplete="off"
                  {...field}
                />
              )}
            />
          </Form.Item>

          {/* SỐ ĐIỆN THOẠI */}
          <Form.Item
            name="soDT"
            hasFeedback
            className="mb-[10px]"
            validateStatus={errors.soDT ? 'error' : ''}
            help={errors.soDT ? errors.soDT.message : null}
          >
            <Controller
              name="soDT"
              control={control}
              defaultValue=""
              rules={{ 
                required: 'Số điện thoại là bắt buộc',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Số điện thoại không hợp lệ'
                }
              }}
              render={({ field }) => (
                <Input
                  className={classInput}
                  style={{ backgroundColor: "transparent" }}
                  prefix={<PhoneOutlined />}
                  size="large"
                  placeholder="Số điện thoại"
                  autoComplete="off"
                  {...field}
                />
              )}
            />
          </Form.Item>

          {/* MÃ NHÓM */}
          <Form.Item
            name="maNhom"
            hasFeedback
            className="mb-[10px]"
            validateStatus={errors.maNhom ? 'error' : ''}
            help={errors.maNhom ? errors.maNhom.message : null}
          >
            <Controller
              name="maNhom"
              control={control}
              defaultValue=""
              rules={{ required: 'Mã nhóm là bắt buộc' }}
              render={({ field }) => (
                <Input
                  className={classInput}
                  style={{ backgroundColor: "transparent" }}
                  prefix={<TeamOutlined />}
                  size="large"
                  placeholder="Mã nhóm"
                  autoComplete="off"
                  {...field}
                />
              )}
            />
          </Form.Item>

          {/* BUTTON */}
          <Form.Item className="mt-[20px] flex justify-center">
            <Button
              className="font-semibold hover:bg-green-300 text-white cursor-pointer bg-green-400"
              loading={isFetchingRegister}
              htmlType="submit"
            >
              <span>Đăng ký</span>
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="mt-11">
        <p className="text-center text-base">
          <span>Bạn đã có tài khoản? </span>
          <span
            className="font-semibold text-primary hover:text-primary_hover active:text-primary_active cursor-pointer"
            onClick={onSwitchToLogin}
          >
            Đăng nhập
          </span>
        </p>
      </div>
    </>
  );
};

export default Register;
