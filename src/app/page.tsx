"use client";

import React, { useState, useEffect } from 'react';
import HeroCarousel from '@/components/HeroCarousel';
import AboutUs from '@/components/AboutUs';
import ScrollArtGallery from '@/components/ScrollArtGallery';
import CraftsmanshipGallery from '@/components/CraftsmanshipGallery';
import GlobalPresence from '@/components/GlobalPresence';
import Link from 'next/link';

interface CapabilityCardProps {
  images: string[];
  phase: string;
  title: string;
  descriptions: string[];
}

function CapabilityCard({ images, phase, title, descriptions }: CapabilityCardProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleCardClick = () => {
    setIsLightboxOpen(true);
  };

  return (
    <>
      <div 
        onClick={handleCardClick}
        className="relative aspect-[16/10] bg-neutral-100 overflow-hidden shadow-lg group hover:shadow-xl transition-shadow cursor-pointer border border-gray-200 select-none"
      >
        {/* Images with transition */}
        {images.map((img, idx) => (
          <img 
            key={img}
            src={img} 
            alt={title} 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
              idx === currentIdx ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-105 pointer-events-none'
            } group-hover:scale-110`}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent pointer-events-none z-10"></div>
        
        {/* Top Indicators */}
        <div className="absolute top-6 left-6 flex gap-1.5 z-20 bg-black/10 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
          {images.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIdx ? 'w-5 bg-[#E6A23C]' : 'w-1.5 bg-white/40'}`}
            />
          ))}
        </div>

        {/* Caption Content */}
        <div className="absolute bottom-6 left-6 right-16 z-10 text-left pointer-events-none">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#E6A23C] mb-1.5 block">
            {phase}
          </span>
          <h3 className="text-lg md:text-2xl font-bold text-white leading-snug">
            {title}<br/>
            <span className="text-sm md:text-base text-white/75 font-normal transition-all duration-300 block mt-1">
              {descriptions[currentIdx]}
            </span>
          </h3>
        </div>

        {/* Left Arrow Button */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 hover:scale-110 active:scale-95 border border-white/5 shadow-md"
          aria-label="Previous image"
        >
          <span className="material-symbols-outlined text-[16px] -mr-0.5">arrow_back_ios_new</span>
        </button>
        
        {/* Right Arrow Button */}
        <button 
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 hover:scale-110 active:scale-95 border border-white/5 shadow-md"
          aria-label="Next image"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_forward_ios</span>
        </button>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300 animate-fade-in"
        >
          {/* Close button */}
          <button 
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#BA1A1A] hover:text-white text-white rounded-full flex items-center justify-center transition-all duration-300 z-50 border border-white/10"
            aria-label="Close lightbox"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          {/* Left Arrow inside Lightbox */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-12 bg-white/5 hover:bg-[#BA1A1A] hover:text-white text-white flex items-center justify-center transition-all duration-300 z-50 border border-white/10"
            aria-label="Previous image"
          >
            <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
          </button>

          {/* Active Image */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center justify-center select-none"
          >
            <img 
              src={images[currentIdx]} 
              alt={title} 
              className="max-w-full max-h-[70vh] object-contain shadow-2xl border border-white/10 bg-black/40"
            />
            {/* Legend inside Lightbox */}
            <div className="mt-4 text-center text-white/90 max-w-2xl px-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E6A23C] mb-1 block">
                {phase}
              </span>
              <p className="text-lg md:text-xl font-bold">{title}</p>
              <p className="text-sm text-white/60 mt-1">{descriptions[currentIdx]}</p>
            </div>
          </div>

          {/* Right Arrow inside Lightbox */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIdx((prev) => (prev + 1) % images.length);
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-12 bg-white/5 hover:bg-[#BA1A1A] hover:text-white text-white flex items-center justify-center transition-all duration-300 z-50 border border-white/10"
            aria-label="Next image"
          >
            <span className="material-symbols-outlined text-xl">arrow_forward_ios</span>
          </button>
        </div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body-md flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroCarousel />

        {/* 1. About Us */}
        <AboutUs />

        {/* 2. Products Section (Bento Grid) */}
        <section className="py-16 md:py-section-gap px-4 md:px-margin-edge bg-surface-container-low" id="products">
          <div className="max-w-container-max mx-auto">
            <div className="mb-16 text-center">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest mb-4 block uppercase text-lg">
                Our Collections
              </span>
              <h2 className="font-headline-xl text-5xl md:text-7xl text-black mb-6">Products</h2>
              <p className="font-body-lg text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">Explore our factory-direct collection of custom solid wood solutions, built to elevate every detail of your home.</p>
            </div>
            
            <CraftsmanshipGallery />
            
          </div>
        </section>

        {/* 3. Our Service / Customization Service */}
        <section className="relative py-16 md:py-section-gap px-4 md:px-margin-edge bg-surface-container-low group" id="service">
          {/* Top Divider Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-[10px] bg-primary/10 overflow-hidden">
            <div className="w-full h-full bg-[#BA1A1A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[2000ms] ease-out"></div>
          </div>
          <div className="max-w-container-max mx-auto">
            <div className="mb-16 text-center max-w-4xl mx-auto">
              <span className="font-label-caps text-secondary tracking-widest mb-4 block uppercase text-lg">
                Factory Capability
              </span>
              <h2 className="font-headline-xl text-5xl md:text-7xl text-black mb-6">Uncompromising Quality & Precision</h2>
              <p className="font-body-lg text-2xl md:text-3xl text-on-surface-variant leading-relaxed text-center">
                At BrySun, customization is more than a service—it is a factory-controlled process. From raw timber selection to the final protective finish, every bespoke order undergoes strict multi-step quality control. We merge cutting-edge manufacturing technology with master craftsmanship to deliver products that exceed CE and international standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <CapabilityCard 
                images={['/images/factory/exhibition/4.jpg', '/images/factory/exhibition/3.jpg']}
                phase="Showroom"
                title="Premium Product Showroom"
                descriptions={[
                  'Bespoke wooden doors & whole-home joinery showcase',
                  'Detailed craftsmanship and custom door panel designs'
                ]}
              />

              <CapabilityCard 
                images={['/images/factory/exhibition/7.jpg', '/images/factory/exhibition/8.jpg']}
                phase="Showroom"
                title="Whole-Home Joinery Showroom"
                descriptions={[
                  'Immersive craftsmanship detailing & material gallery',
                  'Bespoke cabinetry and integration display'
                ]}
              />

              <CapabilityCard 
                images={['/images/factory/visit/1.jpg', '/images/factory/visit/展会和外国接待  (14).jpg']}
                phase="Exhibition"
                title="Global Industry Exhibition"
                descriptions={[
                  'Showcasing premium custom wood doors & windows worldwide',
                  'Engaging with international delegates and builders'
                ]}
              />

              <CapabilityCard 
                images={['/images/factory/visit/2.jpg', '/images/factory/visit/展会和外国接待  (15).jpg']}
                phase="Exhibition"
                title="International Client Consultations"
                descriptions={[
                  'Strategic trade consultations & negotiations with global builders',
                  'Introducing custom hardware and whole-home options to clients'
                ]}
              />
            </div>

            <div className="flex justify-center mt-12">
              <Link href="/product-detail">
                <button className="bg-primary text-on-primary font-label-caps text-base md:text-lg px-12 py-5 ambient-shadow-hover hover:bg-primary/95 transition-all tracking-widest uppercase">
                  Explore our factory-direct collection of custom solid wood solutions, built to elevate every detail of your home.
                </button>
              </Link>
            </div>
          </div>

          {/* Bottom Divider Progress Bar (Reverse Direction) */}
          <div className="absolute bottom-0 left-0 w-full h-[10px] bg-primary/10 overflow-hidden">
            <div className="w-full h-full bg-[#BA1A1A] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-[2000ms] ease-out"></div>
          </div>
        </section>

        {/* 4. Project (Portfolio Preview) */}
        <ScrollArtGallery />

        {/* 5. Global Presence */}
        <GlobalPresence />

        {/* 6. Contact Us / Inquiry Form */}
        <section className="relative py-16 md:py-section-gap px-4 md:px-margin-edge bg-[#050505] overflow-hidden" id="contact">
          {/* Dynamic Ambient Background Layer */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80" 
              alt="Ambient Background" 
              className="absolute inset-0 w-full h-full object-cover blur-[100px] scale-150 opacity-40 animate-pulse"
              style={{ animationDuration: '8s' }}
            />
            {/* Dark cinematic overlay */}
            <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
            {/* Subtle red glow to match the theme */}
            <div className="absolute bottom-[-10%] right-[10%] w-[50%] h-[50%] bg-[#BA1A1A] rounded-full blur-[120px] opacity-20 mix-blend-screen animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="font-label-caps text-[#BA1A1A] tracking-widest mb-4 block uppercase text-xl md:text-2xl drop-shadow-md">
              Get In Touch
            </span>
            <h2 className="font-headline-xl text-6xl md:text-8xl text-white mb-6 drop-shadow-lg">Contact Us</h2>
            <p className="font-body-lg text-2xl md:text-3xl text-white/80 mb-12 drop-shadow max-w-3xl mx-auto">Let us help you bring your architectural vision to life. Share your project details below, and our specialists will reach out to schedule a private consultation.</p>
            
            <form className="grid grid-cols-1 gap-6 text-left ambient-shadow-lg p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-caps text-base text-white/70 uppercase tracking-wider" htmlFor="inquiry-name">Name</label>
                  <input className="w-full bg-black/20 border border-white/10 p-4 focus:ring-1 focus:ring-[#BA1A1A]/50 focus:border-[#BA1A1A]/50 transition-all font-body-md text-lg text-white placeholder-white/30 outline-none" id="inquiry-name" placeholder="Enter your full name" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-base text-white/70 uppercase tracking-wider" htmlFor="inquiry-email">Email</label>
                  <input className="w-full bg-black/20 border border-white/10 p-4 focus:ring-1 focus:ring-[#BA1A1A]/50 focus:border-[#BA1A1A]/50 transition-all font-body-md text-lg text-white placeholder-white/30 outline-none" id="inquiry-email" placeholder="email@example.com" type="email"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-base text-white/70 uppercase tracking-wider" htmlFor="inquiry-message">Message</label>
                <textarea className="w-full bg-black/20 border border-white/10 p-4 focus:ring-1 focus:ring-[#BA1A1A]/50 focus:border-[#BA1A1A]/50 transition-all font-body-md text-lg text-white placeholder-white/30 outline-none" id="inquiry-message" placeholder="Tell us about your project..." rows={4}></textarea>
              </div>
              <div className="flex justify-center mt-6">
                <button className="bg-[#BA1A1A] text-white font-label-caps text-base md:text-lg px-12 py-5 ambient-shadow-hover hover:brightness-110 transition-all tracking-widest uppercase w-full md:w-auto" type="submit">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}