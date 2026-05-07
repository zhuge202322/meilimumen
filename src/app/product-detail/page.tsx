"use client";

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

interface WcProduct {
  id: number;
  name: string;
  short_description: string;
  description: string;
  images: { src: string }[];
  categories: { id: number; name: string; slug: string }[];
  prices: { price: string; currency_code: string; currency_symbol: string };
}

function stripHtml(html: string) {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '').trim();
}

function ProductDetailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id');
  const { addToCart } = useCart();

  const [product, setProduct] = useState<WcProduct | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<WcProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    Promise.all([
      fetch(`/api/wp/?rest_route=/wc/store/products/${id}`).then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      }),
      fetch(`/api/wp/?rest_route=/wc/store/products`).then(res => res.ok ? res.json() : [])
    ])
      .then(([productData, allProducts]) => {
        // Rewrite image URLs to go through Next.js proxy to bypass mixed content / CORS issues
        if (productData?.images) {
          productData.images = productData.images.map((img: any) => ({
            ...img,
            src: img.src.replace('http://45.145.229.20:2656', '/api/wp')
          }));
        }
        if (Array.isArray(allProducts)) {
          allProducts.forEach((p: any) => {
            if (p.images) {
              p.images = p.images.map((img: any) => ({
                ...img,
                src: img.src.replace('http://45.145.229.20:2656', '/api/wp')
              }));
            }
          });
        }

        setProduct(productData);
        
        // Calculate Related Products
        const currentCategoryId = productData.categories?.[0]?.id;
        const otherProducts = Array.isArray(allProducts) ? allProducts.filter((p: WcProduct) => p.id !== productData.id) : [];
        
        const sameCat = otherProducts.filter((p: WcProduct) => p.categories?.some(c => c.id === currentCategoryId));
        const diffCat = otherProducts.filter((p: WcProduct) => !p.categories?.some(c => c.id === currentCategoryId));
        
        const recommendations = [...sameCat, ...diffCat].slice(0, 4);
        setRelatedProducts(recommendations);

        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="bg-[#EBEBEB] min-h-screen flex items-center justify-center pt-[120px]">
        <div className="animate-pulse w-12 h-12 border-4 border-[#BA1A1A] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-[#EBEBEB] min-h-screen flex flex-col items-center justify-center pt-[120px] font-body-md">
        <h1 className="text-2xl font-headline-md uppercase tracking-widest mb-4">Product Not Found</h1>
        <Link href="/products" className="text-[#BA1A1A] hover:text-[#1A1A1A] transition-colors border-b border-[#BA1A1A] pb-1 uppercase tracking-widest font-label-caps text-xs">
          Return to Catalog
        </Link>
      </div>
    );
  }

  const mainCategory = product.categories?.[0];
  const priceDisplay = parseInt(product.prices?.price || '0') > 0 
    ? `${product.prices.currency_symbol}${Number(product.prices.price) / 100}` 
    : 'Custom Quote';

  const descText = stripHtml(product.short_description) || stripHtml(product.description) || 'A testament to modern heritage, crafted with precision and sustainably sourced materials.';

  const handleAddToCart = () => {
    if (!product) return;
    addToCart({
      id: product.id,
      name: product.name,
      price: parseInt(product.prices?.price || '0') / 100,
      image: product.images[0]?.src || '/images/products/门/13.png',
      quantity: 1,
      category: mainCategory?.name || 'Uncategorized'
    });
    router.push('/cart');
  };

  return (
    <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-screen flex flex-col pt-[120px]">
      <main className="flex-grow w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24 pb-24">
        
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-[#6A6A6A] mb-10 gap-2 items-center uppercase tracking-wider font-label-caps text-[10px] flex-wrap">
          <Link className="hover:text-[#BA1A1A] transition-colors" href="/">Home</Link>
          <span>/</span>
          <Link className="hover:text-[#BA1A1A] transition-colors" href="/products">Products</Link>
          {mainCategory && (
            <>
              <span>/</span>
              <Link className="hover:text-[#BA1A1A] transition-colors" href={`/products?category=${mainCategory.slug}`}>
                {mainCategory.name}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-[#1A1A1A] font-bold">{product.name}</span>
        </nav>

        {/* Product Hero Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          
          {/* Left: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative w-full aspect-[4/3] bg-[#1A1A1A] overflow-hidden group rounded-none">
              <img 
                alt={product.name} 
                className="object-cover w-full h-full transition-transform duration-[2000ms] group-hover:scale-105 opacity-90" 
                src={product.images[activeImageIndex]?.src || '/images/products/门/13.png'}
              />
            </div>
            
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(0, 3).map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveImageIndex(idx)}
                    className="relative aspect-square bg-[#1A1A1A] overflow-hidden cursor-pointer group rounded-none"
                  >
                    <img 
                      alt={`Thumbnail ${idx + 1}`} 
                      className="object-cover w-full h-full transition-transform duration-[1000ms] group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                      src={img.src}
                    />
                    {/* Active Indicator Line */}
                    {activeImageIndex === idx && (
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#BA1A1A]"></div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info & Configuration */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-10">
              {mainCategory && (
                <div className="font-label-caps text-xs text-[#BA1A1A] tracking-[0.2em] uppercase mb-4">
                  {mainCategory.name}
                </div>
              )}
              <h1 className="font-headline-md text-4xl lg:text-5xl text-[#1A1A1A] uppercase tracking-wide leading-tight mb-4">
                {product.name}
              </h1>
              {/* Short Description Added Here */}
              <div className="font-body-md text-lg text-[#4A4A4A] leading-relaxed mb-6 italic border-l-4 border-[#BA1A1A] pl-4">
                {stripHtml(product.short_description) || 'Premium architectural element.'}
              </div>
              <div className="font-body-md text-sm text-[#4A4A4A] leading-relaxed space-y-4" dangerouslySetInnerHTML={{__html: product.description || descText}}></div>
            </div>

            <form className="space-y-10">
              {/* Configuration Options - Removed Dimensions */}
              
              {/* Dual CTAs */}
              <div className="flex flex-col space-y-4 pt-8">
                <button onClick={handleAddToCart} className="w-full bg-[#1A1A1A] text-white py-5 font-label-caps text-xs uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-[#BA1A1A] transition-colors duration-300 rounded-none" type="button">
                  <span>Add to Cart — {priceDisplay}</span>
                </button>
                <Link href="/b2b-inquiry" className="w-full border border-[#1A1A1A] text-[#1A1A1A] py-5 font-label-caps text-xs uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300 bg-transparent rounded-none block text-center">
                  <span>Request Custom Quote</span>
                </Link>
              </div>
            </form>
          </div>
        </section>

        {/* Technical Specs Section (Dark Theme for Contrast) */}
        <section className="bg-[#050505] text-white p-12 lg:p-20 mb-24 rounded-none border border-white/10">
          <h2 className="font-headline-md text-2xl uppercase tracking-widest mb-12 border-b border-white/20 pb-4">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 font-body-md text-sm">
            <div>
              <h3 className="font-label-caps text-[10px] text-[#BA1A1A] tracking-widest uppercase mb-2">Core Material</h3>
              <p className="text-white/70">Solid engineered material for extreme environmental stability and resistance.</p>
            </div>
            <div>
              <h3 className="font-label-caps text-[10px] text-[#BA1A1A] tracking-widest uppercase mb-2">Surface Finish</h3>
              <p className="text-white/70">Premium hand-selected surface, treated for maximum durability.</p>
            </div>
            <div>
              <h3 className="font-label-caps text-[10px] text-[#BA1A1A] tracking-widest uppercase mb-2">Hardware Compatibility</h3>
              <p className="text-white/70">Pre-routed and compatible with heavy-duty industry standard hardware.</p>
            </div>
            <div>
              <h3 className="font-label-caps text-[10px] text-[#BA1A1A] tracking-widest uppercase mb-2">Quality Rating</h3>
              <p className="text-white/70">Meets and exceeds CE standards for premium commercial and residential environments.</p>
            </div>
          </div>
        </section>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-gray-300 pt-16">
            <div className="flex justify-between items-end mb-10">
              <h2 className="font-headline-md text-2xl text-[#1A1A1A] uppercase tracking-widest">Curated Pairings</h2>
              <Link href="/products" className="text-xs font-label-caps tracking-widest uppercase text-[#BA1A1A] hover:text-[#1A1A1A] transition-colors border-b border-[#BA1A1A] pb-1">View All</Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map(rel => {
                const relDesc = stripHtml(rel.short_description) || stripHtml(rel.description) || 'Premium architectural element.';
                return (
                  <Link href={`/product-detail?id=${rel.id}`} key={rel.id} className="relative group aspect-square overflow-hidden bg-[#1A1A1A] cursor-pointer rounded-none block">
                    {/* Background Image */}
                    <img 
                      src={rel.images?.[0]?.src || '/images/products/门/13.png'} 
                      alt={rel.name} 
                      className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 opacity-70 group-hover:opacity-20" 
                    />
                    
                    {/* Default State: Bottom Centered Title */}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-center transition-opacity duration-500 group-hover:opacity-0">
                      <h3 className="text-white font-label-caps text-xs tracking-[0.2em] uppercase text-center drop-shadow-md">
                        {rel.name}
                      </h3>
                    </div>

                    {/* Hover State: Centered Title + Description + Red Line */}
                    <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-white font-headline-md text-xl tracking-wider uppercase mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {rel.name}
                      </h3>
                      <p className="text-white/80 font-body-md text-xs leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100 line-clamp-3">
                        {relDesc}
                      </p>
                      <div className="mt-6 w-8 h-[2px] bg-[#BA1A1A] transition-all duration-700 w-0 group-hover:w-8 delay-300"></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

      </main>
    </div>
  );
}

export default function ProductDetail() {
  return (
    <Suspense fallback={
      <div className="bg-[#EBEBEB] min-h-screen flex items-center justify-center pt-[120px]">
        <div className="animate-pulse w-12 h-12 border-4 border-[#BA1A1A] border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <ProductDetailContent />
    </Suspense>
  );
}
