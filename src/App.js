import './css/pico.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar';
import Home from "./Home"
import About from "./About"
import Links from "./Links"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="links" element={ <Links/> } />
      </Routes>
    </div>
  )
}

export default App
