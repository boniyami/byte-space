import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, showToast } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCartClick = () => {
    if (cartCount === 0) {
      showToast('Your learning cart is currently empty. Browse courses below!', 'info');
    } else {
      showToast(`You have ${cartCount} courses in your cart! Ready to checkout?`, 'success');
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="siteHeader">
      <div className="container nav-container">
        <Link to="/" className="brand-logo" id="headerLogo" aria-label="ByteSpace Home">
          <span className="brand-icon-box">b</span>
          <span>ByteSpace</span>
        </Link>

        <nav aria-label="Main Navigation" className={mobileOpen ? 'mobile-nav-active' : ''}>
          <ul className="nav-menu">
            <li><Link to="/" className="nav-link active">Home</Link></li>
            <li><a href="#courses" className="nav-link" onClick={() => setMobileOpen(false)}>Courses</a></li>
            <li><a href="#categories" className="nav-link" onClick={() => setMobileOpen(false)}>Categories</a></li>
            <li><a href="#creators" className="nav-link" onClick={() => setMobileOpen(false)}>Creators</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="btn-sign-in" id="navSignInBtn">Sign In</Link>
          <Link to="/register" className="btn-join-us" id="navJoinUsBtn">Join Us</Link>
          <button 
            className="btn-cart" 
            id="navCartBtn" 
            aria-label="View Shopping Cart"
            onClick={handleCartClick}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span className="cart-count">{cartCount}</span>
          </button>
          <button 
            className="mobile-toggle" 
            id="mobileMenuBtn" 
            aria-label="Toggle mobile menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
