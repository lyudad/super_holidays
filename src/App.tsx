import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import RoleBasedRouting from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { accessUser } from './helpers/constants';

import 'antd/dist/antd.css';

const Profile = lazy(() => import('./pages/ProfileView'));
const AdminView = lazy(() => import('./pages/AdminView'));
const NotFound = lazy(() => import('./pages/NotFound'));
export default function App(): JSX.Element {
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
