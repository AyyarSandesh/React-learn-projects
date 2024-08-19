import { useState } from 'react'
import UserCard from './UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div>
      <UserCard name="Alice" age={25} location="New York" />
      <UserCard name="Bob" age={30} location="San Francisco" />
    </div>
   </>
  )
}

export default App
