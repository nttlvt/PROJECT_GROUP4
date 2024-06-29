import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  IdcardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RollbackOutlined,
  UploadOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Button, Avatar } from 'antd';
import { useMediaQuery } from 'react-responsive';

const { Header, Content, Sider } = Layout;

export const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const handleNav = (key) => {
    if (key === 'home') {
      navigate('/');
    } else {
      navigate(`/admin/${key}`);
    }
  };

  const isMd = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    setCollapsed(isMd);
  }, [isMd]);

  return (
    <Layout hasSider>
      <Sider
        className='lg:!w-[200px] md:!w-[60px] !w-[40px] !min-w-0'
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          background: '#001529',
        }}
      >
        <div className="logo" style={{ padding: '16px', textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: '18px' }}>
          Admin
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: 'dashboard',
              icon: <HomeOutlined />,
              label: 'TRANG CHỦ ADMIN',
            },
            {
              key: 'qluser',
              icon: <IdcardOutlined />,
              label: 'QL NGƯỜI DÙNG',
            },
            {
              key: 'qlkh',
              icon: <UploadOutlined />,
              label: 'QL KHOÁ HỌC',
            },
            {
              key: 'home',
              icon: <RollbackOutlined />,
              label: 'QUAY VỀ TRANG CHỦ',
            },
          ]}
          onClick={(item) => handleNav(item.key)}
        />
      </Sider>
      <Layout
        className={`lg:ml-[200px] ml-[${collapsed ? (isMd ? '60px' : '40px') : '200px'}] transition-all duration-200`}
        style={{
          marginLeft: collapsed ? (isMd ? '60px' : '40px') : '200px',
          transition: 'margin-left 0.2s',
        }}
      >
        <Header style={{ padding: '0 16px', background: colorBgContainer, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <span style={{ marginLeft: '8px' }}>Admin</span>
          </div>
        </Header>
        <Content
          style={{
            margin: '16px',
            overflow: 'initial',
            transition: 'all 0.2s',
          }}
        >
          <div
            style={{
              padding: '24px',
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
};
