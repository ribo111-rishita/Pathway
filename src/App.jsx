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

import CareerOutcomes from './components/CareerOutcomes';
import ComparePaths from './components/ComparePaths';
import TimeSelector from './components/TimeSelector';
import SkillsProgress from './components/SkillsProgress';
import WeeklyPlan from './components/WeeklyPlan';
import Achievements from './components/Achievements';
import ActivityToasts from './components/ActivityToasts';

import DashboardLayout from './components/DashboardLayout';

function LandingPage() {
  return (
    <div className="landing-content">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <GeneratePath />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      
      {/* Newly Added SaaS Extension Sections */}
      <CareerOutcomes />
      <ComparePaths />
      <TimeSelector />
      <SkillsProgress />
      <WeeklyPlan />
      <Achievements />
      
      <Contact />
      <ActivityToasts />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
