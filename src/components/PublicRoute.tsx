import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAppSelector } from '../helpers/utils';
import selector from '../redux/selectors/selectors';

interface Props {
  component?: React.ElementType;
  exact?: boolean;
  path?: string;
}

export default function PublicRoute({
  component,
  ...routeProps
}: Props): JSX.Element {
  const { user, isLoggedIn } = useAppSelector(selector.getState);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? <Redirect to={user ? user.role : '/'} /> : component}
    </Route>
  );
}
