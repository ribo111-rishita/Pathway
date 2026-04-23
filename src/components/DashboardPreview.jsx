import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Lock, PlayCircle, BookOpen, Flame, TrendingUp } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const DashboardPreview = () => {
  return (
    <section id="preview" className="dashboard-preview-section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            See your learning journey in action
          </motion.h2>
          <p className="section-subtitle">
            Experience a premium student dashboard that keeps track of your progress and guides you step by step.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="preview-mockup-wrapper"
        >
          <div className="mockup-header">
            <div className="mac-dots">
              <span className="dot dot-close"></span>
              <span className="dot dot-min"></span>
              <span className="dot dot-max"></span>
            </div>
            <div className="mockup-title">Pathway Dashboard</div>
          </div>
          
          <div className="mockup-content glass-card" style={{ padding: '32px' }}>
            <div className="stats-row" style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
              <div className="stat-card glass-card-subtle" style={{ flex: 1, padding: '20px' }}>
                <TrendingUp size={20} style={{ color: '#3b82f6', marginBottom: '8px' }} />
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>65%</div>
                <div style={{ color: '#9ca3af', fontSize: '13px' }}>Course Progress</div>
              </div>
              <div className="stat-card glass-card-subtle" style={{ flex: 1, padding: '20px' }}>
                <BookOpen size={20} style={{ color: '#8b5cf6', marginBottom: '8px' }} />
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>5/8</div>
                <div style={{ color: '#9ca3af', fontSize: '13px' }}>Modules Completed</div>
              </div>
              <div className="stat-card glass-card-subtle" style={{ flex: 1, padding: '20px' }}>
                <Flame size={20} style={{ color: '#f97316', marginBottom: '8px' }} />
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>4 Days</div>
                <div style={{ color: '#9ca3af', fontSize: '13px' }}>Current Streak</div>
              </div>
            </div>

            <div className="preview-roadmap-card glass-card-subtle" style={{ padding: '24px', display: 'flex', gap: '24px' }}>
              <div style={{ flex: 2 }}>
                <h4 style={{ marginBottom: '16px', fontSize: '18px' }}>Learning Path</h4>
                <div className="stepper-ui" style={{ paddingLeft: '16px', borderLeft: '2px solid rgba(255,255,255,0.05)', marginLeft: '12px' }}>
                  <div className="step completed" style={{ position: 'relative', paddingBottom: '20px' }}>
                    <CheckCircle2 size={24} style={{ color: '#3b82f6', position: 'absolute', left: '-29px', background: '#0b0f19' }} />
                    <div style={{ fontWeight: '600' }}>Design Basics</div>
                  </div>
                  <div className="step completed" style={{ position: 'relative', paddingBottom: '20px' }}>
                    <CheckCircle2 size={24} style={{ color: '#3b82f6', position: 'absolute', left: '-29px', background: '#0b0f19' }} />
                    <div style={{ fontWeight: '600' }}>Color Theory</div>
                  </div>
                  <div className="step active" style={{ position: 'relative', paddingBottom: '20px' }}>
                    <div style={{ 
                      width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.2)', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa',
                      position: 'absolute', left: '-29px', zIndex: 2
                    }}>
                      <Circle size={14} />
                    </div>
                    <div style={{ fontWeight: '600', color: '#fff' }}>Wireframing (In Progress)</div>
                  </div>
                  <div className="step locked" style={{ position: 'relative' }}>
                    <Lock size={20} style={{ color: '#6b7280', position: 'absolute', left: '-27px', background: '#0b0f19' }} />
                    <div style={{ color: '#6b7280' }}>Portfolio Project</div>
                  </div>
                </div>
              </div>
              
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <RouterLink to="/dashboard" style={{ textDecoration: 'none' }}>
                  <button className="resume-btn" style={{ 
                    display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 24px', 
                    background: '#3b82f6', color: 'white', borderRadius: '100px', fontWeight: 'bold', 
                    border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4)'
                  }}>
                    <PlayCircle size={20} />
                    Resume Learning
                  </button>
                </RouterLink>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>

      <style>{`
        .dashboard-preview-section {
          background: radial-gradient(circle at right, rgba(17, 24, 39, 0.8) 0%, var(--bg-main) 100%);
        }
        .preview-mockup-wrapper {
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #0f172a;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          margin-bottom: 40px;
        }
        .mockup-header {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .mac-dots {
          display: flex;
          gap: 8px;
        }
        .dot {
          width: 12px; height: 12px; border-radius: 50%;
        }
        .dot-close { background: #ff5f56; }
        .dot-min { background: #ffbd2e; }
        .dot-max { background: #27c93f; }
        .mockup-title {
          flex: 1;
          text-align: center;
          font-size: 13px;
          color: #9ca3af;
          font-weight: 500;
        }
        .glass-card-subtle {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          backdrop-filter: blur(8px);
        }
      `}</style>
    </section>
  );
};

export default DashboardPreview;
