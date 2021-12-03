import { Props } from './types';
import { Menu } from 'antd';
import {
  TeamOutlined,
  UserOutlined,
  AppstoreOutlined
} from '@ant-design/icons';

import { accessUser } from 'helpers/constants';
import selector from 'redux/selectors';
import { useAppSelector } from 'helpers/utils';

export default function AppMenu({
  selectedKey,
  changeSelectedKey
}: Props): JSX.Element {
  const { user } = useAppSelector(selector.getState);
  // const users = useAppSelector(selector.getAllUsers);
  // console.log(users);

  return (
    <Menu
      selectedKeys={[selectedKey]}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="light"
    >
      {user && user.role !== accessUser.employee && (
        <>
          <Menu.Item
            key="dashboard"
            icon={<AppstoreOutlined />}
            onClick={changeSelectedKey}
          >
            Dashboard
          </Menu.Item>

          <Menu.Item
            key="users"
            icon={<TeamOutlined />}
            onClick={changeSelectedKey}
          >
            Users
          </Menu.Item>
        </>
      )}
      {user && user.role === accessUser.employee && (
        <>
          <Menu.Item
            key="2"
            icon={<UserOutlined />}
            onClick={changeSelectedKey}
          >
            Profile
          </Menu.Item>
        </>
      )}
    </Menu>
  );
}
