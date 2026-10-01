import React from 'react';
import { categoriesData } from '../data/categoriesData';

export default function Categories({ onSelectCategory }) {
  const handleCategoryClick = (slug, name) => {
    if (onSelectCategory) {
      onSelectCategory(name);
    }
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="categories-section" id="categories">
      <div className="container">
        <div className="section-header-center">
          <h2 className="section-title">Explore Diverse Learning Paths<br />at Bytespace</h2>
          <p className="section-desc">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse courses span a variety of fields, ensuring there's something for everyone. Unleash your potential and explore your passions with us.
          </p>
        </div>

        <div className="categories-grid">
          {categoriesData.map((cat) => (
            <div 
              key={cat.slug} 
              className="category-card"
              onClick={() => handleCategoryClick(cat.slug, cat.name)}
              style={{ cursor: 'pointer' }}
            >
              <div className="category-icon-circle">
                <img src={cat.icon} alt={`${cat.name} Icon`} />
              </div>
              <h3 className="category-name">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
