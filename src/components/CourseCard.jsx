import React from 'react';
import { useCart } from '../context/CartContext';

export default function CourseCard({ course, onSelectCourse }) {
  const { addToCart } = useCart();

  const handleEnrollClick = (e) => {
    e.stopPropagation();
    addToCart(course);
  };

  return (
    <div 
      className="course-card" 
      data-category={course.category}
      onClick={() => onSelectCourse && onSelectCourse(course)}
      style={{ cursor: 'pointer' }}
    >
      <div className="card-img-wrapper">
        <img src={course.image} alt={course.title} className="card-img" />
        <div className="card-overlay-badges">
          <span className="overlay-tag">{course.lessons}</span>
          <span className="overlay-tag">{course.duration}</span>
          <span className="overlay-tag">{course.comments}</span>
        </div>
      </div>
      <div className="card-body">
        <div className="card-header-row">
          <h3 className="course-title">{course.title}</h3>
          <div className="rating-badge">
            {course.rating} <span className="star-icon">★</span>
          </div>
        </div>
        <div className="course-author">by <span>{course.author}</span></div>
        <div className="card-meta-row">
          <span className="level-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="20" x2="18" y2="4" />
              <line x1="6" y1="20" x2="6" y2="16" />
              <line x1="12" y1="20" x2="12" y2="10" />
            </svg>
            {course.level}
          </span>
          <div className="avatar-stack">
            <img src="/assets/images/avatar_1.jpg" alt="Student" className="stack-avatar" />
            <img src="/assets/images/avatar_2.jpg" alt="Student" className="stack-avatar" />
            <img src="/assets/images/avatar_3.jpg" alt="Student" className="stack-avatar" />
            <img src="/assets/images/avatar_4.jpg" alt="Student" className="stack-avatar" />
            <span className="stack-pill">{course.students}</span>
          </div>
        </div>
        <div className="card-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span className="price-main">{course.price}</span>
            <span className="price-term">/lifetime</span>
          </div>
          <button 
            type="button" 
            className="btn-enroll"
            onClick={handleEnrollClick}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              border: 'none',
              background: '#165DF5',
              color: '#FFFFFF',
              fontWeight: '600',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'background 0.2s ease'
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
