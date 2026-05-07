"use client";

import React, { useEffect, useRef, useState } from 'react';

const slides = [
  { 
    id: 2, 
    src: '/img/t2.jpg', 
    title: 'Heritage Meets Precision',
    subtitle: 'MODERN CRAFT',
    desc: "Today, our master craftsmen blend traditional heritage techniques with contemporary precision, ensuring every grain tells a story of longevity and refined elegance. We don't just build furniture; we create the heirlooms of tomorrow."
  },
  { 
    id: 3, 
    src: '/img/t3.jpg', 
    title: 'Uncompromising Material',
    subtitle: 'NATURES FINEST',
    desc: "We source only the highest grade solid woods and sustainable materials. Every piece of timber is carefully selected, aged, and treated to ensure absolute stability and a finish that grows more beautiful with time."
  },
  { 
    id: 4, 
    src: '/img/t4.jpg', 
    title: 'A Legacy of Excellence',
    subtitle: 'GLOBAL PRESENCE',
    desc: "From local beginnings to international recognition, our commitment to uncompromising quality remains unchanged. We continue to push the boundaries of what is possible in architectural woodwork."
  }
];

export default function ScrollArtGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress within the container
      const stickyTop = viewportHeight * 0.1; // corresponds to top-[10vh]
      const stickyElementHeight = viewportHeight * 0.8; // corresponds to h-[80vh]
      const totalScrollableDistance = rect.height - stickyElementHeight;
      const scrolledDistance = stickyTop - rect.top;
      
      if (scrolledDistance < 0) {
        setActiveIndex(0);
      } else if (scrolledDistance >= totalScrollableDistance) {
        setActiveIndex(slides.length - 1);
      } else {
        const progress = scrolledDistance / totalScrollableDistance;
        // Map progress (0 to 1) to slide index (0 to slides.length - 1)
        const newIndex = Math.min(
          slides.length - 1,
          Math.floor(progress * slides.length)
        );
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // The container height determines the total scroll distance. 
    // 250vh provides a smooth scroll distance for 3 slides.
    <div ref={containerRef} className="relative w-full h-[250vh] bg-[#050505]">
      {/* Full viewport sticky container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Dynamic Ambient Background Layer (Ambilight effect) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {slides.map((slide, index) => (
            <img
              key={`ambient-${slide.id}`}
              src={slide.src}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover blur-[100px] scale-150 transition-opacity duration-[1500ms] ease-in-out ${
                index === activeIndex ? 'opacity-50' : 'opacity-0'
              }`}
            />
          ))}
          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
        </div>

        {/* Main Content Box */}
        <div className="relative w-full max-w-[1400px] mx-auto px-8 md:px-[60px] h-[80vh] z-10">
          <div className="relative w-full h-full overflow-hidden ambient-shadow-lg border border-white/10">
          
          {/* Background Images */}
          {slides.map((slide, index) => {
            let yTransform = '0%';
            let zIndex = slides.length - index; // First image on top initially
            
            if (index < activeIndex) {
              yTransform = '-100%'; // Slide up and out completely
            }

            return (
              <div 
                key={`bg-${slide.id}`}
                className="absolute inset-0 w-full h-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.65,0,0.35,1)] will-change-transform"
                style={{ 
                  transform: `translateY(${yTransform})`,
                  zIndex: zIndex
                }}
              >
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              </div>
            );
          })}

          {/* Text Content overlay */}
          <div className="absolute inset-0 z-50 pointer-events-none flex items-center">
            <div className="w-full px-8 md:px-16 lg:px-24">
              <div className="max-w-2xl relative h-[300px]">
                {slides.map((slide, index) => {
                  const isActive = index === activeIndex;
                  const isPast = index < activeIndex;
                  
                  let opacity = 0;
                  let translateY = '60px'; // Initial state (below)
                  
                  if (isActive) {
                    opacity = 1;
                    translateY = '0px'; // Centered
                  } else if (isPast) {
                    opacity = 0;
                    translateY = '-60px'; // Moved up and out
                  }

                  return (
                    <div 
                      key={`text-${slide.id}`}
                      className={`absolute top-1/2 -translate-y-1/2 left-0 w-full transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'delay-300' : ''}`}
                      style={{ 
                        opacity,
                        transform: `translateY(calc(-50% + ${translateY}))`
                      }}
                    >
                      <span className="font-label-caps text-label-caps text-secondary-fixed-dim tracking-widest mb-4 block uppercase drop-shadow-md">
                        {slide.subtitle}
                      </span>
                      <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-white mb-6 drop-shadow-lg">
                        {slide.title}
                      </h2>
                      <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-surface-container mb-6 leading-relaxed drop-shadow-md">
                        {slide.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-8 left-0 w-full z-50 px-8 md:px-16 lg:px-24">
            <div className="w-full max-w-2xl h-[2px] bg-white/20 relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-[#BA1A1A] transition-all duration-700 ease-out"
                style={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between max-w-2xl mt-4">
              <span className="font-label-caps text-[10px] text-white/50 uppercase tracking-widest">Scroll to explore</span>
              <span className="font-label-caps text-[10px] text-white/50">{activeIndex + 1} / {slides.length}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  );
}