import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { useGetDetailUser } from "../../hook/useGetDetailUser";
import { Input, Button, Form } from "antd";
import { editUserThunk } from "../../store/User/thunkEdit";

export const EditUser = () => {
  const { data: user } = useGetDetailUser();
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
    const formData = new FormData();
    formData.append("taiKhoan", data.taiKhoan);
    formData.append("matKhau", data.matKhau);
    formData.append("hoTen", data.hoTen);
    formData.append("soDT", data.soDT);
    formData.append("maLoaiNguoiDung", data.maLoaiNguoiDung);
    formData.append("maNhom", data.maNhom);
    formData.append("email", data.email);

    console.log(data.taiKhoan)
    dispatch(editUserThunk(formData));
  };

  const handleCancel = () => {
    Modal.confirm({
      title: "Xác nhận",
      content: "Bạn có chắc muốn hủy chỉnh sửa?",
      okText: "Đồng ý",
      cancelText: "Hủy",
      onOk() {
        // Xử lý hủy
      },
    });
  };

  return (
    <div className="edit-user-modal container mx-auto maTop mb-[40px]">
      <h1 className="font-bold text-[30px]">Chỉnh sửa thông tin</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="edit-user-form"
      >
        <Form.Item>
          <p className="mb-2">Tài khoản</p>
          <Controller
            name="taiKhoan"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item>
          <p className="mb-2">Mật khẩu</p>
          <Controller
            name="matKhau"
            control={control}
            defaultValue=""
            render={({ field }) => <Input.Password type="password" {...field} />}
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
        <Form.Item>
          <p className="mb-2">Loại người dùng</p>
          <Controller
            name="maLoaiNguoiDung"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item>
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
  );
};

export default EditUser;
