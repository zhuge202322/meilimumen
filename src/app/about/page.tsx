import React from 'react';
import Link from 'next/link';

export default function About() {
  const factoryPhotos = [
    '/images/factory/工厂照片/1.jpg',
    '/images/factory/工厂照片/2.jpg',
    '/images/factory/工厂照片/3.jpg',
    '/images/factory/工厂照片/4.jpg',
    '/images/factory/工厂照片/5.jpg',
    '/images/factory/团队 (4).jpg',
    '/images/factory/团队 (5).jpg',
  ];

  const certificates = [
    { name: 'CE Cert. - Integrated Kitchen Cabinets', file: 'bs476-cert.jpg' },
    { name: 'CE Test Report - Kitchen Cabinets EN14749', file: '整体橱柜衣柜CE证书实验报告-CTGS2507160641S  Integrated kitchen cabinets EN14749 - 副本.pdf' },
    { name: 'CE Cert. - Doors and Aluminum VCP', file: '门和铝合金CE-(72581)VCP-12235.pdf' },
    { name: 'CE Cert. - Doors and Aluminum TCGX', file: 'ul-cert.jpg' },
  ];

  return (
    <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-screen flex flex-col pt-0">
      
      {/* Hero Section (Dark Immersive) */}
      <section className="relative w-full h-[70vh] min-h-[600px] bg-[#050505] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax & Dark Overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img 
            src="/img/new-3.png" 
            alt="BrySun Factory" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#050505]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          <div className="font-label-caps text-xs text-[#BA1A1A] tracking-[0.3em] uppercase mb-6">About Us</div>
          <h1 className="font-headline-md text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-wide leading-tight mb-8">
            Beautiful Sunshine<br />Building Materials
          </h1>
          <p className="font-body-md text-lg text-white/80 tracking-wide uppercase border-t border-white/20 pt-8 inline-block">
            Quality Wooden Doors & Custom Home Solutions
          </p>
        </div>
      </section>

      {/* Our Story Section (Light) */}
      <section className="w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="order-2 lg:order-1 relative aspect-[4/5] w-full bg-[#1A1A1A] rounded-none overflow-hidden">
            <img 
              src="/images/factory/工厂照片/6.jpg" 
              alt="Craftsmanship" 
              className="w-full h-full object-cover opacity-90"
            />
            {/* Red Accent Block */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#BA1A1A] -z-10"></div>
            {/* Factory Label */}
            <div className="absolute top-4 right-4 bg-[#BA1A1A] text-white font-label-caps text-xs px-3 py-1.5 tracking-widest uppercase">
              factory
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="font-headline-md text-3xl md:text-4xl text-[#1A1A1A] uppercase tracking-widest mb-10 leading-snug">
              The warmth of<br/>Beautiful Sunset
            </h2>
            <div className="space-y-6 text-[#4A4A4A] font-body-md text-base leading-relaxed">
              <p>
                <strong>BrySun Factory</strong> takes its name from Beautiful Sunset—the warm, golden light that turns every house into a home.
              </p>
              <p>
                Born from a passion for craftsmanship and quality, we specialize in thoughtfully designed doors and building materials that bring durability, elegance, and natural warmth to spaces worldwide.
              </p>
              <p>
                For us, every door is more than a functional product; it is a quiet greeting at sunrise, a safe return at sunset, and a lasting piece of the life you build. We combine premium materials, precise engineering, and timeless aesthetics to create products trusted by homeowners, builders, and designers alike.
              </p>
              <p className="text-[#1A1A1A] font-bold text-lg pt-6 border-t border-gray-300 mt-6">
                At BrySun, we don't just supply doors—we bring the warmth of Beautiful Sunset into every home, one carefully crafted piece at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Factory & Craftsmanship Gallery (Dark Immersive) */}
      <section className="w-full bg-[#050505] text-white py-12 md:py-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <div className="font-label-caps text-xs text-[#BA1A1A] tracking-[0.2em] uppercase mb-4">Our Facilities</div>
              <h2 className="font-headline-md text-3xl md:text-4xl uppercase tracking-widest">Precision & Scale</h2>
            </div>
            <p className="text-white/60 max-w-md text-sm leading-relaxed">
              Our state-of-the-art manufacturing facilities combine advanced CNC engineering with multiple rounds of hand-sanding and eco-friendly coating.
            </p>
          </div>

          {/* Asymmetric Bento Grid for Factory Photos */}
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
            {/* Large Hero Image */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-[#1A1A1A] rounded-none">
              <img src="/images/factory/equipment-3.jpg" alt="Factory View" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            </div>
            
            {/* Top Right */}
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-[#1A1A1A] rounded-none h-[300px] md:h-auto">
              <img src={factoryPhotos[5]} alt="Team" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            </div>
            
            {/* Bottom Right 1 */}
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-[#1A1A1A] rounded-none h-[300px] md:h-auto">
              <img src="/images/factory/工厂环境/1.jpg" alt="Production" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            </div>
            
            {/* Bottom Right 2 */}
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-[#1A1A1A] rounded-none h-[300px] md:h-auto">
              <img src="/images/factory/工厂环境/2.jpg" alt="Details" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section (Light) */}
      <section className="w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24 pt-12 pb-2 md:py-32">
        <div className="text-center mb-8 md:mb-16">
          <div className="font-label-caps text-xs text-[#BA1A1A] tracking-[0.2em] uppercase mb-4">Quality Assurance</div>
          <h2 className="font-headline-md text-3xl md:text-4xl text-[#1A1A1A] uppercase tracking-widest">Certified Excellence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={`/images/certs/${cert.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 p-8 flex flex-col items-center text-center rounded-none hover:border-[#BA1A1A] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#EBEBEB] group-hover:bg-[#BA1A1A] flex items-center justify-center mb-6 transition-colors duration-300">
                <span className="material-symbols-outlined text-[#1A1A1A] group-hover:text-white text-2xl transition-colors duration-300">workspace_premium</span>
              </div>
              <h3 className="font-headline-md text-sm text-[#1A1A1A] uppercase tracking-wider leading-relaxed mb-4">
                {cert.name}
              </h3>
              <div className="mt-auto pt-6 w-full border-t border-gray-100 flex items-center justify-center text-xs font-label-caps tracking-widest text-[#6A6A6A] group-hover:text-[#BA1A1A] transition-colors">
                View Certificate <span className="material-symbols-outlined text-[14px] ml-1">arrow_forward</span>
              </div>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}