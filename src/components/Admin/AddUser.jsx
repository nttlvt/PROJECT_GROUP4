import React from "react";
import { Form, Input, Typography, Card, Modal, Select } from "antd";
import { addUserThunk } from "../../store/User/thunk";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import '../css/global.css'
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constant/config";


const { Title } = Typography;

export const AddUser = () => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "",
      maNhom: "",
      email: "",
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate()

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

    dispatch(addUserThunk(formData));
    toast.success('Bạn đã tạo mới thành công người dùng!')
    navigate(PATH.qluser)
  };

  const showConfirmModal = () => {
    Modal.confirm({
      title: "Xác nhận tạo người dùng",
      content: "Bạn có chắc muốn lưu các tạo mới?",
      okText: "Đồng ý",
      cancelText: "Hủy",
      onOk: () => handleSubmit(onSubmit)(),
    });
  };

  return (
    <div style={{ display: "flex" }} className="gap-28 mb-[20px]">
      <Card
        style={{
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
        className="ms-[70px]"
      >
        <Title level={3} className="!mb-[40px] ml-[0px]">
          Thêm Người Dùng
        </Title>
        <form
          onSubmit={handleSubmit(showConfirmModal)}
          className="w-[500px]"
        >
          <Form.Item
            validateStatus={errors.taiKhoan ? "error" : ""}
            help={errors.taiKhoan ? errors.taiKhoan.message : ""}>
            <p className="mb-1">Tài khoản</p>
            <Controller
              name="taiKhoan"
              control={control}
              rules={{ required: "Tài khoản là bắt buộc" }}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
          <Form.Item
            validateStatus={errors.matKhau ? "error" : ""}
            help={errors.matKhau ? errors.matKhau.message : ""}>
            <p className="mb-1">Mật khẩu</p>
            <Controller
              name="matKhau"
              control={control}
              rules={{ required: "Mật khẩu là bắt buộc" }}
              render={({ field }) => (
                <Input.Password type="password" {...field} />
              )}
            />
          </Form.Item>
          <Form.Item
            validateStatus={errors.hoTen ? "error" : ""}
            help={errors.hoTen ? errors.hoTen.message : ""}>
            <p className="mb-1">Họ tên</p>
            <Controller
              name="hoTen"
              control={control}
              rules={{ required: "Họ tên là bắt buộc" }}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
          <Form.Item
            validateStatus={errors.soDT ? "error" : ""}
            help={errors.soDT ? errors.soDT.message : ""}>
            <p className="mb-1">Số điện thoại</p>
            <Controller
              name="soDT"
              control={control}
              rules={{ 
                required: "Số điện thoại là bắt buộc",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Số điện thoại chỉ chứa chữ số"
                }
              }}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
          <Form.Item 
            validateStatus={errors.maLoaiNguoiDung ? "error" : ""}
            help={errors.maLoaiNguoiDung ? errors.maLoaiNguoiDung.message : ""}>
            <p className="mb-1">Loại người dùng</p>
            <Controller
              name="maLoaiNguoiDung"
              control={control}
              rules={{ required: "Loại người dùng là bắt buộc" }}
              render={({ field }) => (
                <Select {...field} placeholder="Chọn loại người dùng">
                  <Option value="GV">Giáo viên</Option>
                  <Option value="HV">Học viên</Option>
                </Select>
              )}
            />
          </Form.Item>
          <Form.Item 
            validateStatus={errors.maNhom ? "error" : ""}
            help={errors.maNhom ? errors.maNhom.message : ""}>
            <p className="mb-1">Mã nhóm</p>
            <Controller
              name="maNhom"
              control={control}
              rules={{ required: "Mã nhóm là bắt buộc" }}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
          <Form.Item
            validateStatus={errors.email ? "error" : ""}
            help={errors.email ? errors.email.message : ""}>
            <p className="mb-1">Email</p>
            <Controller
              name="email"
              control={control}
              rules={{ 
                required: "Email là bắt buộc",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Email không hợp lệ"
                }
              }}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>

          <Form.Item className="w-[160px]">
            <button
              type="submit"
              className="bg-green-300 btn"
            >
              Thêm Người Dùng
            </button>
          </Form.Item>
        </form>
      </Card>

      <div className="md:mt-0 lg:ms-0 md:ms-[10px] mt-[-40px] mx-5 sm:mx-0">
        <img
          src="/img/2885174.jpg"
          className="rounded-md shadow-lg sm:w-full sm:h-[800px] w-full h-full"
          alt=""
        />
      </div>
    </div>
  );
};
