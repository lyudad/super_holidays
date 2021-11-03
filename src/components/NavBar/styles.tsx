import styled from 'styled-components';

import { Button, Drawer } from 'antd';

export const StyledButton = styled(Button)`
  margin-right: 20px;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 0 0 0;
  }
`;

export const Nav = styled.nav`
  background-color: #fff;
  padding: 20px;
`;
