import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Before Pathway, I was jumping between tutorials and constantly getting stuck. The structured paths here gave me exactly what I needed to land my first dev role.",
            author: "Sarah Jenkins",
            role: "Frontend Developer",
            rating: 5
        },
        {
            quote: "The clarity is unmatched. I no longer waste hours figuring out 'what's next.' I just log in and learn. It's transformed how I approach new technical skills.",
            author: "David Chen",
            role: "Data Analyst",
            rating: 5
        },
        {
            quote: "The community aspect inside the learning paths kept me accountable. Highly recommend the Pro tier if you're serious about taking the next step in your career.",
            author: "Marcus Rivera",
            role: "UX Designer",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Real results from real learners</h2>
                    <p className="section-subtitle">
                        Don't just take our word for it—join thousands of students who have accelerated their careers.
                    </p>
                </motion.div>

                <div className="testimonials-grid">
                    {testimonials.map((test, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <div className="stars">
                                {[...Array(test.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="var(--accent-blue)" color="var(--accent-blue)" />
                                ))}
                            </div>
                            <p className="quote">"{test.quote}"</p>
                            <div className="author-info">
                                <div className="author-avatar">
                                    {test.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="author-name">{test.author}</h4>
                                    <p className="author-role">{test.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .testimonials-section {
          background-color: var(--bg-main);
          padding: 120px 0;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 64px;
        }

        .testimonial-card {
          background-color: var(--bg-card);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 40px;
          display: flex;
          flex-direction: column;
        }

        .stars {
          display: flex;
          gap: 4px;
          margin-bottom: 24px;
        }

        .quote {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-primary);
          flex-grow: 1;
          margin-bottom: 32px;
          font-style: italic;
          opacity: 0.9;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: rgba(59, 130, 246, 0.1);
          color: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 18px;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .author-name {
          font-size: 15px;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }

        .author-role {
          font-size: 13px;
          color: var(--text-secondary);
        }

        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
