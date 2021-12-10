import React, { Dispatch, SetStateAction } from 'react';
import { Input, Form } from 'antd';
import { eng } from 'helpers/eng';
import { emailPattern } from 'helpers/patterns';
import { axiosApiInstance } from 'api/axios';
import { User } from 'redux/reducers/types';

import { CustomForm, CustomItem, CustomButton } from './styles';

interface Props {
  setSearchData: Dispatch<SetStateAction<User[]>>;
}

export default function UserForm({ setSearchData }: Props): JSX.Element {
  const [form] = Form.useForm();

  const onFinish = async (values: string) => {
    try {
      await axiosApiInstance.post(`users`, values);
      const { data } = await axiosApiInstance.get('users');
      setSearchData(data);
      form.resetFields();
    } catch (e) {
      console.log(e);
    }
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
