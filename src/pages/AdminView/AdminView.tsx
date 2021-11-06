// import { lazy } from 'react';

import Dashboard from 'components/Dashboard';
import UserView from 'pages/UserView';

// const UserView = lazy(() => import('../../pages/'));

const ProfileView = (): JSX.Element => {
  return (
    <>
      <Dashboard />

      <UserView />
    </>
  );
};

export default ProfileView;
