import React from 'react';
import { Link } from 'react-router-dom';

export default function CtaBanner() {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-card">
          <div className="cta-banner-shapes">
            <img src="/assets/icons/shape-spiral-lime.svg" alt="" className="shape-cta-spring" aria-hidden="true" />
            <img src="/assets/icons/shape-torus-lime.svg" alt="" className="shape-cta-torus" aria-hidden="true" />
            <img src="/assets/icons/shape-pyramid-white.svg" alt="" className="shape-cta-pyramid" aria-hidden="true" />
          </div>

          <div className="cta-banner-content">
            <h2 className="cta-banner-title">Unlock Your Potential as a<br />Creator with ByteSpace</h2>
            <p className="cta-banner-desc">
              Experience the collaboration of numerous creators and an expanding selection of courses. Become part of a community comprising over 10,000 local and international creators. Utilize our platform to share your expertise by publishing your finest course on the ByteSpace Creator.
            </p>
            <Link to="/register" className="btn-lime-cta" id="ctaJoinCreatorBtn">
              <span>Join as Creator</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
