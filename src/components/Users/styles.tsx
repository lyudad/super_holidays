import styled from 'styled-components';

import { Layout } from 'antd';
const { Content } = Layout;

export const StyledLayout = styled(Layout)`
  min-height: calc(100vh - 80px);
`;

export const StyledContent = styled(Content)`
  padding: 45px;
`;
