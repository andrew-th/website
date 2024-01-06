import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import './css/pico.min.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='Content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
