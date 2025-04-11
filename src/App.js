import React, {useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0); // State to keep track of the counter

  const increment = () => {             // Function to increase counter
    setCount(count + 1);
  };
  
  const decrement = () => {            // Function to decrease counter
    setCount(count - 1);
  };

  return (
    <div className="Main">
      <div className="App">
      <h1>Counter App</h1>
      </div>

      <div className="B1"> 
      <div className="Sb1">
      <p>Count: {count}</p>
      </div>

      <div className="Sb2">
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      </div>
      </div>
      </div>
    
  );
}

export default App;
