import styled from 'styled-components';

import { Layout } from 'antd';
const { Sider, Content } = Layout;

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

export const StyledSider = styled(Sider)`
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const StyledContent = styled(Content)`
  padding: 45px;
`;
