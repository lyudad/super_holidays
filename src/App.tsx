import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import RoleBasedRouting from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { accessUser } from './helpers/constants';

import 'antd/dist/antd.css';

const ProfilePage = lazy(() => import('./pages/ProfileView'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const UserView = lazy(() => import('./pages/UsersView'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App(): JSX.Element {
  return (
    <div className="App">
      <Suspense fallback={<h3>Loading ....</h3>}>
        <Switch>
          <PublicRoute exact path="/" />
          <Route path="/profile" component={ProfilePage} />
          <RoleBasedRouting
            exact
            path="/admin"
            component={AdminPage}
            roles={[accessUser.admin, accessUser.superAdmin]}
          />
          <RoleBasedRouting
            exact
            path="/employee"
            component={UserView}
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
export default App;
