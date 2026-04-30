import React from 'react';
import { 
  BookOpen, Clock, Flame, Trophy, PlayCircle, CheckCircle2, Circle, Lock, TrendingUp, ChevronRight, Target
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <main className="dash-main-dense">
        
        {/* Compact Header */}
        <header className="dash-header-compact">
          <div className="header-greeting">
            <h1>Welcome back, User</h1>
            <p>UI/UX Design Mastery</p>
          </div>
          
          <div className="header-metrics">
            <div className="metric-pill positive-glow">
              <Flame size={16} />
              <span>4-Day Streak</span>
            </div>
            <div className="metric-pill neutral-solid">
              <Clock size={16} />
              <span>12h Learned</span>
            </div>
            <div className="metric-pill accent-solid">
              <Target size={16} />
              <span>Daily Goal: 1h</span>
            </div>
          </div>
        </header>

        {/* 12-Column Grid Area */}
        <div className="dash-grid-12">
          
          {/* Dominant Resume Card (Span 8) */}
          <div className="grid-card col-span-8 primary-card">
            <div className="card-layer-bg"></div>
            <div className="primary-content">
              <div className="primary-header">
                <span className="badge-neon">CONTINUE MODULE 6</span>
                <div className="primary-progress-text">30% Complete</div>
              </div>
              <div className="primary-body">
                <h2>Wireframing Basics & Auto Layout</h2>
                <p>Pick up where you left off. Learn how to map out user flows effectively and master Figma's advanced auto layout features.</p>
              </div>
              
              <div className="primary-actions">
                <button className="btn-vibrant">
                  <PlayCircle size={20} className="fill-icon" />
                  Resume Learning
                </button>
                <div className="action-meta">
                  <div className="meta-item"><Clock size={14}/> <span>45 mins remaining</span></div>
                  <div className="meta-item"><BookOpen size={14}/> <span>2 lessons left</span></div>
                </div>
              </div>
              
              <div className="progress-bar-thick">
                <div className="progress-thick-fill" style={{width: '30%'}}></div>
              </div>
            </div>
          </div>

          {/* Quick Stats Block (Span 4) */}
          <div className="grid-card col-span-4 stacked-stats">
            <div className="stat-row">
              <div className="stat-icon-wrap bg-blue-dim"><TrendingUp size={18} className="text-blue" /></div>
              <div className="stat-details">
                <span className="stat-label">Course Progress</span>
                <span className="stat-val">65%</span>
              </div>
              <div className="stat-trend trend-up">+5%</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-row">
              <div className="stat-icon-wrap bg-purple-dim"><BookOpen size={18} className="text-purple" /></div>
              <div className="stat-details">
                <span className="stat-label">Modules Completed</span>
                <span className="stat-val">5 / 8</span>
              </div>
              <div className="stat-trend trend-flat">On track</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-row">
              <div className="stat-icon-wrap bg-orange-dim"><Flame size={18} className="text-orange" /></div>
              <div className="stat-details">
                <span className="stat-label">Current Streak</span>
                <span className="stat-val">4 Days</span>
              </div>
              <div className="stat-trend trend-down">Needs 1h</div>
            </div>
          </div>

          {/* Dense Learning Path (Span 7) */}
          <div className="grid-card col-span-7 secondary-card path-tracker">
            <div className="card-header-flex">
              <h3>Learning Path</h3>
              <button className="btn-text">View full map <ChevronRight size={16}/></button>
            </div>
            
            <div className="horizontal-stepper">
              <div className="step-hz completed">
                <div className="hz-icon"><CheckCircle2 size={16} /></div>
                <span className="hz-label">Basics</span>
                <div className="hz-line"></div>
              </div>
              <div className="step-hz completed">
                <div className="hz-icon"><CheckCircle2 size={16} /></div>
                <span className="hz-label">Color</span>
                <div className="hz-line"></div>
              </div>
              <div className="step-hz active">
                <div className="hz-icon pulse"><Circle size={16} /></div>
                <span className="hz-label current">Wireframes</span>
                <div className="hz-line pending"></div>
              </div>
              <div className="step-hz locked">
                <div className="hz-icon"><Lock size={14} /></div>
                <span className="hz-label">Prototypes</span>
                <div className="hz-line pending"></div>
              </div>
              <div className="step-hz locked">
                <div className="hz-icon"><Lock size={14} /></div>
                <span className="hz-label">Portfolio</span>
              </div>
            </div>
          </div>

          {/* Heatmap (Span 5) */}
          <div className="grid-card col-span-5 secondary-card">
            <div className="card-header-flex">
              <h3>Activity Heatmap</h3>
              <span className="text-dim text-sm font-bold">42h Total</span>
            </div>
            <div className="heatmap-dense">
              <div className="heatmap-labels-y">
                <span>M</span><span>W</span><span>F</span>
              </div>
              <div className="heatmap-grid-inner">
                {Array.from({ length: 15 }).map((_, col) => (
                  <div className="heat-col" key={col}>
                    {Array.from({ length: 7 }).map((_, row) => {
                      const isActive = Math.random() > 0.5;
                      const intensity = Math.floor(Math.random() * 4) + 1;
                      const hours = isActive ? (intensity * 1.5).toFixed(1) : 0;
                      return (
                        <div 
                          key={row} 
                          className={`heat-cell-sm ${isActive ? 'lvl-' + intensity : 'lvl-0'}`}
                          title={isActive ? `${hours} hrs` : '0 hrs'}
                        ></div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

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
