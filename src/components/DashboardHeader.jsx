import React from 'react';
import { Flame, Clock, Target } from 'lucide-react';

const DashboardHeader = ({ userName, streak, hoursLearned, dailyGoal }) => {
  return (
    <header className="dash-header-compact">
      <div className="header-greeting">
        <h1>Welcome back, {userName}</h1>
        <p>UI/UX Design Mastery</p>
      </div>
      
      <div className="header-metrics">
        <div className="metric-pill positive-glow">
          <Flame size={16} />
          <span>{streak}-Day Streak</span>
        </div>
        <div className="metric-pill neutral-solid">
          <Clock size={16} />
          <span>{hoursLearned}h Learned</span>
        </div>
        <div className="metric-pill accent-solid">
          <Target size={16} />
          <span>Daily Goal: {dailyGoal}</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
