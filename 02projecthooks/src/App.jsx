import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addNumber=()=>{
    if(counter!=20){
      setCounter(counter+1);//setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
    }
  }
  const removeValue=()=>{
    if(counter!=0){
      setCounter(--counter);
    }
   
  }
  return (
   <>
    <p>Chai or code:{counter}</p>
    <button onClick={addNumber}>Add</button><br/>
    <button onClick={removeValue}>Remove</button>
   </>
  )
}

export default App
