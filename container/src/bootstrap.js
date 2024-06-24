import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

// const App1 = React.lazy(() => import('app1/App1'));
// const App2 = React.lazy(() => import('app2/App2'));

const App1 = React.lazy(() => import('app1/App1'));
const App2 = React.lazy(() => import('app2/App2'));


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false, error: null, errorInfo: null};
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error('Uncaught error:', error, errorInfo);
    this.setState({error, errorInfo});
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (<div><h1>Something went wrong.<
              /h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />{
          this.state.errorInfo &&
          this.state.errorInfo.componentStack}</details>
        </div>);
    }

    return this.props.children;
  }
}


const App = () => (
  <div>
    <h1>Container</h1>
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <App1 />
        <App2 />
      </Suspense>
    </ErrorBoundary>
  </div>
);


ReactDOM.render(<App />, document.getElementById('root'));
