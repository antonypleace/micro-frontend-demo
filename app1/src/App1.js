import React, {useState} from 'react';


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
      return (
        <div><h1>Something went wrong.</h1>
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


const App1 = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage(`Hello, World! You entered: ${inputValue}`);
  };

  return (
    <div>
      <ErrorBoundary>
        <input
          type='text'
  value = {inputValue} onChange = {
    (e) => setInputValue(e.target.value)
  } />
        <button onClick={handleClick}>
          Click me
        </button > {message && <p>{message}</p>}
      </ErrorBoundary>
    </div>
  );
};

export default App1;
