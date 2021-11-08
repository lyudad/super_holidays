import React, { lazy, useState } from 'react';
import { Route, Redirect } from 'react-router';
import { useAppSelector } from '../helpers/utils';
import selector from '../redux/selectors/selectors';
import { accessUser } from '../helpers/constants';
import { createCtx } from './Context/Context';

const Login = lazy(() => import('../pages/LoginView'));
const SideBar = lazy(() => import('./SideBar'));
const NavBar = lazy(() => import('./NavBar'));

interface PrivateRouteProps {
  component: React.ElementType;
  roles: Array<string>;
  exact: boolean;
  path: string;
}

const [ctx, TextProvider] = createCtx('dashboard');
export const TextContext = ctx;
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
              <TextProvider>
                <NavBar />
                <div style={{ display: 'flex' }}>
                  <SideBar />
                  <Component {...props} />
                </div>
              </TextProvider>
            </>
          )}
        />
      ) : (
        <Redirect to={accessUser.login} />
      )}
    </>
  );
}
