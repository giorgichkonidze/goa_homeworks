import { useState } from 'react'
import Contacts from './pages/Contacts'

import './App.css'

function App() {
  const current_location = window.location.pathname 
  switch (current_location) {
    case "/":
      return <>Home</>
    case "/Contacts":
      return <Contacts />
  }

}

export default App
