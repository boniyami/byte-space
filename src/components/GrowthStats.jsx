import React from 'react';

export default function GrowthStats() {
  return (
    <section className="growth-section">
      <div className="container growth-grid">
        <div className="growth-content">
          <h2 className="growth-title">Your Path to Professional<br />Growth Starts Here!</h2>
          <p className="growth-desc">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-number">12K</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">70+</span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">16</span>
              <span className="stat-label">Creators</span>
            </div>
          </div>
        </div>

        <div className="growth-visual-card">
          <img src="/assets/images/course_figma.jpg" alt="Student mastering design wireframes" className="growth-preview-img" />
          <div className="growth-floating-pill">Top Rated • 4.9 ★</div>
        </div>
      </div>
    </section>
  );
}
