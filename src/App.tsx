import { Switch, Route } from 'react-router-dom';
import EmptyPage from './components/Empty';
import Login from './pages/Login';
import UsersPage from './pages/UsersPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={EmptyPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/users" component={UsersPage} />
      </Switch>
    </div>
  );
}
export default App;
