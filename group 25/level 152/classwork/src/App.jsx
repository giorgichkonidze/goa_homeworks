import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/main'

function App() {
  return (
    <>
    <div className="app-container"> 
      <Header />
      <br></br>
      <Main />
    </div>
    <br></br>
    <Footer />
    </>
  )
}

export default App