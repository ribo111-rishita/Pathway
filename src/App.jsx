import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import DashboardPreview from './components/DashboardPreview';
import GeneratePath from './components/GeneratePath';
import Dashboard from './components/Dashboard';

function LandingPage() {
  return (
    <div className="landing-content">
      <Hero />
      <DashboardPreview />
      <GeneratePath />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
