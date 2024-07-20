import React from 'react';
import logo from './logo.svg';
import './App.css';
import {UniversalInput} from "./universalInput";

function App() {
  return (
    <div className="App">
      <h3>Currency exchange</h3>
        <UniversalInput/>
        <UniversalInput/>
    </div>
  );
}

export default App;
