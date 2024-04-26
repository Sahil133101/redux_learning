import React from 'react'
import Componet from './Component'
import {useDispatch} from 'react-redux';
import './App.css';

const App = () => {
  const dispatch= useDispatch();
  return (
    <div className='button'>
      <button onClick={(e) => dispatch({type : 'INCREMENT'})}>  Increment </button>
      <Componet/>
      <button onClick = {(e) => dispatch({type : 'DECREMENT'})}> decrement</button>
    </div>
  )
}

export default App