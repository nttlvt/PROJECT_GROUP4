import React, { useEffect, useState } from 'react';
import { Button, Modal, Popover, Select } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { quanLyKhoaHocThunkAction } from '../../store/QuanLyKhoaHocAdmin';
import { useForm, Controller } from 'react-hook-form';
import { QlUser } from './QlUser';
import { TableAddUser } from './AddUser/TableAddUser';

export const ModalAdmin = ({ ds }) => {
    const { handleSubmit, control, setValue } = useForm({
        defaultValues: {
            maKhoaHoc: ds.maKhoaHoc,
            taiKhoan: '',
        }
    });

    const { dsNguoiDungChuaGhiDanh, dsNguoiDungChoGhiDanh, dsNguoiDungDaGhiDanh } = useSelector(state => state.quanLyKhoaHocAdmin);
    const dispatch = useDispatch();

    const getDanhSach = (data) => {
        dispatch(quanLyKhoaHocThunkAction.quanLyNguoiDungChuaGhiDanh(data.maKhoaHoc))
        dispatch(quanLyKhoaHocThunkAction.quanLyNguoiDungChoGhiDanh(data.maKhoaHoc))
        dispatch(quanLyKhoaHocThunkAction.quanLyNguoiDungDaGhiDanh(data.maKhoaHoc))
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        getDanhSach({ maKhoaHoc: ds.maKhoaHoc });
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const options = dsNguoiDungChuaGhiDanh.length > 0 && dsNguoiDungChuaGhiDanh.map(user => ({
        label: user.hoTen,
        value: user.taiKhoan,
        key: user.taiKhoan
    }));
    const onSubmit = (data) => {
        dispatch(quanLyKhoaHocThunkAction.quanLyGhiDanhNguoiDung({
            maKhoaHoc: data.maKhoaHoc,
            taiKhoan: data.taiKhoan
        }
        ))
        reset({ maKhoaHoc: ds.maKhoaHoc, taiKhoan: '' });
    };

    return (
        <div>
            <Popover title="Ghi danh">
                <form onSubmit={handleSubmit(getDanhSach)}>
                    <Controller
                        name="maKhoaHoc"
                        control={control}
                        render={({ field }) => (
                            <input type="hidden" {...field} value={ds.maKhoaHoc} />
                        )}
                    />
                    <Button type="primary" htmlType='submit' icon={<UsergroupAddOutlined />} onClick={showModal}>
                    </Button>
                </form>
            </Popover>

            <Modal
                title="Ghi danh người dùng"
                style={{ top: 20, }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
            >
                <div >

                    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between border-b-4 border-black pb-5">
                        <h1 className="text-[20px] font-bold">Chọn người dùng</h1>
                        <Controller
                            name="taiKhoan"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    showSearch
                                    placeholder="Tìm kiếm tên người dùng"
                                    filterOption={(input, option) =>
                                        option?.label.toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={options}
                                    style={{ width: '70%' }}
                                    onChange={(value) => setValue('taiKhoan', value)}
                                />
                            )}
                        />
                        <Controller
                            name="maKhoaHoc"
                            control={control}
                            render={({ field }) => (
                                <input type="hidden" {...field} value={ds.maKhoaHoc} />
                            )}
                        />
                        <Button htmlType='submit'>Ghi danh</Button>
                    </form>

                </div>
                <div>
                    <TableAddUser dsNguoiDungChoGhiDanh={dsNguoiDungChoGhiDanh}
                        maKhoaHoc={ds.maKhoaHoc}
                        title='Học viên chờ xác thực'
                    />


                </div>
                <div>
                    <TableAddUser dsNguoiDungChoGhiDanh={dsNguoiDungDaGhiDanh} maKhoaHoc={ds.maKhoaHoc}
                    title='Học viên đã xác thực'/>
                </div>
            </Modal>
        </div>
    );
};
