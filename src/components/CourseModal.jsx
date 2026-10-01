import React from 'react';
import { useCart } from '../context/CartContext';

export default function CourseModal({ course, onClose }) {
  const { addToCart } = useCart();
  if (!course) return null;

  return (
    <div className="course-modal-overlay active" onClick={onClose}>
      <div className="course-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">✕</button>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          <img 
            src={course.image} 
            alt={course.title} 
            style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '14px' }} 
          />
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
              <span className="overlay-tag" style={{ background: '#EEF2FF', color: '#165DF5' }}>{course.category}</span>
              <span className="overlay-tag" style={{ background: '#F3F4F6', color: '#374151' }}>{course.level}</span>
              <span className="overlay-tag" style={{ background: '#FEF9C3', color: '#854D0E' }}>★ {course.rating}</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px', color: '#111827' }}>{course.title}</h2>
            <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
              Master high-demand skills in {course.category} with comprehensive step-by-step guidance from {course.author}. Includes hands-on projects, lifetime resource downloads, and active mentor feedback.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #E5E7EB' }}>
              <div>
                <span style={{ fontSize: '28px', fontWeight: '800', color: '#111827' }}>{course.price}</span>
                <span style={{ fontSize: '14px', color: '#6B7280' }}> / lifetime access</span>
              </div>
              <button 
                className="btn-lime-cta"
                onClick={() => {
                  addToCart(course);
                  onClose();
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
