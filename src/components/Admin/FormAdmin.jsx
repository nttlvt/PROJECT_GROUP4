import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Space, Popover, DatePicker, Select } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { quanLyKhoaHocThunkAction } from '../../store/QuanLyKhoaHocAdmin';
const { TextArea } = Input;
const { Option } = Select;

export const FormAdmin = () => {
    const [image, setImage] = useState('');
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: {
            maKhoaHoc: '',
            biDanh: '',
            tenKhoaHoc: '',
            moTa: '',
            luotXem: '',
            hinhAnh: {},
            maNhom: '',
            danhGia: '',
            maDanhMucKhoaHoc: '',
            taiKhoanNguoiTao: '',
            ngayTao: ''
        }
    });
    const [danhMucKhoaHoc, setDanhMucKhoaHoc] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(quanLyKhoaHocThunkAction.quanLyMaKhoaHocGet())
            .then(result => {
                setDanhMucKhoaHoc(result?.payload || []);
            })
            .catch(err => {
                console.error(err);
            });
    }, [dispatch]);

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onSubmit = async (data) => {

        const formData = new FormData();

        formData.append("maKhoaHoc", data.maKhoaHoc);
        formData.append("biDanh", data.biDanh);
        formData.append("tenKhoaHoc", data.tenKhoaHoc);
        formData.append("moTa", data.moTa);
        formData.append("luotXem", data.luotXem);
        formData.append("danhGia", data.danhGia);
        formData.append("maNhom", data.maNhom);
        formData.append("maDanhMucKhoaHoc", data.maDanhMucKhoaHoc);
        formData.append("taiKhoanNguoiTao", data.taiKhoaNguoiTao);
        formData.append("ngayTao", data.ngayTao);
        formData.append('hinhAnh', data.hinhAnh[0])
       
        dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocPost(formData))
        try {

            console.log('Thành công');
        } catch (err) {
            console.error('Lỗi khi gửi yêu cầu:', err);
        }
    };

    return (
        <>
            <Popover zIndex={10} title="Thêm khoá học">
                <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                    Thêm khoá học
                </Button>
            </Popover>
            <Drawer
                maskClosable={false}
                title="Create a new account"
                width={720}
                onClose={onClose}
                open={open}
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                    </Space>
                }
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Mã khoá học">
                                <Controller
                                    control={control}
                                    name="maKhoaHoc"
                                    render={({ field }) => <Input {...field} type="text" placeholder="Mã Khoá Học" />}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Bí danh">
                                <Controller
                                    control={control}
                                    name="biDanh"
                                    render={({ field }) => <Input {...field} type="text" placeholder="Bí Danh" />}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Lượt xem">
                                <Controller
                                    control={control}
                                    name="luotXem"
                                    render={({ field }) => <Input {...field} type="number" placeholder="Lượt xem" />}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Đánh giá">
                                <Controller
                                    control={control}
                                    name="danhGia"
                                    render={({ field }) => <Input {...field} type="number" placeholder="Đánh giá" />}
                                />
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
                                                    // console.log('a');
                                                    setValue("hinhAnh", [file]);
                                                    const reader = new FileReader();
                                                    reader.readAsDataURL(file);
                                                    reader.onloadend = (event) => {
                                                        setImage(event.target.result);
                                                    };
                                                }
                                            }}
                                        />
                                    )}
                                />
                                {image && <img style={{ width: "200px", height: "150px" }} src={image} alt="Selected" />}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Mã nhóm">
                                <Controller
                                    control={control}
                                    name="maNhom"
                                    render={({ field }) => <Input {...field} type="text" placeholder="Mã nhóm" />}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Mã danh mục khoá học'>
                                <Controller
                                    control={control}
                                    name="maDanhMucKhoaHoc"
                                    render={({ field }) => (
                                        <Select {...field} placeholder="Chọn mã danh mục">
                                            {danhMucKhoaHoc.map((maDanhMuc) => (
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
                                    name="taiKhoaNguoiTao"
                                    render={({ field }) => <Input {...field} type="text" placeholder="Tài khoản người tạo" />}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Tên khoá học">
                                <Controller
                                    control={control}
                                    name="tenKhoaHoc"
                                    render={({ field }) => <Input {...field} type="text" placeholder="Tên khoá học" />}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item label="Mô tả">


                                <Controller
                                    control={control}
                                    name="moTa"
                                    render={({ field }) => <TextArea rows={4} {...field} placeholder="Mô tả" />}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </form>
            </Drawer>
        </>
    );
};
