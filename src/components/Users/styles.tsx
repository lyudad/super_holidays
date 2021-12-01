import styled from 'styled-components';

import { Layout } from 'antd';
const { Content } = Layout;

export const StyledLayout = styled(Layout)`
  min-height: calc(100vh - 5rem);
`;

export const StyledContent = styled(Content)`
  padding: 3rem;
`;
