import { useState } from 'react'
import NavBar from './Components/NavBar'
import './App.css'
import Body from './Components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      <NavBar />
      <Body />
    </div>
  )
}

export default App
