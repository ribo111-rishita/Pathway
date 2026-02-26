import React from 'react';
import { User, Mail, MessageSquare, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Have Questions? Let's Talk.</h2>
                    <p className="section-subtitle">
                        We're here to help you find your perfect learning path.
                    </p>
                </div>

                <div className="contact-container">
                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>NAME</label>
                                <div className="input-wrapper">
                                    <User size={18} className="input-icon" />
                                    <input type="text" placeholder="Jane Doe" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>EMAIL</label>
                                <div className="input-wrapper">
                                    <Mail size={18} className="input-icon" />
                                    <input type="email" placeholder="jane@example.com" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>MESSAGE</label>
                            <div className="input-wrapper align-top">
                                <MessageSquare size={18} className="input-icon" style={{ marginTop: '12px' }} />
                                <textarea rows="5" placeholder="How can we help you?"></textarea>
                            </div>
                        </div>

                        <button type="button" className="btn btn-primary submit-btn">
                            <Send size={16} className="btn-icon" /> Send Message
                        </button>
                    </form>
                </div>

                <div className="contact-footer">
                    <div className="contact-info-item">
                        <Mail size={16} /> hello@pathway.edu
                    </div>
                    <div className="contact-info-item">
                        <MessageCircle size={16} /> Live Chat Available
                    </div>
                </div>
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
