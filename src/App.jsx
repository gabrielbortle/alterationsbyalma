import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';

import GeneralRepairs from './pages/GeneralRepairs'; // Import your GeneralRepairs component
import PantRepairs from './pages/PantsRepairs';
import JacketZipper from './pages/JacketZipper';
import FormalDressAlterations from './pages/FormalDress';


import Bags from './pages/Bags';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CasualSemiAlterations from './pages/Casual&Semi';
import FormalJacketPants from './pages/FormalJacket&Pants';





const App = () => {

  const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
      // Scroll to the top when the route changes
      window.scrollTo(0, 0);
    }, [location]);
  
    return null; // No visual component, just functionality
  };
  
  return (
    <Router>
      <ScrollToTop />
      <div>
        {/* Navbar will persist across all pages */}
        <Navbar />

        {/* Define Routes for each page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
            <Route path="/general-repairs" element={<GeneralRepairs />} />
            <Route path="/pant-repairs" element={<PantRepairs />} />
            <Route path="/jacket-zipper-repairs" element={<JacketZipper />} />
            <Route path="/formal-dress-alterations" element={<FormalDressAlterations />} />
            <Route path="/casual-and-semi-profressional" element={<CasualSemiAlterations />} />
            <Route path="/formal-jacket-and-pants-alterations" element={<FormalJacketPants />} />


          <Route path="/bags" element={<Bags />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
