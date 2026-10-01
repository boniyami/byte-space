import React, { useState } from 'react';
import { coursesData } from '../data/coursesData';
import CourseCard from './CourseCard';
import CourseModal from './CourseModal';

export default function CourseCatalog({ searchQuery, selectedCategory, onSelectCategory }) {
  const [activeCategory, setActiveCategory] = useState(selectedCategory || 'Featured');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const pillsRow1 = [
    { label: 'Featured', value: 'Featured' },
    { label: 'Music', value: 'Music' },
    { label: 'Drawing & Painting', value: 'Drawing' },
    { label: 'Marketing', value: 'Marketing' },
    { label: 'Animation', value: 'Animation' },
    { label: 'Social Media', value: 'Social Media' },
    { label: 'UI/UX Design', value: 'UI/UX Design' },
    { label: 'Creative Marketing', value: 'Creative Marketing' }
  ];

  const pillsRow2 = [
    { label: 'Digital Illustration', value: 'Digital Illustration' },
    { label: 'Film & Video', value: 'Film' },
    { label: 'Crafts', value: 'Crafts' },
    { label: 'Freelance & Entrepreneurship', value: 'Freelance & Entrepreneurship' },
    { label: 'Graphic Design', value: 'Graphic Design' },
    { label: 'Photography', value: 'Photography' }
  ];

  const pillsRow3 = [
    { label: 'Productivity', value: 'Productivity' },
    { label: 'Web Development', value: 'Web Development' },
    { label: 'Data Science', value: 'Data Science' },
    { label: 'Cooking', value: 'Cooking' },
    { label: '+ More', value: 'all' }
  ];

  const currentCategory = selectedCategory !== undefined ? selectedCategory : activeCategory;

  const handlePillClick = (val) => {
    setActiveCategory(val);
    if (onSelectCategory) {
      onSelectCategory(val);
    }
  };

  const filteredCourses = coursesData.filter((course) => {
    // Search query filter
    if (searchQuery && searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = course.title.toLowerCase().includes(q);
      const matchAuthor = course.author.toLowerCase().includes(q);
      const matchCat = course.category.toLowerCase().includes(q);
      if (!matchTitle && !matchAuthor && !matchCat) return false;
    }

    // Category filter
    if (currentCategory === 'all' || currentCategory === 'Featured') {
      return true;
    }
    return course.category.toLowerCase().includes(currentCategory.toLowerCase());
  });

  return (
    <section className="courses-section" id="courses">
      <div className="container">
        <div className="section-header-center">
          <h2 className="section-title">Discover Your Passion,<br />Build Your Skills</h2>
          <p className="section-desc">
            At ByteSpace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Filter Pills 3 Rows */}
        <div className="filter-pills-container">
          <div className="pill-row">
            {pillsRow1.map((pill) => (
              <button
                key={pill.label}
                type="button"
                className={`filter-pill ${currentCategory === pill.value ? 'active' : ''}`}
                onClick={() => handlePillClick(pill.value)}
              >
                {pill.label}
              </button>
            ))}
          </div>

          <div className="pill-row">
            {pillsRow2.map((pill) => (
              <button
                key={pill.label}
                type="button"
                className={`filter-pill ${currentCategory === pill.value ? 'active' : ''}`}
                onClick={() => handlePillClick(pill.value)}
              >
                {pill.label}
              </button>
            ))}
          </div>

          <div className="pill-row">
            {pillsRow3.map((pill) => (
              <button
                key={pill.label}
                type="button"
                className={`filter-pill ${pill.value === 'all' ? 'pill-more' : ''} ${currentCategory === pill.value ? 'active' : ''}`}
                onClick={() => handlePillClick(pill.value)}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="course-grid" id="courseGrid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onSelectCourse={setSelectedCourse}
              />
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', color: '#6B7280' }}>
              <p style={{ fontSize: '18px', fontWeight: '600' }}>No courses found matching your criteria.</p>
              <button 
                type="button" 
                className="btn-lime-cta" 
                style={{ marginTop: '16px', display: 'inline-flex' }}
                onClick={() => handlePillClick('all')}
              >
                View All Courses
              </button>
            </div>
          )}
        </div>
      </div>

      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </section>
  );
}
