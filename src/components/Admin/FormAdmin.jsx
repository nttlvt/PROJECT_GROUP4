import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Space, Popover, DatePicker, Select, Modal } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { quanLyKhoaHocThunkAction } from '../../store/QuanLyKhoaHocAdmin';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

const { TextArea } = Input;
const { Option } = Select;

export const FormAdmin = () => {
    const user = JSON.parse(localStorage.getItem('USER'));
    console.log('user', user?.payload?.taiKhoan)
    const [image, setImage] = useState('');
    const [danhMucKhoaHoc, setDanhMucKhoaHoc] = useState([]);
    const [open, setOpen] = useState(false);
    const [confirmClose, setConfirmClose] = useState(false);
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        maKhoaHoc: yup.string().required('Mã khoá học không được để trống'),
        biDanh: yup.string().required('Bí danh không được để trống'),
        tenKhoaHoc: yup.string().required('Tên khoá học không được để trống'),
        moTa: yup.string().required('Mô tả không được để trống'),
        luotXem: yup.number().required('Lượt xem không được để trống'),
        danhGia: yup.number().required('Đánh giá không được để trống'),
        maNhom: yup.string().required('Mã nhóm không được để trống'),
        maDanhMucKhoaHoc: yup.string().required('Mã danh mục khoá học không được để trống'),
        taiKhoaNguoiTao: yup.string().required('Tài khoản người tạo không được để trống'),
        ngayTao: yup.string().required('Ngày tạo không được để trống'),
        hinhAnh: yup.mixed().required('Hình ảnh không được để trống'),
    });

    useEffect(() => {
        dispatch(quanLyKhoaHocThunkAction.quanLyMaKhoaHocGet())
            .then(result => {
                setDanhMucKhoaHoc(result?.payload || []);
            })
            .catch(err => {
                console.error(err);
            });
    }, [dispatch]);

    const { handleSubmit, control, setValue, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            maKhoaHoc: '',
            biDanh: '',
            tenKhoaHoc: '',
            moTa: '',
            luotXem: '0',
            hinhAnh: {},
            maNhom: '',
            danhGia: '0',
            maDanhMucKhoaHoc: '',
            taiKhoaNguoiTao: user?.payload?.taiKhoan,
            ngayTao: null,
        }
    });
    console.log(errors)
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        if (confirmClose) {
            reset();
            setConfirmClose(false); 
            setOpen(false); 
        } else {
            setConfirmClose(true);
        }
    };

    const handleCancelClose = () => {
        setConfirmClose(false);
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
        formData.append('hinhAnh', data.hinhAnh[0]);

        dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocPost(formData))
            .unwrap()
            .then(() => {
                toast.success('Thêm khóa học thành công');
                dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocGet(''));
                reset();
                setOpen(false);
            })
            .catch((error) => {
                toast.error(error?.response?.data);
            });
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
                title="Thêm khoá học"
                width={720}
                onClose={onClose}
                visible={open}
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                    <Space>
                        <Button onClick={onClose} danger type="primary">Thoát</Button>
                    </Space>
                }
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Mã khoá học" required hasFeedback validateStatus={errors.maKhoaHoc ? 'error' : ''} help={errors.maKhoaHoc?.message}>
                                <Controller
                                    control={control}
                                    name="maKhoaHoc"
                                    render={({ field }) => <Input {...field} type="text" placeholder="Mã Khoá Học" />}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Bí danh" required hasFeedback validateStatus={errors.biDanh ? 'error' : ''} help={errors.biDanh?.message}>
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
                            <Form.Item label="Lượt xem" required hasFeedback validateStatus={errors.luotXem ? 'error' : ''} help={errors.luotXem?.message}>
                                <Controller
                                    control={control}
                                    name="luotXem"
                                    render={({ field }) => <Input {...field} type="number" placeholder="Lượt xem" />}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Đánh giá" required hasFeedback validateStatus={errors.danhGia ? 'error' : ''} help={errors.danhGia?.message}>
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
                            <Form.Item label="Ngày tạo" required hasFeedback validateStatus={errors.ngayTao ? 'error' : ''} help={errors.ngayTao?.message}>
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
                            <Form.Item label="Hình ảnh" required hasFeedback validateStatus={errors.hinhAnh ? 'error' : ''} help={errors.hinhAnh?.message}>
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
                            <Form.Item label="Mã nhóm" required hasFeedback validateStatus={errors.maNhom ? 'error' : ''} help={errors.maNhom?.message}>
                                <Controller
                                    control={control}
                                    name="maNhom"
                                    render={({ field }) => <Input {...field} type="text" placeholder="Mã nhóm" />}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Mã danh mục khoá học' required hasFeedback validateStatus={errors.maDanhMucKhoaHoc ? 'error' : ''} help={errors.maDanhMucKhoaHoc?.message}>
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
                            <Form.Item label="Tài khoản người tạo"  required hasFeedback validateStatus={errors.taiKhoaNguoiTao ? 'error' : ''} help={errors.taiKhoaNguoiTao?.message}>
                                <Controller
                                    control={control}
                                    name="taiKhoaNguoiTao"
                                    render={({ field }) => <Input {...field} disabled type="text" placeholder="Tài khoản người tạo" />}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Tên khoá học" required hasFeedback validateStatus={errors.tenKhoaHoc ? 'error' : ''} help={errors.tenKhoaHoc?.message}>
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
                            <Form.Item label="Mô tả" required hasFeedback validateStatus={errors.moTa ? 'error' : ''} help={errors.moTa?.message}>
                                <Controller
                                    control={control}
                                    name="moTa"
                                    render={({ field }) => <TextArea rows={4} {...field} placeholder="Mô tả" />}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">Thêm </Button>
                </form>
            </Drawer>


            <Modal
                title="Xác nhận"
                visible={confirmClose}
                onOk={onClose}
                onCancel={handleCancelClose}
                okText="OK"
                cancelText="Thoát"
            >
                Bạn có muốn thoát và đặt lại biểu mẫu không?
            </Modal>
        </>
    );
};
