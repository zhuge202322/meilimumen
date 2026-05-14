"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface ProjectItem {
  id: number;
  src: string;
  title: string;
  category: string;
  location: string;
  year: string;
  span: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    src: "/portfolio/3.jpg",
    title: "Highland Heritage Residence",
    category: "Custom Solid Wood Doors",
    location: "Vancouver, Canada",
    year: "2024",
    span: "md:col-span-6 md:row-span-2",
  },
  {
    id: 2,
    src: "/portfolio/7.jpg",
    title: "Azure Bay Penthouse",
    category: "Engineered Flooring",
    location: "Sydney, Australia",
    year: "2024",
    span: "md:col-span-3 md:row-span-1",
  },
  {
    id: 3,
    src: "/portfolio/12.jpg",
    title: "Boulevard Lofts",
    category: "Architectural Millwork",
    location: "Paris, France",
    year: "2023",
    span: "md:col-span-3 md:row-span-1",
  },
  {
    id: 4,
    src: "/portfolio/17.jpg",
    title: "Crescent Residences",
    category: "Aluminum Window Systems",
    location: "Dubai, UAE",
    year: "2024",
    span: "md:col-span-3 md:row-span-2",
  },
  {
    id: 5,
    src: "/portfolio/22.jpg",
    title: "Maple Ridge Villas",
    category: "Interior Doors & Cabinetry",
    location: "Toronto, Canada",
    year: "2023",
    span: "md:col-span-3 md:row-span-1",
  },
  {
    id: 6,
    src: "/portfolio/26.jpg",
    title: "Riverstone Tower",
    category: "Custom Cabinetry",
    location: "Singapore",
    year: "2024",
    span: "md:col-span-3 md:row-span-1",
  },
  {
    id: 7,
    src: "/portfolio/30.jpg",
    title: "Solis Hotel Restoration",
    category: "Heritage Doorworks",
    location: "Lisbon, Portugal",
    year: "2023",
    span: "md:col-span-3 md:row-span-1",
  },
  {
    id: 8,
    src: "/portfolio/34.jpg",
    title: "The Atlas Pavilion",
    category: "SPC Flooring & Wall Panels",
    location: "Berlin, Germany",
    year: "2024",
    span: "md:col-span-3 md:row-span-1",
  },
  {
    id: 9,
    src: "/portfolio/38.jpg",
    title: "Northwind Estate",
    category: "Solid Wood Wardrobes",
    location: "Stockholm, Sweden",
    year: "2024",
    span: "md:col-span-6 md:row-span-2",
  },
  {
    id: 10,
    src: "/portfolio/40.jpg",
    title: "Sunset Coastal Resort",
    category: "Full Architectural Package",
    location: "Bali, Indonesia",
    year: "2024",
    span: "md:col-span-6 md:row-span-1",
  },
];

export default function ProjectShowcasePage() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<ProjectItem | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (lightbox) {
        if (e.key === "ArrowRight") {
          const idx = projects.findIndex((p) => p.id === lightbox.id);
          setLightbox(projects[(idx + 1) % projects.length]);
        }
        if (e.key === "ArrowLeft") {
          const idx = projects.findIndex((p) => p.id === lightbox.id);
          setLightbox(projects[(idx - 1 + projects.length) % projects.length]);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-screen flex flex-col pt-[80px]">
      {/* Hero */}
      <section className="relative w-full min-h-[70vh] bg-[#050505] overflow-hidden flex items-end">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/portfolio/1.jpg"
            alt="Featured Project"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-transparent" />
          <div className="absolute bottom-[-20%] left-[5%] w-[40%] h-[60%] bg-[#BA1A1A] rounded-full blur-[160px] opacity-25 mix-blend-screen" />
        </div>

        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24 py-20">
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              revealed ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="font-label-caps text-base text-[#BA1A1A] tracking-[0.3em] uppercase mb-6">
              Featured Work
            </div>
            <h1 className="font-headline-md text-5xl md:text-7xl lg:text-8xl text-white uppercase leading-[1.05] tracking-tight mb-8 max-w-5xl">
              Projects that turn <span className="italic font-light text-white/80">spaces</span><br />
              into <span className="text-[#BA1A1A]">homes.</span>
            </h1>
            <p className="font-body-lg text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              A curated collection of residential, hospitality and commercial projects delivered worldwide. Hover or tap any tile to reveal project details, click to enlarge.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-8 md:gap-16 max-w-2xl border-t border-white/10 pt-10">
              <div>
                <div className="font-headline-md text-3xl md:text-5xl text-white">10+</div>
                <div className="font-label-caps text-xs text-white/50 tracking-widest uppercase mt-2">Featured Projects</div>
              </div>
              <div>
                <div className="font-headline-md text-3xl md:text-5xl text-white">9</div>
                <div className="font-label-caps text-xs text-white/50 tracking-widest uppercase mt-2">Countries</div>
              </div>
              <div>
                <div className="font-headline-md text-3xl md:text-5xl text-white">2024</div>
                <div className="font-label-caps text-xs text-white/50 tracking-widest uppercase mt-2">Latest Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mosaic Grid */}
      <section className="w-full max-w-[1800px] mx-auto px-4 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="flex justify-between items-end mb-10 md:mb-16 border-b border-gray-300 pb-6 flex-wrap gap-4">
          <div>
            <div className="font-label-caps text-xs text-[#BA1A1A] tracking-[0.2em] uppercase mb-2">Selected Showcase</div>
            <h2 className="font-headline-md text-3xl md:text-5xl text-[#1A1A1A] uppercase tracking-wide">Project Gallery</h2>
          </div>
          <Link
            href="/portfolio"
            className="font-label-caps text-sm tracking-widest uppercase text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:text-[#BA1A1A] hover:border-[#BA1A1A] transition-colors"
          >
            View Full Portfolio →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[260px] md:auto-rows-[280px] gap-4 md:gap-5">
          {projects.map((p, i) => (
            <article
              key={p.id}
              onMouseEnter={() => setActiveId(p.id)}
              onMouseLeave={() => setActiveId(null)}
              onClick={() => setLightbox(p)}
              className={`relative overflow-hidden bg-[#1A1A1A] cursor-pointer group ${p.span} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                revealed ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              } ${activeId !== null && activeId !== p.id ? "md:opacity-50" : "opacity-100"}`}
              style={{ transitionDelay: revealed ? `${i * 80}ms` : "0ms" }}
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-100 opacity-80" />

              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="font-label-caps text-[10px] tracking-[0.2em] uppercase text-white bg-[#BA1A1A] px-3 py-1">
                  {String(p.id).padStart(2, "0")}
                </span>
                <span className="font-label-caps text-[10px] tracking-[0.2em] uppercase text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1">
                  {p.year}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-2 group-hover:translate-y-0">
                <div className="font-label-caps text-[10px] md:text-xs text-[#BA1A1A] tracking-[0.25em] uppercase mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {p.category}
                </div>
                <h3 className="font-headline-md text-xl md:text-2xl lg:text-3xl text-white uppercase leading-tight mb-2">
                  {p.title}
                </h3>
                <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <div className="flex items-center gap-3 pt-3 text-white/80 font-body-md text-sm">
                    <span className="material-symbols-outlined text-base">place</span>
                    <span>{p.location}</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45">
                <span className="material-symbols-outlined text-white text-lg">arrow_outward</span>
              </div>

              <div className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#BA1A1A] group-hover:w-full transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050505] text-white px-4 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <div className="font-label-caps text-base text-[#BA1A1A] tracking-[0.3em] uppercase mb-4">
              Ready to begin your project?
            </div>
            <h3 className="font-headline-md text-4xl md:text-6xl uppercase leading-[1.05] mb-6">
              Let's build something that lasts.
            </h3>
            <p className="font-body-md text-lg text-white/70 max-w-xl leading-relaxed">
              From bespoke residential doors to full architectural packages for hospitality and commercial spaces, our specialists collaborate with architects, designers and developers worldwide.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col gap-4 md:items-end">
            <Link
              href="/b2b-inquiry"
              className="inline-flex items-center justify-center gap-3 bg-[#BA1A1A] text-white px-10 py-5 font-label-caps text-base tracking-widest uppercase hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 w-full md:w-auto"
            >
              Start a Project
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-10 py-5 font-label-caps text-base tracking-widest uppercase hover:border-white transition-all duration-300 w-full md:w-auto"
            >
              Browse Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white border border-white/20 hover:border-white transition-all z-10"
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const idx = projects.findIndex((p) => p.id === lightbox.id);
              setLightbox(projects[(idx - 1 + projects.length) % projects.length]);
            }}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white border border-white/20 hover:border-white transition-all z-10"
            aria-label="Previous"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const idx = projects.findIndex((p) => p.id === lightbox.id);
              setLightbox(projects[(idx + 1) % projects.length]);
            }}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white border border-white/20 hover:border-white transition-all z-10"
            aria-label="Next"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          <div
            className="relative max-w-[1400px] w-full max-h-[90vh] flex flex-col md:flex-row gap-6 md:gap-10 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 max-h-[70vh] md:max-h-[85vh] flex items-center justify-center">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-w-full max-h-[70vh] md:max-h-[85vh] object-contain shadow-2xl"
              />
            </div>
            <aside className="w-full md:w-80 flex-shrink-0 text-white">
              <div className="font-label-caps text-xs text-[#BA1A1A] tracking-[0.3em] uppercase mb-3">
                Project {String(lightbox.id).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </div>
              <h2 className="font-headline-md text-3xl md:text-4xl uppercase leading-tight mb-6">
                {lightbox.title}
              </h2>
              <dl className="space-y-5 text-base">
                <div className="border-t border-white/10 pt-4">
                  <dt className="font-label-caps text-[10px] text-white/50 tracking-widest uppercase mb-1">Category</dt>
                  <dd className="text-white/90">{lightbox.category}</dd>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <dt className="font-label-caps text-[10px] text-white/50 tracking-widest uppercase mb-1">Location</dt>
                  <dd className="text-white/90">{lightbox.location}</dd>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <dt className="font-label-caps text-[10px] text-white/50 tracking-widest uppercase mb-1">Year</dt>
                  <dd className="text-white/90">{lightbox.year}</dd>
                </div>
              </dl>
              <Link
                href="/b2b-inquiry"
                className="mt-8 inline-flex items-center gap-3 bg-[#BA1A1A] text-white px-8 py-4 font-label-caps text-sm tracking-widest uppercase hover:bg-white hover:text-[#1A1A1A] transition-all"
              >
                Inquire similar
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
}
