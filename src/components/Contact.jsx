import React, { useState } from 'react';
import { User, Mail, MessageSquare, Send, MessageCircle, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Have Questions? Let's Talk.</h2>
          <p className="section-subtitle">
            We're here to help you find your perfect learning path.
          </p>
        </motion.div>

        <motion.div
          className="contact-container"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {status === 'success' ? (
            <div className="success-message">
              <div className="success-icon-wrapper">
                <Check size={32} className="success-icon" />
              </div>
              <h3>Message Sent!</h3>
              <p>We'll get back to you within 24 hours.</p>
              <button type="button" className="btn btn-outline" onClick={() => setStatus('idle')} style={{ marginTop: '16px' }}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>NAME</label>
                  <div className="input-wrapper">
                    <User size={18} className="input-icon" />
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>EMAIL</label>
                  <div className="input-wrapper">
                    <Mail size={18} className="input-icon" />
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>MESSAGE <span className="helper-text">(Tell us about your learning goals)</span></label>
                <div className="input-wrapper align-top">
                  <MessageSquare size={18} className="input-icon" style={{ marginTop: '12px' }} />
                  <textarea
                    rows="5"
                    placeholder="How can we help you?"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : (
                  <><Send size={16} className="btn-icon" /> Send Message</>
                )}
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          className="contact-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="contact-info-item">
            <Mail size={16} /> hello@pathway.edu
          </div>
          <div className="contact-info-item">
            <MessageCircle size={16} /> Live Chat Available
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-main);
          padding: 120px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-container {
          max-width: 800px;
          margin: 0 auto;
          background-color: var(--bg-card);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 48px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
        }

        .helper-text {
          font-weight: 400;
          text-transform: none;
          letter-spacing: normal;
          opacity: 0.7;
          margin-left: 8px;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-wrapper.align-top {
          align-items: flex-start;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          color: rgba(255, 255, 255, 0.2);
        }

        input, textarea {
          width: 100%;
          background-color: rgba(11, 15, 25, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          color: white;
          font-family: inherit;
          font-size: 15px;
          padding: 16px 16px 16px 48px;
          transition: all 0.2s ease;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: var(--accent-blue);
          background-color: rgba(11, 15, 25, 0.6);
        }

        input::placeholder, textarea::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }

        textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          border-radius: 12px;
          font-size: 16px;
          margin-top: 8px;
        }

        .contact-footer {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-top: 48px;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 14px;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-message {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 32px 0;
          animation: fadeIn 0.5s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .success-icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .success-message h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .success-message p {
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .contact-container {
            padding: 32px 24px;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-footer {
            flex-direction: column;
            gap: 16px;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
