import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import RoleBasedRouting from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { accessUser } from './helpers/constants';

const AdminPage = lazy(() => import('./pages/AdminPage'));
const SuperAdminPage = lazy(() => import('./pages/SuperAdminPage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App(): JSX.Element {
  return (
    <div className="App">
      <Suspense fallback={<h3>Loading ....</h3>}>
        <Switch>
          <PublicRoute exact path="/" component={Login} />
          <RoleBasedRouting
            exact
            path="/admin"
            component={AdminPage}
            roles={accessUser.admin}
          />
          <RoleBasedRouting
            exact
            path="/employee"
            component={UserPage}
            roles={accessUser.employee}
          />
          <RoleBasedRouting
            exact
            path="/super"
            component={SuperAdminPage}
            roles={accessUser.superAdmin}
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
