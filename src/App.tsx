import { Switch, Route } from 'react-router-dom';
import EmptyPage from './components/Empty';
import Login from './pages/Login';

function App(): JSX.Element {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={EmptyPage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}
export default App;
