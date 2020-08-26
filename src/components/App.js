import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  SettingOutlined,//设置
  ApartmentOutlined, //实验
  FileSearchOutlined,//黑白名单展示
  QuestionCircleOutlined,
} from '@ant-design/icons';
// const { SubMenu } = Menu;

import Module from "./ModuleShow";  //模型展示
import Setting from "./Setting";  //设置
import BAndWList from "./BAndWList";  //黑白名单
import FormDemo from "./FormDemo"; //网站检测


const { Header, Content, Sider } = Layout;


class SelectedComponent extends React.Component {

  state = {
    id: "1"
  }
  render() {
    let id = this.state.id;
    // console.log(id);
    if (id === '1') {
      return <Module />
    } else if (id === '2') {
      return <Setting />
    } else if (id === "3") {
      return <BAndWList />
    } else if (id === "4") {
      return <FormDemo />
    }
  }

}

class LayoutDemo extends React.Component {
  showComponent = (e) => {
    let centerContent = this.refs.centerContent;
    centerContent.setState({
      id: e.key
    });
    console.log(e);
  }
  componentDidMount() {

  }

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
              <Menu.Item key="1" onClick={this.showComponent} icon={<ApartmentOutlined />}>
                模型展示
            </Menu.Item>
              <Menu.Item key="2" onClick={this.showComponent} icon={<SettingOutlined />}>
                设置
            </Menu.Item>
              <Menu.Item key="3" onClick={this.showComponent} icon={<FileSearchOutlined />}>
                黑白名单展示
            </Menu.Item>
              <Menu.Item key="4" onClick={this.showComponent} icon={<QuestionCircleOutlined />}>
                网站检测
            </Menu.Item>
            </Menu>
          </Sider>

          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><span ref="firstDir"></span></Breadcrumb.Item>
            </Breadcrumb>
            <Content id="centerContent"
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <SelectedComponent id="1" ref="centerContent" />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutDemo;

