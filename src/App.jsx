import Home from './pages/Home.jsx'; 
import './App.css';
import Charity from './pages/Charity.jsx';
import Mainservice from './pages/Mainservice.jsx';
import About from './pages/about.jsx';
import Mainpro from './pages/Mainpro.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route index element={<Home />} />
        
        {/* Named routes */}
        <Route path="/mainservice" element={<Mainservice />} />
        <Route path="/mainpro" element={<Mainpro />} />
        <Route path="/about" element={<About />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
