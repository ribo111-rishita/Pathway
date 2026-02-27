import React from 'react';
import { Target, Compass, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            icon: <Target size={28} />,
            title: "Choose Your Goal",
            description: "Tell us exactly what you want to master. We'll assess your current level and identify the critical skills you need to reach your target."
        },
        {
            number: "02",
            icon: <Compass size={28} />,
            title: "Follow the Path",
            description: "Get a personalized, step-by-step curriculum. Complete carefully sequenced modules, projects, and assessments designed for optimal retention."
        },
        {
            number: "03",
            icon: <Award size={28} />,
            title: "Achieve Mastery",
            description: "Track your real-world progress. Validate your new skills with hands-on projects and earn industry-recognized certifications."
        }
    ];

    return (
        <section id="how-it-works" className="how-it-works-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">How it works</h2>
                    <p className="section-subtitle">
                        A simple, scientifically-backed framework to take you from beginner to expert.
                    </p>
                </motion.div>

                <div className="steps-container">
                    <div className="steps-line"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="step-item"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 * index }}
                        >
                            <div className="step-number-container">
                                <span className="step-number">{step.number}</span>
                                <div className="step-point"></div>
                            </div>

                            <div className="step-content">
                                <div className="step-icon-wrapper">
                                    {step.icon}
                                </div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .how-it-works-section {
          background-color: var(--bg-card); /* Slightly different background to separate sections */
          padding: 120px 0;
        }

        .steps-container {
          position: relative;
          max-width: 900px;
          margin: 64px auto 0;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .steps-line {
          position: absolute;
          left: 24px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-blue) 0%, rgba(59, 130, 246, 0.1) 100%);
          z-index: 1;
        }

        .step-item {
          display: flex;
          gap: 48px;
          position: relative;
          z-index: 2;
        }

        .step-number-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          width: 50px;
          flex-shrink: 0;
        }

        .step-point {
          width: 16px;
          height: 16px;
          background-color: var(--bg-card);
          border: 4px solid var(--accent-blue);
          border-radius: 50%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 10px;
          box-shadow: 0 0 0 6px rgba(11, 15, 25, 0.8);
        }

        .step-number {
          font-size: 14px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.3);
          margin-right: 48px; /* Push to left of line visually */
          position: absolute;
          right: 32px;
          top: 6px;
        }

        .step-content {
          background: rgba(11, 15, 25, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 40px;
          border-radius: 20px;
          flex-grow: 1;
          transition: border-color 0.3s ease;
        }
        
        .step-content:hover {
          border-color: rgba(255, 255, 255, 0.1);
        }

        .step-icon-wrapper {
          color: var(--accent-blue);
          margin-bottom: 20px;
        }

        .step-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
          color: white;
        }

        .step-desc {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .steps-line {
            left: 16px;
          }
          
          .step-item {
            gap: 24px;
          }
          
          .step-number-container {
            width: 32px;
          }
          
          .step-number {
            display: none;
          }
          
          .step-content {
            padding: 24px;
          }
        }
      `}</style>
        </section>
    );
};

export default HowItWorks;
