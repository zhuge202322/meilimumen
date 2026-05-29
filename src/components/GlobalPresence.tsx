"use client";

import React, { useEffect, useRef, useState } from 'react';

interface CountryMapData {
  name: string;
  lat: number;
  lng: number;
  zoom: number;
}

const countries: CountryMapData[] = [
  { name: "India", lat: 20.5937, lng: 78.9629, zoom: 5 },
  { name: "United States", lat: 37.0902, lng: -95.7129, zoom: 4 },
  { name: "Brazil", lat: -14.2350, lng: -51.9253, zoom: 4 },
  { name: "Pakistan", lat: 30.3753, lng: 69.3451, zoom: 5 },
  { name: "Nigeria", lat: 9.0820, lng: 8.6753, zoom: 5 },
  { name: "Bangladesh", lat: 23.6850, lng: 90.3563, zoom: 6 },
  { name: "Russia", lat: 55.7558, lng: 37.6173, zoom: 4 },
  { name: "Mexico", lat: 23.6345, lng: -102.5528, zoom: 5 }, // Leaflet expects [lat, lng]
  { name: "Japan", lat: 36.2048, lng: 138.2529, zoom: 5 },
  { name: "Philippines", lat: 12.8797, lng: 121.7740, zoom: 5 },
  { name: "Ethiopia", lat: 9.1450, lng: 40.4897, zoom: 5 },
  { name: "Egypt", lat: 26.8206, lng: 30.8025, zoom: 5 },
  { name: "Vietnam", lat: 14.0583, lng: 108.2772, zoom: 5 },
  { name: "Germany", lat: 51.1657, lng: 10.4515, zoom: 6 },
  { name: "France", lat: 46.2276, lng: 2.2137, zoom: 6 },
  { name: "Italy", lat: 41.8719, lng: 12.5674, zoom: 6 },
];

export default function GlobalPresence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);
  const markersRef = useRef<{ [key: number]: any }>({});
  
  const [isVisible, setIsVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number>(1); // Default to United States (index 1)
  const [L, setL] = useState<any>(null);

  // 1. Dynamic Load Leaflet Assets from CDN (SSR Safe)
  useEffect(() => {
    const cssId = 'leaflet-css';
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    const scriptId = 'leaflet-js';
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement;

    const initLeaflet = () => {
      if ((window as any).L) {
        setL((window as any).L);
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = initLeaflet;
      document.body.appendChild(script);
    } else {
      if ((window as any).L) {
        initLeaflet();
      } else {
        existingScript.addEventListener('load', initLeaflet);
      }
    }

    // Set Intersection Observer for reveal animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // 2. Initialize Leaflet Map
  useEffect(() => {
    if (!L || !mapContainerRef.current || leafletMapRef.current) return;

    // Create Map Instance
    const map = L.map(mapContainerRef.current, {
      zoomControl: true,
      scrollWheelZoom: false, // Prevent page scrolling hijacking
      attributionControl: true
    }).setView([30, 0], 2);

    // Add Premium Clean Light Layer (CartoDB Positron)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 18
    }).addTo(map);

    leafletMapRef.current = map;

    // Add custom markers for all countries
    const markerGroup = L.featureGroup().addTo(map);
    const markersMap: { [key: number]: any } = {};

    countries.forEach((c, idx) => {
      // High-End Custom HTML/CSS Marker
      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker-wrapper',
        html: `
          <div class="relative flex items-center justify-center pointer-events-none" style="width: 24px; height: 24px;">
            <span class="absolute inline-flex h-6 w-6 rounded-full bg-[#BA1A1A]/35 animate-ping"></span>
            <span class="relative block h-3 w-3 rounded-full bg-[#BA1A1A] border border-white shadow-md"></span>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const marker = L.marker([c.lat, c.lng], { icon: customIcon })
        .bindPopup(`
          <div class="font-body-md text-slate-800 p-1 text-center select-none" style="min-width: 120px;">
            <strong class="font-headline-sm text-sm text-[#BA1A1A] block mb-1 uppercase tracking-wider">${c.name}</strong>
            <span class="text-[11px] text-gray-500 leading-relaxed block">Proudly delivering premium bespoke joinery, windows and doors.</span>
          </div>
        `, { closeButton: false })
        .addTo(markerGroup);

      markersMap[idx] = marker;

      // Click marker to update active index in list
      marker.on('click', () => {
        setActiveIdx(idx);
      });
    });

    markersRef.current = markersMap;

    // Initial camera movement to the default country (United States)
    const initialTarget = countries[activeIdx];
    map.setView([initialTarget.lat, initialTarget.lng], initialTarget.zoom);
    setTimeout(() => {
      if (markersMap[activeIdx]) markersMap[activeIdx].openPopup();
    }, 800);

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, [L]);

  // 3. Smooth Camera Flight on Active Index Change
  useEffect(() => {
    if (!leafletMapRef.current || !L) return;

    const target = countries[activeIdx];
    
    // Fly to the clicked country smoothly
    leafletMapRef.current.flyTo([target.lat, target.lng], target.zoom, {
      animate: true,
      duration: 1.5
    });

    // Open target popup after flight is complete
    const timer = setTimeout(() => {
      const marker = markersRef.current[activeIdx];
      if (marker && leafletMapRef.current) {
        marker.openPopup();
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [activeIdx, L]);

  const handleCountryClick = (idx: number) => {
    setActiveIdx(idx);
  };

  return (
    <section ref={containerRef} className="py-16 md:py-section-gap px-4 md:px-margin-edge bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="font-label-caps text-secondary tracking-widest mb-4 block uppercase text-lg">
            Global Network
          </span>
          <h2 className="font-headline-xl text-5xl md:text-6xl text-black mb-6">Global Presence</h2>
          <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
            Discover our strong partnerships and customized project implementations across major global markets. Click any country in the grid to fly the camera there.
          </p>
        </div>

        {/* Dynamic Leaflet Map & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Real Leaflet Map Container */}
          <div 
            className={`lg:col-span-7 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
            }`}
          >
            <div 
              ref={mapContainerRef}
              className="relative w-full h-[350px] md:h-[500px] bg-[#AAD3DF] border border-gray-200/50 shadow-lg z-10"
              style={{ minHeight: '350px' }}
            >
              {!L && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-20">
                  <div className="animate-spin w-8 h-8 border-4 border-[#BA1A1A] border-t-transparent rounded-full mb-3"></div>
                  <span className="font-body-md text-xs text-gray-500 tracking-wider uppercase">Loading Geographic Map...</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Products Sell Well Grid Panel */}
          <div 
            className={`lg:col-span-5 flex flex-col justify-between transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
            }`}
          >
            <div className="w-full bg-white border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
              {/* Table Header */}
              <div className="bg-[#1A1A1A] text-white py-4 px-6 text-center font-bold tracking-widest font-label-caps uppercase text-xs md:text-sm border-b-2 border-[#BA1A1A] select-none">
                Products Sell Well All Over The World
              </div>

              {/* 4x4 Grid Matrix */}
              <div className="grid grid-cols-4 flex-grow bg-gray-50/50">
                {countries.map((c, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleCountryClick(idx)}
                      className={`h-16 md:h-20 lg:h-auto flex items-center justify-center font-body-md text-xs md:text-sm border border-gray-100 transition-all duration-300 outline-none ${
                        isActive 
                          ? 'bg-[#BA1A1A] text-white font-bold border-[#BA1A1A] z-20 shadow-md scale-100' 
                          : 'bg-white text-gray-700 hover:bg-[#FDF2F2] hover:text-[#BA1A1A] hover:z-20'
                      }`}
                    >
                      <span className="text-center px-1 truncate leading-tight">{c.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Factory Strength Stats Section */}
        <div className="mt-16 bg-[#111111] border border-white/15 p-8 md:p-12 relative overflow-hidden">
          {/* Subtle geometric luxury background details */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/2 opacity-5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#BA1A1A]/5 opacity-5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10 items-center">
            
            {/* Stat 1: Diamond */}
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-md">
                <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-[#E6A23C] leading-none mb-1">21+</span>
                <span className="text-xs md:text-sm text-white/90 font-medium tracking-wide">
                  Years Experience <span className="text-white/60 text-xs block md:inline md:ml-1 font-normal">年经验</span>
                </span>
              </div>
            </div>

            {/* Stat 2: Factory */}
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-md">
                <span className="material-symbols-outlined text-[24px]">factory</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-[#E6A23C] leading-tight">53,8195+Ft²</span>
                <span className="text-xl md:text-2xl font-bold text-[#E6A23C] leading-tight mb-1">53,8195+平方英尺</span>
                <span className="text-xs text-white/70 leading-snug">
                  Large modern production area<br/>
                  <span className="text-white/50 text-[11px]">现代化大型生产基地</span>
                </span>
              </div>
            </div>

            {/* Stat 3: Window/Door */}
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-md">
                <span className="material-symbols-outlined text-[24px]">door_front</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-[#E6A23C] leading-none mb-1">1,000,000+</span>
                <span className="text-xs text-white/80 leading-snug">
                  Produced over one million windows & doors<br/>
                  <span className="text-white/50 text-[11px]">生产超过一百万扇门窗</span>
                </span>
              </div>
            </div>

            {/* Stat 4: Thumbs up */}
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-md">
                <span className="material-symbols-outlined text-[24px]">thumb_up</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-[#E6A23C] leading-tight">100,000+</span>
                <span className="text-xl md:text-2xl font-bold text-[#E6A23C] leading-tight mb-1">10万+</span>
                <span className="text-xs text-white/80 leading-snug">
                  more than 100,000 satisfied clients<br/>
                  <span className="text-white/50 text-[11px]">超过10万名满意客户</span>
                </span>
              </div>
            </div>

          </div>
          
          {/* Solid line below stats like in the screenshot */}
          <div className="mt-8 border-t border-white/20 w-full"></div>
        </div>

      </div>
    </section>
  );
}
