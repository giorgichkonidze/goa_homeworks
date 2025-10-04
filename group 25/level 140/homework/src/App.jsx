import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        mini website
      </h1>
      <h3>this is list</h3>
      <ul>
        <li>dinozaura</li>
        <li>Nugzara</li>
        <li>Napoleon</li>
        <li>grandma luiza</li>
        <li>monkey</li>
      </ul>
    </>
  )
}

export default App