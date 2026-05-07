"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function GlobalPresence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Accurate Equirectangular projection coordinates for a 2:1 aspect ratio map
  const targetCities = [
    { id: 'ny', name: 'New York', top: '27.4%', left: '29.4%', isHub: false },
    { id: 'la', name: 'Los Angeles', top: '31.1%', left: '17.2%', isHub: false },
    { id: 'lon', name: 'London', top: '21.4%', left: '50.0%', isHub: false },
    { id: 'par', name: 'Paris', top: '22.9%', left: '50.6%', isHub: true }, // Main Hub
    { id: 'ber', name: 'Berlin', top: '20.8%', left: '53.7%', isHub: false },
    { id: 'bra', name: 'São Paulo', top: '65.5%', left: '33.3%', isHub: false },
    { id: 'sa', name: 'Riyadh', top: '42.6%', left: '61.7%', isHub: false },
    { id: 'sg', name: 'Singapore', top: '51.3%', left: '78.8%', isHub: false },
  ];

  // Connections radiating from Paris (Hub)
  const connections = [
    { from: 'par', to: 'ny' },
    { from: 'par', to: 'la' },
    { from: 'par', to: 'lon' },
    { from: 'par', to: 'ber' },
    { from: 'par', to: 'bra' },
    { from: 'par', to: 'sa' },
    { from: 'par', to: 'sg' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Only trigger once
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-section-gap px-margin-edge bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Title and Text - Slides in from left */}
          <div 
            className={`lg:col-span-5 text-left transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
            }`}
          >
            <h2 className="font-headline-xl text-headline-xl text-primary mb-6">Global Presence</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              From our roots in traditional European craftsmanship to a presence in the world's design capitals, 
              Beautiful Sunshine serves a global clientele of architects and visionaries.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="text-headline-md text-primary font-bold w-16">12</div>
                <div className="font-label-caps text-on-secondary-container tracking-widest uppercase">International Studios</div>
              </div>
              <div className="w-full h-[1px] bg-primary/10"></div>
              <div className="flex items-center gap-4">
                <div className="text-headline-md text-primary font-bold w-16">45+</div>
                <div className="font-label-caps text-on-secondary-container tracking-widest uppercase">Countries Served</div>
              </div>
              <div className="w-full h-[1px] bg-primary/10"></div>
              <div className="flex items-center gap-4">
                <div className="text-headline-md text-primary font-bold w-16">3</div>
                <div className="font-label-caps text-on-secondary-container tracking-widest uppercase">Regional Hubs</div>
              </div>
            </div>
          </div>

          {/* Right Side: Map/Visual - Slides in from right */}
          <div 
            className={`lg:col-span-7 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
            }`}
          >
            <div className="relative bg-[#0a0a0a] p-0 ambient-shadow overflow-hidden group rounded-none border border-white/5">
              {/* Using a 2:1 aspect ratio to perfectly match the standard Equirectangular world map projection */}
              <div className="aspect-[2/1] w-full bg-[#0a0a0a] relative overflow-hidden">
                
                {/* Custom Dark Theme World Map SVG */}
                <svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 1000 500" preserveAspectRatio="none">
                  <image href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" width="100%" height="100%" filter="invert(1) hue-rotate(180deg) brightness(0.4) contrast(1.2)" />
                </svg>

                {/* Regional Red Highlights (Abstract shapes behind the map) */}
                <div className="absolute top-[20%] left-[15%] w-[20%] h-[30%] bg-[#BA1A1A] rounded-full blur-[60px] opacity-30 mix-blend-screen"></div>
                <div className="absolute top-[50%] left-[28%] w-[15%] h-[30%] bg-[#BA1A1A] rounded-full blur-[50px] opacity-30 mix-blend-screen"></div>
                <div className="absolute top-[15%] left-[45%] w-[15%] h-[20%] bg-[#BA1A1A] rounded-full blur-[40px] opacity-40 mix-blend-screen"></div>
                
                {/* SVG Overlay for Connection Arcs */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ filter: 'drop-shadow(0 0 4px rgba(186, 26, 26, 0.5))' }}>
                  {connections.map((conn, idx) => {
                    const fromCity = targetCities.find(c => c.id === conn.from);
                    const toCity = targetCities.find(c => c.id === conn.to);
                    if (!fromCity || !toCity) return null;

                    // Convert percentage strings to numeric values for SVG paths
                    const x1 = parseFloat(fromCity.left);
                    const y1 = parseFloat(fromCity.top);
                    const x2 = parseFloat(toCity.left);
                    const y2 = parseFloat(toCity.top);

                    // Calculate control point for the quadratic bezier curve to make it arc upwards
                    const cx = (x1 + x2) / 2;
                    // The arc height depends on the distance, minus a factor to curve upwards
                    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                    const cy = Math.min(y1, y2) - (distance * 0.3);

                    // Generate a unique ID for the animation
                    const animId = `draw-line-${idx}`;

                    return (
                      <g key={idx}>
                        {/* Static subtle background path */}
                        <path 
                          d={`M ${x1}% ${y1}% Q ${cx}% ${cy}% ${x2}% ${y2}%`} 
                          fill="none" 
                          stroke="rgba(186, 26, 26, 0.15)" 
                          strokeWidth="1"
                        />
                        {/* Animated bright path */}
                        <path 
                          id={`path-${idx}`}
                          d={`M ${x1}% ${y1}% Q ${cx}% ${cy}% ${x2}% ${y2}%`} 
                          fill="none" 
                          stroke="#BA1A1A" 
                          strokeWidth="1.5"
                          strokeDasharray="1000"
                          strokeDashoffset={isVisible ? "0" : "1000"}
                          className="transition-all ease-in-out"
                          style={{ transitionDuration: '2s', transitionDelay: `${800 + (idx * 200)}ms` }}
                        />
                        {/* Flying particle along the path */}
                        {isVisible && (
                          <circle r="1.5" fill="#BA1A1A" filter="drop-shadow(0 0 2px #BA1A1A)">
                            <animateMotion 
                              href={`#path-${idx}`}
                              dur="3s" 
                              begin={`${1 + (idx * 0.5)}s`} 
                              repeatCount="indefinite" 
                              keyPoints="0;1" 
                              keyTimes="0;1" 
                              calcMode="linear"
                            />
                          </circle>
                        )}
                      </g>
                    );
                  })}
                </svg>
                
                {/* Cities Layer */}
                <div className="absolute inset-0 z-20">
                  <div className="relative w-full h-full">
                    {targetCities.map((city, index) => (
                      <div 
                        key={index} 
                        className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 group/marker" 
                        style={{ top: city.top, left: city.left }}
                      >
                        <div className="relative flex items-center justify-center cursor-pointer">
                          {/* Flashing animation layer */}
                          <div className={`w-4 h-4 bg-[#BA1A1A] rounded-full animate-ping absolute opacity-80 ${city.isHub ? 'w-6 h-6' : ''}`}></div>
                          {/* Solid center dot */}
                          <div className={`bg-[#BA1A1A] rounded-full relative z-10 shadow-[0_0_8px_rgba(186,26,26,0.8)] ${city.isHub ? 'w-2 h-2' : 'w-1.5 h-1.5'}`}></div>
                        </div>
                        {/* City Name Label */}
                        <span className="font-label-caps text-[9px] mt-1 font-bold text-white/80 opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap drop-shadow-md">
                          {city.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
