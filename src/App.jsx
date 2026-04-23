import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';

function App() {
  // Currently showing the Dashboard view for demonstration purposes.
  return (
    <div className="app-container">
      <Dashboard />
      
      {/* 
        Commented out the landing page components to showcase the Dashboard design.
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Contact />
      */}
    </div>
  );
}

export default App;
