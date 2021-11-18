import styled from 'styled-components';

import { Layout } from 'antd';

export const StyledSider = styled(Layout.Sider)`
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
`;
