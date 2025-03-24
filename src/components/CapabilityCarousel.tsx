import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Capability {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CapabilityCarouselProps {
  capabilities: Capability[];
}

const CapabilityCarousel: React.FC<CapabilityCarouselProps> = ({ capabilities }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= capabilities.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? Math.max(0, capabilities.length - itemsPerPage) : prevIndex - itemsPerPage
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const startX = touch.clientX;
    
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const diff = startX - touch.clientX;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };
    
    document.addEventListener('touchmove', handleTouchMove);
  };

  const visibleCapabilities = capabilities.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative w-full overflow-hidden">
      <div 
        ref={carouselRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-transform duration-500 ease-out"
        onTouchStart={handleTouchStart}
      >
        {visibleCapabilities.map((capability, index) => (
          <AnimatedSection
            key={index}
            delay={index * 100}
            className="bg-white p-8 rounded-2xl shadow-sm h-full"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-yunomi-beige rounded-full mb-6">
              {capability.icon}
            </div>
            <h3 className="text-xl font-medium mb-3">{capability.title}</h3>
            <p className="text-gray-600">{capability.description}</p>
          </AnimatedSection>
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-yunomi-brown" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-yunomi-brown" />
      </button>
      
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(capabilities.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerPage)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === Math.floor(currentIndex / itemsPerPage) ? 'bg-yunomi-brown' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CapabilityCarousel; 