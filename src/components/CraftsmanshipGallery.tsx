"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Category {
  id: number;
  name: string;
  slug: string;
  image?: {
    src: string;
  } | null;
}

const LAYOUT_CLASSES = [
  "col-span-1 md:col-span-5 h-[250px] md:h-[400px]",
  "col-span-1 md:col-span-7 h-[250px] md:h-[500px] md:mt-12 delay-[150ms]",
  "col-span-1 md:col-span-8 h-[250px] md:h-[450px] md:-mt-16 delay-[300ms]",
  "col-span-1 md:col-span-4 h-[250px] md:h-[520px] delay-[450ms]"
];

export default function CraftsmanshipGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch WooCommerce categories from the remote WP instance via Next.js proxy to avoid CORS
    fetch('/api/wp/?rest_route=/wc/store/products/categories')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data: Category[]) => {
        // Filter out uncategorized and limit to 4 items to match our bento grid
        const validCategories = data.filter(c => c.slug !== 'uncategorized').slice(0, 4);
        
        // If we don't have enough categories, fall back to dummy data to prevent empty layout
        if (validCategories.length < 4) {
          const dummyData = [
            { id: 101, name: "Interior Doors", slug: "interior-doors", image: { src: "/images/products/门/13.png" } },
            { id: 102, name: "Wine Cabinets", slug: "wine-cabinets", image: { src: "/images/products/窗/4.png" } },
            { id: 103, name: "Wardrobes", slug: "wardrobes", image: { src: "/images/products/柜子/5.png" } },
            { id: 104, name: "Windows", slug: "windows", image: { src: "/images/products/门/14.png" } },
          ];
          // Merge fetched categories with dummy data to ensure we always have 4 items
          const merged = [...validCategories, ...dummyData.slice(validCategories.length)].slice(0, 4);
          setCategories(merged);
        } else {
          setCategories(validCategories);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch categories:", err);
        // Fallback to static data if API fails
        setCategories([
          { id: 101, name: "Interior Doors", slug: "interior-doors", image: { src: "/images/products/门/13.png" } },
          { id: 102, name: "Wine Cabinets", slug: "wine-cabinets", image: { src: "/images/products/窗/4.png" } },
          { id: 103, name: "Wardrobes", slug: "wardrobes", image: { src: "/images/products/柜子/5.png" } },
          { id: 104, name: "Windows", slug: "windows", image: { src: "/images/products/门/14.png" } },
        ]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (loading || categories.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove initial offset and opacity classes to trigger the slide up animation
            entry.target.classList.remove('opacity-0', 'translate-y-24');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            // Unobserve after animating in so it only plays once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 } // Trigger when 15% of the card is visible in viewport
    );

    const cards = containerRef.current?.querySelectorAll('.craft-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [loading, categories]);

  if (loading) {
    return <div className="min-h-[500px] flex items-center justify-center"><div className="animate-pulse w-12 h-12 border-4 border-[#BA1A1A] border-t-transparent rounded-full animate-spin"></div></div>;
  }

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
      
      {categories.map((category, index) => {
        const layoutClass = LAYOUT_CLASSES[index % LAYOUT_CLASSES.length];
        const imageUrl = category.image?.src 
          ? category.image.src.replace('http://45.145.229.20:2656', '/api/wp') 
          : "/images/products/柜子/5.png"; // Fallback image if none
        
        return (
          <Link 
            key={category.id}
            href={`/products?category=${category.slug}`} 
            className={`craft-card ${layoutClass} group relative overflow-hidden cursor-pointer ambient-shadow-hover bg-surface-container opacity-0 translate-y-24 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]`}
          >
            <img alt={category.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" src={imageUrl}/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
              <h3 className="font-headline-md text-2xl md:text-4xl tracking-wider uppercase text-white mb-1">{category.name}</h3>
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="font-label-caps text-label-caps text-white/80 whitespace-nowrap">View Collection</span>
                <div className="h-[2px] bg-white/80 flex-grow origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                <span className="material-symbols-outlined text-sm text-white/80 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">arrow_forward</span>
              </div>
            </div>
          </Link>
        );
      })}

    </div>
  );
}
