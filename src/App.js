import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Events from './pages/Events';
import Contacts from './pages/Contacts';
import GymInstructions from './pages/GymInstructions';
import LoveGuide from './pages/loveGuide';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/gym-instructions" element={<GymInstructions />} />
        <Route path="/love-guide" element={<LoveGuide />} />
      </Routes>
    </Router>
  );
};

export default App;