import { Suspense, lazy, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RoleBasedRouting from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import Spinner from 'components/Spinner';
import { accessUser } from 'helpers/constants';
import { useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import { onCurrentUser } from 'redux/reducers/action-creators';

import 'antd/dist/antd.css';

const Profile = lazy(() => import('./pages/ProfileView'));
const AdminView = lazy(() => import('./pages/AdminView'));
const NotFound = lazy(() => import('./pages/NotFound'));
export default function App(): JSX.Element {
  const state = useSelector(selectors.getState);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!state.user && state.auth?.accessToken) {
      dispatch(onCurrentUser(state.auth?.accessToken));
    }
  }, [dispatch, state.auth, state.user]);
  return (
    <>
      {state.isLoading ? (
        <Spinner />
      ) : (
        <div className="App">
          <Suspense fallback={<Spinner />}>
            <Switch>
              <PublicRoute exact path="/" />
              <RoleBasedRouting
                exact
                path="/admin"
                component={AdminView}
                roles={[accessUser.admin, accessUser.superAdmin]}
              />
              <RoleBasedRouting
                exact
                path="/user"
                component={Profile}
                roles={[accessUser.employee]}
              />
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
        </div>
      )}
    </>
  );
}
