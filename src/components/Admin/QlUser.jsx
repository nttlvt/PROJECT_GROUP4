import React, { useState, useEffect } from "react";
import { Table, Typography, Input, Card, Badge, Button, Modal } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useGetListUser } from "../../hook/useGetListUser";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constant/config";
import { useDispatch } from "react-redux";
import { deleteUserThunk } from "../../store/User/thunk";
import { toast } from "react-toastify";
import { useGetSearchUser } from "../../hook/useGetSearchUser";

const { Title } = Typography;
const { Search } = Input;

export const QlUser = () => {
  const { data: userData } = useGetListUser();

  const [filteredData, setFilteredData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const [searchText, setSearchText] = useState("");
  const { data: searchUser } = useGetSearchUser(searchText);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData) {
      setFilteredData(userData);
    }
  }, [userData]);

  const handleSearch = (value) => {
    setSearchText(value);
    if (value.trim() === "") {
      setFilteredData(userData);
    } else {
      const filtered = searchUser.filter(
        (user) =>
          user?.hoTen?.toLowerCase().includes(value.toLowerCase()) ||
          user?.email?.toLowerCase().includes(value.toLowerCase()) ||
          user?.soDt?.includes(value)
      );
      setFilteredData(filtered);
    }
  };

  const handleAddUser = () => {
    navigate(PATH.adduseradmin);
  };

  const showDeleteConfirm = (record) => {
    Modal.confirm({
      title: "Xác nhận xóa",
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có chắc muốn xóa người dùng ${record.hoTen}?`,
      okText: "Xóa",
      okType: "danger",
      cancelText: "Hủy",
      onOk() {
        handleDeleteUser(record);
      },
    });
  };

  const handleDeleteUser = (record) => {
    dispatch(deleteUserThunk(record.taiKhoan)).then((action) => {
      if (deleteUserThunk.fulfilled.match(action)) {
        toast.success("Bạn đã xóa người dùng!");
        setVisible(false);
        setUserToDelete(null);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error("Xóa người dùng thất bại");
      }
    });
  };

  const handleEditUser = (record) => {
    navigate(PATH.edituseradmin, { state: record });
  };

  const columns = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      sorter: (a, b) => a.taiKhoan.localeCompare(b.taiKhoan),
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
      sorter: (a, b) => a.hoTen.localeCompare(b.hoTen),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDt",
      key: "soDt",
    },
    {
      title: "Mã Loại Người Dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      filters: [
        { text: "Giáo viên", value: "GV" },
        { text: "Học viên", value: "HV" },
      ],
      onFilter: (value, record) => record.maLoaiNguoiDung.includes(value),
      render: (text) => (
        <Badge
          color={text === "GV" ? "green" : "blue"}
          text={text === "GV" ? "Giáo viên" : "Học viên"}
        />
      ),
    },
    {
      title: "Hành Động",
      key: "action",
      align: "center",
      width: 100,
      render: (text, record) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEditUser(record)}
            style={{ padding: 0, height: "auto" }}
          />
          <Button
            type="link"
            icon={<DeleteOutlined />}
            onClick={() => showDeleteConfirm(record)}
            style={{ padding: 0, height: "auto", color: "red" }}
          />
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Card
        style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Title level={2} style={{ margin: 0 }}>
            Danh Sách Người Dùng
          </Title>
          <div className="flex gap-5">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleAddUser}
              className="mt-1"
            >
              Thêm người dùng
            </Button>
            <Search
              placeholder="Tìm kiếm người dùng"
              enterButton={<SearchOutlined />}
              size="large"
              onSearch={handleSearch}
              style={{ width: "500px" }}
            />
          </div>
        </div>
        <Table
          dataSource={filteredData}
          columns={columns}
          rowKey="taiKhoan"
          pagination={{ pageSize: 10, showSizeChanger: false }}
          bordered
        />
      </Card>
    </div>
  );
};
