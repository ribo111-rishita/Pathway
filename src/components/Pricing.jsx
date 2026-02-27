import React from 'react';
import { Check, Info } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the plan that fits your learning goals. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Free Tier */}
          <div className="pricing-card">
            <div className="card-header">
              <span className="tier-name">FREE</span>
              <h3 className="tier-price">Free</h3>
              <p className="tier-desc">Perfect for casual learners exploring new topics.</p>
            </div>

            <ul className="feature-list">
              <li><Check size={16} className="feature-icon" /> Access to basic learning paths</li>
              <li><Check size={16} className="feature-icon" /> Community support forum</li>
              <li><Check size={16} className="feature-icon" /> Basic progress tracking</li>
              <li>
                <Check size={16} className="feature-icon" />
                <span>1 active path at a time</span>
                <div className="tooltip-container">
                  <Info size={14} className="info-icon" />
                  <span className="tooltip-text">A learning path is a curated series of courses. Free users can only enroll in one path simultaneously.</span>
                </div>
              </li>
            </ul>

            <button className="btn btn-tier btn-ghost-bg">Get Started &rarr;</button>
          </div>

          {/* Pro Tier (Highlighted) */}
          <div className="pricing-card pro">
            <div className="recommended-badge">RECOMMENDED</div>
            <div className="card-header">
              <span className="tier-name pro-name">PRO</span>
              <h3 className="tier-price pro-price">$19<span className="price-interval">/mo</span></h3>
              <p className="tier-desc pro-desc">For dedicated learners who want to accelerate their growth.</p>
            </div>

            <ul className="feature-list pro-list">
              <li><Check size={16} className="feature-icon pro-icon" /> Everything in Free</li>
              <li>
                <Check size={16} className="feature-icon pro-icon" />
                <span>Unlimited active paths</span>
                <div className="tooltip-container">
                  <Info size={14} className="info-icon pro-info" />
                  <span className="tooltip-text">Study as many different subjects as you want at the same time.</span>
                </div>
              </li>
              <li><Check size={16} className="feature-icon pro-icon" /> AI-powered path generation</li>
              <li><Check size={16} className="feature-icon pro-icon" /> Priority email support</li>
              <li><Check size={16} className="feature-icon pro-icon" /> Offline learning mode</li>
              <li><Check size={16} className="feature-icon pro-icon" /> Certificate of completion</li>
            </ul>

            <button className="btn btn-tier btn-primary">Get Started &rarr;</button>
          </div>

          {/* Institutional Tier */}
          <div className="pricing-card">
            <div className="card-header">
              <span className="tier-name">INSTITUTION</span>
              <h3 className="tier-price">Custom</h3>
              <p className="tier-desc">Empower your entire team with structured learning.</p>
            </div>

            <ul className="feature-list">
              <li><Check size={16} className="feature-icon" /> Everything in Pro</li>
              <li><Check size={16} className="feature-icon" /> Team management dashboard</li>
              <li><Check size={16} className="feature-icon" /> Custom path creation tools</li>
              <li><Check size={16} className="feature-icon" /> SSO & API access</li>
              <li><Check size={16} className="feature-icon" /> Dedicated account manager</li>
              <li><Check size={16} className="feature-icon" /> Bulk seat discounts</li>
            </ul>

            <button className="btn btn-tier btn-ghost-bg">Contact Sales &rarr;</button>
          </div>
        </div>
      </div>

      <style>{`
        .pricing-section {
          background-color: var(--bg-main);
          padding: 120px 0;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: center;
          margin-top: 64px;
        }

        .pricing-card {
          background-color: var(--bg-card);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
        }

        .pricing-card.pro {
          background-color: #ffffff;
          transform: scale(1.05);
          z-index: 10;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .recommended-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--accent-blue);
          color: white;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 16px;
          border-radius: 100px;
          letter-spacing: 0.1em;
        }

        .card-header {
          margin-bottom: 32px;
        }

        .tier-name {
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-blue);
          letter-spacing: 0.1em;
          margin-bottom: 12px;
          display: block;
        }

        .tier-price {
          font-size: 40px;
          font-weight: 800;
          margin-bottom: 16px;
          color: white;
        }

        .price-interval {
          font-size: 16px;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .tier-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .pro-name {
          color: var(--accent-blue);
        }

        .pro-price {
          color: #000000;
        }

        .pro-desc {
          color: #4b5563;
        }

        .feature-list {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }

        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14px;
          color: var(--text-primary);
        }

        .pro-list li {
          color: #1f2937;
        }

        .feature-icon {
          color: rgba(255, 255, 255, 0.2);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pro-icon {
          color: var(--accent-blue);
        }

        .tooltip-container {
          position: relative;
          display: inline-flex;
          align-items: center;
          margin-left: 6px;
          cursor: help;
        }

        .info-icon {
          color: rgba(255, 255, 255, 0.4);
          transition: color 0.2s ease;
        }

        .info-icon:hover {
          color: white;
        }

        .pro-info {
          color: rgba(0, 0, 0, 0.4);
        }

        .pro-info:hover {
          color: black;
        }

        .tooltip-text {
          visibility: hidden;
          width: 200px;
          background-color: #1f2937;
          color: #fff;
          text-align: center;
          border-radius: 8px;
          padding: 8px 12px;
          position: absolute;
          z-index: 100;
          bottom: 125%;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: opacity 0.3s, visibility 0.3s;
          font-size: 12px;
          line-height: 1.4;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          font-weight: 500;
          letter-spacing: normal;
        }

        .tooltip-text::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: #1f2937 transparent transparent transparent;
        }

        .tooltip-container:hover .tooltip-text {
          visibility: visible;
          opacity: 1;
        }

        .btn-tier {
          width: 100%;
          padding: 16px;
          font-size: 15px;
          border-radius: 8px;
        }

        .btn-ghost-bg {
          background-color: rgba(255, 255, 255, 0.05);
          color: white;
        }

        .btn-ghost-bg:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 64px auto 0;
            gap: 40px;
          }
          
          .pricing-card.pro {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
