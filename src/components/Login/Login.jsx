// Login.js
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { loginThunk } from "../../store/User/thunk";
import { toast } from "react-toastify";

export const Login = ({ onSwitchToRegister, onClose }) => {
  const classInput = `bg-[#1618230f] px-[20px] py-[12px] w-full transition outline-none rounded-[44px] h-[44px] text-sm font-inter
    border dark:border-slate-700 dark:focus:border-slate-400 
    focus:border-slate-400 border-slate-200`;


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetchingLogin, isFetchingRegister, userLogin } = useSelector((state) => state.quanLyNguoiDung);

  const { handleSubmit, control, formState: { errors }, setValue } = useForm();

  const onSubmit = (value) => {
    dispatch(loginThunk(value))
      .unwrap()
      .then(() => {
        alert('Đăng nhập tài khoản thành công!')
        window.location.reload()
      })
      .catch((error) => {
        if (error?.response?.data === 'TÃ i khoáº£n hoáº·c máº­t kháº©u khÃ´ng Ä‘Ãºng!') {
          setValue("matKhau", ""); // Reset the password field
          toast.error('Sai mật khẩu, vui lòng nhập lại mật khẩu');
        } else {
          toast.error(error?.response?.data?.content || 'Đăng nhập thất bại');
        }
      });
  };

  const fillAdminCredentials = () => {
    setValue("taiKhoan", "abcde");
    setValue("matKhau", "string");
  };

  const fillUserCredentials = () => {
    setValue("taiKhoan", "khoacun");
    setValue("matKhau", "123456");
  };

  return (
    <>
      <div className="">
        <img
          className="mx-auto w-[70px] h-[50px]"
          src="https://elearning.iigvietnam.com/images/logo.png"
          alt="logo"
        />
        <h1 className="hidden sm:block text-[#292929] text-center mt-5 dark:text-slate-200 text-4xl font-bold">
          Đăng nhập vào IIG
        </h1>
        <h1 className="block sm:hidden text-[#292929] text-center mt-5 dark:text-slate-200 text-4xl font-bold">
          Đăng nhập
        </h1>
      </div>
      <div className="mt-11">
        <Form layout="vertical" autoComplete="off" onFinish={handleSubmit(onSubmit)}>
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
              }}
              render={({ field }) => (
                <Input
                  className={classInput}
                  prefix={<UserOutlined />}
                  style={{ backgroundColor: "transparent" }}
                  size="large"
                  placeholder="Tài khoản"
                  autoComplete="taiKhoan"
                  {...field}
                />
              )}
            />
          </Form.Item>

          {/* MẬT KHẨU */}
          <Form.Item
            name="matKhau"
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
                  prefix={<KeyOutlined />}
                  style={{ backgroundColor: "transparent" }}
                  size="large"
                  placeholder="Mật khẩu"
                  autoComplete="current-password"
                  {...field}
                />
              )}
            />
          </Form.Item>

          {/* BUTTON */}
          <Form.Item className="mt-[20px] flex justify-center">
            <Button
              className="font-semibold hover:bg-green-300 text-white cursor-pointer bg-green-400"
              // loading={isFetchingLogin}
              htmlType="submit"
            >
              <span>Đăng nhập</span>
            </Button>
          </Form.Item>

          <div className="flex items-center py-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-300 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Thử với tài khoản có sẵn
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-300 dark:bg-gray-700"></div>
          </div>

          <div className="flex gap-5 items-center">
            <Button className="w-full px-0 !border-slate-500" onClick={fillUserCredentials}>
              Khách hàng
            </Button>
            <Button className="w-full px-0 !border-slate-500" onClick={fillAdminCredentials}>
              Quản trị
            </Button>
          </div>
        </Form>
      </div>
      <div className="mt-11">
        <p className="text-center text-base">
          <span>Bạn chưa có tài khoản? </span>
          <span className="font-semibold text-primary hover:text-primary_hover active:text-primary_active cursor-pointer" onClick={onSwitchToRegister}>
            Đăng ký
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;
