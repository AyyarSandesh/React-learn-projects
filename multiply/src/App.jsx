import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log("reload")

  const handleClick=()=>{
    setCount({})
    console.log(count)
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  )
}

export default App
