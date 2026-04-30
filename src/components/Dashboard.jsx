import React, { useState, useEffect } from 'react';
import { Trophy, TrendingUp, BookOpen, Flame } from 'lucide-react';
import './Dashboard.css';

import DashboardHeader from './DashboardHeader';
import ResumeLearningCard from './ResumeLearningCard';
import StatCard from './StatCard';
import LearningPathTracker from './LearningPathTracker';
import ActivityHeatmap from './ActivityHeatmap';

// 1. Explicit Course Data Structure
const COURSE_STRUCTURE = {
  id: 'course_1',
  title: 'UI/UX Design Mastery',
  modules: [
    {
      id: 'mod_1',
      title: 'Basics',
      lessons: [
        { id: 'l_1', title: 'Introduction to UI/UX', durationMins: 15 },
        { id: 'l_2', title: 'Design Thinking', durationMins: 20 },
        { id: 'l_3', title: 'User Research', durationMins: 30 }
      ]
    },
    {
      id: 'mod_2',
      title: 'Color',
      lessons: [
        { id: 'l_4', title: 'Color Theory', durationMins: 25 },
        { id: 'l_5', title: 'Creating Palettes', durationMins: 20 }
      ]
    },
    {
      id: 'mod_3',
      title: 'Wireframes',
      lessons: [
        { id: 'l_6', title: 'Low Fidelity', durationMins: 40 },
        { id: 'l_7', title: 'High Fidelity', durationMins: 45 },
        { id: 'l_8', title: 'Auto Layout Basics', durationMins: 30 }
      ]
    },
    {
      id: 'mod_4',
      title: 'Prototypes',
      lessons: [
        { id: 'l_9', title: 'Micro-interactions', durationMins: 30 },
        { id: 'l_10', title: 'Complex Flows', durationMins: 50 }
      ]
    }
  ]
};

// Generate some dummy initial activity data based on real dates
const generateDummyActivity = () => {
  const data = {};
  const today = new Date();
  for (let i = 0; i < 40; i++) {
    const randomDate = new Date(today);
    randomDate.setDate(today.getDate() - Math.floor(Math.random() * 100));
    const dateKey = randomDate.toISOString().split('T')[0];
    data[dateKey] = Math.floor(Math.random() * 4) + 1; // Intensity 1-4
  }
  return data;
};

const Dashboard = () => {
  // 2. Explicit State Variables with localStorage hydration
  
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('pathway_completed_lessons');
    // Fallback: assume mod_1 and mod_2 are fully completed initially
    return saved ? JSON.parse(saved) : ['l_1', 'l_2', 'l_3', 'l_4', 'l_5', 'l_6'];
  });

  const [currentLesson, setCurrentLesson] = useState(() => {
    const saved = localStorage.getItem('pathway_current_lesson');
    return saved ? JSON.parse(saved) : { moduleId: 'mod_3', lessonId: 'l_7' };
  });

  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem('pathway_streak');
    return saved ? parseInt(saved, 10) : 4;
  });

  const [totalHoursLearned, setTotalHoursLearned] = useState(() => {
    const saved = localStorage.getItem('pathway_total_hours');
    return saved ? parseFloat(saved) : 12.5;
  });

  const [activityData, setActivityData] = useState(() => {
    const saved = localStorage.getItem('pathway_activity_data');
    return saved ? JSON.parse(saved) : generateDummyActivity();
  });

  // Persist State Changes
  useEffect(() => {
    localStorage.setItem('pathway_completed_lessons', JSON.stringify(completedLessons));
    localStorage.setItem('pathway_current_lesson', JSON.stringify(currentLesson));
    localStorage.setItem('pathway_streak', streak.toString());
    localStorage.setItem('pathway_total_hours', totalHoursLearned.toString());
    localStorage.setItem('pathway_activity_data', JSON.stringify(activityData));
  }, [completedLessons, currentLesson, streak, totalHoursLearned, activityData]);

  // 3. Dynamic Progress Calculations
  
  // Overall Progress
  const totalLessonsInCourse = COURSE_STRUCTURE.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
  const courseProgressPercentage = Math.round((completedLessons.length / totalLessonsInCourse) * 100);

  // Active Module Calculations
  const activeModule = COURSE_STRUCTURE.modules.find(m => m.id === currentLesson.moduleId);
  const activeLesson = activeModule?.lessons.find(l => l.id === currentLesson.lessonId);
  
  const completedLessonsInActiveModule = activeModule ? activeModule.lessons.filter(l => completedLessons.includes(l.id)).length : 0;
  const currentModuleProgress = activeModule ? Math.round((completedLessonsInActiveModule / activeModule.lessons.length) * 100) : 100;
  
  const lessonsLeftInModule = activeModule ? activeModule.lessons.length - completedLessonsInActiveModule : 0;
  const timeRemainingInModule = activeModule ? activeModule.lessons.filter(l => !completedLessons.includes(l.id)).reduce((acc, l) => acc + l.durationMins, 0) : 0;

  // Path Tracker Data
  const pathSteps = COURSE_STRUCTURE.modules.map(mod => {
    const isCompleted = mod.lessons.every(l => completedLessons.includes(l.id));
    const isActive = mod.id === currentLesson.moduleId;
    return {
      id: mod.id,
      label: mod.title,
      status: isCompleted ? 'completed' : isActive ? 'active' : 'locked'
    };
  });

  const completedModulesCount = pathSteps.filter(step => step.status === 'completed').length;

  // Handlers
  const handleResumeLearning = () => {
    if (!activeModule || !activeLesson) return; // Course complete

    // 1. Mark lesson as complete
    const newCompletedLessons = [...completedLessons, activeLesson.id];
    setCompletedLessons(newCompletedLessons);

    // 2. Find next lesson
    let nextLessonId = null;
    let nextModuleId = activeModule.id;
    
    const currentIndex = activeModule.lessons.findIndex(l => l.id === activeLesson.id);
    if (currentIndex + 1 < activeModule.lessons.length) {
      // Next lesson in same module
      nextLessonId = activeModule.lessons[currentIndex + 1].id;
    } else {
      // Next module
      const currentModIndex = COURSE_STRUCTURE.modules.findIndex(m => m.id === activeModule.id);
      if (currentModIndex + 1 < COURSE_STRUCTURE.modules.length) {
        const nextMod = COURSE_STRUCTURE.modules[currentModIndex + 1];
        nextModuleId = nextMod.id;
        nextLessonId = nextMod.lessons[0].id;
      }
    }

    if (nextLessonId) {
      setCurrentLesson({ moduleId: nextModuleId, lessonId: nextLessonId });
    } else {
      // Course finished
      setCurrentLesson({ moduleId: 'done', lessonId: 'done' });
    }

    // 3. Update stats
    setTotalHoursLearned(prev => prev + (activeLesson.durationMins / 60));
    
    // 4. Update Activity (record today)
    const todayStr = new Date().toISOString().split('T')[0];
    setActivityData(prev => ({
      ...prev,
      [todayStr]: Math.min((prev[todayStr] || 0) + 1, 4) // Max intensity 4
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
      value: `${completedModulesCount} / ${COURSE_STRUCTURE.modules.length}`,
      trend: "flat",
      trendLabel: "On track",
      colorTheme: "purple"
    },
    {
      icon: Flame,
      label: "Current Streak",
      value: `${streak} Days`,
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
          streak={streak} 
          hoursLearned={Math.round(totalHoursLearned)} 
          dailyGoal="1h" 
        />

        <div className="dash-grid-12">
          
          {activeModule && activeLesson ? (
            <ResumeLearningCard 
              moduleNumber={COURSE_STRUCTURE.modules.findIndex(m => m.id === activeModule.id) + 1}
              progress={currentModuleProgress}
              title={activeLesson.title}
              description={`Continue with module ${activeModule.title}. Master the required skills to unlock the next step.`}
              timeRemaining={timeRemainingInModule}
              lessonsLeft={lessonsLeftInModule}
              onComplete={handleResumeLearning}
            />
          ) : (
             <div className="grid-card col-span-8 primary-card">
              <div className="primary-content" style={{ justifyContent: 'center', alignItems: 'center' }}>
                 <h2>Course Completed! 🎉</h2>
                 <p>You have finished all modules in {COURSE_STRUCTURE.title}.</p>
              </div>
             </div>
          )}

          <div className="grid-card col-span-4 stacked-stats">
            {statsData.map((stat, idx) => (
              <React.Fragment key={idx}>
                <StatCard {...stat} />
                {idx < statsData.length - 1 && <div className="stat-divider"></div>}
              </React.Fragment>
            ))}
          </div>

          <LearningPathTracker steps={pathSteps} />

          <ActivityHeatmap totalHours={totalHoursLearned} activityData={activityData} />

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
