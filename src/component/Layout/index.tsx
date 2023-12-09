import React from 'react';
import style from './index.module.scss';
import { Breadcrumb, Layout as AntLayout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import NavLink from '../NavLink';
const { Header, Content, Footer } = AntLayout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function handleClick(value: any) {
    console.log('item', value);
  }
  return (
    <AntLayout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className='demo-logo' />
        <NavLink
          className={style['menu-contanier ']}
          onNavigation={handleClick}
        />
      </Header>
      <Content className='site-layout' style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </AntLayout>
  );
};

export default App;
