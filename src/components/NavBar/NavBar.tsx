import { useState } from 'react';

import { MenuOutlined } from '@ant-design/icons';

import { StyledDrawer, StyledButton, Nav } from './styles';
import logo from '../../logo.svg';

interface Props {
  menu: JSX.Element;
}

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
