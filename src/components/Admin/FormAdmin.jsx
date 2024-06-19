import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space ,Popover} from 'antd';
import { QuanLyKhoaHocService } from '../../services/QuanLyKhoaHocService';
import { useForm, Controller } from 'react-hook-form';
import { quanLyKhoaHocThunkAction } from '../../store/QuanLyKhoaHocAdmin';
import { useDispatch } from 'react-redux';
import FormItem from 'antd/es/form/FormItem';
const { Option } = Select;

export const FormAdmin = () => {
    const { handleSubmit, control } = useForm()
    const onFinish = async (values) => {

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const dispatch = useDispatch()
    const onSubmit = async (values) => {
        dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocPost(values))
            .then(() => {
                console.log('thanh cong')
            })
            .catch((err) => {
                console.log(err)
            })
        // try {
        //     console.log(values);
        //     await QuanLyKhoaHocService.postThemKhoaHoc(values);
        //     // Handle success logic here if needed
        // } catch (error) {
        //     console.log('Error:', error);
        //     // Handle error logic here if needed
        // }
    }
    return (
        <>


            <Popover zIndex={10} title="Chỉnh sửa khoá học" >
                <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                    New account
                </Button>
            </Popover>
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
                                    render={({ field }) => <Input {...field} type="text" placeholder="Mã Khoá Học" />}

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
                            <Form.Item label='Đánh giá'>
                                <Controller
                                    control={control}
                                    name="danhGia"
                                    render={({ field }) => <Input {...field} type="text" placeholder='Đánh giá' />}

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
                                    render={({ field }) => <Input {...field} type="text" placeholder="Mã nhóm" />}

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
                                    render={({ field }) => <Input {...field} type="text" placeholder="Tài khoản người tạo" />}

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
                    <Button type="primary" htmlType="submit">   Submit
                    </Button>
                </form>
            </Drawer>
        </>
    );
}
