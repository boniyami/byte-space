import React from 'react';
import { testimonialsData } from '../data/testimonialsData';

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">Discover What Our<br />Community Is Saying</h2>
          <p className="section-desc">
            At ByteSpace, our vibrant community is the heart of what we do. Explore inspiring and transformative journeys through authentic testimonials that reflect the experiences of diverse and accomplished creators and learners.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((test, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-user">
                <img src={test.avatar} alt={test.name} className="test-avatar" />
                <div>
                  <div className="test-name">{test.name}</div>
                  <div className="test-role">{test.role}</div>
                </div>
              </div>
              <p className="test-quote">
                "{test.quote}"
              </p>
              <div className="test-stars">
                {'★'.repeat(test.stars)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
