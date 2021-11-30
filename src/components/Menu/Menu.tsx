import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import AppMenu from 'components/AppMenu';
import { TextContext } from 'components/PrivateRoute';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { eng } from 'helpers/eng';
import { onLogout } from 'redux/reducers/action-creators';

export default function Menu(): JSX.Element {
  const [selectedKey, setSelectedKey] = useState<string>('0');
  const dispatch = useDispatch();
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
      <Button onClick={() => dispatch(onLogout())}>
        {eng.button_logOut} <LogoutOutlined />
      </Button>
    </>
  );
}
