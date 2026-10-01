import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Footer({ onSelectCategory }) {
  const [email, setEmail] = useState('');
  const { showToast } = useCart();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      showToast(`Subscribed ${email} to ByteSpace Newsletter!`, 'success');
      setEmail('');
    }
  };

  const handleCategoryClick = (catName) => {
    if (onSelectCategory) {
      onSelectCategory(catName);
    }
    const section = document.getElementById('courses');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        
        {/* Newsletter Card */}
        <div className="newsletter-card">
          <div className="newsletter-info">
            <Link to="/" className="brand-logo dark" aria-label="ByteSpace Home">
              <span className="brand-icon-box">b</span>
              <span style={{ color: '#111827' }}>ByteSpace</span>
            </Link>
            <p className="newsletter-desc">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
          </div>

          <div className="newsletter-form-wrapper">
            <form className="newsletter-form" id="newsletterForm" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="Enter your email" 
                required 
                aria-label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
            <p className="newsletter-disclaimer">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>

        {/* Footer 9 Columns Grid */}
        <div className="footer-columns-grid">
          {/* 1. Featured Courses */}
          <div>
            <h4 className="footer-col-title">Featured Courses</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#courses" onClick={() => handleCategoryClick('UI/UX Design')}>Figma Basics</a></li>
              <li className="footer-link-item"><a href="#courses" onClick={() => handleCategoryClick('Data Science')}>Big Data Mastery</a></li>
              <li className="footer-link-item"><a href="#courses" onClick={() => handleCategoryClick('Productivity')}>Productivity Hub</a></li>
              <li className="footer-link-item"><a href="#courses" onClick={() => handleCategoryClick('Freelance & Entrepreneurship')}>Startup Blueprint</a></li>
            </ul>
          </div>

          {/* 2. Featured Categories */}
          <div>
            <h4 className="footer-col-title">Featured Categories</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#categories" onClick={() => handleCategoryClick('UI/UX Design')}>UI/UX Design</a></li>
              <li className="footer-link-item"><a href="#categories" onClick={() => handleCategoryClick('Web Development')}>Development</a></li>
              <li className="footer-link-item"><a href="#categories" onClick={() => handleCategoryClick('Data Science')}>Data Science</a></li>
              <li className="footer-link-item"><a href="#categories" onClick={() => handleCategoryClick('Marketing')}>Marketing</a></li>
            </ul>
          </div>

          {/* 3. Business */}
          <div>
            <h4 className="footer-col-title">Business</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#courses">Management</a></li>
              <li className="footer-link-item"><a href="#courses">Strategy</a></li>
              <li className="footer-link-item"><a href="#courses">Leadership</a></li>
              <li className="footer-link-item"><a href="#courses">Sales</a></li>
            </ul>
          </div>

          {/* 4. IT */}
          <div>
            <h4 className="footer-col-title">IT</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#courses">Cloud Systems</a></li>
              <li className="footer-link-item"><a href="#courses">DevOps</a></li>
              <li className="footer-link-item"><a href="#courses">Security</a></li>
              <li className="footer-link-item"><a href="#courses">Networking</a></li>
            </ul>
          </div>

          {/* 5. Design */}
          <div>
            <h4 className="footer-col-title">Design</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#courses">Wireframing</a></li>
              <li className="footer-link-item"><a href="#courses">Illustration</a></li>
              <li className="footer-link-item"><a href="#courses">Typography</a></li>
              <li className="footer-link-item"><a href="#courses">Design Systems</a></li>
            </ul>
          </div>

          {/* 6. Finance */}
          <div>
            <h4 className="footer-col-title">Finance</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#courses">Investing</a></li>
              <li className="footer-link-item"><a href="#courses">Accounting</a></li>
              <li className="footer-link-item"><a href="#courses">Trading</a></li>
              <li className="footer-link-item"><a href="#courses">Personal Finance</a></li>
            </ul>
          </div>

          {/* 7. Sport */}
          <div>
            <h4 className="footer-col-title">Sport</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#courses">Fitness</a></li>
              <li className="footer-link-item"><a href="#courses">Wellness</a></li>
              <li className="footer-link-item"><a href="#courses">Nutrition</a></li>
              <li className="footer-link-item"><a href="#courses">Yoga</a></li>
            </ul>
          </div>

          {/* 8. Help */}
          <div>
            <h4 className="footer-col-title">Help</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#">Support Center</a></li>
              <li className="footer-link-item"><a href="#">Community Forum</a></li>
              <li className="footer-link-item"><a href="#">Documentation</a></li>
              <li className="footer-link-item"><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* 9. About */}
          <div>
            <h4 className="footer-col-title">About</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#">Our Story</a></li>
              <li className="footer-link-item"><a href="#">Careers</a></li>
              <li className="footer-link-item"><a href="#">Press Kit</a></li>
              <li className="footer-link-item"><a href="#">Affiliates</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} ByteSpace. All rights reserved.</div>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
