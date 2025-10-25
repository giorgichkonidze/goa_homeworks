import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Weather Now</h1>
        <div className="units">Units</div>
      </header>

      <main className="main">
        <h2>How's the sky looking today?</h2>

        <div className="search-bar">
          <input type="text" placeholder="Search for a place..." />
          <button>Search</button>
        </div>

        <section className="weather-card">
          <div className="location">
            <h2>Berlin, Germany</h2>
            <p>Tuesday, Aug 5, 2025</p>
          </div>
          <div className="temperature">
            <h2>20°</h2>
          </div>
          <div className="details">
            <div><span>Feels Like</span><p>18°</p></div>
            <div><span>Humidity</span><p>46%</p></div>
            <div><span>Wind</span><p>14 km/h</p></div>
            <div><span>Precipitation</span><p>0 mm</p></div>
          </div>
        </section>
        <section className="daily-forecast">
          <h4>Daily forecast</h4>
          <div className="days">
            <div><p>Tue</p><p>20° / 14°</p></div>
            <div><p>Wed</p><p>21° / 15°</p></div>
            <div><p>Thu</p><p>24° / 14°</p></div>
            <div><p>Fri</p><p>25° / 13°</p></div>
            <div><p>Sat</p><p>21° / 15°</p></div>
            <div><p>Sun</p><p>25° / 16°</p></div>
            <div><p>Mon</p><p>24° / 15°</p></div>
          </div>
        </section>
        <section className="hourly">
          <h4>Hourly forecast</h4>
          <div className="hours">
            <div><p>3 PM</p><p>20°</p></div>
            <div><p>4 PM</p><p>20°</p></div>
            <div><p>5 PM</p><p>20°</p></div>
            <div><p>6 PM</p><p>19°</p></div>
            <div><p>7 PM</p><p>18°</p></div>
            <div><p>8 PM</p><p>18°</p></div>
            <div><p>9 PM</p><p>17°</p></div>
            <div><p>10 PM</p><p>17°</p></div>
          </div>
        </section>
      </main>
    </div>
  )
}
export default App