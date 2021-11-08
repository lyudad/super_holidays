import { useState, useContext } from 'react';
import AppMenu from '../AppMenu';
import { TextContext } from 'components/PrivateRoute';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { eng } from 'helpers/eng';

export default function Menu(): JSX.Element {
  const [selectedKey, setSelectedKey] = useState<string>('0');
  const { update } = useContext(TextContext);
  const changeSelectedKey = (event: any) => {
    const key = event.key;
    update(key);
    setSelectedKey(key);
  };
  return (
    <>
      <AppMenu
        selectedKey={selectedKey}
        changeSelectedKey={changeSelectedKey}
      />
      <Button block>
        {eng.button_logOut} <LogoutOutlined />
      </Button>
    </>
  );
}
