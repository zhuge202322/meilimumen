import React from 'react';

export default function AboutUs() {
  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-edge bg-surface" id="about">
      <div className="max-w-3xl mx-auto text-center">
        <span className="font-label-caps text-label-caps text-secondary tracking-widest mb-4 block uppercase">
          About Us
        </span>
        <h2 className="font-headline-lg text-headline-lg text-black mb-10 leading-tight">
          BrySun takes its name from Beautiful Sunset—the warm, golden light that turns every house into a home.
        </h2>
        
        <div className="space-y-6 text-on-surface-variant font-body-lg text-lg md:text-xl leading-relaxed">
          <p>
            Born from a passion for craftsmanship and quality, we specialize in thoughtfully designed doors and building materials that bring durability, elegance, and natural warmth to spaces worldwide.
          </p>
          <p>
            For us, every door is more than a functional product; it is a quiet greeting at sunrise, a safe return at sunset, and a lasting piece of the life you build. We combine premium materials, precise engineering, and timeless aesthetics to create products trusted by homeowners, builders, and designers alike.
          </p>
          <p>
            At BrySun, we don't just supply doors—we bring the warmth of Beautiful Sunset into every home, one carefully crafted piece at a time.
          </p>
        </div>
      </div>
    </section>
  );
}