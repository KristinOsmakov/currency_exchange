import React from 'react';
import logo from './logo.svg';
import './App.css';
import {UniversalInput} from "./universalInput";
import {Currency} from "./Currency";
import {useAppSelector} from "./store";

function App() {
  return (
    <div className="App">
      <Currency/>
    </div>
  );
}

export default App;
