import React from 'react';

export default function AboutUs() {
  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-edge bg-black text-white" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-headline-lg text-white mb-10 leading-relaxed text-2xl md:text-3xl lg:text-4xl font-bold">
          BrySun takes its name from Beautiful Sunset—the warm, golden light that turns every house into a home.
        </h2>
        
        <div className="space-y-8 text-white/80 font-body-lg text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
          <p className="text-center">
            Born from a passion for craftsmanship and quality, we are a factory-direct manufacturer specializing in thoughtfully designed wood doors, windows, and whole-home joinery. We combine in-house production capability with a global service mindset, bringing durability, elegance, and natural warmth to spaces worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}