import { useContext } from 'react';
import { TextContext } from 'components/PrivateRoute';
import { defaultPass } from 'helpers/constants';
import Dashboard from 'components/Dashboard';
import Users from 'components/Users';

export default function ProfileView(): JSX.Element {
  const { state } = useContext(TextContext);
  return (
    <>
      {state === defaultPass.dashboard && <Dashboard />}

      {state === defaultPass.users && <Users />}
    </>
  );
}
