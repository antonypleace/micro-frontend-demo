import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

const App1 = React.lazy(() => import('app1/App1'));
const App2 = React.lazy(() => import('app2/App2'));

const App = () => (
  <div>
    <h1>Container</h1>
    <Suspense fallback={<div>Loading...</div>
}>
      <App1 />
      <App2 />
    </Suspense>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
