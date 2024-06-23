import React, { useEffect, useState } from 'react';
import { MenuAdmin } from '../components/Admin/MenuAdmin'
import { Outlet } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';

const { Header, Content, Sider } = Layout;

export const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigation = useNavigate();
  const handleNav = (a) => {
    navigation(a)
  }

  const isMd = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    if (isMd) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [isMd]);


  return (
    <Layout hasSider>
      <Sider
      className='lg:!w-[200px] md:!w-[60px] !w-[40px] !min-w-0'
        trigger={null} collapsible collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: 'home',
              icon: <UserOutlined />,
              label: 'TRANG CHỦ',
            },
            {
              key: 'qluser',
              icon: <VideoCameraOutlined />,
              label: 'QL NGƯỜI DÙNG',
            },
            {
              key: 'qlkh',
              icon: <UploadOutlined />,
              label: 'QL KHOÁ HỌC',
            },
          ]}
          className='h-screen text-[16px] bg-cyan-400 pt-10'
          onClick={(item) => { handleNav(item.key) }}
        />
      </Sider>
      <Layout className='lg:ms-[200px] ms-[12px]'>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            className='lg:block hidden'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Content
          style={{
            margin: '0 16px',
            overflow: 'initial',
          }}
        >
          <div
          className='md:ps-0 ps-5'
            style={{
              borderRadius: borderRadiusLG,
              background: colorBgContainer,
              transition: 'all 0.2s', // Smooth transition
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
