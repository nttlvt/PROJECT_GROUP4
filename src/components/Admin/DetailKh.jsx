import { Badge, Descriptions } from 'antd';
import { useEffect } from 'react';

export const DetailKh = ({ ds }) => {
  useEffect(() => {
    console.log(ds)
  }, [])
  const items = [
    {
      key: '1',
      label: 'Tên khoá học ',
      children: `${ds.tenKhoaHoc}`,
    },
    {
      key: '2',
      label: 'Danh mục khoá học ',
      children: `${ds.danhMucKhoaHoc.tenDanhMucKhoaHoc}`,
    },
    {
      key: '3',
      label: 'Automatic Renewal',
      children: 'YES',
    },
    {
      key: '4',
      label: 'Ngày tạo',
      children:`${ds.ngayTao}`,
    },
    {
      key: '5',
      label: 'Lượt xem',
      span: 2,
      children: `${ds.luotXem}`,
    },
    {
      key: '6',
      label: 'Hình ảnh',
      span: 3,
      children:<img src={ds.hinhAnh}/>,
    },
    {
      key: '7',
      label: 'Người tạo',
      children: `${ds.nguoiTao.hoTen}`,
    },
    {
      key: '8',
      label: 'Chức vụ người tạo',
      children: `${ds.nguoiTao.tenLoaiNguoiDung}`,
    },
    {
      key: '9',
      label: 'Số học viên',
      children: `${ds.soLuongHocVien}`,
    },
    {
      key: '10',
      label: 'Mô Tả',
      children: `${ds.moTa}`,
    },
  ];
  ;

  return (
    <Descriptions title="Thông tin chi tiết" layout="vertical" bordered items={items} />
  );
}
