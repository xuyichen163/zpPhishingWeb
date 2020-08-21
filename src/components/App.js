import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  HomeOutlined,//首页
  SettingOutlined,//设置
  ApartmentOutlined, //实验
  FileSearchOutlined,//黑白名单展示
} from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class LayoutDemo extends React.Component {

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header className="header">
          <div className="logo" />
          <div className='title'> 面向双结构网络的钓鱼网站检测系统</div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1" onClick={this.showComponent} icon={<HomeOutlined />}>
                检测
            </Menu.Item>
              <Menu.Item key="2" onClick={this.showComponent} icon={<FileSearchOutlined />}>
                黑名单展示
            </Menu.Item>
              <Menu.Item key="2" onClick={this.showComponent} icon={<FileSearchOutlined />}>
                白名单展示
            </Menu.Item>
              <Menu.Item key="3" onClick={this.showComponent} icon={<ApartmentOutlined />}>
                test
            </Menu.Item>
              <Menu.Item key="4" onClick={this.showComponent} icon={<SettingOutlined />}>
                设置
            </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><span ref="firstDir">Home</span></Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
        </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutDemo;

