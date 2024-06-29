import React, { useEffect, useState } from 'react';
import { Avatar, Button, Card, Popover, Modal, message, notification } from 'antd';
import { EyeFilled, EditOutlined, ExclamationCircleFilled, DeleteOutlined } from '@ant-design/icons';
import { ModalAdmin } from './ModalAdmin';
import { DetailKh } from './DetailKh';
import { FormAdmin } from './FormAdmin';
import { useDispatch } from 'react-redux';
import { quanLyKhoaHocThunkAction } from '../../store/QuanLyKhoaHocAdmin';
import { PutFormAdmin } from './PutFormAdmin';
import axios from 'axios';
import { TOKENCYBERSOFT, getAuthToken } from '../../constant/constant';
import { toast } from 'react-toastify';

const { Meta } = Card;
const { confirm } = Modal;

export const Cart = ({ danhSachKhoaHoc }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showComponent, setShowComponent] = useState(false);
    const [ds, setDs] = useState(danhSachKhoaHoc);

    useEffect(() => {
        setDs(danhSachKhoaHoc);
    }, [danhSachKhoaHoc]);

    const handleButtonClick = () => {
        setShowComponent(!showComponent);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const dispatch = useDispatch();

    const showDeleteConfirm = (maKhoaHoc) => {
        confirm({
            title: 'Are you sure delete this task?',
            icon: <ExclamationCircleFilled />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: async () => {
                try {
                    const result = await axios.delete(`https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`,
                        {
                            headers: {
                                TokenCybersoft: TOKENCYBERSOFT,
                                'Authorization': 'Bearer ' + getAuthToken(),
                            },
                        })
                    dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocGet(''));
                    toast.success('Xoá khoá học thành công')
                    setDs(danhSachKhoaHoc)
                    return result

                }
                catch (error) {
                    toast.error(error?.response?.data)

                }


            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    return (
        <div>
            <Card
                hoverable
                cover={<img alt={danhSachKhoaHoc.tenKhoaHoc} src={danhSachKhoaHoc.hinhAnh} className='object-fill lg:h-[250px] h-[200px]' />}
                className='lg:w-[300px] md:w-[220px] w-[300px]'
            >
                <Meta title={danhSachKhoaHoc.tenKhoaHoc} />
                <div className='flex items-center mt-3 '>
                    <div><EyeFilled /> {danhSachKhoaHoc.luotXem} </div>
                    <span className='mx-1'>lượt xem</span>
                </div>
                <div className='flex justify-around mt-4'>
                    <DetailKh ds={ds} />
                    <PutFormAdmin danhSachKhoaHoc={danhSachKhoaHoc} />
                    <Popover title="Xoá khoá học">
                        <Button
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => {
                                showDeleteConfirm(danhSachKhoaHoc.maKhoaHoc);
                            }}
                            type="dashed"
                        ></Button>
                    </Popover>
                    <ModalAdmin ds={ds} />
                </div>
            </Card>
        </div>
    );
};
