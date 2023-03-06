import { Link } from "react-router-dom";
import Homepage from './pages/Homepage';
import React from 'react'
import ReactDOM from 'react-dom'

import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
        <header className="App-header">
  
          <p>
            <button onClick={() => {
  
              navigate("/");
  
            }}>page2   </button>
  
          </p>
        </header>
      
  
</div> );
}

export default App;

