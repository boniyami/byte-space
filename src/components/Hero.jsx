import React, { useState } from 'react';

export default function Hero({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <section className="hero-section" id="heroSection">
      {/* Floating 3D Geometric Memphis Shapes */}
      <img src="/assets/icons/shape-spiral-lime.svg" alt="" className="floating-shape shape-spring-left" aria-hidden="true" />
      <img src="/assets/icons/shape-squiggle-white.svg" alt="" className="floating-shape shape-squiggle-left" aria-hidden="true" />
      <img src="/assets/icons/shape-torus-lime.svg" alt="" className="floating-shape shape-donut-left" aria-hidden="true" />
      
      <img src="/assets/icons/shape-cylinder-lime.svg" alt="" className="floating-shape shape-cylinder-right" aria-hidden="true" />
      <img src="/assets/icons/shape-torus-lime.svg" alt="" className="floating-shape shape-torus-right" aria-hidden="true" />
      <img src="/assets/icons/shape-pyramid-white.svg" alt="" className="floating-shape shape-pyramid-right" aria-hidden="true" />
      <img src="/assets/icons/shape-spiral-lime.svg" alt="" className="floating-shape shape-spring-right" aria-hidden="true" />

      <div className="container hero-content">
        <h1 className="hero-title">
          Get Access to Hundreds<br />Courses Available
        </h1>
        <p className="hero-subtitle">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Hero Search Bar */}
        <div className="hero-search-wrapper">
          <form className="hero-search-box" onSubmit={handleSubmit}>
            <span className="search-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input 
              type="text" 
              className="search-input" 
              id="heroSearchInput" 
              placeholder="Course, topic, creator" 
              aria-label="Search courses"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" className="search-btn" id="heroSearchBtn">Search</button>
          </form>
        </div>

        {/* Hero Visual: Student with Lime Circle & Badges */}
        <div className="hero-visual-container">
          <div className="hero-lime-circle" aria-hidden="true"></div>
          <img src="/assets/images/hero_student_male.jpg" alt="ByteSpace Student Learning with Laptop" className="hero-student-img" />

          {/* Badge: UI/UX Design */}
          <div className="hero-floating-card badge-top-left">
            <div className="badge-title">UI/UX Design</div>
            <div className="badge-meta">200 Courses • 1000+ Students</div>
          </div>

          {/* Badge: Learning Progress */}
          <div className="hero-floating-card badge-top-right">
            <div className="badge-meta">Learning Progress</div>
            <div className="progress-number">55%</div>
            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>
          </div>

          {/* Badge: Happy Students */}
          <div className="hero-floating-card badge-bottom-left">
            <div className="rating-row">
              <span>Happy Students</span>
              <span className="star-icon">★</span>
              <span>4.5 <span style={{ fontWeight: 500, color: '#6B7280' }}>(240)</span></span>
            </div>
            <div className="avatar-stack">
              <img src="/assets/images/avatar_1.jpg" alt="Student" className="stack-avatar" />
              <img src="/assets/images/avatar_2.jpg" alt="Student" className="stack-avatar" />
              <img src="/assets/images/avatar_3.jpg" alt="Student" className="stack-avatar" />
              <img src="/assets/images/avatar_4.jpg" alt="Student" className="stack-avatar" />
              <span className="stack-pill">2K+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
