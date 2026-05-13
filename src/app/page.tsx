import React from 'react';
import HeroCarousel from '@/components/HeroCarousel';
import ScrollArtGallery from '@/components/ScrollArtGallery';
import CraftsmanshipGallery from '@/components/CraftsmanshipGallery';
import GlobalPresence from '@/components/GlobalPresence';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body-md flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroCarousel />

        {/* Categories Section (Bento Grid) */}
        <section className="py-section-gap px-margin-edge bg-surface">
          <div className="max-w-container-max mx-auto">
            <div className="mb-16 text-center">
              <h2 className="font-headline-lg text-headline-lg text-black mb-2">Our Craftsmanship</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Discover our range of meticulously crafted solid wood elements, designed to elevate the architectural integrity of your spaces.</p>
            </div>
            
            <CraftsmanshipGallery />
            
          </div>
        </section>

        {/* Customization Service Component */}
        <section className="relative py-section-gap px-margin-edge bg-surface-container-low group">
          {/* Top Divider Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-[10px] bg-primary/10 overflow-hidden">
            <div className="w-full h-full bg-[#BA1A1A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[2000ms] ease-out"></div>
          </div>

          <div className="max-w-container-max mx-auto">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest mb-4 block uppercase">
                Our Service
              </span>
              <h2 className="font-headline-lg text-headline-lg text-black mb-6">Uncompromising Quality & Precision</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                At Beautiful Sunshine, customization is more than a service—it is a meticulous engineering process. 
                From raw timber selection to the final coat of protective finish, we subject every bespoke order to 
                strict multi-step quality control. We merge cutting-edge manufacturing technology with the irreplaceable 
                touch of master artisans to guarantee products that exceed CE certification standards.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-16">
              {/* Step 1: Material Selection */}
              <div className="flex flex-col items-center text-center p-8 bg-surface ambient-shadow transition-transform hover:-translate-y-1 border-t-4 border-primary">
                <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">forest</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Premium Materials</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Rigorous selection of sustainably sourced solid wood and high-grade aluminum alloys.</p>
              </div>
              
              {/* Step 2: Engineering */}
              <div className="flex flex-col items-center text-center p-8 bg-surface ambient-shadow transition-transform hover:-translate-y-1 border-t-4 border-primary">
                <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">architecture</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Precision Engineering</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Advanced CNC machining ensures absolute structural integrity and perfect joinery.</p>
              </div>
              
              {/* Step 3: Artisanal Finish */}
              <div className="flex flex-col items-center text-center p-8 bg-surface ambient-shadow transition-transform hover:-translate-y-1 border-t-4 border-primary">
                <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">imagesearch_roller</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Artisanal Finishing</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Multiple rounds of hand-sanding and eco-friendly coating for a flawless tactile surface.</p>
              </div>

              {/* Step 4: Quality Control */}
              <div className="flex flex-col items-center text-center p-8 bg-surface ambient-shadow transition-transform hover:-translate-y-1 border-t-4 border-primary">
                <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">fact_check</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Strict QC</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Comprehensive inspection against CE standards before secure international packaging.</p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/product-detail">
                <button className="bg-primary text-on-primary font-label-caps text-label-caps px-12 py-5 ambient-shadow-hover hover:bg-primary/95 transition-all tracking-widest uppercase">
                  Start Your Custom Order
                </button>
              </Link>
            </div>
          </div>
          
          {/* Bottom Divider Progress Bar (Reverse Direction) */}
          <div className="absolute bottom-0 left-0 w-full h-[10px] bg-primary/10 overflow-hidden">
            <div className="w-full h-full bg-[#BA1A1A] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-[2000ms] ease-out"></div>
          </div>
        </section>

        {/* Scroll Parallax Gallery */}
        <ScrollArtGallery />

        {/* Global Presence Section with Scroll Animations */}
        <GlobalPresence />

        <section className="relative py-section-gap px-margin-edge bg-[#050505] overflow-hidden">
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

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-headline-lg text-headline-lg text-white mb-4 drop-shadow-lg">Begin Your Bespoke Journey</h2>
            <p className="font-body-md text-body-md text-white/70 mb-10 drop-shadow">Let us help you bring your architectural vision to life. Share your project details below, and our specialists will reach out to schedule a private consultation.</p>
            
            <form className="grid grid-cols-1 gap-6 text-left ambient-shadow-lg p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-caps text-[10px] text-white/50 uppercase tracking-wider" htmlFor="inquiry-name">Name</label>
                  <input className="w-full bg-black/20 border border-white/10 p-4 focus:ring-1 focus:ring-[#BA1A1A]/50 focus:border-[#BA1A1A]/50 transition-all font-body-md text-white placeholder-white/30 outline-none" id="inquiry-name" placeholder="Enter your full name" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-[10px] text-white/50 uppercase tracking-wider" htmlFor="inquiry-email">Email</label>
                  <input className="w-full bg-black/20 border border-white/10 p-4 focus:ring-1 focus:ring-[#BA1A1A]/50 focus:border-[#BA1A1A]/50 transition-all font-body-md text-white placeholder-white/30 outline-none" id="inquiry-email" placeholder="email@example.com" type="email"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-[10px] text-white/50 uppercase tracking-wider" htmlFor="inquiry-message">Message</label>
                <textarea className="w-full bg-black/20 border border-white/10 p-4 focus:ring-1 focus:ring-[#BA1A1A]/50 focus:border-[#BA1A1A]/50 transition-all font-body-md text-white placeholder-white/30 outline-none" id="inquiry-message" placeholder="Tell us about your project..." rows={4}></textarea>
              </div>
              <div className="flex justify-center mt-6">
                <button className="bg-[#BA1A1A] text-white font-label-caps text-label-caps px-12 py-5 ambient-shadow-hover hover:brightness-110 transition-all tracking-widest uppercase w-full md:w-auto" type="submit">
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