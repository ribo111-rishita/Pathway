import React, { useState, useEffect } from 'react';
import { Code, Database, Layout, Cpu, CheckCircle, Circle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const learningData = {
    "Web Development": {
        icon: <Code size={28} />,
        description: "Build modern applications.",
        levels: {
            "Beginner": [
                { id: 1, title: "HTML5 & CSS3 Fundamentals", desc: "Learn the core building blocks of the web." },
                { id: 2, title: "JavaScript Basics", desc: "Add interactivity and learn programming concepts." },
                { id: 3, title: "Responsive Web Design", desc: "Make your websites look great on any device." },
                { id: 4, title: "Portfolio Project", desc: "Build a complete, responsive personal portfolio." }
            ],
            "Intermediate": [
                { id: 1, title: "Modern JavaScript (ES6+)", desc: "Master advanced JS concepts and syntax." },
                { id: 2, title: "React.js Ecosystem", desc: "Build dynamic UIs with components and hooks." },
                { id: 3, title: "API Integration", desc: "Connect frontend to backend services and APIs." },
                { id: 4, title: "Dynamic Web App Project", desc: "Create a fully functional data-driven application." }
            ],
            "Advanced": [
                { id: 1, title: "Full-Stack with Node.js", desc: "Build an Express server, handle routing & auth." },
                { id: 2, title: "Database Architecture", desc: "Design and interact with MongoDB or PostgreSQL." },
                { id: 3, title: "Performance & Security", desc: "Optimize your app for speed and secure it." },
                { id: 4, title: "Enterprise Capstone", desc: "Architect and build a scalable full-stack app." }
            ]
        }
    },
    "Data Science": {
        icon: <Database size={28} />,
        description: "Extract insights from data.",
        levels: {
            "Beginner": [
                { id: 1, title: "Python for Data Analytics", desc: "Learn Python basics tailored for data." },
                { id: 2, title: "Data Manipulation (Pandas)", desc: "Clean, filter, and transform datasets." },
                { id: 3, title: "Data Visualization", desc: "Create compelling charts with Matplotlib/Seaborn." },
                { id: 4, title: "Exploratory Data Analysis", desc: "Perform a complete EDA on a dataset." }
            ],
            "Intermediate": [
                { id: 1, title: "Statistical Foundations", desc: "Learn probability, distributions, hypothesis testing." },
                { id: 2, title: "SQL & Databases", desc: "Query relational databases and complex joins." },
                { id: 3, title: "Basic Machine Learning", desc: "Implement models using Scikit-Learn." },
                { id: 4, title: "Predictive Analytics Project", desc: "Build a model to predict housing prices." }
            ],
            "Advanced": [
                { id: 1, title: "Deep Learning Concepts", desc: "Understand neural networks and backpropagation." },
                { id: 2, title: "Natural Language Processing", desc: "Analyze text, sentiment, and topic modeling." },
                { id: 3, title: "Big Data & PySpark", desc: "Handle massive datasets across clusters." },
                { id: 4, title: "Advanced ML Capstone", desc: "Deploy an end-to-end ML pipeline." }
            ]
        }
    },
    "UI/UX Design": {
        icon: <Layout size={28} />,
        description: "Design intuitive user experiences.",
        levels: {
            "Beginner": [
                { id: 1, title: "Design Principles", desc: "Understand color, typography, and hierarchy." },
                { id: 2, title: "Introduction to Figma", desc: "Master the industry-standard tool for UI design." },
                { id: 3, title: "Wireframing & Layouts", desc: "Create structural blueprints for applications." },
                { id: 4, title: "Landing Page Redesign", desc: "Redesign an existing landing page visually." }
            ],
            "Intermediate": [
                { id: 1, title: "User Research & Personas", desc: "Conduct user interviews and define audiences." },
                { id: 2, title: "User Flows & Journey Mapping", desc: "Map out intuitive step-by-step experiences." },
                { id: 3, title: "Interactive Prototyping", desc: "Build high-fidelity prototypes with animations." },
                { id: 4, title: "Mobile App UX Project", desc: "Design a comprehensive mobile app experience." }
            ],
            "Advanced": [
                { id: 1, title: "Design Systems", desc: "Create scalable component libraries." },
                { id: 2, title: "Usability Testing", desc: "Conduct A/B tests and heuristic evaluations." },
                { id: 3, title: "Advanced Micro-interactions", desc: "Design animations that enhance feedback." },
                { id: 4, title: "Enterprise UI Capstone", desc: "Architect UX for a complex SaaS application." }
            ]
        }
    },
    "AI/ML Engineering": {
        icon: <Cpu size={28} />,
        description: "Build intelligent systems.",
        levels: {
            "Beginner": [
                { id: 1, title: "Python & Math for AI", desc: "Learn essential Python, linear algebra, calculus." },
                { id: 2, title: "Machine Learning Basics", desc: "Understand supervised learning and models." },
                { id: 3, title: "Data Preparation", desc: "Master cleaning data for ML algorithms." },
                { id: 4, title: "Classification Project", desc: "Build an AI model to classify images." }
            ],
            "Intermediate": [
                { id: 1, title: "Neural Networks Fundamentals", desc: "Build multi-layer perceptrons from scratch." },
                { id: 2, title: "Computer Vision", desc: "Build systems that can interpret visual data." },
                { id: 3, title: "Sequence Models", desc: "Process time-series and sequential information." },
                { id: 4, title: "Deep Learning Project", desc: "Train a model to generate text or detect objects." }
            ],
            "Advanced": [
                { id: 1, title: "Transformer Architectures", desc: "Understand the tech powering modern LLMs." },
                { id: 2, title: "Generative AI", desc: "Build models creating original images/text." },
                { id: 3, title: "MLOps & Deployment", desc: "Deploy and maintain AI models in production." },
                { id: 4, title: "Advanced LLM Capstone", desc: "Fine-tune an LLM on custom corporate data." }
            ]
        }
    }
};

const HowItWorks = () => {
    const [selectedGoal, setSelectedGoal] = useState("Web Development");
    const [selectedLevel, setSelectedLevel] = useState("Beginner");
    const [completedSteps, setCompletedSteps] = useState([1]); // Default 1st step completed for demo

    // Reset progress to 0 when changing levels/goals just for the demonstration effect
    useEffect(() => {
        setCompletedSteps([]);
        const timer = setTimeout(() => setCompletedSteps([1]), 400); // animate first step in
        return () => clearTimeout(timer);
    }, [selectedGoal, selectedLevel]);

    const currentPath = learningData[selectedGoal].levels[selectedLevel];
    const progressPercentage = (completedSteps.length / currentPath.length) * 100;

    const toggleStep = (stepId) => {
        if (completedSteps.includes(stepId)) {
            setCompletedSteps(completedSteps.filter(id => id !== stepId));
        } else {
            // For roadmap effect, complete everything up to this step
            const newCompleted = [];
            for (let i = 1; i <= stepId; i++) {
                newCompleted.push(i);
            }
            setCompletedSteps(newCompleted);
        }
    };

    const getRecommendation = () => {
        if (selectedLevel === "Beginner") return "Perfect for starting fresh. Focus on building strong foundational skills.";
        if (selectedLevel === "Intermediate") return "Great! You have the basics down. Time to dive into complex frameworks and real-world tools.";
        return "You're ready for mastery. Tackle advanced architectures, performance, and enterprise-level concepts.";
    };

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
                    <h2 className="section-title">Choose Your Goal</h2>
                    <p className="section-subtitle">
                        Select a path, choose your current level, and follow a proven roadmap to mastery.
                    </p>
                </motion.div>

                {/* 1. Interactive Goal Selection Cards */}
                <div className="goals-grid">
                    {Object.keys(learningData).map((goalKey) => (
                        <motion.div
                            key={goalKey}
                            className={`goal-card ${selectedGoal === goalKey ? 'active' : ''}`}
                            onClick={() => setSelectedGoal(goalKey)}
                            whileHover={{ y: -5, scale: 1.04, filter: 'brightness(1.1)' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="goal-icon-wrapper">
                                {learningData[goalKey].icon}
                            </div>
                            <h3 className="goal-title">{goalKey}</h3>
                            <p className="goal-desc">{learningData[goalKey].description}</p>
                            {selectedGoal === goalKey && (
                                <motion.div layoutId="activeGoalIndicator" className="active-indicator" />
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="pathway-content-container">
                    {/* 2. Level Toggle */}
                    <div className="level-controls">
                        <div className="level-toggle">
                            {["Beginner", "Intermediate", "Advanced"].map(level => (
                                <button
                                    key={level}
                                    className={`toggle-btn ${selectedLevel === level ? 'active' : ''}`}
                                    onClick={() => setSelectedLevel(level)}
                                >
                                    {level}
                                    {selectedLevel === level && (
                                        <motion.div layoutId="activeLevelBg" className="toggle-active-bg" />
                                    )}
                                </button>
                            ))}
                        </div>
                        <div className="recommendation-message">
                            <span className="recommendation-badge">✦ Smart Guide</span>
                            <p>{getRecommendation()}</p>
                        </div>
                    </div>

                    {/* 3. Progress Bar Component */}
                    <div className="progress-container">
                        <div className="progress-header">
                            <span className="progress-title">Your Learning Journey</span>
                            <span className="progress-stats">{completedSteps.length} of {currentPath.length} modules completed</span>
                        </div>
                        <div className="progress-track">
                            <motion.div 
                                className="progress-fill"
                                initial={{ width: 0 }}
                                animate={{ width: `${progressPercentage}%` }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                        </div>
                        <p className="progress-hint">Click on a step below to mark it as completed or jump ahead.</p>
                    </div>

                    {/* 4. Dynamic Structured Learning Path / Roadmap */}
                    <div className="roadmap-container">
                        <div className="roadmap-line"></div>
                        <AnimatePresence mode='wait'>
                            <motion.div 
                                key={selectedGoal + selectedLevel}
                                className="roadmap-steps"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4 }}
                            >
                                {currentPath.map((step, index) => {
                                    const isCompleted = completedSteps.includes(step.id);
                                    const isCurrent = completedSteps.length === index;

                                    return (
                                        <div 
                                            key={step.id} 
                                            className={`roadmap-step ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
                                            onClick={() => toggleStep(step.id)}
                                        >
                                            <div className="step-marker">
                                                {isCompleted ? (
                                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="icon-completed">
                                                        <CheckCircle size={24} />
                                                    </motion.div>
                                                ) : isCurrent ? (
                                                    <div className="icon-current">
                                                        <div className="pulse-ring"></div>
                                                        <Circle size={20} fill="currentColor" />
                                                    </div>
                                                ) : (
                                                    <Circle size={20} className="icon-undone" />
                                                )}
                                            </div>
                                            <div className="step-content">
                                                <span className="step-label">Module {index + 1}</span>
                                                <h4 className="step-title">{step.title}</h4>
                                                <p className="step-desc">{step.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <style>{`
        .how-it-works-section {
          background-color: var(--bg-card);
          padding: 120px 0;
          position: relative;
          color: white;
        }

        /* 1. Goal Cards Grid */
        .goals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 64px;
        }

        .goal-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 32px 24px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .goal-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(59, 130, 246, 0.4);
        }

        .goal-card.active {
          background: rgba(59, 130, 246, 0.1);
          border-color: var(--accent-blue);
        }

        .goal-icon-wrapper {
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 20px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .goal-card.active .goal-icon-wrapper,
        .goal-card:hover .goal-icon-wrapper {
          color: var(--accent-blue);
          background: rgba(59, 130, 246, 0.15);
        }

        .goal-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .goal-desc {
          font-size: 14px;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .active-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 4px;
          width: 100%;
          background: var(--accent-blue);
          box-shadow: 0 0 10px var(--accent-blue);
        }

        /* Container for inner content */
        .pathway-content-container {
          background: rgba(11, 15, 25, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        /* 2. Level Toggle & Recommendation */
        .level-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 24px;
        }

        .level-toggle {
          display: flex;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 6px;
          border-radius: 100px;
          position: relative;
        }

        .toggle-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 10px 24px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          border-radius: 100px;
          position: relative;
          z-index: 2;
          transition: color 0.3s;
        }

        .toggle-btn.active {
          color: white;
        }

        .toggle-btn:hover:not(.active) {
          color: rgba(255, 255, 255, 0.8);
        }

        .toggle-active-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--accent-blue);
          border-radius: 100px;
          z-index: -1;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .recommendation-message {
          flex: 1;
          min-width: 300px;
          background: rgba(59, 130, 246, 0.05);
          border-left: 3px solid var(--accent-blue);
          padding: 16px 20px;
          border-radius: 0 12px 12px 0;
          font-size: 14px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
        }

        .recommendation-badge {
          display: block;
          font-size: 11px;
          color: var(--accent-blue);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 6px;
        }

        /* 3. Progress Bar */
        .progress-container {
          margin-bottom: 48px;
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 12px;
        }

        .progress-title {
          font-weight: 600;
          font-size: 16px;
        }

        .progress-stats {
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .progress-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-blue), #60a5fa);
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }

        .progress-hint {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
          margin-top: 8px;
          font-style: italic;
        }

        /* 4. Roadmap */
        .roadmap-container {
          position: relative;
          padding-left: 24px;
        }

        .roadmap-line {
          position: absolute;
          left: 36px;
          top: 24px;
          bottom: 24px;
          width: 2px;
          background: rgba(255, 255, 255, 0.1);
          z-index: 1;
        }

        .roadmap-steps {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .roadmap-step {
          display: flex;
          gap: 32px;
          position: relative;
          z-index: 2;
          cursor: pointer;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .roadmap-step:hover {
          opacity: 1;
        }

        .roadmap-step.completed {
          opacity: 0.9;
        }

        .roadmap-step.current {
          opacity: 1;
        }

        .step-marker {
          width: 24px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          margin-top: 4px;
        }

        .icon-completed {
          color: #10b981; /* Emerald green for complete */
          background: #111827; /* Match bg card */
          border-radius: 50%;
        }

        .icon-current {
          color: var(--accent-blue);
          position: relative;
        }

        .pulse-ring {
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 50%;
          border: 2px solid var(--accent-blue);
          animation: pulse 2s infinite ease-out;
        }

        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        .icon-undone {
          color: rgba(255, 255, 255, 0.3);
          background: #111827;
          border-radius: 50%;
        }

        .step-content {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 24px;
          border-radius: 16px;
          flex: 1;
          transition: all 0.3s ease;
        }

        .roadmap-step.completed .step-content {
          border-left: 3px solid #10b981;
        }

        .roadmap-step.current .step-content {
          border-left: 3px solid var(--accent-blue);
          background: rgba(59, 130, 246, 0.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transform: translateX(4px);
        }

        .roadmap-step:hover .step-content {
          background: rgba(255, 255, 255, 0.04);
        }

        .step-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--accent-blue);
          margin-bottom: 8px;
          display: block;
        }

        .roadmap-step.completed .step-label {
          color: #10b981;
        }

        .step-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .step-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .pathway-content-container {
            padding: 24px;
          }
          
          .level-controls {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .recommendation-message {
            width: 100%;
            min-width: 0;
            border-left: none;
            border-top: 3px solid var(--accent-blue);
            border-radius: 0 0 12px 12px;
          }
          
          .roadmap-step {
            gap: 16px;
          }
          
          .roadmap-line {
            left: 36px;
          }
          
          .step-content {
            padding: 16px;
          }
        }
      `}</style>
        </section>
    );
};

export default HowItWorks;
