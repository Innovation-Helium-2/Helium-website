import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import Property from './pages/Property';

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
        <Route path='/property/:id' element={<Property/>}/>
        <Route path='/properties/devices/:deviceName'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
