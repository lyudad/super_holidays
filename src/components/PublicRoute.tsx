import React, { lazy } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUserAccess } from '../helpers/constants';
import { useAppSelector } from '../helpers/utils';
import selector from '../redux/selectors/selectors';

const Login = lazy(() => import('../pages/LoginView'));

interface Props {
  exact?: boolean;
  path?: string;
}

export default function PublicRoute({ ...routeProps }: Props): JSX.Element {
  const { user, isLoggedIn } = useAppSelector(selector.getState);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? <Redirect to={getUserAccess(user)} /> : <Login />}
    </Route>
  );
}
