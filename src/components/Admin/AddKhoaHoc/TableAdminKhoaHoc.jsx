import React, { useState, useEffect } from "react";
import { Table, Typography, Input, Card, Button, Modal, Spin } from "antd";
import {
    DeleteOutlined,
    ExclamationCircleOutlined,
    PlusOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { quanLyKhoaHocThunkAction } from "../../../store/QuanLyKhoaHocAdmin";

const { Title } = Typography;
const { Search } = Input;

export const TableAddKhoaHoc = ({ dsKhoaHocChoGhiDanh, taiKhoan, title }) => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.quanLyKhoaHocAdmin);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
      
        if (dsKhoaHocChoGhiDanh) {
            setFilteredData(dsKhoaHocChoGhiDanh);
        }
    }, [dsKhoaHocChoGhiDanh]);

    const handleSearch = (value) => {
        setSearchText(value);
        if (value.trim() === "") {
            setFilteredData(dsKhoaHocChoGhiDanh);
        } else {
            const filtered = dsKhoaHocChoGhiDanh.filter(
                (course) =>
                    course?.tenKhoaHoc?.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredData(filtered);
        }
    };

    const fetchUserData = () => {
        dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocChoGhiDanh(taiKhoan));
        dispatch(quanLyKhoaHocThunkAction.quanLyKhoaHocDaGhiDanh(taiKhoan));
    };

    const showDeleteConfirm = (record) => {
        Modal.confirm({
            title: "Xác nhận xóa",
            icon: <ExclamationCircleOutlined />,
            content: `Bạn có chắc muốn huỷ ghi danh ${record.hoTen}?`,
            okText: "Xóa",
            okType: "danger",
            cancelText: "Hủy",
            onOk() {
                handleDeleteUser(record);
            },
        });
    };

    const handleDeleteUser = (record) => {
        dispatch(quanLyKhoaHocThunkAction.quanLyHuyDanhNguoiDung({
            maKhoaHoc: record.maKhoaHoc,
            taiKhoan: taiKhoan
        })).then((action) => {
            if (quanLyKhoaHocThunkAction.quanLyHuyDanhNguoiDung.fulfilled.match(action)) {
                toast.success("Bạn đã xóa người dùng!");
                fetchUserData();
            } else {
                toast.error("Xóa người dùng thất bại");
            }
        });
    };

    const handleAddUser = (record) => {
        dispatch(quanLyKhoaHocThunkAction.quanLyGhiDanhNguoiDung({
            maKhoaHoc: record.maKhoaHoc,
            taiKhoan: taiKhoan
        })).then((action) => {
            if (quanLyKhoaHocThunkAction.quanLyGhiDanhNguoiDung.fulfilled.match(action)) {
                toast.success("Ghi danh người dùng thành công!");
                fetchUserData();
            } else {
                toast.error("Ghi danh người dùng thất bại");
            }
        });
    };

    const columns = [
        {
            title: "Mã khoá học",
            dataIndex: "maKhoaHoc",
            key: "maKhoaHoc",
            sorter: (a, b) => a.maKhoaHoc.localeCompare(b.maKhoaHoc),
            render: (text) => <span>{text}</span>,
        },
        {
            title: "Tên khoá học",
            dataIndex: "tenKhoaHoc",
            key: "tenKhoaHoc",
            sorter: (a, b) => a.tenKhoaHoc.localeCompare(b.tenKhoaHoc),
        },
        {
            title: "Hành Động",
            key: "action",
            align: "center",
            width: 100,
            render: (text, record) => (
                <div style={{ display: "flex", gap: "10px" }}>
                   
                    {
                        title === 'Khoá học chờ xác thực' &&  <Button onClick={() => handleAddUser(record)}>
                        Ghi danh
                    </Button>
                    }
                    <Button
                        icon={<DeleteOutlined />}
                        onClick={() => showDeleteConfirm(record)}
                        danger
                    >
                        Xoá
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div style={{ padding: "20px" }} className="border-b-4 border-black">
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
                    <Title level={3} style={{ margin: 0 }}>
                        {title  }
                    </Title>
                    <div className="flex gap-5">
                        <Search
                            placeholder="Tìm kiếm khoá học"
                            enterButton={<SearchOutlined />}
                            size="large"
                            onSearch={handleSearch}
                            style={{ width: "500px" }}
                        />
                    </div>
                </div>
                <Spin spinning={loading.quanLyKhoaHocChoGhiDanh}>
                    <Table
                        dataSource={filteredData}
                        columns={columns}
                        rowKey="maKhoaHoc"
                        pagination={{ pageSize: 2, showSizeChanger: false }}
                        bordered
                    />
                </Spin>
            </Card>
        </div>
    );
};
