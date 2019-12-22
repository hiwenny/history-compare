/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import axios from 'axios';
import ErrorBoundary from './Components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <header className="App-header">
          <input type="text" placeholder="Enter address here..." />
          <button
            type="button"
            onClick={() => axios
              .get('/search?address=1%20aardvark%20st')
              .then((res) => console.log('@@ response', res))
              .catch((err) => console.log(err))}
          >
          Test search
          </button>
          <button
            type="button"
            onClick={() => axios.get('/search?address=wrong%20street')
              .catch((err) => console.log(err))}
          >
          Test search fail
          </button>
          <button
            type="button"
            onClick={() => axios
              .get('/details?propertyId=1')
              .then((res) => console.log('@@ property details', res))
              .catch((err) => console.log(err))}
          >
          Test details
          </button>
        </header>
      </ErrorBoundary>
    </div>
  );
}

export default App;
