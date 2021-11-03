import React from 'react';
import { Props } from './types';

import { Menu } from 'antd';
import {
  TeamOutlined,
  UserOutlined,
  AppstoreOutlined
} from '@ant-design/icons';

const AppMenu = ({ selectedKey, changeSelectedKey }: Props) => {
  return (
    <Menu
      selectedKeys={[selectedKey]}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="light"
    >
      <Menu.Item
        key="1"
        icon={<AppstoreOutlined />}
        onClick={changeSelectedKey}
      >
        Dashboard
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />} onClick={changeSelectedKey}>
        Profile
      </Menu.Item>
      <Menu.Item key="3" icon={<TeamOutlined />} onClick={changeSelectedKey}>
        Users
      </Menu.Item>
    </Menu>
  );
};

export default AppMenu;
