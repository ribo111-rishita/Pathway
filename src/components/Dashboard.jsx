import React from 'react';
import { 
  BookOpen, 
  Clock, 
  Flame, 
  Trophy, 
  PlayCircle, 
  CheckCircle2, 
  Circle, 
  Lock,
  Bell,
  Search,
  Settings,
  LayoutDashboard,
  Map,
  TrendingUp,
  User,
  Activity
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* 1. Top Navbar */}
      <nav className="dash-nav">
        <div className="dash-nav-left">
          <div className="dash-logo">
            <div className="logo-icon"></div>
            <span>Pathway</span>
          </div>
          <div className="dash-links">
            <a href="#" className="active"><LayoutDashboard size={18}/> Dashboard</a>
            <a href="#"><Map size={18}/> Paths</a>
            <a href="#"><TrendingUp size={18}/> Progress</a>
            <a href="#"><Settings size={18}/> Settings</a>
          </div>
        </div>
        <div className="dash-nav-right">
          <div className="search-bar">
            <Search size={16} />
            <input type="text" placeholder="Search resources..." />
          </div>
          <button className="icon-btn"><Bell size={20} /></button>
          <div className="profile-avatar">
            <img src="https://i.pravatar.cc/150?img=47" alt="User Avatar" />
          </div>
        </div>
      </nav>

      <main className="dash-main">
        {/* 2. Welcome Section */}
        <section className="welcome-section">
          <div className="welcome-text">
            <h1>Welcome back, Alex 👋</h1>
            <p>Continue your journey to mastering UI/UX Design</p>
          </div>
          <div className="streak-badge glass-card-subtle">
            <Flame className="streak-icon" size={24} />
            <div className="streak-info">
              <span className="streak-count">4-Day Streak</span>
              <span className="streak-sub">Keep it up!</span>
            </div>
          </div>
        </section>

        {/* 3. Stats Cards */}
        <section className="stats-grid">
          <div className="stat-card glass-card">
            <div className="stat-header">
              <span className="stat-title">Course Progress</span>
              <TrendingUp className="stat-icon text-blue" size={20} />
            </div>
            <div className="stat-value">65%</div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill slide-in" style={{ width: '65%' }}></div>
            </div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-header">
              <span className="stat-title">Modules Completed</span>
              <BookOpen className="stat-icon text-purple" size={20} />
            </div>
            <div className="stat-value">5<span className="stat-total">/8</span></div>
            <div className="stat-desc">2 this week</div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-header">
              <span className="stat-title">Hours Learned</span>
              <Clock className="stat-icon text-green" size={20} />
            </div>
            <div className="stat-value">12h</div>
            <div className="stat-desc">+2.5h this week</div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-header">
              <span className="stat-title">Current Streak</span>
              <Flame className="stat-icon text-orange" size={20} />
            </div>
            <div className="stat-value">4 days</div>
            <div className="stat-desc">Personal best: 14</div>
          </div>
        </section>

        <div className="dashboard-content-grid">
          <div className="content-left">
            {/* 4. Continue Learning Card */}
            <div className="continue-card glass-card glow-accent">
              <div className="continue-content">
                <span className="continue-label">UP NEXT</span>
                <h3>Wireframing Basics</h3>
                <p>Pick up where you left off. Learn how to map out user flows effectively.</p>
                <div className="continue-meta">
                  <span><Clock size={14}/> 45 mins</span>
                  <span><BookOpen size={14}/> 3 lessons</span>
                </div>
              </div>
              <button className="resume-btn">
                <PlayCircle size={20} />
                Resume Learning
              </button>
            </div>

            {/* 5. Roadmap / Learning Path Tracker */}
            <div className="roadmap-section glass-card">
              <div className="section-head">
                <h3>UI/UX Mastery Path</h3>
                <button className="view-all">View full path</button>
              </div>
              
              <div className="stepper-ui">
                <div className="step completed">
                  <div className="step-icon"><CheckCircle2 size={24} /></div>
                  <div className="step-content">
                    <h4>Design Basics</h4>
                    <p>Figma introduction and layout grids</p>
                  </div>
                </div>
                
                <div className="step completed">
                  <div className="step-icon"><CheckCircle2 size={24} /></div>
                  <div className="step-content">
                    <h4>Color Theory & Typography</h4>
                    <p>Creating emotional connections through style</p>
                  </div>
                </div>

                <div className="step active">
                  <div className="step-icon step-pulse"><Circle size={24} /></div>
                  <div className="step-content">
                    <h4>Wireframing Basics</h4>
                    <p>Layouts, spacing, and structural design</p>
                    <div className="step-progress-mini">
                      <div className="step-progress-fill" style={{width: '30%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="step locked">
                  <div className="step-icon"><Lock size={20} /></div>
                  <div className="step-content">
                    <h4>Portfolio Project</h4>
                    <p>Complete the first 3 modules to unlock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-right">
            {/* 7. Smart Suggestions Card */}
            <div className="suggestion-card glass-card">
              <div className="suggestion-icon-wrap">
                <Trophy size={20} className="text-yellow" />
              </div>
              <div className="suggestion-text">
                <p>You're doing great! Complete <strong>1 more module</strong> this week to stay on track for your monthly goal.</p>
              </div>
            </div>

            {/* 6. Activity / Heatmap Section */}
            <div className="activity-section glass-card">
              <div className="section-head">
                <h3>Learning Activity</h3>
                <span className="activity-total">42 hours</span>
              </div>
              <div className="heatmap-container">
                {/* Simulated Heatmap Grid */}
                {Array.from({ length: 7 }).map((_, colIndex) => (
                  <div className="heatmap-col" key={colIndex}>
                    {Array.from({ length: 5 }).map((_, rowIndex) => {
                      const isActive = Math.random() > 0.6;
                      const intensity = Math.floor(Math.random() * 4) + 1;
                      return (
                        <div 
                          key={rowIndex} 
                          className={`heat-cell ${isActive ? 'heat-level-' + intensity : 'heat-empty'}`}
                        ></div>
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="heatmap-legend">
                <span>Less</span>
                <div className="legend-colors">
                  <div className="heat-cell heat-empty"></div>
                  <div className="heat-cell heat-level-1"></div>
                  <div className="heat-cell heat-level-2"></div>
                  <div className="heat-cell heat-level-3"></div>
                  <div className="heat-cell heat-level-4"></div>
                </div>
                <span>More</span>
              </div>
            </div>

            {/* 8. Achievements Section */}
            <div className="achievements-section glass-card">
              <div className="section-head">
                <h3>Recent Achievements</h3>
              </div>
              <div className="badges-grid">
                <div className="badge-item">
                  <div className="badge-icon badge-blue">
                    <BookOpen size={20} />
                  </div>
                  <span className="badge-label">First Module</span>
                </div>
                <div className="badge-item">
                  <div className="badge-icon badge-orange">
                    <Flame size={20} />
                  </div>
                  <span className="badge-label">3-Day Streak</span>
                </div>
                <div className="badge-item">
                  <div className="badge-icon badge-green">
                    <Activity size={20} />
                  </div>
                  <span className="badge-label">Quick Learner</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
