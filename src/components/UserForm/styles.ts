import styled from 'styled-components';
import { Form, Button } from 'antd';

export const CustomForm = styled(Form)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 15px;
  margin-bottom: 65px;
`;

export const CustomItem = styled(Form.Item)`
  margin-bottom: 0;
`;

export const CustomButton = styled(Button)`
  width: -webkit-fill-available;
`;
