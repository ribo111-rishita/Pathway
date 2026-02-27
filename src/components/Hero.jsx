import React from 'react';
import { Play, Info, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>

      {/* Background Image: the user's provided "girl studying in the library" picture goes here. 
          For now using a similar related placeholder until they replace it. */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: 'url("/girl-studying.jpg")' // <-- change this part
        }}
      ></div>


      <div className="hero-content">
        <motion.div
          className="badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-icon">✧</span>
          THE FUTURE OF EDUCATION
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stop Learning<br />Blind.
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Structured learning paths so you always know what to learn<br />next. No more guessing. Just progress.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="pricing" smooth={true} duration={500} offset={-80} className="btn btn-primary btn-lg" style={{ cursor: 'pointer', display: 'inline-flex' }}>
            <Play size={18} fill="currentColor" className="btn-icon" />
            Start Your Path
          </Link>

          <Link to="paths" smooth={true} duration={500} offset={-80} className="btn btn-glass btn-lg" style={{ cursor: 'pointer', display: 'inline-flex' }}>
            <Info size={18} className="btn-icon" />
            Explore Paths
          </Link>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 0 40px;
          overflow: hidden;
          padding-top: var(--nav-height);
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(20, 45, 90, 0.65) 0%, rgba(11, 20, 35, 0.85) 50%, rgba(11, 15, 25, 1) 100%);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: var(--accent-blue);
          padding: 6px 12px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .badge-icon {
          font-size: 14px;
        }

        .hero-title {
          font-size: 88px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.04em;
          margin-bottom: 24px;
          color: #ffffff;
        }

        .hero-subtitle {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 48px;
          max-width: 600px;
          line-height: 1.5;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
        }

        .btn-lg {
          padding: 16px 32px;
          font-size: 16px;
        }

        .btn-icon {
          margin-right: 10px;
        }

        .btn-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .btn-glass:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          opacity: 0.6;
        }

        .scroll-text {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: white;
          text-transform: uppercase;
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 56px;
          }
          .hero-subtitle {
            font-size: 18px;
          }
          .hero-actions {
            flex-direction: column;
          }
          .btn-lg {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
