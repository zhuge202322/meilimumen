"use client";

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface WcCategory {
  id: number;
  name: string;
  slug: string;
}

interface WcProduct {
  id: number;
  name: string;
  short_description: string;
  description: string;
  images: { src: string }[];
  categories: { id: number; name: string; slug: string }[];
}

interface Product {
  id: number;
  name: string;
  desc: string;
  img: string;
}

function stripHtml(html: string) {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '').trim();
}

function ProductCatalog() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const searchParam = searchParams.get('search');
  
  const [pageTitle, setPageTitle] = useState('Products Catalog');
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<WcCategory[]>([]);
  const [loading, setLoading] = useState(true);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16; // 4 rows * 4 cols = 16

  // Fetch Categories
  useEffect(() => {
    fetch('/api/wp/?rest_route=/wc/store/products/categories')
      .then(res => res.json())
      .then((data: WcCategory[]) => {
        const validCategories = data.filter(c => c.slug !== 'uncategorized');
        setCategories(validCategories);
      })
      .catch(console.error);
  }, []);

  // Fetch Products
  useEffect(() => {
    setLoading(true);
    let url = '/api/wp/?rest_route=/wc/store/products';
    
    // We fetch all products, then filter by category slug on the client side since WP store API uses category ID
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data: WcProduct[]) => {
        if (!Array.isArray(data)) {
           console.error("Expected array of products, got:", data);
           setDisplayProducts([]);
           setLoading(false);
           return;
        }

        const formattedProducts = data.map(p => ({
          id: p.id,
          name: p.name,
          desc: stripHtml(p.short_description) || stripHtml(p.description) || 'Premium architectural elements.',
          img: p.images?.[0]?.src ? p.images[0].src.replace('http://45.145.229.20:2656', '/api/wp') : '/images/products/门/13.png',
          categories: p.categories || []
        }));

        if (categoryParam) {
          setPageTitle(categoryParam.replace(/-/g, ' ').toUpperCase() + ' COLLECTION');
          const filtered = formattedProducts.filter(p => 
            p.categories.some(c => c.slug === categoryParam)
          );
          setDisplayProducts(filtered);
        } else if (searchParam) {
          setPageTitle(`SEARCH RESULTS FOR "${searchParam.toUpperCase()}"`);
          const lowerQuery = searchParam.toLowerCase();
          const filtered = formattedProducts.filter(p => 
            p.name.toLowerCase().includes(lowerQuery) || 
            p.desc.toLowerCase().includes(lowerQuery)
          );
          setDisplayProducts(filtered);
        } else {
          setPageTitle('Products Catalog');
          setDisplayProducts(formattedProducts);
        }
        setCurrentPage(1); // Reset to page 1 on category change
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch products:", err);
        setDisplayProducts([]); // Ensure we clear products on error so it doesn't crash map
        setLoading(false);
      });
  }, [categoryParam, searchParam]);

  // Pagination Logic
  const totalPages = Math.ceil(displayProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = displayProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
  };

  return (
    <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-screen flex flex-col pt-[120px]">
      <main className="flex-grow w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24 pb-24 flex gap-12 lg:gap-20">
        
        {/* Left Sidebar Filter */}
        <aside className="w-72 flex-shrink-0 hidden md:block">
          <div className="sticky top-[140px]">
            <div className="mb-8">
              <h2 className="font-headline-md text-3xl text-[#1A1A1A] mb-3 uppercase tracking-wide">All Categories</h2>
              <p className="text-[#6A6A6A] text-base leading-relaxed">Explore our curated selection of premium architectural elements.</p>
            </div>
            
            {/* Breadcrumbs */}
            <nav className="flex text-sm text-[#6A6A6A] mb-10 gap-2 items-center uppercase tracking-wider font-label-caps">
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/">Home</Link>
              <span>/</span>
              <span className="text-[#1A1A1A] font-bold">Products</span>
              {categoryParam && (
                <>
                  <span>/</span>
                  <span className="text-[#BA1A1A] font-bold">{categoryParam.replace(/-/g, ' ')}</span>
                </>
              )}
              {searchParam && (
                <>
                  <span>/</span>
                  <span className="text-[#BA1A1A] font-bold">Search: {searchParam}</span>
                </>
              )}
            </nav>

            <div className="space-y-10">
              {/* Category Section */}
              <div>
                <h3 className="font-label-caps text-base font-bold text-[#1A1A1A] mb-5 border-b border-gray-300 pb-3 uppercase tracking-widest">Collections</h3>
                <ul className="space-y-4 text-xl text-[#4A4A4A]">
                  <li><Link href="/products" className={`hover:text-[#BA1A1A] transition-colors w-full text-left block ${!categoryParam ? 'font-medium text-[#BA1A1A]' : ''}`}>All Products</Link></li>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <Link href={`/products?category=${cat.slug}`} className={`hover:text-[#BA1A1A] transition-colors w-full text-left block ${categoryParam === cat.slug ? 'font-medium text-[#BA1A1A]' : ''}`}>
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Product Grid Content */}
        <section className="flex-grow">
          <div className="flex justify-between items-end mb-8 border-b border-gray-300 pb-4 gap-4 flex-wrap">
            <h1 className="font-headline-md text-3xl md:text-4xl text-[#1A1A1A] uppercase tracking-widest">{pageTitle}</h1>
            <div className="text-[#6A6A6A] text-sm font-label-caps tracking-widest uppercase">
              Showing {displayProducts.length > 0 ? `${indexOfFirstProduct + 1}-${Math.min(indexOfLastProduct, displayProducts.length)} of ${displayProducts.length}` : '0'} results
            </div>
          </div>

          {/* 4x4 Grid - Straight Edges */}
          {loading ? (
            <div className="min-h-[400px] flex items-center justify-center">
              <div className="animate-pulse w-12 h-12 border-4 border-[#BA1A1A] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : displayProducts.length === 0 ? (
            <div className="min-h-[400px] flex items-center justify-center text-[#6A6A6A] font-label-caps tracking-widest uppercase">
              No products found in this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {currentProducts.map((product) => (
                <Link href={`/product-detail?id=${product.id}`} key={product.id} className="relative group aspect-square overflow-hidden bg-[#1A1A1A] cursor-pointer rounded-none block">
                  {/* Background Image */}
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 opacity-70 group-hover:opacity-20" 
                    loading="lazy"
                  />
                  
                  {/* Default State: Bottom Centered Title */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-center transition-opacity duration-500 group-hover:opacity-0">
                    <h3 className="text-white font-label-caps text-base md:text-lg tracking-[0.2em] uppercase text-center drop-shadow-md">
                      {product.name}
                    </h3>
                  </div>

                  {/* Hover State: Centered Title + Description + Red Line */}
                  <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-white font-headline-md text-2xl md:text-3xl tracking-wider uppercase mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {product.name}
                    </h3>
                    <div className="w-0 h-[2px] bg-[#BA1A1A] mb-4 group-hover:w-12 transition-all duration-500 delay-100 ease-out"></div>
                    <p className="text-white/80 font-body-md text-base leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 line-clamp-3">
                      {product.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="mt-16 flex justify-center gap-2 font-label-caps text-sm">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-12 h-12 flex items-center justify-center border transition-colors rounded-none ${currentPage === 1 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-[#1A1A1A] hover:border-[#1A1A1A]'}`}
              >
                <span className="material-symbols-outlined text-base">chevron_left</span>
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button 
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-12 h-12 flex items-center justify-center border transition-colors rounded-none ${currentPage === page ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'border-gray-300 text-[#1A1A1A] hover:border-[#1A1A1A]'}`}
                >
                  {page}
                </button>
              ))}

              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-12 h-12 flex items-center justify-center border transition-colors rounded-none ${currentPage === totalPages ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-[#1A1A1A] hover:border-[#1A1A1A]'}`}
              >
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#EBEBEB] flex items-center justify-center"><div className="animate-pulse w-12 h-12 border-4 border-[#BA1A1A] border-t-transparent rounded-full animate-spin"></div></div>}>
      <ProductCatalog />
    </Suspense>
  );
}