import React, { useState } from 'react';
import { Search, Loader2, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { motion as fMotion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const GeneratePath = () => {
  const [query, setQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPath, setGeneratedPath] = useState(null);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsGenerating(true);
    setGeneratedPath(null);

    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedPath({
        title: query.toLowerCase().includes('web') ? 'Full-Stack Web Development' : 'UI/UX Design Mastery',
        modules: [
          'Fundamentals & Core Concepts',
          'Intermediate Techniques & Tools',
          'Advanced Implementation',
          'Real-World Portfolio Project'
        ]
      });
    }, 2000);
  };

  return (
    <section className="generate-path-section" style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="glass-card" style={{ padding: '40px', textAlign: 'center', background: 'rgba(17, 24, 39, 0.4)' }}>
          <Sparkles size={40} style={{ color: '#60a5fa', marginBottom: '20px' }} />
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Generate Your Learning Path</h2>
          <p style={{ color: '#9ca3af', marginBottom: '32px' }}>
            Tell us what you want to learn, and our AI will build a custom roadmap tailored just for you.
          </p>

          <form onSubmit={handleGenerate} style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <Search size={20} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '16px', color: '#6b7280' }} />
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What do you want to learn? (e.g. UX Design, Web Dev)"
                style={{
                  width: '100%',
                  padding: '16px 16px 16px 48px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(0, 0, 0, 0.2)',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
            </div>
            <button 
              type="submit"
              disabled={isGenerating || !query.trim()}
              style={{
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '0 32px',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '16px',
                cursor: (isGenerating || !query.trim()) ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                opacity: (isGenerating || !query.trim()) ? 0.7 : 1,
                transition: 'all 0.2s',
                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)'
              }}
            >
              {isGenerating ? <Loader2 size={20} className="spin" /> : 'Generate Path'}
            </button>
          </form>

          <AnimatePresence>
            {generatedPath && (
              <fMotion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="generated-result"
                style={{ textAlign: 'left', background: 'rgba(255, 255, 255, 0.03)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(59, 130, 246, 0.3)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '24px', color: '#60a5fa' }}>{generatedPath.title}</h3>
                  <span style={{ padding: '4px 12px', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', borderRadius: '100px', fontSize: '12px', fontWeight: 'bold' }}>
                    4 Modules • 28 Hours
                  </span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {generatedPath.modules.map((mod, index) => (
                    <div key={index} style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px', background: 'rgba(0, 0, 0, 0.2)', borderRadius: '12px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
                        {index + 1}
                      </div>
                      <div style={{ fontWeight: '500' }}>{mod}</div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
                  <RouterLink to="/dashboard" style={{ textDecoration: 'none' }}>
                    <button style={{
                      display: 'flex', alignItems: 'center', gap: '8px', background: 'white', color: 'black', 
                      padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', border: 'none'
                    }}>
                      Start Learning Now <ArrowRight size={18} />
                    </button>
                  </RouterLink>
                </div>
              </fMotion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
      <style>{`
        .spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default GeneratePath;
