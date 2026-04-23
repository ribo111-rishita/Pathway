import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Settings, Award } from 'lucide-react';

const weeks = [
  { week: 'Week 1', title: 'Basics & Fundamentals', desc: 'Understanding the core principles and setting up your environment.', icon: <BookOpen size={20}/> },
  { week: 'Week 2', title: 'Practice + Concepts', desc: 'Working through guided exercises to build muscle memory.', icon: <Target size={20}/> },
  { week: 'Week 3', title: 'Intermediate Skills', desc: 'Tackling complex problems and applying advanced patterns.', icon: <Settings size={20}/> },
  { week: 'Week 4', title: 'Final Project', desc: 'Building a full portfolio piece from scratch to demonstrate mastery.', icon: <Award size={20}/> }
];

const WeeklyPlan = () => {
  return (
    <section className="weekly-plan-section" style={{ padding: '100px 0', background: 'var(--dash-bg)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Your Weekly Plan
          </motion.h2>
          <p className="section-subtitle" style={{ color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>
            Follow a proven weekly structure that balances learning theory with practical execution to optimize retention.
          </p>
        </div>

        <div className="timeline" style={{ position: 'relative', paddingLeft: '40px' }}>
          <div className="timeline-line" style={{ 
            position: 'absolute', top: '0', bottom: '0', left: '20px', 
            width: '2px', background: 'rgba(255,255,255,0.05)', marginLeft: '-1px' 
          }}></div>

          {weeks.map((week, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="timeline-item" style={{ position: 'relative', marginBottom: '40px' }}
            >
              <div style={{ 
                position: 'absolute', width: '40px', height: '40px', 
                background: '#0b0f19', borderRadius: '50%', display: 'flex', alignItems: 'center', 
                justifyContent: 'center', border: '2px solid rgba(59, 130, 246, 0.5)', color: '#60a5fa',
                zIndex: 2, transform: 'translateX(-50%)', left: '-20px'
              }}>
                {week.icon}
              </div>
              
              <div className="glass-card" style={{ padding: '24px 32px', marginLeft: '16px' }}>
                <div style={{ color: '#60a5fa', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  {week.week}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>{week.title}</h3>
                <p style={{ color: '#9ca3af', fontSize: '15px' }}>{week.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyPlan;
