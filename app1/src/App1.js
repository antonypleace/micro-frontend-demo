import React, {useState} from 'react';

const App1 = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage(`Hello, World! You entered: ${inputValue}`);
  };

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>
        Click me
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default App1;
