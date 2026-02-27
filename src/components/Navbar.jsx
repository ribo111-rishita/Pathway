import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-container">
        <div className="nav-left">
          <Link to="hero" smooth={true} duration={500} className="logo" style={{ cursor: 'pointer' }}>
            PATHWAY
          </Link>
          <div className="nav-links">
            <Link to="hero" spy={true} smooth={true} duration={500} offset={-80} className="nav-link" activeClass="active">Home</Link>
            <Link to="features" spy={true} smooth={true} duration={500} offset={-80} className="nav-link" activeClass="active">Features</Link>
            <Link to="how-it-works" spy={true} smooth={true} duration={500} offset={-80} className="nav-link" activeClass="active">How it Works</Link>
            <Link to="pricing" spy={true} smooth={true} duration={500} offset={-80} className="nav-link" activeClass="active">Pricing</Link>
          </div>
        </div>
        <div className="nav-right">
          <button className="btn btn-ghost">Log In</button>
          <button className="btn btn-primary btn-sm">Get Started</button>
        </div>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--nav-height);
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          z-index: 1000;
        }
        
        .navbar.scrolled {
          background-color: var(--bg-nav);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .nav-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 48px;
        }

        .logo {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: white;
        }

        .nav-links {
          display: flex;
          gap: 24px;
        }

        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .nav-link:hover, .nav-link.active {
          color: white;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .btn-white {
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
