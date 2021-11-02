import React, { lazy } from 'react';
import { Route, Redirect } from 'react-router';
import { useAppSelector } from '../helpers/utils';
import selector from '../redux/selectors/selectors';
import { accessUser } from '../helpers/constants';

const Login = lazy(() => import('../pages/Login'));

type PrivateRouteProps = {
  component: React.ElementType;
  roles: Array<string>;
  exact: boolean;
  path: string;
};

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
              <Component {...props} />
            </>
          )}
        />
      ) : (
        <Redirect to={accessUser.login} />
      )}
    </>
  );
}
