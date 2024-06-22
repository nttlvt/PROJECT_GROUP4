import React, { useEffect, useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
export const MenuAdmin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const navigation = useNavigate()
    const handleNav = (a) => {
      
        navigation(a)

    }
  
    return (
        <div className=' h-screen relative' style={{ width: 256, }} >
            <Button
                className='absolute top-0 left-0  z-10'
                type="primary"
                onClick={toggleCollapsed}
                style={{
            
                    marginBottom: 16,
                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>

            <Menu 
                
                mode="inline"
                defaultSelectedKeys={['1']}
                inlineCollapsed={collapsed}
                items={[
                    {
                        key: 'homeadmin',
                        icon: <UserOutlined />,
                        label: 'TRANG CHỦ',
                    },
                    {
                        key: 'qluser',
                        icon: <UserOutlined />,
                        label: 'QL NGƯỜI DÙNG',
                    },
                    {
                        key: 'qlkh',
                        icon: <VideoCameraOutlined />,
                        label: 'QL KHOÁ HỌC',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'ĐK KHOÁ HỌC',
                    },
                ]}
                className='bg-blue-400 h-screen pt-10 relatitve '
                onClick={(item) => { handleNav(item.key) }}
                
            />

        </div>

    );
}
