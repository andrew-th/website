import './App.css';
import './css/pico.min.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Links from './Links';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='Content'>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Links />
      </div>
    </div>
  );
}

export default App;
