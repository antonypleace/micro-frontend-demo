import React, {useState} from 'react';
import ReactDOM from 'react-dom';


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
      return (<div><h1>Something went wrong.</h1>
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

const App2 = () => {
  // State to manage the visibility of the text
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
      <div>
        <ErrorBoundary>
          <h1>App 2</h1>
          <button onClick={toggleVisibility}>
            {isVisible ? 'Hide' : 'Show'} Details
          </button>
          {
    isVisible &&
        <p>Here are some interesting details about App 2. </p>}
         </ErrorBoundary> 
         </div > 
   
  );
};

export default App2;
