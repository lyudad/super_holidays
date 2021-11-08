import { useContext } from 'react';
import { TextContext } from 'components/PrivateRoute';
import Dashboard from 'components/Dashboard';
import UserView from 'pages/UserView';

const ProfileView = (): JSX.Element => {
  const { state } = useContext(TextContext);
  return (
    <>
      {state === 'dashboard' && <Dashboard />}

      {state === 'users' && <UserView />}
    </>
  );
};

export default ProfileView;
