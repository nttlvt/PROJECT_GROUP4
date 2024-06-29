import React, { useEffect, useState } from 'react';
import { Badge, Button, Modal, Descriptions, Popover } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

export const DetailKh = ({ ds }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items = [
    {
      key: '1',
      label: 'Tên khoá học',
      children: ds?.tenKhoaHoc,
    },
    {
      key: '2',
      label: 'Danh mục khoá học',
      children: ds?.danhMucKhoaHoc?.tenDanhMucKhoaHoc,
    },
    {
      key: '3',
      label: 'Mã khoá học',
      children: ds?.maKhoaHoc,
    },
    {
      key: '4',
      label: 'Ngày tạo',
      children: ds?.ngayTao,
    },
    {
      key: '5',
      label: 'Lượt xem',
      span: 2,
      children: ds?.luotXem,
    },
    {
      key: '6',
      label: 'Hình ảnh',
      span: 3,
      children: <img src={ds?.hinhAnh} alt={ds?.tenKhoaHoc} style={{ maxWidth: '100%' }} />,
    },
    {
      key: '7',
      label: 'Người tạo',
      children: ds?.nguoiTao?.hoTen,
    },
    {
      key: '8',
      label: 'Chức vụ người tạo',
      children: ds?.nguoiTao?.tenLoaiNguoiDung,
    },
    {
      key: '9',
      label: 'Số học viên',
      children: ds?.soLuongHocVien,
    },
    {
      key: '10',
      label: 'Mô Tả',
      children: ds?.moTa,
    },
  ];

  return (
    <div>
      <Popover title="Chi tiết khoá học">
        <Button icon={<ExclamationCircleOutlined />} onClick={showModal}></Button>
      </Popover>
      <Modal
        title="Thông tin chi tiết"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ top: 10 }}
        className='mt-0'
      >
        <Descriptions title="Thông tin chi tiết" layout="vertical" bordered items={items} />
      </Modal>
    </div>
  );
};
