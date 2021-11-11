import { useContext } from 'react';
import { TextContext } from 'components/PrivateRoute';
import { defaultPass } from 'helpers/constants';
import Dashboard from 'components/Dashboard';
import UserView from 'pages/UserView';

const ProfileView = (): JSX.Element => {
  const { state } = useContext(TextContext);
  return (
    <>
      {state === defaultPass.dashboard && <Dashboard />}

      {state === defaultPass.users && <UserView />}
    </>
  );
};

export default ProfileView;
