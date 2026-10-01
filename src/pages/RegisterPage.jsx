import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { showToast } = useCart();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      showToast('Please accept the Terms of Service to continue.', 'error');
      return;
    }
    showToast(`Welcome to ByteSpace, ${fullName || 'learner'}! Account created.`, 'success');
    setTimeout(() => {
      navigate('/');
    }, 1200);
  };

  const handleSocialAuth = (provider) => {
    showToast(`Connecting with ${provider}...`, 'info');
    setTimeout(() => {
      showToast(`Signed up successfully with ${provider}!`, 'success');
      navigate('/');
    }, 1500);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        
        {/* Left Showcase Panel (Figma Design) */}
        <div className="auth-showcase-panel">
          {/* 3D Shapes */}
          <img src="/assets/icons/shape-torus-lime.svg" alt="" className="auth-shape-donut" aria-hidden="true" />
          <img src="/assets/icons/shape-pyramid-white.svg" alt="" className="auth-shape-cone" aria-hidden="true" />

          <div className="auth-panel-top">
            <Link to="/" className="auth-logo-badge">
              <span className="brand-icon-box">b</span>
              <span style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '20px' }}>ByteSpace</span>
            </Link>
            <h1 className="auth-panel-title">Sign up and come in</h1>
            <p className="auth-panel-desc">
              The registration process is simple and efficient, allowing users to join quickly and easily at no cost.
            </p>
          </div>

          {/* Preview Cards Mockup */}
          <div className="auth-preview-cards">
            <div className="preview-card-mockup">
              <img src="/assets/images/course_figma.jpg" alt="Featured Course" className="preview-card-img" />
              <div className="preview-card-title">Learn Figma from Basic</div>
              <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>by purepearl studio</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="preview-card-price">$25<span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 'normal' }}>/lifetime</span></span>
                <div className="avatar-stack">
                  <img src="/assets/images/avatar_1.jpg" alt="User" className="stack-avatar" />
                  <img src="/assets/images/avatar_2.jpg" alt="User" className="stack-avatar" />
                  <span className="stack-pill">26+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="auth-form-panel">
          <div className="auth-nav-top">
            <Link to="/" className="auth-nav-link">← Back to Home</Link>
          </div>

          <div className="auth-form-header">
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Create an Account</span>
            <h2 className="auth-form-title">Welcome to ByteSpace</h2>
            <p className="auth-form-subtitle">Join thousands of students and creators exploring their potential.</p>
          </div>

          <form className="auth-form" id="registerForm" onSubmit={handleRegister}>
            <div className="form-group">
              <label className="form-label" htmlFor="regFullName">Full Name</label>
              <div className="form-input-box">
                <input 
                  type="text" 
                  id="regFullName" 
                  className="form-input" 
                  placeholder="Alex Johnson" 
                  required 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="regEmail">Email</label>
              <div className="form-input-box">
                <input 
                  type="email" 
                  id="regEmail" 
                  className="form-input" 
                  placeholder="designer@example.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="regPassword">Password</label>
              <div className="form-input-box">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  id="regPassword" 
                  className="form-input" 
                  placeholder="••••••••" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button" 
                  className="password-toggle" 
                  id="toggleRegPasswordBtn" 
                  aria-label="Toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '🔒' : '👁'}
                </button>
              </div>
            </div>

            <div className="form-options-row">
              <label className="remember-label" style={{ fontSize: '12px' }}>
                <input 
                  type="checkbox" 
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required 
                  style={{ accentColor: 'var(--primary-blue)' }} 
                />
                <span>I agree to the <a href="#terms" onClick={(e) => { e.preventDefault(); showToast('Terms of Service viewed', 'info'); }} style={{ color: 'var(--primary-blue)', textDecoration: 'underline' }}>Terms of Service</a> & <a href="#privacy" onClick={(e) => { e.preventDefault(); showToast('Privacy Policy viewed', 'info'); }} style={{ color: 'var(--primary-blue)', textDecoration: 'underline' }}>Privacy Policy</a></span>
              </label>
            </div>

            <button type="submit" className="btn-auth-submit" id="regSubmitBtn">Create Account</button>

            <div className="auth-divider">or</div>

            <div className="social-auth-buttons">
              <button type="button" className="social-btn" onClick={() => handleSocialAuth('Google')}>
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Google</span>
              </button>

              <button type="button" className="social-btn" onClick={() => handleSocialAuth('Apple')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#000000">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.76 1.05-1.83.93-2.89-.92.04-2.02.61-2.67 1.37-.58.67-1.1 1.74-.96 2.78 1.02.08 2.07-.5 2.7-1.26z"/>
                </svg>
                <span>Apple</span>
              </button>
            </div>

            <div className="auth-footer-prompt">
              Already have an account? <Link to="/login" className="auth-switch-link">Sign In</Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
