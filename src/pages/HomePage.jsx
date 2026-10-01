import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import CourseCatalog from '../components/CourseCatalog';
import Categories from '../components/Categories';
import GrowthStats from '../components/GrowthStats';
import Instructors from '../components/Instructors';
import CtaBanner from '../components/CtaBanner';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Featured');

  const handleHeroSearch = (query) => {
    setSearchQuery(query);
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    setSearchQuery('');
  };

  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero onSearch={handleHeroSearch} />
        <Partners />
        <CourseCatalog 
          searchQuery={searchQuery} 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />
        <Categories onSelectCategory={handleSelectCategory} />
        <GrowthStats />
        <Instructors />
        <CtaBanner />
        <Testimonials />
      </main>
      <Footer onSelectCategory={handleSelectCategory} />
    </div>
  );
}
