import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import RoleBasedRouting from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { accessUser } from './helpers/constants';

import 'antd/dist/antd.css';

const UserPage = lazy(() => import('./pages/UserView'));
const AdminPage = lazy(() => import('./pages/AdminView'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App(): JSX.Element {
  return (
    <div className="App">
      <Suspense fallback={<h3>Loading ....</h3>}>
        <Switch>
          <PublicRoute exact path="/" />
          <RoleBasedRouting
            exact
            path="/admin"
            component={AdminPage}
            roles={[accessUser.admin, accessUser.superAdmin]}
          />
          <RoleBasedRouting
            exact
            path="/employee"
            component={UserPage}
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
