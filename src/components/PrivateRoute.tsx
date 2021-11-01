import { lazy } from 'react';
import Login from '../pages/Login';
import { accessUser } from '../helpers/constants';
import { useAppSelector } from '../helpers/utils';
import selector from '../redux/selectors/selectors';

const AdminPage = lazy(() => import('../pages/AdminPage'));
const SuperAdminPage = lazy(() => import('../pages/SuperAdminPage'));
const UserPage = lazy(() => import('../pages/UserPage'));

export default function PrivateRoute(): JSX.Element {
  const { user } = useAppSelector(selector.getState);
  if (!user) {
    return <Login />;
  }
  switch (user.role) {
    case accessUser.admin:
      return <AdminPage />;
    case accessUser.superAdmin:
      return <SuperAdminPage />;
    case accessUser.employee:
      return <UserPage />;
    default:
      return <Login />;
  }
}
