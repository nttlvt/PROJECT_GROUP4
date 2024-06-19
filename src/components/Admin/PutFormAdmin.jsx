import React, { useEffect, useState } from 'react';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { quanLyKhoaHocThunkAction } from '../../store/QuanLyKhoaHocAdmin';
import { useDispatch } from 'react-redux';


export const PutFormAdmin = ({ danhSachKhoaHoc, nguoiTao }) => {
    // const nguoiTao = danhSachKhoaHoc?.nguoiTao?.taiKhoan


    const { handleSubmit, control, setValue } = useForm(
        {
            defaultValue: {
                maKhoaHoc: '',
                biDanh: '',
                tenKhoaHoc: '',
                moTa: '',
                luotXem: '',
                hinhAnh: '',
                maNhom: '',
                soLuongHocVien: '',
                maDanhMucKhoahoc: '',
                taiKhoaNguoiTao: '',

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
            // console.log(nguoiTao)
            setValue("maKhoaHoc", danhSachKhoaHoc.maKhoaHoc);
            setValue("biDanh", danhSachKhoaHoc.biDanh);
            setValue("tenKhoaHoc", danhSachKhoaHoc.tenKhoaHoc);
            setValue("ngayTao", danhSachKhoaHoc.ngayTao);
            setValue("moTa", danhSachKhoaHoc.moTa);
            setValue("luotXem", danhSachKhoaHoc.luotXem);
            setValue("hinhAnh", danhSachKhoaHoc.hinhAnh);
            setValue("maNhom", danhSachKhoaHoc.maNhom);
            setValue("soLuongHocVien", danhSachKhoaHoc.soLuongHocVien);
            setValue("maDanhMucKhoaHoc", danhSachKhoaHoc?.danhMucKhoaHoc?.maDanhMucKhoahoc);
            setValue("taiKhoanNguoiTao", danhSachKhoaHoc?.nguoiTao?.taiKhoan);

        }
    }, [danhSachKhoaHoc, setValue]);
    const dispatch = useDispatch()
    const onSubmit = async (danhSachKhoaHoc) => {
  console.log(danhSachKhoaHoc)
        dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocPut(danhSachKhoaHoc))
            .then(() => {
                console.log('thanh cong')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>

            <Button icon={<EditOutlined />} onClick={showDrawerPut} >


            </Button>

            <Drawer
                maskClosable={false}
                title="Create a new account"
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
                                    render={({ field }) => <Input {...field} type="text" placeholder="luotXem" />}

                                >

                                </Controller>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Số lượng học viên'>
                                <Controller
                                    control={control}
                                    name="soLuongHocVien"

                                    render={({ field }) => <Input {...field} type="text" placeholder='Số lượng học viên' />}

                                >

                                </Controller>
                            </Form.Item>

                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Ngày tạo">
                                <Controller
                                    control={control}
                                    name="ngayTao"
                                    render={({ field }) => <Input {...field} type="text" placeholder="Ngày tạo" />}

                                >

                                </Controller>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Hình ảnh">
                                <Controller
                                    control={control}
                                    name="hinhAnh"
                                    render={({ field }) => <Input {...field} type="text" placeholder='Hình ảnh' />}

                                >

                                </Controller>
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
                                    render={({ field }) => <Input {...field} type="text" placeholder='Mã danh mục khoá học' />}

                                >

                                </Controller>
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
