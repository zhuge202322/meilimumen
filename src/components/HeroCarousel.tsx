"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const images = [
  '/img/1.png',
  '/img/7.png',
  '/img/9.png',
  '/img/15.png'
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center px-margin-edge bg-surface-container-lowest overflow-hidden">
      {/* Sliding and Fading Images Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
        {images.map((src, index) => {
          // Determine the position of the slide
          let transformStyle = 'translate-x-full opacity-0'; // Default: next slide, hidden
          
          if (index === currentIndex) {
            transformStyle = 'translate-x-0 opacity-80 scale-100'; // Current slide: visible, centered
          } else if (index === (currentIndex - 1 + images.length) % images.length) {
            transformStyle = '-translate-x-full opacity-0 scale-95'; // Previous slide: moved left, hidden
          } else if (index === (currentIndex + 1) % images.length) {
             transformStyle = 'translate-x-full opacity-0 scale-105'; // Next slide: moved right, hidden
          }

          return (
            <div 
              key={src} 
              className={`absolute inset-0 w-full h-full transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${transformStyle}`}
            >
              {/* Using standard img tag instead of next/image to avoid optimization errors with large source files */}
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          );
        })}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-surface/80 to-transparent z-10 pointer-events-none"></div>
      
      <div className="relative z-20 w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl pt-24 md:pt-0">
          <h1 className="font-headline-xl text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-black mb-6 leading-tight drop-shadow-2xl">
            Crafting the Soul of Your Home
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-black/90 mb-10 max-w-xl drop-shadow-md">
              Beautiful Sunshine Building Materials – Premium Solid Wood Solutions for Doors, Windows, and Storage. Built for generations, designed for today.
            </p>
          <div className="flex gap-4">
            <Link href="/products">
              <button className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded ambient-shadow-hover hover:bg-primary/95 transition-all uppercase tracking-widest">
                Explore Collections
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ease-out ${
              idx === currentIndex ? 'bg-primary scale-125 w-8' : 'bg-primary/30 hover:bg-primary/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}