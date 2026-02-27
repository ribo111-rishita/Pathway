import React from 'react';
import { BookOpen, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
    const cards = [
        {
            icon: <BookOpen size={32} className="feature-card-icon" />,
            title: "Curated Paths",
            description: "We eliminate the noise. Get hand-picked, high-quality resources structured in a logical sequence so you never wonder what to learn next."
        },
        {
            icon: <TrendingUp size={32} className="feature-card-icon" />,
            title: "Track Progress",
            description: "Visualize your growth. Interactive dashboards keep you motivated by showing exactly how far you've come and what's left to master."
        },
        {
            icon: <Users size={32} className="feature-card-icon" />,
            title: "Community Support",
            description: "Never learn alone. Join dedicated cohorts, participate in study groups, and get block-breaking help from peers and mentors."
        }
    ];

    return (
        <section id="features" className="features-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Everything you need to master any subject</h2>
                    <p className="section-subtitle">
                        A comprehensive toolset designed around exactly how humans learn best. No fluff, just results.
                    </p>
                </motion.div>

                <div className="features-grid">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                        >
                            <div className="feature-icon-wrapper">
                                {card.icon}
                            </div>
                            <h3 className="feature-card-title">{card.title}</h3>
                            <p className="feature-card-desc">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .features-section {
          background-color: var(--bg-main);
          padding: 120px 0;
          position: relative;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 64px;
        }

        .feature-card {
          background-color: var(--bg-card);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 40px;
          transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          background-color: var(--bg-card-hover);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .feature-icon-wrapper {
          width: 64px;
          height: 64px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          color: var(--accent-blue);
        }

        .feature-card-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
          color: white;
        }

        .feature-card-desc {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
        </section>
    );
};

export default Features;
