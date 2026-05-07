"use client";

import React, { useState } from 'react';

const panels = [
  { id: 1, src: '/img/t1.jpg', title: 'Crafting Heritage' },
  { id: 2, src: '/img/t2.jpg', title: 'Precision Joinery' },
  { id: 3, src: '/img/t3.jpg', title: 'Premium Material' },
  { id: 4, src: '/img/t4.jpg', title: 'Flawless Finish' }
];

export default function ArtCarousel() {
  const [activePanel, setActivePanel] = useState(0);

  return (
    <div className="flex w-full h-full bg-surface-container overflow-hidden rounded-2xl shadow-lg">
      {panels.map((panel, index) => {
        const isActive = index === activePanel;
        
        return (
          <div
            key={panel.id}
            onMouseEnter={() => setActivePanel(index)}
            className={`relative h-full transition-[flex-basis] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer border-r border-outline-variant/30 last:border-r-0 ${
              isActive ? 'basis-[70%]' : 'basis-[10%]'
            }`}
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              {/* Force the image to cover the area without shrinking or breaking aspect ratio */}
              <img
                src={panel.src}
                alt={panel.title}
                className="w-full h-full object-cover object-center absolute inset-0"
                style={{ 
                  minWidth: '100%', 
                  minHeight: '100%'
                }}
              />
            </div>
            
            {/* Gradient Overlay */}
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 ${
                isActive ? 'opacity-100' : 'opacity-60'
              }`}
            />
            
            {/* Text Content - Expanded State */}
            <div 
              className={`absolute bottom-0 left-0 p-6 w-full flex items-end h-full transition-all duration-700 ${
                isActive ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-4 opacity-0 pointer-events-none'
              }`}
            >
              <h3 className="font-headline-lg text-headline-lg text-white whitespace-nowrap drop-shadow-md">
                {panel.title}
              </h3>
            </div>
            
            {/* Vertical Text - Collapsed State */}
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                isActive ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100 delay-150'
              }`}
            >
              <h3 className="font-label-caps text-label-caps text-white whitespace-nowrap -rotate-90 tracking-[0.3em] drop-shadow-md origin-center">
                {panel.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}