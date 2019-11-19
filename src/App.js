/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  // remember to put in propertyId as key to prevent rerendering**
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => axios.get('/search')}>Test</button>
      </header>
    </div>
  );
}

export default App;
