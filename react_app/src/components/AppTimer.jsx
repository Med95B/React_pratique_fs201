import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import React, { useState } from 'react';
import './bootstrap.min.css';

function App() {

  const [showTimer, setShowTimer] = useState(false);
  const toggleTimer = () => {
    setShowTimer((prevShowTimer) => !prevShowTimer);
  };  
  return (

    <div className="App">
      
      <header className="App-header">
        {showTimer && <Timer />}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <button className='btn btn-info fw-bold fs-3' onClick={toggleTimer}>{showTimer ? 'Hide Timer' : 'Show Timer'}</button>
      </header>

      

    </div>  
    
   
  );
}

export default App;
