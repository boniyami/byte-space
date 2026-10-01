import React from 'react';

export default function Instructors() {
  return (
    <section className="creator-showcase-section" id="creators">
      <div className="container creator-grid">
        
        {/* Visual with Floating Cards */}
        <div className="creator-visual-wrapper">
          <div className="creator-photo-box">
            <img src="/assets/images/instructor_female.jpg" alt="Instructor teaching course on ByteSpace" className="creator-img" />

            {/* Stat Card 1: Total Revenue */}
            <div className="stat-card-floating stat-card-rev">
              <div className="stat-card-title">Total Revenue</div>
              <div className="stat-card-period">July 1-28</div>
              <div className="stat-card-val">$120.29</div>
              <div className="progress-track" style={{ marginTop: '6px' }}>
                <div className="progress-fill" style={{ width: '78%' }}></div>
              </div>
            </div>

            {/* Stat Card 2: Year to Date */}
            <div className="stat-card-floating stat-card-ytd">
              <div className="stat-card-title">Year to Date</div>
              <div className="stat-card-period">2023</div>
              <div className="stat-card-val">$1,200.38</div>
              <span className="stat-lime-badge">+12%</span>
            </div>

            {/* Stat Card 3: Happy Students */}
            <div className="stat-card-floating stat-card-students">
              <div className="rating-row" style={{ marginBottom: '6px' }}>
                <span>Happy Students</span>
                <span className="star-icon">★</span>
                <span>4.5</span>
              </div>
              <div className="avatar-stack">
                <img src="/assets/images/avatar_1.jpg" alt="Student" className="stack-avatar" />
                <img src="/assets/images/avatar_2.jpg" alt="Student" className="stack-avatar" />
                <img src="/assets/images/avatar_3.jpg" alt="Student" className="stack-avatar" />
                <img src="/assets/images/avatar_4.jpg" alt="Student" className="stack-avatar" />
                <span className="stack-pill">2K+</span>
              </div>
            </div>

            {/* 3D Shape */}
            <img src="/assets/icons/shape-spiral-lime.svg" alt="" className="creator-shape-spiral" aria-hidden="true" />
          </div>
        </div>

        {/* Copy & Checklist */}
        <div className="creator-content">
          <h2 className="section-title">Create & Manage<br />Courses Easily.</h2>
          <p className="section-desc">
            ByteSpace supports creators with seamless tools for course building, publishing, and administration of students and content.
          </p>

          <div className="checklist-items">
            <div className="check-item">
              <span className="check-icon-circle">✓</span>
              <span>Share Your Expertise with a global community of curious learners</span>
            </div>
            <div className="check-item">
              <span className="check-icon-circle">✓</span>
              <span>Monetize Your Passion with straightforward and transparent payouts</span>
            </div>
            <div className="check-item">
              <span className="check-icon-circle">✓</span>
              <span>Flexibility and Autonomy to structure your curriculum your way</span>
            </div>
            <div className="check-item">
              <span className="check-icon-circle">✓</span>
              <span>Build a Community that elevates and advocates for your content</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
