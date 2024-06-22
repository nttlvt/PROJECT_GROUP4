import React, { useState, useEffect } from "react";
import { Table, Typography, Input, Card, Badge, Button, Modal, Spin } from "antd";
import {
    DeleteOutlined,
    EditOutlined,
    ExclamationCircleOutlined,
    PlusOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../constant/config";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserThunk } from "../../../store/User/thunk";
import { toast } from "react-toastify";
import { useGetSearchUser } from "../../../hook/useGetSearchUser";
import { useGetListUser } from "../../../hook/useGetListUser";
import { quanLyKhoaHocThunkAction } from "../../../store/QuanLyKhoaHocAdmin";

const { Title } = Typography;
const { Search } = Input;


export const TableAddUser = ({ dsNguoiDungChoGhiDanh, dsNguoiDungDaGhiDanh, maKhoaHoc }) => {
    // console.log(maKhoaHoc)
    // const { data: userData } = dsNguoiDungDaGhiDanh
    const { loading } = useSelector((state) => state.quanLyKhoaHocAdmin);
    const { data: userData } = dsNguoiDungChoGhiDanh;


    const [filteredData, setFilteredData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const [searchText, setSearchText] = useState("");
    const { data: searchUser } = dsNguoiDungChoGhiDanh;

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

    const fetchUserData = () => {
        dispatch(quanLyKhoaHocThunkAction.quanLyNguoiDungChoGhiDanh(maKhoaHoc));
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
            maKhoaHoc: maKhoaHoc,
            taiKhoan: record.taiKhoan
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
            maKhoaHoc: maKhoaHoc,
            taiKhoan: record.taiKhoan
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
                        onClick={() => handleAddUser(record)}

                    >
                        Ghi danh
                    </Button>
                    <Button

                        icon={<DeleteOutlined />}
                        onClick={() => showDeleteConfirm(record)}
                        danger
                    >Xoá</Button>
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
                        Học viên chờ xác thực
                    </Title>
                    <div className="flex gap-5">
                        <Search
                            placeholder="Tìm kiếm người dùng"
                            enterButton={<SearchOutlined />}
                            size="large"
                            onSearch={handleSearch}
                            style={{ width: "500px" }}
                        />
                    </div>
                </div>

                <Spin spinning={loading.quanLyNguoiDungChoGhiDanh}>
                    <Table
                        dataSource={filteredData}
                        columns={columns}
                        rowKey="taiKhoan"
                        pagination={{ pageSize: 2, showSizeChanger: false }}
                        bordered
                    />
                </Spin>
            </Card>
        </div>
    );
}
