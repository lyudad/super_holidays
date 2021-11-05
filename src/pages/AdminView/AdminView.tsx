import { useState } from 'react';

import AppMenu from 'components/AppMenu';
import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
//import UserPageTable from 'components/UserTable/UserPageTable';
import AdminTable from 'components/AdminTable/AdminTable';
import { LogoutOutlined } from '@ant-design/icons';

import { Button, Layout, Row, Col } from 'antd';

import { StyledContent, StyledLayout } from './styles';
import { logOut } from 'helpers/eng';

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
        {logOut} <LogoutOutlined />
      </Button>
    </>
  );

  return (
    <StyledLayout>
      <NavBar menu={Menu} />
      <Layout>
        <SideBar menu={Menu} />
        <StyledContent>
          <Row justify="end" style={{ marginBottom: '30px' }}>
            <Col sm={8} md={5} lg={4} xl={3}>
              <Button type="primary" block>
                Add
              </Button>
            </Col>
          </Row>
          {/* <UserPageTable /> */}
          <AdminTable />
        </StyledContent>
      </Layout>
    </StyledLayout>
  );
};

export default ProfileView;
