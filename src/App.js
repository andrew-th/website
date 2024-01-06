import './App.css';
import NavbarExample from './Navbar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavbarExample />
      <div className='Content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
