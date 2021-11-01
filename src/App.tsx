import { Switch, Route } from 'react-router-dom';

import EmptyPage from './components/Empty';
import LoginView from './pages/LoginView';
import ProfileView from './pages/ProfileView';

import 'antd/dist/antd.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={EmptyPage} />
        <Route exact path="/login" component={LoginView} />
        <Route exact path="/profile" component={ProfileView} />
      </Switch>
    </div>
  );
}
export default App;
