import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { useGetDetailUser } from "../../hook/useGetDetailUser";
import { Input, Button, Form, Modal } from "antd";
import { editUserThunk } from "../../store/User/thunkEdit";
import { useNavigate } from "react-router-dom";
import '../css/global.css'

export const EditUser = () => {
  const { data: user } = useGetDetailUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      setValue("taiKhoan", user.taiKhoan);
      setValue("matKhau", user.matKhau);
      setValue("hoTen", user.hoTen);
      setValue("soDT", user.soDT);
      setValue("maLoaiNguoiDung", user.maLoaiNguoiDung);
      setValue("maNhom", user.maNhom);
      setValue("email", user.email);
    }
  }, [user, setValue]);

  const onSubmit = (data) => {
    const formData = {
      taiKhoan: data.taiKhoan,
      matKhau: data.matKhau,
      hoTen: data.hoTen,
      soDT: data.soDT,
      maLoaiNguoiDung: data.maLoaiNguoiDung,
      maNhom: data.maNhom,
      email: data.email,
    };

    console.log(formData);
    dispatch(editUserThunk(formData));
  };

  const showConfirmModal = () => {
    Modal.confirm({
      title: "Xác nhận",
      content: "Bạn có chắc muốn lưu các thay đổi?",
      okText: "Đồng ý",
      cancelText: "Hủy",
      onOk: () => handleSubmit(onSubmit)(),
    });
  };

  const handleCancel = () => {
    Modal.confirm({
      title: "Xác nhận",
      content: "Bạn có chắc muốn hủy chỉnh sửa?",
      okText: "Đồng ý",
      cancelText: "Hủy",
      onOk: () => navigate("/detail"),
    });
  };

  return (
    <div className="edit-user-modal container mx-auto maTop mb-[40px] pt-[40px] grid grid-cols-2 gap-20">
      <div className="img_banner mt-[-40px]">
        <img src="/img/2885174.jpg" alt="" />
      </div>
      <div className="content">
        <h1 className="font-bold text-[30px] title">Chỉnh sửa thông tin</h1>
        <form
          onSubmit={handleSubmit(showConfirmModal)}
          className="edit-user-form"
        >
          <Form.Item>
            <p className="mb-2">Tài khoản</p>
            <Controller
              name="taiKhoan"
              control={control}
              defaultValue=""
              render={({ field }) => <Input {...field} />}
              disabled
            />
          </Form.Item>
          <Form.Item>
            <p className="mb-2">Mật khẩu</p>
            <Controller
              name="matKhau"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input.Password type="password" {...field} />
              )}
              disabled
            />
          </Form.Item>
          <Form.Item>
            <p className="mb-2">Họ tên</p>
            <Controller
              name="hoTen"
              control={control}
              defaultValue=""
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
          <Form.Item>
            <p className="mb-2">Số điện thoại</p>
            <Controller
              name="soDT"
              control={control}
              defaultValue=""
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
          <Form.Item className="hidden">
            <p className="mb-2">Loại người dùng</p>
            <Controller
              name="maLoaiNguoiDung"
              control={control}
              defaultValue=""
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
          <Form.Item className="hidden">
            <p className="mb-2">Mã nhóm</p>
            <Controller
              name="maNhom"
              control={control}
              defaultValue=""
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
          <Form.Item>
            <p className="mb-2">Email</p>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
          <div className="mt-5">
            <button className="me-3 btn" type="button" onClick={handleCancel}>
              Hủy
            </button>
            <button className="me-3 btn" type="submit">
              Lưu thông tin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
