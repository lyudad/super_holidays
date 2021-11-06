import { useState } from 'react';
import Menu from '../Menu';
import { MenuOutlined } from '@ant-design/icons';
import logo from 'images/logo.svg';
import { StyledDrawer, StyledButton, Nav } from './styles';

export default function NavBar(): JSX.Element {
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
        <Menu />
      </StyledDrawer>
      <img src={logo} className="logo" alt="logo" />
    </Nav>
  );
}
