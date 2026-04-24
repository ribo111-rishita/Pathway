import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'UI Design Fundamentals', percent: 60, color: 'linear-gradient(90deg, #3b82f6, #60a5fa)' },
  { name: 'User Research & Testing', percent: 30, color: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' },
  { name: 'Interactive Prototyping', percent: 10, color: 'linear-gradient(90deg, #10b981, #34d399)' }
];

const SkillsProgress = () => {
  return (
    <section className="skills-progress-section" style={{ padding: '100px 0', background: 'var(--dash-bg)' }}>
      <div className="container" style={{ maxWidth: '1000px', display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
        
        <div className="skills-text" style={{ flex: 1, minWidth: '300px' }}>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="section-title"
          >
            Skills You’re Building
          </motion.h2>
          <p className="section-subtitle" style={{ color: '#9ca3af', marginBottom: '24px', marginLeft: 0 }}>
            Our structured curriculum breaks down complex competencies into bite-sized actionable metrics. Watch your mastery grow in real time.
          </p>
        </div>

        <div className="skills-bars glass-card" style={{ flex: 1.5, minWidth: '400px', padding: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {skills.map((skill, i) => (
              <div key={i} className="skill-row">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontWeight: '600', fontSize: '15px' }}>{skill.name}</span>
                  <span style={{ color: '#9ca3af', fontSize: '14px', fontWeight: 'bold' }}>{skill.percent}%</span>
                </div>
                <div style={{ height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.percent + '%' }}
                    transition={{ duration: 1.5, delay: 0.2 + (i * 0.2), ease: [0.4, 0, 0.2, 1] }}
                    style={{ height: '100%', background: skill.color, borderRadius: '10px' }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsProgress;
