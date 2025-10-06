import { useState } from 'react'
import './App.css'
import Button from './ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button>i am lomi</Button>
    </>
  )
}

export default App