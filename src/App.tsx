import React, {useCallback, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {UniversalInput} from "./UniversalInput";
import {Currency} from "./Currency";
import {useAppDispatch, useAppSelector} from "./store";
import {getCurrencyTC} from "./reducers/currency-reducer";

function App() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        const thunk = getCurrencyTC()
        dispatch(thunk)
    }, []);


  return (
    <div className="App">
      <Currency/>
    </div>
  );
}

export default App;
