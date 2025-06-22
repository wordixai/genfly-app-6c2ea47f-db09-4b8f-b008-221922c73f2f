import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=1920&h=800&fit=crop',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=800&fit=crop'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[200px] md:h-[300px] lg:h-[600px]">
      <div className="relative w-full h-full bg-gray-300">
        <div className="w-full h-full">
          <div className="relative w-full h-full overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
                  index === currentSlide ? 'translate-x-0' : 
                  index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                }`}
              >
                <img
                  src={slide}
                  alt="Hero Section"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 p-3 bg-black/20 hover:bg-black/50 text-white hover:text-white border border-white/30 backdrop-blur-sm rounded-full shadow-lg focus:outline-none transition-all duration-300 ease-in-out"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 p-3 bg-black/20 hover:bg-black/50 text-white hover:text-white border border-white/30 backdrop-blur-sm rounded-full shadow-lg focus:outline-none transition-all duration-300 ease-in-out"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;