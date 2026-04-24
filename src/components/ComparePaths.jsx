import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Clock } from 'lucide-react';

const paths = [
  {
    title: 'UI/UX Design',
    recommended: true,
    difficulty: 'Beginner Friendly',
    time: '12-16 Weeks',
    skills: ['Figma', 'Wireframing', 'User Research', 'Prototyping'],
    color: '#3b82f6'
  },
  {
    title: 'Web Development',
    recommended: false,
    difficulty: 'Intermediate',
    time: '20-24 Weeks',
    skills: ['React', 'JavaScript', 'Node.js', 'CSS Architecture'],
    color: '#10b981'
  },
  {
    title: 'Data Science',
    recommended: false,
    difficulty: 'Advanced',
    time: '24-28 Weeks',
    skills: ['Python', 'SQL', 'Machine Learning', 'Data Visualization'],
    color: '#f97316'
  }
];

const ComparePaths = () => {
  return (
    <section className="compare-paths-section" style={{ padding: '100px 0', background: 'var(--dash-bg)' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Compare Learning Paths
          </motion.h2>
          <p className="section-subtitle" style={{ color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>
            Find the curriculum that fits your goals, schedule, and current experience level.
          </p>
        </div>

        <div className="compare-grid">
          {paths.map((path, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 120, damping: 14 }}
              className={`compare-card glass-card ${path.recommended ? 'glow-accent' : ''}`}
            >
              {path.recommended && (
                <div className="recommended-badge">
                  <Star size={14} fill="currentColor" /> Highly Recommended
                </div>
              )}
              
              <div className="compare-header" style={{ padding: '32px 32px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>{path.title}</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="meta-row">
                    <span className="meta-label">Difficulty:</span>
                    <span className="meta-value" style={{ color: path.color, fontWeight: '600' }}>{path.difficulty}</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Time to complete:</span>
                    <span className="meta-value" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={14} /> {path.time}
                    </span>
                  </div>
                </div>
              </div>

              <div className="compare-body" style={{ padding: '24px 32px' }}>
                <h4 style={{ fontSize: '14px', textTransform: 'uppercase', color: '#9ca3af', letterSpacing: '1px', marginBottom: '16px' }}>
                  Key Skills You'll Learn
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {path.skills.map((skill, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px' }}>
                      <CheckCircle2 color={path.color} size={18} />
                      {skill}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary" style={{ width: '100%', marginTop: '32px', background: path.color }}>
                  Explore Path
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .compare-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }
        .compare-card {
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .recommended-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #3b82f6;
          color: white;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.5);
          letter-spacing: 0.5px;
        }
        .meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
        }
        .meta-label {
          color: #9ca3af;
        }
      `}</style>
    </section>
  );
};

export default ComparePaths;
