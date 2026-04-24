import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, IndianRupee, Layers, Layout, Code, LineChart } from 'lucide-react';

const outcomes = [
  {
    title: 'UI/UX Designer',
    icon: <Layout className="text-blue" size={24} />,
    salary: '₹6–15 LPA',
    desc: 'Design beautiful, functional user interfaces and craft engaging user experiences for apps and websites.',
  },
  {
    title: 'Product Designer',
    icon: <Layers className="text-purple" size={24} />,
    salary: '₹8–18 LPA',
    desc: 'Own the entire design process from user research to final execution, shaping the product strategy.',
  },
  {
    title: 'Web Developer',
    icon: <Code className="text-green" size={24} />,
    salary: '₹5–14 LPA',
    desc: 'Build dynamic, performant web applications using modern JavaScript frameworks and robust backends.',
  },
  {
    title: 'Data Analyst',
    icon: <LineChart className="text-orange" size={24} />,
    salary: '₹7–16 LPA',
    desc: 'Interpret complex data sets to help companies make actionable, data-driven business decisions.',
  }
];

const CareerOutcomes = () => {
  return (
    <section className="career-outcomes-section" style={{ padding: '100px 0', background: 'var(--bg-main)' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Where This Path Can Take You
          </motion.h2>
          <p className="section-subtitle" style={{ color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>
            Our curriculums are designed to land you high-paying, future-proof roles in the tech industry.
          </p>
        </div>

        <div className="outcomes-grid">
          {outcomes.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 120, damping: 14 }}
              className="outcome-card glass-card hover-glow"
            >
              <div className="icon-wrap" style={{ 
                width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                {item.desc}
              </p>
              <div className="salary-tag">
                <IndianRupee size={16} />
                <span>Avg. Salary: {item.salary}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .outcomes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .hover-glow {
          padding: 32px;
          cursor: default;
        }
        .salary-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(59, 130, 246, 0.1);
          color: #60a5fa;
          border-radius: 100px;
          font-weight: 600;
          font-size: 13px;
        }
      `}</style>
    </section>
  );
};

export default CareerOutcomes;
