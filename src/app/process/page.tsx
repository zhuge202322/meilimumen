"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const processes = [
  {
    title: "Estimating",
    desc: "The process begins with a detailed estimation phase where we assess project needs, calculate material requirements, and estimate costs. This initial step ensures all aspects of the project are economically viable and resources are allocated efficiently.",
    icon: "calculate"
  },
  {
    title: "Design",
    desc: "During the design phase, we collaborate with architects and engineers to develop detailed plans and specifications for the project. This phase focuses on innovation, functionality, and ensuring the design meets all regulatory standards and client expectations.",
    icon: "design_services"
  },
  {
    title: "Planning and Sourcing",
    desc: "Planning and sourcing involve strategizing the procurement timeline and selecting suppliers who meet our criteria for quality, reliability, and sustainability. This step sets the foundation for a seamless flow of materials and services throughout the project lifecycle.",
    icon: "event_note"
  },
  {
    title: "Purchasing",
    desc: "With suppliers identified, the purchasing phase involves negotiating contracts, placing orders, and scheduling deliveries. Our aim is to secure the best prices while ensuring material availability aligns with project timelines.",
    icon: "shopping_cart_checkout"
  },
  {
    title: "Quality Control",
    desc: "Quality control is integral to our process. We inspect all materials and services for compliance with our stringent standards. This ensures that only the highest quality products are used, reducing the risk of defects and future maintenance.",
    icon: "fact_check"
  },
  {
    title: "Logistics",
    desc: "Our logistics team expertly manages the transportation and storage of materials. We ensure that logistics operations are streamlined to keep the project on schedule, with materials arriving safely and efficiently at their intended destinations.",
    icon: "local_shipping"
  },
  {
    title: "Customer Satisfaction",
    desc: "Finally, we focus on ensuring customer satisfaction through every phase of the project. Regular progress reports and meetings keep clients informed and involved. Upon project completion, we conduct thorough reviews and follow-ups to guarantee that the final outcome exceeds customer expectations and fosters lasting relationships.",
    icon: "thumb_up"
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
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-screen flex flex-col pt-[140px] pb-24">
      <main className="w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">

        {/* Header */}
        <div className="flex justify-between items-end mb-16 border-b border-gray-300 pb-6">
          <div className="max-w-4xl">
            <h1 className="font-headline-md text-3xl lg:text-5xl text-[#1A1A1A] uppercase tracking-widest mb-6">
              Our Process
            </h1>
            <p className="text-[#4A4A4A] text-lg leading-relaxed">
              Supply chain management is an essential process in multifamily construction projects. It involves the coordination of various activities and suppliers to ensure timely delivery of materials and services at the right costs. The following are the processes involved in supply chain management in a multifamily construction project.
            </p>
          </div>
        </div>

        {/* Vertical Process Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform md:-translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-24">
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
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >

                  {/* Timeline Dot (Center) */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 hidden md:flex border-4 border-[#EBEBEB] shadow-lg">
                    <span className="material-symbols-outlined text-white text-xl">{proc.icon}</span>
                  </div>

                  {/* Content Box */}
                  <div
                    className={`w-full md:w-1/2 ${isEven ? 'md:pl-20 lg:pl-24' : 'md:pr-20 lg:pr-24'} transform transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isRevealed ? revealedClasses : hiddenClasses}`}
                  >
                    <div className="bg-white p-8 md:p-10 ambient-shadow-sm border-t-4 border-[#BA1A1A] group hover:-translate-y-2 transition-transform duration-500 ease-out relative">

                      {/* Mobile Icon */}
                      <div className="md:hidden w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-6 shadow-md">
                        <span className="material-symbols-outlined text-white text-xl">{proc.icon}</span>
                      </div>

                      {/* Step Number Background */}
                      <div className="absolute top-4 right-6 font-headline-xl text-6xl md:text-8xl text-gray-100 opacity-50 pointer-events-none select-none font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <h3 className="font-headline-md text-2xl text-[#1A1A1A] mb-4 relative z-10">{proc.title}</h3>
                      <p className="font-body-md text-[#6A6A6A] leading-relaxed relative z-10">
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
        <div className="mt-32 text-center">
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
