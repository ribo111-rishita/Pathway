import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Loader2, ArrowRight } from 'lucide-react';

const TimeSelector = () => {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const options = [
    { value: 1, label: '1 hr/day', est: 'over 6 months' },
    { value: 2, label: '2 hrs/day', est: 'under 3 months' },
    { value: 4, label: '4 hrs/day', est: 'ready in 6 weeks' }
  ];

  const handleSelect = (opt) => {
    setSelected(opt.value);
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setLoading(false);
      setResult(opt);
    }, 1200);
  };

  return (
    <section className="time-selector-section" style={{ padding: '100px 0', background: 'var(--bg-main)' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          How much time can you commit?
        </motion.h2>
        <p className="section-subtitle" style={{ color: '#9ca3af', marginBottom: '40px' }}>
          Select your daily availability to instantly calculate your personal completion timeline.
        </p>

        <div className="time-options" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt)}
              className={`time-btn ${selected === opt.value ? 'active' : ''}`}
            >
              <Calendar size={18} />
              {opt.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {loading && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ padding: '40px', color: '#60a5fa', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}
            >
              <Loader2 className="spin" size={32} />
              <p>Calculating personalized timeline...</p>
            </motion.div>
          )}

          {result && !loading && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card glow-accent result-card"
            >
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>
                  You will be career-ready <span style={{ color: '#60a5fa' }}>{result.est}</span>.
                </h3>
                <p style={{ color: '#9ca3af', marginBottom: '24px' }}>
                  Committing {result.value} hour{result.value > 1 ? 's' : ''} a day ensures you maintain focus without burning out.
                </p>
                <button className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Start Your Plan <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <style>{`
        .time-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: white;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        .time-btn:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }
        .time-btn.active {
          background: #3b82f6;
          border-color: #60a5fa;
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
        }
        .result-card {
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
};

export default TimeSelector;
