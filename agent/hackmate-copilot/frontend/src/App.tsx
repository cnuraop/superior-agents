import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatBox from './components/ChatBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChatBox />
      </>
  )
}

export default App
