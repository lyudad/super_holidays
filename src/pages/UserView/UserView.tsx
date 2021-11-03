import { useState } from 'react';

import AppMenu from 'components/AppMenu';
import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import ProfileTable from 'components/ProfileTable';

import { LogoutOutlined } from '@ant-design/icons';

import { Button, Layout, Row, Col } from 'antd';

import { StyledContent, StyledLayout } from './styles';

const ProfileView = (): JSX.Element => {
  const [selectedKey, setSelectedKey] = useState<string>('0');

  const changeSelectedKey = (event: any) => {
    const key = event.key;
    setSelectedKey(key);
  };

  const Menu = (
    <>
      <AppMenu
        selectedKey={selectedKey}
        changeSelectedKey={changeSelectedKey}
      />
      <Button block>
        Log out <LogoutOutlined />
      </Button>
    </>
  );

  return (
    <StyledLayout>
      <NavBar menu={Menu} />
      <Layout>
        <SideBar menu={Menu} />
        <StyledContent>
          <Row style={{ marginBottom: '30px' }}>
            <Col xs={16} sm={14} md={10} lg={8} xl={6} xxl={4}>
              <h1 style={{ fontSize: '25px' }}>Davoria Paori</h1>
            </Col>
          </Row>
          <Row style={{ marginBottom: '30px' }}>
            <Col xs={16} sm={14} md={10} lg={8} xl={6} xxl={4}>
              <p style={{ fontSize: '20px' }}>2 sick leave</p>
            </Col>
            <Col xs={16} sm={14} md={10} lg={8} xl={6} xxl={4}>
              <p style={{ fontSize: '20px' }}>14 vacations days</p>
            </Col>
          </Row>
          <Row justify="end" style={{ marginBottom: '30px' }}>
            <Col sm={8} md={5} lg={4} xl={3}>
              <Button type="primary" block>
                Add
              </Button>
            </Col>
          </Row>
          <ProfileTable />
        </StyledContent>
      </Layout>
    </StyledLayout>
  );
};

export default ProfileView;
