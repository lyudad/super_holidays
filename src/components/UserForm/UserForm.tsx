import { Input, Form } from 'antd';
import { eng } from 'helpers/eng';
import { emailPattern } from 'helpers/patterns';

import { CustomForm, CustomItem, CustomButton } from './styles';

export default function UserForm(): JSX.Element {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  return (
    <CustomForm form={form} onFinish={onFinish} layout="vertical">
      <CustomItem name="first_name" rules={[{ required: true }]}>
        <Input placeholder="First Name" />
      </CustomItem>
      <CustomItem name="last_name" rules={[{ required: true }]}>
        <Input placeholder="Last Name" />
      </CustomItem>
      <CustomItem
        name="email"
        rules={[
          {
            required: true,
            pattern: emailPattern,
            message: 'Please check your email'
          }
        ]}
      >
        <Input placeholder="e-mail" />
      </CustomItem>
      <CustomItem>
        <CustomButton htmlType="submit" type="primary">
          {eng.button__addUser}
        </CustomButton>
      </CustomItem>
    </CustomForm>
  );
}
