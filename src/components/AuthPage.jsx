import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const AuthPage = ({ mode = 'login' }) => {
  const navigate = useNavigate();
  const isSignup = mode === 'signup';
  const savedName = localStorage.getItem('pathway_user_name') || '';
  const [name, setName] = useState(savedName);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = (isSignup ? name : name || email.split('@')[0]).trim();
    localStorage.setItem('pathway_user_name', displayName || 'User');
    navigate('/dashboard');
  };

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px', background: 'var(--bg-main)' }}>
      <div className="glass-card" style={{ width: '100%', maxWidth: '440px', padding: '40px', background: 'rgba(17, 24, 39, 0.4)' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Sparkles size={36} style={{ color: '#60a5fa', marginBottom: '16px' }} />
          <h1 style={{ fontSize: '30px', marginBottom: '10px' }}>{isSignup ? 'Create your account' : 'Welcome back'}</h1>
          <p style={{ color: '#9ca3af' }}>{isSignup ? 'Tell us your name to personalise Pathway.' : 'Log in to continue your learning path.'}</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required={isSignup}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(0, 0, 0, 0.2)',
              color: 'white',
              fontSize: '16px',
              outline: 'none'
            }}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(0, 0, 0, 0.2)',
              color: 'white',
              fontSize: '16px',
              outline: 'none'
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(0, 0, 0, 0.2)',
              color: 'white',
              fontSize: '16px',
              outline: 'none'
            }}
          />

          <button className="btn btn-primary" type="submit" style={{ width: '100%', marginTop: '8px' }}>
            {isSignup ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <p style={{ color: '#9ca3af', textAlign: 'center', marginTop: '24px', fontSize: '14px' }}>
          {isSignup ? 'Already have an account?' : 'New to Pathway?'}{' '}
          <Link to={isSignup ? '/login' : '/signup'} style={{ color: '#60a5fa', fontWeight: 600 }}>
            {isSignup ? 'Log in' : 'Sign up'}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default AuthPage;
