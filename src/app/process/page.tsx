"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const processes = [
  {
    num: "01",
    phase: "Pre-Production",
    title: "Estimating",
    icon: "calculate",
    desc: "According to customers’ door styles, sizes, materials and customized requirements, the factory calculates full costs including timber, hardware, labor, packaging and logistics and provides accurate quotations. Overseas clients suffer from inflated prices."
  },
  {
    num: "02",
    phase: "Pre-Production",
    title: "Design & Customization",
    icon: "design_services",
    desc: "Designers customize door structure, colors and processes and produce construction and renderings based on overseas building standards, local climates and customer aesthetics. Clients worry about non-compliant designs and big gap between renderings and real products. We adapt to international standards to ensure accurate design implementation."
  },
  {
    num: "03",
    phase: "Material & Production",
    title: "Material Selection",
    icon: "architecture",
    desc: "We strictly select imported solid wood, eco-friendly boards and branded hardware, verify material certificates, environmental indicators and moisture-proof performance, and keep samples after purchasing. Overseas clients face inferior materials, unqualified environmental standards and inconsistent materials. We ensure full material traceability and quality."
  },
  {
    num: "04",
    phase: "Material & Production",
    title: "Precision Production",
    icon: "precision_manufacturing",
    desc: "We conduct cutting, polishing, painting and assembly per confirmed drawings following foreign trade production standards to control flatness, tightness and paint quality. Overseas clients complain about rough workmanship, batch color difference and size errors. Standard assembly line operation ensures consistent batch product quality."
  },
  {
    num: "05",
    phase: "Inspection & Logistics",
    title: "Quality Inspection",
    icon: "fact_check",
    desc: "Full inspection is carried out on finished products to check size accuracy, paint integrity, hardware operation and moisture resistance, with batch sampling and official quality reports. Clients face unstrict inspection, defective mixed loading and no formal certificates. We implement 100% full inspection to eliminate defective products."
  },
  {
    num: "06",
    phase: "Inspection & Logistics",
    title: "Global Logistics",
    icon: "local_shipping",
    desc: "We adopt shockproof and moisture-proof export packaging, arrange customs declaration documents, cooperate with forwarders for booking and loading, and track logistics in real time. Clients suffer from package damage, customs delay and opaque logistics. Reinforced packaging, efficient customs clearance and real-time tracking ensure safe and on-time delivery."
  },
  {
    num: "07",
    phase: "After-Sales & Warranty",
    title: "After-Sales Support",
    icon: "support_agent",
    desc: "We provide after-sales support including installation guidance, parts replacement and quality warranty after goods arrival, and respond to overseas consultations and feedback timely. Clients face delayed cross-border after-sales service and inefficient problem solving. We offer exclusive after-sales docking with all-weather response for quick solutions."
  }
];

export default function ProcessPage() {
  const [revealed, setRevealed] = useState<boolean[]>(() => new Array(processes.length).fill(false));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idxAttr = entry.target.getAttribute('data-index');
          if (idxAttr === null) return;
          const idx = Number(idxAttr);
          if (entry.isIntersecting) {
            setRevealed((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-screen flex flex-col pt-10 pb-24">
      <main className="w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12 border-b border-gray-300 pb-6">
          <div className="max-w-4xl">
            <h1 className="font-headline-md text-3xl lg:text-5xl text-[#1A1A1A] uppercase tracking-widest mb-6">
              Our Process
            </h1>
            <p className="text-[#4A4A4A] text-lg leading-relaxed">
              Our factory delivers a complete export solution for doors, custom cabinets and all types of windows. Featuring accurate quotation, international custom design, premium material selection, standardized production, full quality inspection, professional logistics and 24/7 cross-border after-sales service, we ensure reliable and worry-free purchasing for global clients.
            </p>
          </div>
        </div>

        {/* Vertical Process Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform md:-translate-x-1/2 hidden md:block"></div>

          <div className="space-y-4 md:space-y-6">
            {processes.map((proc, index) => {
              const isEven = index % 2 === 0;
              const isRevealed = revealed[index];
              const fromLeft = !isEven;
              const hiddenTransform = fromLeft ? '-translate-x-24' : 'translate-x-24';
              const revealedClasses = 'translate-x-0 opacity-100';
              const hiddenClasses = `${hiddenTransform} opacity-0`;
              return (
                <div
                  key={index}
                  data-index={index}
                  ref={(el) => { itemRefs.current[index] = el; }}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >

                  {/* Timeline Dot (Center) */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 hidden md:flex border-4 border-[#EBEBEB] shadow-lg top-10">
                    <span className="material-symbols-outlined text-white text-xl">{proc.icon}</span>
                  </div>

                  {/* Content Box */}
                  <div
                    className={`w-full md:w-1/2 ${isEven ? 'md:pl-10 lg:pl-12' : 'md:pr-10 lg:pr-12'} transform transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isRevealed ? revealedClasses : hiddenClasses}`}
                  >
                    <div className="bg-white border-t-[3px] border-t-[#BA1A1A] border-l border-r border-b border-gray-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-8 md:p-10 group hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-500 ease-out relative text-[#1A1A1A]">

                      {/* Mobile Icon */}
                      <div className="md:hidden w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-6 shadow-md">
                        <span className="material-symbols-outlined text-white text-xl">{proc.icon}</span>
                      </div>

                      {/* Step Number Background */}
                      <div className="absolute top-4 right-6 font-headline-xl text-6xl md:text-8xl text-neutral-100 pointer-events-none select-none font-bold">
                        {proc.num}
                      </div>

                      <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#BA1A1A] mb-2 block">
                        {proc.phase}
                      </span>
                      <h2 className="font-headline-md text-2xl text-black mb-4 font-bold">{proc.title}</h2>

                      <p className="font-body-md text-[#555555] text-sm md:text-base leading-relaxed">
                        {proc.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="font-headline-md text-2xl md:text-3xl text-[#1A1A1A] mb-8">Ready to start your project?</h2>
          <Link href="/b2b-inquiry">
            <button className="bg-[#1A1A1A] text-white px-12 py-5 font-label-caps text-xs tracking-widest uppercase hover:bg-[#BA1A1A] transition-colors duration-300 inline-flex items-center gap-3 rounded-none">
              <span>Contact Us Today</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </Link>
        </div>

      </main>
    </div>
  );
}
