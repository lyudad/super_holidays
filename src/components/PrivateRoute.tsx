import React, { lazy } from 'react';
import { Route, Redirect } from 'react-router';
import { useAppSelector } from '../helpers/utils';
import selector from '../redux/selectors/selectors';
import { accessUser, defaultPass } from '../helpers/constants';
import { createCtx } from './Context/Context';
import { WrapperFlex } from 'helpers/globalStyle';

const Login = lazy(() => import('../pages/LoginView'));
const SideBar = lazy(() => import('./SideBar'));
const NavBar = lazy(() => import('./NavBar'));

interface PrivateRouteProps {
  component: React.ElementType;
  roles: Array<string>;
  exact: boolean;
  path: string;
}

const [ctx, TextProvider] = createCtx(defaultPass.dashboard);
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
                <WrapperFlex>
                  <SideBar />
                  <Component {...props} />
                </WrapperFlex>
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
