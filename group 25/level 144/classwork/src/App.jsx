import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import k2 from "./assets/k2.avif"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src = {k2} alt="k2"/>
    </>
  )
}

export default App
