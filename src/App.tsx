import { Suspense } from 'react';
import PrivateRoute from './components/PrivateRoute';

function App(): JSX.Element {
  return (
    <div className="App">
      <Suspense fallback={<h3>Loading ....</h3>}>
        <PrivateRoute />
      </Suspense>
    </div>
  );
}
export default App;
