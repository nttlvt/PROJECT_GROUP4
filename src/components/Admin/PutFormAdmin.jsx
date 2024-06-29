import React, { useEffect, useState } from 'react';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Popover, Row, Select, Space } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { quanLyKhoaHocThunkAction } from '../../store/QuanLyKhoaHocAdmin';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import axios from 'axios';
import { toast } from 'react-toastify';
const { Option } = Select;

export const PutFormAdmin = ({ danhSachKhoaHoc }) => {
    const [image, setImage] = useState(danhSachKhoaHoc.hinhAnh);
    const { maDanhMucKhoaHoc } = useSelector(state => state.quanLyKhoaHocAdmin)
    const { handleSubmit, control, setValue, getValues } = useForm(
        {
            defaultValue: {
                maKhoaHoc: '',
                biDanh: '',
                tenKhoaHoc: '',
                moTa: '',
                luotXem: '',
                hinhAnh: {},
                maNhom: '',
                danhGia: '',
                maDanhMucKhoahoc: '',
                taiKhoanNguoiTao: '',
                ngayTao: moment(danhSachKhoaHoc.ngayTao).format("DD/MM/YYYY")
            }
        }
    )

    const [open, setOpen] = useState(false);
    const showDrawerPut = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (danhSachKhoaHoc) {
            setValue("maKhoaHoc", danhSachKhoaHoc.maKhoaHoc);
            setValue("biDanh", danhSachKhoaHoc.biDanh);
            setValue("tenKhoaHoc", danhSachKhoaHoc.tenKhoaHoc);
            setValue(
                "ngayTao",
                danhSachKhoaHoc.ngayTao
            );
            setValue("moTa", danhSachKhoaHoc.moTa);
            setValue("luotXem", danhSachKhoaHoc.luotXem);
            setValue("hinhAnh", danhSachKhoaHoc.hinhAnh);
            setValue("maNhom", danhSachKhoaHoc.maNhom);
            setValue("danhGia", danhSachKhoaHoc.danhGia);
            setValue("maDanhMucKhoaHoc", danhSachKhoaHoc?.danhMucKhoaHoc?.maDanhMucKhoahoc);
            setValue("taiKhoanNguoiTao", danhSachKhoaHoc?.nguoiTao?.taiKhoan);
        }

    }, [danhSachKhoaHoc, setValue]);
    const dispatch = useDispatch()
    // console.log('dskhoa', image);
    const onSubmit = async (danhSachKhoaHoc) => {

        // console.log()
        const formData = new FormData();
        formData.append("maKhoaHoc", danhSachKhoaHoc.maKhoaHoc);
        formData.append("biDanh", danhSachKhoaHoc.biDanh);
        formData.append("tenKhoaHoc", danhSachKhoaHoc.tenKhoaHoc);
        formData.append("moTa", danhSachKhoaHoc.moTa);
        formData.append("luotXem", danhSachKhoaHoc.luotXem);
        formData.append("danhGia", danhSachKhoaHoc.danhGia);
        formData.append("maNhom", danhSachKhoaHoc.maNhom);
        formData.append("maDanhMucKhoaHoc", danhSachKhoaHoc.maDanhMucKhoaHoc);
        formData.append("taiKhoanNguoiTao", danhSachKhoaHoc.taiKhoanNguoiTao);
        formData.append("ngayTao", danhSachKhoaHoc.ngayTao);

        if (typeof getValues('hinhAnh') === 'string') {

            // const imgFile = await createFileFromURL(getValues('hinhAnh'), Date.now())
          

        } else {
            formData.append("hinhAnh", danhSachKhoaHoc.hinhAnh);
        }
       
        dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocPut(formData))
            .unwrap()
            .then(() => {
                toast.success('Cập nhật khóa học thành công');
                dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocGet(''));
                setOpen(false);
            })
            .catch((error) => {
                toast.error(error?.response?.data);
            });
    }
    return (
        <>
            <Popover title="Chỉnh sửa khoá học">
            <Button icon={<EditOutlined />} onClick={showDrawerPut} >


                </Button>
            </Popover>



            <Drawer
                maskClosable={false}
                title="Cập nhật khoá học"
                width={720}
                onClose={onClose}
                open={open}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
                extra={
                    <Space>
                        <Button onClick={onClose} >Cancel</Button>
                    </Space>
                }
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label='Mã khoá học'>
                                <Controller
                                    control={control}
                                    name="maKhoaHoc"
                                    render={({ field }) => <Input {...field} type="text" placeholder="Mã Khoá Học" disabled />}

                                >
                                </Controller>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Bí danh">
                                <Controller
                                    control={control}
                                    name="biDanh"
                                    render={({ field }) => <Input {...field} type="text" placeholder='Bí Danh' />}

                                >

                                </Controller>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Lượt xem">
                                <Controller
                                    control={control}
                                    name="luotXem"
                                    render={({ field }) => <Input {...field} type="number" placeholder="luotXem" />}

                                >

                                </Controller>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Đánh giá'>
                                <Controller
                                    control={control}
                                    name="danhGia"
                                    render={({ field }) => <Input {...field} type="number" placeholder='Đánh giá' />}

                                >

                                </Controller>
                            </Form.Item>

                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Ngày tạo">
                                <Controller
                                    name="ngayTao"
                                    control={control}
                                    render={({ field }) => (
                                        <DatePicker
                                            {...field}
                                            format="DD/MM/YYYY"
                                            value={field.value ? moment(field.value, "DD/MM/YYYY") : null}
                                            onChange={(date, dateString) => field.onChange(dateString)}
                                        />
                                    )}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Hình ảnh">
                                <Controller
                                    name="hinhAnh"
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            type="file"
                                            onChange={(e) => {
                                                const file = e.target.files[0];

                                                if (
                                                    file.type === "image/jpeg" ||
                                                    file.type === "image/jpg" ||
                                                    file.type === "image/gif" ||
                                                    file.type === "image/png"
                                                ) {
                                                    const reader = new FileReader();
                                                    reader.onloadend = (event) => {
                                                        setImage(event.target.result);
                                                        field.onChange(file);
                                                      
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }}
                                        />
                                    )}
                                />
                                <img style={{ width: "40%", height: "40%", marginTop: "20px" }} src={image} alt="" />
                            </Form.Item>

                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label='Mã nhóm'>
                                <Controller
                                    control={control}
                                    name="maNhom"
                                    render={({ field }) => <Input {...field} type="text" placeholder="Mã nhóm" disabled />}

                                >

                                </Controller>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Mã danh mục khoá học'>
                                <Controller
                                    control={control}
                                    name="maDanhMucKhoaHoc"
                                    render={({ field }) => (
                                        <Select {...field} placeholder="Chọn mã danh mục">
                                            {maDanhMucKhoaHoc.map((maDanhMuc) => (
                                                <Option key={maDanhMuc.maDanhMuc} value={maDanhMuc.maDanhMuc}>
                                                    {maDanhMuc.tenDanhMuc}
                                                </Option>
                                            ))}
                                        </Select>
                                    )}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Tài khoản người tạo">
                                <Controller
                                    control={control}
                                    name="taiKhoanNguoiTao"
                                    render={({ field }) => <Input {...field} type="text" placeholder="Tài khoản người tạo" disabled />}

                                >

                                </Controller>
                            </Form.Item>
                        </Col>

                    </Row>
                    <Row gutter={16}>

                        <Col span={12}>
                            <Form.Item label="Tên khoá học">
                                <Controller
                                    control={control}
                                    name="tenKhoaHoc"
                                    render={({ field }) => <Input {...field} type="text" placeholder="Tên khoá học" />}

                                >

                                </Controller>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Mô tả">
                                <Controller
                                    control={control}
                                    name="moTa"
                                    render={({ field }) => <Input.TextArea rows={4} {...field} type="text" placeholder="Mô tả" />}

                                >

                                </Controller>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </form>
            </Drawer>
        </>
    );
}
