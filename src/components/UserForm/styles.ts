import styled from 'styled-components';
import { Form, Button } from 'antd';

export const CustomForm = styled(Form)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 1rem;
  margin-bottom: 4rem;
`;

export const CustomItem = styled(Form.Item)`
  margin-bottom: 0;
`;

export const CustomButton = styled(Button)`
  width: -webkit-fill-available;
`;
