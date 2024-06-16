import React, { useState } from 'react';
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

const { Header, Content, Sider } = Layout;


export const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigation = useNavigate()
  const handleNav = (a) => {
    console.log('a', a);
    console.log()
    navigation(a)

  }
  return (
    <Layout hasSider>
      <Sider
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
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Header style={{ padding: 0, background: colorBgContainer }}>
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
      
        </Header>

        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 15,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>


  );
  // return (
  //   <div className=" h-full">
  //     <div className="flex">
  //       <MenuAdmin className="w-auto" />
  //       <Outlet />
  //     </div>

  //   </div>
  // )
}
