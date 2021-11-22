import React from 'react';
import { Photos } from './features/photos/Photos';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        TEST APP
      </header>
      <div className="main-container">
        <Photos />
      </div>
      <footer>
        © 2018-2019
      </footer>
    </div>
  );
}

export default App;
