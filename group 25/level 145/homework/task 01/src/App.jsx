import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="card-container">
        <div className="profile-card">
          <img src="./avatar-jessica.jpeg" alt="Jessica Randall" className="profile-img"/>
          <h1>Jessica Randall</h1>
          <p className='location'>London, United Kingdom</p>
          <p className='bio'>"Front-end developer and avid reader."</p>

          <div className='buttons'>
            <a href="#" className='btn'>GitHub</a>
            <a href="#" className='btn'>Frontend Mentor</a>
            <a href="#" className='btn'>LinkedIn</a>
            <a href="#" className='btn'>Twitter</a>
            <a href="#" className='btn'>Instagram</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default App