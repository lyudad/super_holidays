import { Layout, Menu, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
//import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
//import styled from 'styled-components';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import UserPageTable from '../../components/UserTable/UserPageTable';

export default function UserPage(): JSX.Element {
  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          ></Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Row justify="end" style={{ marginBottom: '30px' }}>
                <Col sm={8} md={5} lg={4} xl={3}>
                  <Button type="primary" block>
                    Add
                  </Button>
                </Col>
              </Row>
              <UserPageTable />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>super_holydays 2021</Footer>
      </Layout>
    </>
  );
}
