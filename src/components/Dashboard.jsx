import React from 'react';
import { Trophy, TrendingUp, BookOpen, Flame } from 'lucide-react';
import './Dashboard.css';

// Import extracted components
import DashboardHeader from './DashboardHeader';
import ResumeLearningCard from './ResumeLearningCard';
import StatCard from './StatCard';
import LearningPathTracker from './LearningPathTracker';
import ActivityHeatmap from './ActivityHeatmap';

const Dashboard = () => {
  // Mock data for components
  const statsData = [
    {
      icon: TrendingUp,
      label: "Course Progress",
      value: "65%",
      trend: "up",
      trendLabel: "+5%",
      colorTheme: "blue"
    },
    {
      icon: BookOpen,
      label: "Modules Completed",
      value: "5 / 8",
      trend: "flat",
      trendLabel: "On track",
      colorTheme: "purple"
    },
    {
      icon: Flame,
      label: "Current Streak",
      value: "4 Days",
      trend: "down",
      trendLabel: "Needs 1h",
      colorTheme: "orange"
    }
  ];

  const pathSteps = [
    { id: 1, label: 'Basics', status: 'completed' },
    { id: 2, label: 'Color', status: 'completed' },
    { id: 3, label: 'Wireframes', status: 'active' },
    { id: 4, label: 'Prototypes', status: 'locked' },
    { id: 5, label: 'Portfolio', status: 'locked' }
  ];

  return (
    <div className="dashboard-container">
      <main className="dash-main-dense">
        
        {/* Compact Header */}
        <DashboardHeader 
          userName="User" 
          streak={4} 
          hoursLearned={12} 
          dailyGoal="1h" 
        />

        {/* 12-Column Grid Area */}
        <div className="dash-grid-12">
          
          {/* Dominant Resume Card (Span 8) */}
          <ResumeLearningCard 
            moduleNumber={6}
            progress={30}
            title="Wireframing Basics & Auto Layout"
            description="Pick up where you left off. Learn how to map out user flows effectively and master Figma's advanced auto layout features."
            timeRemaining={45}
            lessonsLeft={2}
          />

          {/* Quick Stats Block (Span 4) */}
          <div className="grid-card col-span-4 stacked-stats">
            {statsData.map((stat, idx) => (
              <React.Fragment key={idx}>
                <StatCard {...stat} />
                {idx < statsData.length - 1 && <div className="stat-divider"></div>}
              </React.Fragment>
            ))}
          </div>

          {/* Dense Learning Path (Span 7) */}
          <LearningPathTracker steps={pathSteps} />

          {/* Heatmap (Span 5) */}
          <ActivityHeatmap totalHours={42} />

          {/* Achievements / Suggestions (Span 12) */}
          <div className="grid-card col-span-12 tertiary-card flex-row-card">
            <div className="flex-card-left">
               <div className="icon-badge-glow">
                 <Trophy size={20} className="text-yellow" />
               </div>
               <div className="flex-text">
                 <h4>Smart Suggestion</h4>
                 <p>Complete 1 more module this week to stay on track for your monthly goal. You're doing great!</p>
               </div>
            </div>
            <div className="flex-actions">
              <button className="btn-outline">Start Challenge</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
