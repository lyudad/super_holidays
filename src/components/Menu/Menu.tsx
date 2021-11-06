import { useState } from 'react';
import AppMenu from '../AppMenu';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { eng } from 'helpers/eng';

export default function Menu(): JSX.Element {
  const [selectedKey, setSelectedKey] = useState<string>('0');

  const changeSelectedKey = (event: any) => {
    const key = event.key;
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
