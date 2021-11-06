import React, { lazy } from 'react';
import { Route, Redirect } from 'react-router';
import { useAppSelector } from '../helpers/utils';
import selector from '../redux/selectors/selectors';
import { accessUser } from '../helpers/constants';

const Login = lazy(() => import('../pages/LoginView'));
const SideBar = lazy(() => import('./SideBar'));
const NavBar = lazy(() => import('./NavBar'));

interface PrivateRouteProps {
  component: React.ElementType;
  roles: Array<string>;
  exact: boolean;
  path: string;
}

export default function RoleBasedRouting({
  component: Component,
  roles,
  ...rest
}: PrivateRouteProps): JSX.Element {
  const user = useAppSelector(selector.getUser);
  if (!user) {
    return (
      <Route
        render={() => (
          <>
            <Login />
          </>
        )}
      />
    );
  }
  return (
    <>
      {roles.some(e => e === user.role) ? (
        <Route
          {...rest}
          render={props => (
            <>
              <NavBar />
              <div style={{ display: 'flex' }}>
                <SideBar />
                <Component {...props} />
              </div>
            </>
          )}
        />
      ) : (
        <Redirect to={accessUser.login} />
      )}
    </>
  );
}
