import { useState } from 'react'
import './App.css'
import EventComponent from './components/EventComponent'
import HookComponent from './components/HookComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EventComponent />
      <HookComponent />
    </>
  )
}

export default App
