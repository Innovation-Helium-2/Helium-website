import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import Property from './pages/Property';
import Device from './pages/Device';
import Transactions from './pages/Transactions';

function App() {
  return (
    <div className="backg">
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Contact-us' element={<Contact/>}/>
        <Route path='/transactions' element={<Transactions/>}/>
        <Route path='/property/:id' element={<Property/>}/>
        <Route path='/:property/devices/:deviceName' element={<Device/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
