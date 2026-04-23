import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Flame, MapPin } from 'lucide-react';

const badges = [
  { id: 1, title: 'First Module', icon: <BookOpen size={24} />, color: 'blue', desc: 'Complete your first lesson' },
  { id: 2, title: '3-Day Streak', icon: <Flame size={24} />, color: 'orange', desc: 'Learn for 3 consecutive days' },
  { id: 3, title: 'Halfway There', icon: <MapPin size={24} />, color: 'purple', desc: 'Reach 50% course progress' }
];

const Achievements = () => {
  return (
    <section className="achievements-section" style={{ padding: '100px 0', background: 'var(--bg-main)' }}>
      <div className="container" style={{ maxWidth: '1000px', textAlign: 'center' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title"
          style={{ marginBottom: '40px' }}
        >
          Your Achievements
        </motion.h2>

        <div className="badges-grid" style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
          {badges.map((badge, i) => (
            <motion.div 
              key={badge.id}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ y: -8 }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              className="badge-wrapper glass-card-subtle glow-accent"
              style={{ width: '240px', padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div className={"badge-icon-lg " + badge.color + "-glow"} style={{ 
                width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                {badge.icon}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{badge.title}</h3>
              <p style={{ color: '#9ca3af', fontSize: '13px' }}>{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .blue-glow { color: #3b82f6; box-shadow: inset 0 0 30px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.4); border-color: rgba(59, 130, 246, 0.5) !important; }
        .orange-glow { color: #f97316; box-shadow: inset 0 0 30px rgba(249, 115, 22, 0.2), 0 0 20px rgba(249, 115, 22, 0.4); border-color: rgba(249, 115, 22, 0.5) !important; }
        .purple-glow { color: #a855f7; box-shadow: inset 0 0 30px rgba(168, 85, 247, 0.2), 0 0 20px rgba(168, 85, 247, 0.4); border-color: rgba(168, 85, 247, 0.5) !important; }
      `}</style>
    </section>
  );
};

export default Achievements;
