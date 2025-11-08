import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import image from './assets/girl.jpg'
import './App.css'

function App() {
  return (
    <div style={{ textAlign: "center"}}>
      <title>image website</title>
      <img src={image} alt="girl" width="300"/>
      <p>this image was loaded from assets folder</p>
    </div>
  )
}

export default App