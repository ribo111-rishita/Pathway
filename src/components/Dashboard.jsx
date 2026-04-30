import React, { useState, useEffect } from 'react';
import { Trophy, TrendingUp, BookOpen, Flame } from 'lucide-react';
import './Dashboard.css';

import DashboardHeader from './DashboardHeader';
import ResumeLearningCard from './ResumeLearningCard';
import StatCard from './StatCard';
import LearningPathTracker from './LearningPathTracker';
import ActivityHeatmap from './ActivityHeatmap';

// Initial Dummy Data
const initialCourseData = [
  { id: 1, label: 'Basics', status: 'completed', lessons: 5, completedLessons: 5 },
  { id: 2, label: 'Color', status: 'completed', lessons: 4, completedLessons: 4 },
  { id: 3, label: 'Wireframes', status: 'active', lessons: 6, completedLessons: 2 },
  { id: 4, label: 'Prototypes', status: 'locked', lessons: 8, completedLessons: 0 },
  { id: 5, label: 'Portfolio', status: 'locked', lessons: 3, completedLessons: 0 }
];

const initialActivityData = Array.from({ length: 15 * 7 }).map(() => ({
  isActive: Math.random() > 0.5,
  intensity: Math.floor(Math.random() * 4) + 1
}));

const Dashboard = () => {
  // State Initialization with localStorage fallback
  const [courseData, setCourseData] = useState(() => {
    const saved = localStorage.getItem('pathway_course_data');
    return saved ? JSON.parse(saved) : initialCourseData;
  });

  const [userStats, setUserStats] = useState(() => {
    const saved = localStorage.getItem('pathway_user_stats');
    return saved ? JSON.parse(saved) : { streak: 4, hoursLearned: 12, dailyGoal: '1h' };
  });

  const [activityData, setActivityData] = useState(() => {
    const saved = localStorage.getItem('pathway_activity_data');
    return saved ? JSON.parse(saved) : initialActivityData;
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('pathway_course_data', JSON.stringify(courseData));
  }, [courseData]);

  useEffect(() => {
    localStorage.setItem('pathway_user_stats', JSON.stringify(userStats));
  }, [userStats]);

  useEffect(() => {
    localStorage.setItem('pathway_activity_data', JSON.stringify(activityData));
  }, [activityData]);

  // Derived State Calculations
  const totalLessons = courseData.reduce((acc, mod) => acc + mod.lessons, 0);
  const totalCompleted = courseData.reduce((acc, mod) => acc + mod.completedLessons, 0);
  const courseProgressPercentage = Math.round((totalCompleted / totalLessons) * 100);
  
  const completedModulesCount = courseData.filter(m => m.status === 'completed').length;
  const activeModule = courseData.find(m => m.status === 'active') || courseData[courseData.length - 1];

  const currentModuleProgress = Math.round((activeModule.completedLessons / activeModule.lessons) * 100);
  const lessonsLeftInModule = activeModule.lessons - activeModule.completedLessons;

  // Handlers
  const handleResumeLearning = () => {
    // Simulate completing a lesson
    setCourseData(prevData => {
      let isUpgradingModule = false;
      
      const newData = prevData.map(mod => {
        if (mod.id === activeModule.id) {
          const newCompleted = mod.completedLessons + 1;
          if (newCompleted >= mod.lessons) {
            isUpgradingModule = true;
            return { ...mod, completedLessons: mod.lessons, status: 'completed' };
          }
          return { ...mod, completedLessons: newCompleted };
        }
        return mod;
      });

      // If we finished a module, unlock the next one
      if (isUpgradingModule) {
        const nextLockedIndex = newData.findIndex(mod => mod.status === 'locked');
        if (nextLockedIndex !== -1) {
          newData[nextLockedIndex].status = 'active';
        }
      }

      return newData;
    });

    // Artificially boost stats
    setUserStats(prev => ({
      ...prev,
      hoursLearned: prev.hoursLearned + 0.5
    }));
  };

  const statsData = [
    {
      icon: TrendingUp,
      label: "Course Progress",
      value: `${courseProgressPercentage}%`,
      trend: "up",
      trendLabel: "+5%",
      colorTheme: "blue"
    },
    {
      icon: BookOpen,
      label: "Modules Completed",
      value: `${completedModulesCount} / ${courseData.length}`,
      trend: "flat",
      trendLabel: "On track",
      colorTheme: "purple"
    },
    {
      icon: Flame,
      label: "Current Streak",
      value: `${userStats.streak} Days`,
      trend: "down",
      trendLabel: "Needs 1h",
      colorTheme: "orange"
    }
  ];

  return (
    <div className="dashboard-container">
      <main className="dash-main-dense">
        
        <DashboardHeader 
          userName="User" 
          streak={userStats.streak} 
          hoursLearned={userStats.hoursLearned} 
          dailyGoal={userStats.dailyGoal} 
        />

        <div className="dash-grid-12">
          
          <ResumeLearningCard 
            moduleNumber={activeModule.id}
            progress={currentModuleProgress}
            title={`${activeModule.label} Mastery`}
            description={`Pick up where you left off in ${activeModule.label}. Master the required skills to unlock the next step.`}
            timeRemaining={lessonsLeftInModule * 20}
            lessonsLeft={lessonsLeftInModule}
            onComplete={handleResumeLearning}
          />

          <div className="grid-card col-span-4 stacked-stats">
            {statsData.map((stat, idx) => (
              <React.Fragment key={idx}>
                <StatCard {...stat} />
                {idx < statsData.length - 1 && <div className="stat-divider"></div>}
              </React.Fragment>
            ))}
          </div>

          <LearningPathTracker steps={courseData} />

          <ActivityHeatmap totalHours={userStats.hoursLearned} data={activityData} />

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
