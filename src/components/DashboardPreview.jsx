import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Lock, PlayCircle, BookOpen, Flame, TrendingUp, Clock, Info } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } }
};

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
            See how your journey looks
          </motion.h2>
          <p className="section-subtitle">
            What a real student experience looks like inside the product.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
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
          
          <div className="mockup-content glass-card" style={{ padding: '40px', background: 'var(--bg-main)' }}>
            
            {/* Header Area */}
            <motion.div 
              variants={containerVariants} 
              initial="hidden" 
              whileInView="visible"
              className="dash-header-area" 
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}
            >
              <motion.div variants={itemVariants}>
                <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>Welcome back, Rishita 👋</h3>
                <div style={{ color: '#9ca3af', fontSize: '15px' }}>Path: <span style={{ color: '#60a5fa', fontWeight: '500' }}>UI/UX Design (Beginner)</span></div>
              </motion.div>
              <motion.div variants={itemVariants} className="glass-card-subtle" style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid rgba(249, 115, 22, 0.3)' }}>
                <Flame style={{ color: '#f97316' }} size={24} />
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#f97316' }}>4 Days Streak</span>
              </motion.div>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              variants={containerVariants} 
              initial="hidden" 
              whileInView="visible"
              className="stats-row" 
              style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}
            >
              <motion.div variants={itemVariants} whileHover={{ scale: 1.04 }} className="stat-card glass-card-subtle" style={{ flex: 1, padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ color: '#9ca3af', fontSize: '14px', fontWeight: '500' }}>Progress</span>
                  <TrendingUp size={18} style={{ color: '#3b82f6' }} />
                </div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '12px' }}>65%</div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '65%' }}
                    transition={{ duration: 1.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }} /* Slow In Slow Out */
                    style={{ height: '100%', background: '#3b82f6', borderRadius: '10px' }}
                  ></motion.div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.04 }} className="stat-card glass-card-subtle" style={{ flex: 1, padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ color: '#9ca3af', fontSize: '14px', fontWeight: '500' }}>Modules Completed</span>
                  <BookOpen size={18} style={{ color: '#8b5cf6' }} />
                </div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '4px' }}>5/8</div>
                <div style={{ color: '#9ca3af', fontSize: '13px' }}>3 remaining to finish path</div>
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.04 }} className="stat-card glass-card-subtle" style={{ flex: 1, padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ color: '#9ca3af', fontSize: '14px', fontWeight: '500' }}>Hours Learned</span>
                  <Clock size={18} style={{ color: '#10b981' }} />
                </div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '4px' }}>12h</div>
                <div style={{ color: '#9ca3af', fontSize: '13px' }}>Top 15% of learners</div>
              </motion.div>
            </motion.div>

            {/* Bottom Two Cards */}
            <motion.div 
              variants={containerVariants} 
              initial="hidden" 
              whileInView="visible"
              style={{ display: 'flex', gap: '24px' }}
            >
              <motion.div variants={itemVariants} style={{ flex: 1 }}>
                <div className="preview-roadmap-card glass-card-subtle" style={{ padding: '32px', height: '100%' }}>
                  <h4 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: '600' }}>Learning Path</h4>
                  <div className="stepper-ui" style={{ paddingLeft: '16px', borderLeft: '2px solid rgba(255,255,255,0.05)', marginLeft: '12px' }}>
                    <div className="step completed" style={{ position: 'relative', paddingBottom: '24px' }}>
                      <CheckCircle2 size={24} style={{ color: '#3b82f6', position: 'absolute', left: '-29px', background: 'var(--bg-main)' }} />
                      <div style={{ fontWeight: '600' }}>Design Basics  <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 'normal', marginLeft: '6px' }}>(Completed)</span></div>
                    </div>
                    <div className="step completed" style={{ position: 'relative', paddingBottom: '24px' }}>
                      <CheckCircle2 size={24} style={{ color: '#3b82f6', position: 'absolute', left: '-29px', background: 'var(--bg-main)' }} />
                      <div style={{ fontWeight: '600' }}>Color Theory <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 'normal', marginLeft: '6px' }}>(Completed)</span></div>
                    </div>
                    <div className="step active" style={{ position: 'relative', paddingBottom: '24px' }}>
                      <div style={{ 
                        width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.2)', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa',
                        position: 'absolute', left: '-29px', zIndex: 2
                      }}>
                        <Circle size={14} />
                      </div>
                      <div style={{ fontWeight: '600', color: '#fff' }}>Wireframing <span style={{ fontSize: '12px', color: '#60a5fa', fontWeight: 'normal', marginLeft: '6px' }}>(Current)</span></div>
                    </div>
                    <div className="step locked" style={{ position: 'relative' }}>
                      <Lock size={20} style={{ color: '#6b7280', position: 'absolute', left: '-27px', background: 'var(--bg-main)' }} />
                      <div style={{ color: '#6b7280' }}>Portfolio Project <span style={{ fontSize: '12px', fontWeight: 'normal', marginLeft: '6px' }}>(Locked)</span></div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="continue-learning-card" style={{ 
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(17, 24, 39, 0.6))',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  padding: '40px 32px',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  boxShadow: 'inset 0 0 40px rgba(59, 130, 246, 0.05)',
                  height: '100%'
                }}>
                  <div style={{ padding: '6px 12px', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', fontSize: '12px', fontWeight: '700', borderRadius: '100px', marginBottom: '16px' }}>UP NEXT</div>
                  <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>Wireframing Basics</h3>
                  <p style={{ color: '#9ca3af', marginBottom: '32px', lineHeight: '1.5' }}>Pick up where you left off and start mapping out structural UI components.</p>
                  
                  <RouterLink to="/dashboard" style={{ textDecoration: 'none', width: '100%', marginTop: 'auto' }}>
                    <motion.button 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="resume-btn" style={{ 
                        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '16px', 
                        background: '#3b82f6', color: 'white', borderRadius: '12px', fontWeight: 'bold', 
                        border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4)'
                      }}
                    >
                      <PlayCircle size={20} />
                      Resume Learning
                    </motion.button>
                  </RouterLink>
                  
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#9ca3af', fontSize: '13px', marginTop: '20px', background: 'rgba(255,255,255,0.03)', padding: '10px 16px', borderRadius: '8px', width: '100%' }}>
                    <Info size={16} style={{ color: '#60a5fa' }} />
                    <span style={{ fontStyle: 'italic' }}>You’re 1 step away from completing this module</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
          </div>
        </motion.div>
      </div>

      <style>{`
        .dashboard-preview-section {
          background: var(--bg-card);
          padding: 100px 0;
        }
        .preview-mockup-wrapper {
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #0f172a;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6);
          overflow: hidden;
          margin-bottom: 20px;
        }
        .mockup-header {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.03);
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
        
        @media (max-width: 768px) {
          .stats-row {
            flex-direction: column;
          }
          .dash-header-area {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default DashboardPreview;
