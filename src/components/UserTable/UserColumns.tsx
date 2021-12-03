import { Button, Input, Select } from 'antd';
import { CustomSelect } from './styles';

interface OnPropsName {
  name: string;
}

export const OnName = (props: OnPropsName): JSX.Element => {
  return <Input value={props.name} />;
};

interface OnPropsEmail {
  email: string;
}

export const OnEmail = (props: OnPropsEmail): JSX.Element => {
  return <Input value={props.email} />;
};

interface OnPropsStatus {
  status: string;
}

export const OnStatus = (props: OnPropsStatus): JSX.Element => {
  return (
    <CustomSelect
      defaultValue={props.status}
      // disabled={!editable}
      // onChange={handleChange}
      // getPopupContainer={trigger => trigger.parentNode}
    >
      <Select.Option value="Block">Block</Select.Option>
      <Select.Option value="Unblock">Unblock</Select.Option>
    </CustomSelect>
  );
};

interface OnPropsEdit {
  uid: number;
}

export const OnEdit = (props: OnPropsEdit): JSX.Element => {
  return <Button>Edit</Button>;
};
