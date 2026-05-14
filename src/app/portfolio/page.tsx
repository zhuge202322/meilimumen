"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Local images generator for portfolio
const generateLocalImages = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    // Images are named 1.png, 2.png, ..., 40.png in the public/portfolio directory
    return {
      id: i + 1,
      src: `/portfolio/${i + 1}.png`,
      title: `Project Study ${String(i + 1).padStart(3, '0')}`
    };
  });
};

export default function PortfolioPage() {
  const [images, setImages] = useState<{id: number, src: string, title: string}[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const itemsPerPage = 24; // 4 columns * 6 rows
  
  useEffect(() => {
    // Generate 40 local images to demonstrate pagination
    setImages(generateLocalImages(40));
    
    // Trigger the expansion animation slightly after mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = images.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-screen flex flex-col pt-[140px] pb-24">
      <main className="w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12 border-b border-gray-300 pb-6">
          <div>
            <h1 className="font-headline-md text-3xl lg:text-4xl text-[#1A1A1A] uppercase tracking-widest mb-2">
              Portfolio
            </h1>
            <p className="text-[#6A6A6A] text-sm tracking-wide">A visual archive of our bespoke architectural installations.</p>
          </div>
          <div className="text-[#6A6A6A] text-xs font-label-caps tracking-widest uppercase hidden md:block">
            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, images.length)} of {images.length}
          </div>
        </div>

        {/* Masonry Grid (Irregular layout) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 relative">
          {currentImages.map((img, index) => (
            <div 
              key={img.id} 
              className={`relative group bg-[#1A1A1A] cursor-pointer break-inside-avoid overflow-hidden rounded-none mb-6 transition-all duration-[1200ms] ease-elastic-out ${
                isLoaded 
                  ? 'opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0' 
                  : 'opacity-0 translate-x-0 translate-y-64 scale-50 rotate-[-10deg]'
              }`}
              style={{
                // Stagger the animation based on index
                transitionDelay: `${index * 50}ms`
              }}
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-auto object-cover opacity-90 transition-all duration-[1500ms] group-hover:scale-105 group-hover:opacity-40 block"
                loading="lazy"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <span className="material-symbols-outlined text-white text-3xl">zoom_in</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center gap-2 font-label-caps text-xs">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center border transition-colors rounded-none ${currentPage === 1 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-[#1A1A1A] hover:border-[#1A1A1A]'}`}
            >
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button 
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 flex items-center justify-center border transition-colors rounded-none ${currentPage === page ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'border-gray-300 text-[#1A1A1A] hover:border-[#1A1A1A]'}`}
              >
                {page}
              </button>
            ))}

            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center border transition-colors rounded-none ${currentPage === totalPages ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-[#1A1A1A] hover:border-[#1A1A1A]'}`}
            >
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        )}

      </main>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12">
          
          {/* Close Button */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-[110]"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>

          {/* Expanded Image */}
          <div className="relative w-full max-w-6xl max-h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-[85vh] object-contain rounded-none shadow-2xl" 
            />
          </div>
        </div>
      )}

    </div>
  );
}
