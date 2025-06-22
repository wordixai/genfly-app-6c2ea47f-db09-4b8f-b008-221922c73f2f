import React from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductCategories from '../components/ProductCategories';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import CompanyNews from '../components/CompanyNews';
import FeatureIcons from '../components/FeatureIcons';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      <div className="flex flex-col min-h-screen">
        <div>
          <Header />
        </div>
        <main className="flex-grow">
          <div className="flex flex-col">
            <HeroCarousel />
            <FeaturedProducts />
            <ProductCategories />
            <AboutSection />
            <Testimonials />
            <CompanyNews />
            <FeatureIcons />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;