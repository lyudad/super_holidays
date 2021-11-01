import Login from '../pages/Login';
import { Route, Redirect } from 'react-router';
import { useAppSelector } from '../helpers/utils';
import selector from '../redux/selectors/selectors';
import React from 'react';

type PrivateRouteProps = {
  component: React.ElementType;
  roles: string;
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
      {roles === user.role ? (
        <Route
          {...rest}
          render={props => (
            <>
              <Component {...props} />
            </>
          )}
        />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
