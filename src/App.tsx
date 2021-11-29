import { Suspense, lazy, useEffect, useMemo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RoleBasedRouting from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { accessUser } from './helpers/constants';
import { onLogout, onRefresh } from 'redux/reducers/action-creators';

import 'antd/dist/antd.css';

const Profile = lazy(() => import('./pages/ProfileView'));
const AdminView = lazy(() => import('./pages/AdminView'));
const NotFound = lazy(() => import('./pages/NotFound'));
export default function App(): JSX.Element {
  const dispatch = useDispatch();
  const windowUrl = window.location.search;
  const params = useMemo(() => new URLSearchParams(windowUrl), [windowUrl]);

  const unauthorized = params.get('Unauthorized');
  const refresh = {
    accessToken: params.get('accessToken'),
    refreshToken: params.get('refreshToken'),
    sid: params.get('sid')
  };
  useEffect(() => {
    // if (unauthorized) {
    //   dispatch(() => onLogout());
    //   // window.location.reload();
    // }
    if (refresh.accessToken && refresh.refreshToken && refresh.sid) {
      dispatch(
        onRefresh({
          accessToken: refresh.accessToken,
          refreshToken: refresh.refreshToken,
          sid: refresh.sid
        })
      );
      // window.location.reload();
    }
  }, [
    dispatch,
    params,
    refresh.accessToken,
    refresh.refreshToken,
    refresh.sid,
    unauthorized
  ]);
  return (
    <div className="App">
      <Suspense fallback={<h3>Loading ....</h3>}>
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
  );
}
