"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    image: '/img/hnew-1.png',
    title: 'Crafting the Soul of Your Home',
    subtitle: 'BrySun | Global One-Stop Solutions for Custom Wood Doors, Windows & Whole-Home Joinery. Factory-direct, built for generations, designed for today.'
  },
  {
    image: '/img/hnew-2.jpg',
    title: 'Crafting the Soul of Your Home',
    subtitle: '30 years of global door and window experts, customized wardrobes, various decorative materials, providing comprehensive export solutions, one-stop export services.'
  },
  {
    image: '/img/hnew-3.jpg',
    title: 'Crafting the Soul of Your Home',
    subtitle: '批量集中进货，价格以5折作为优惠。 / Bulk purchasing with up to 50% off discount.'
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100svh] md:h-[calc(100vh-80px)] md:min-h-[600px] flex items-center justify-center px-4 md:px-margin-edge bg-surface-container-lowest overflow-hidden pt-20 md:pt-0">
      {/* Sliding and Fading Images Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
        {slides.map((slide, index) => {
          // Determine the position of the slide
          let transformStyle = 'translate-x-full opacity-0'; // Default: next slide, hidden
          
          if (index === currentIndex) {
            transformStyle = 'translate-x-0 opacity-80 scale-100'; // Current slide: visible, centered
          } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
            transformStyle = '-translate-x-full opacity-0 scale-95'; // Previous slide: moved left, hidden
          } else if (index === (currentIndex + 1) % slides.length) {
             transformStyle = 'translate-x-full opacity-0 scale-105'; // Next slide: moved right, hidden
          }

          return (
            <div 
              key={slide.image} 
              className={`absolute inset-0 w-full h-full transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${transformStyle}`}
            >
              {/* Using standard img tag instead of next/image to avoid optimization errors with large source files */}
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          );
        })}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface/90 md:from-surface/80 via-surface/40 md:via-surface/40 to-transparent z-10 pointer-events-none"></div>
      
      <div className="relative z-20 w-full max-w-[1800px] mx-auto px-4 md:px-16 lg:px-24 h-full flex flex-col justify-end pb-24 md:justify-center md:pb-0">
        <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0 transition-all duration-700">
          <h1 className="font-headline-xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-black mb-4 md:mb-6 leading-tight drop-shadow-2xl transition-all duration-1000">
            {slides[currentIndex].title}
          </h1>
          <p className="font-body-lg text-base sm:text-lg md:text-xl text-black/90 mb-8 md:mb-10 max-w-xl mx-auto md:mx-0 drop-shadow-md transition-all duration-1000 leading-relaxed">
            {slides[currentIndex].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/products">
              <button className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded ambient-shadow-hover hover:bg-primary/95 transition-all uppercase tracking-widest w-full sm:w-auto cursor-pointer">
                Explore Collections
              </button>
            </Link>
            <Link href="/b2b-inquiry">
              <button className="bg-transparent border-2 border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary hover:text-on-primary transition-all uppercase tracking-widest w-full sm:w-auto cursor-pointer">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ease-out cursor-pointer ${
              idx === currentIndex ? 'bg-primary scale-125 w-8' : 'bg-primary/30 hover:bg-primary/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}