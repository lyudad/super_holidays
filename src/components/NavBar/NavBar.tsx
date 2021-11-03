import { useState } from 'react';
import { Props } from './types';

import { MenuOutlined } from '@ant-design/icons';
import logo from 'images/logo.svg';
import { StyledDrawer, StyledButton, Nav } from './styles';

const NavBar = ({ menu }: Props) => {
  const [visible, setVisible] = useState(false);
  return (
    <Nav>
      <StyledButton
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <StyledDrawer
        title="Menu"
        placement="left"
        onClose={() => setVisible(false)}
        visible={visible}
      >
        {menu}
      </StyledDrawer>
      <img src={logo} className="logo" alt="logo" />
    </Nav>
  );
};

export default NavBar;
