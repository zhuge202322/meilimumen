"use client";

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { localProducts, LocalProduct } from '@/data/products';

function ProductDetailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id');
  const { addToCart } = useCart();

  const [product, setProduct] = useState<LocalProduct | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<LocalProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const currentProduct = localProducts.find(p => p.id === id);
    if (currentProduct) {
      setProduct(currentProduct);
      setActiveImageIndex(0);
      
      // Calculate Related Products
      const otherProducts = localProducts.filter(p => p.id !== currentProduct.id);
      const sameCat = otherProducts.filter(p => p.categorySlug === currentProduct.categorySlug);
      const diffCat = otherProducts.filter(p => p.categorySlug !== currentProduct.categorySlug);
      
      const recommendations = [...sameCat, ...diffCat].slice(0, 4);
      setRelatedProducts(recommendations);
    }

    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="bg-[#EBEBEB] min-h-screen flex items-center justify-center pt-[85px]">
        <div className="animate-pulse w-12 h-12 border-4 border-[#BA1A1A] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-[#EBEBEB] min-h-screen flex flex-col items-center justify-center pt-[85px] font-body-md">
        <h1 className="text-2xl font-headline-md uppercase tracking-widest mb-4">Product Not Found</h1>
        <Link href="/products" className="text-[#BA1A1A] hover:text-[#1A1A1A] transition-colors border-b border-[#BA1A1A] pb-1 uppercase tracking-widest font-label-caps text-xs">
          Return to Catalog
        </Link>
      </div>
    );
  }

  const priceDisplay = 'Custom Quote';

  const handleAddToCart = () => {
    if (!product) return;
    addToCart({
      id: parseInt(product.id.replace(/[^0-9]/g, '')) || 999,
      name: product.name,
      price: 0,
      image: product.images[0],
      quantity: 1,
      category: product.categoryName
    });
    router.push('/cart');
  };

  return (
    <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-screen flex flex-col pt-[85px]">
      <main className="flex-grow w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24 pb-24">
        
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-[#6A6A6A] mb-4 gap-2 items-center uppercase tracking-wider font-label-caps flex-wrap">
          <Link className="hover:text-[#BA1A1A] transition-colors" href="/">Home</Link>
          <span>/</span>
          <Link className="hover:text-[#BA1A1A] transition-colors" href="/products">Products</Link>
          <span>/</span>
          <Link className="hover:text-[#BA1A1A] transition-colors" href={`/products?category=${product.categorySlug}`}>
            {product.categoryName}
          </Link>
          <span>/</span>
          <span className="text-[#1A1A1A] font-bold">{product.name}</span>
        </nav>

        {/* Product Hero Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-10">
          
          {/* Left: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative w-full aspect-[16/11] bg-[#1A1A1A] overflow-hidden group rounded-none">
              <img 
                alt={product.name} 
                className="object-cover w-full h-full transition-transform duration-[2000ms] group-hover:scale-105 opacity-90" 
                src={product.images[activeImageIndex] || '/images/products/门/13.png'}
              />
            </div>
            
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-6 gap-2">
                {product.images.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveImageIndex(idx)}
                    className="relative aspect-square bg-[#1A1A1A] overflow-hidden cursor-pointer group rounded-none"
                  >
                    <img 
                      alt={`Thumbnail ${idx + 1}`} 
                      className="object-cover w-full h-full transition-transform duration-[1000ms] group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                      src={img}
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
            <div className="mb-6">
              <div className="font-label-caps text-sm text-[#BA1A1A] tracking-[0.2em] uppercase mb-4">
                {product.categoryName}
              </div>
              <h1 className="font-headline-md text-4xl lg:text-6xl text-[#1A1A1A] uppercase tracking-wide leading-tight mb-4">
                {product.name}
              </h1>
              {/* Short Description */}
              <div className="font-body-md text-lg text-[#4A4A4A] leading-relaxed mb-4 italic border-l-4 border-[#BA1A1A] pl-4">
                {product.desc}
              </div>
              <div className="font-body-md text-base text-[#4A4A4A] leading-relaxed space-y-4">
                <p>{product.longDesc}</p>
              </div>
            </div>

            <form className="space-y-6">
              {/* Dual CTAs */}
              <div className="flex flex-col space-y-3 pt-4">
                <button onClick={handleAddToCart} className="w-full bg-[#1A1A1A] text-white py-5 font-label-caps text-sm uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-[#BA1A1A] transition-colors duration-300 rounded-none" type="button">
                  <span>Add to Cart — {priceDisplay}</span>
                </button>
                <Link href="/b2b-inquiry" className="w-full border border-[#1A1A1A] text-[#1A1A1A] py-5 font-label-caps text-sm uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300 bg-transparent rounded-none block text-center">
                  <span>Request Custom Quote</span>
                </Link>
              </div>
            </form>
          </div>
        </section>

        {/* Technical Specs Section */}
        <section className="bg-[#050505] text-white p-8 lg:p-12 mb-16 rounded-none border border-white/10">
          <h2 className="font-headline-md text-3xl md:text-4xl uppercase tracking-widest mb-12 border-b border-white/20 pb-4">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 font-body-md text-base">
            <div>
              <h3 className="font-label-caps text-sm text-[#BA1A1A] tracking-widest uppercase mb-2">Core Material</h3>
              <p className="text-white/70">Solid engineered material for extreme environmental stability and resistance.</p>
            </div>
            <div>
              <h3 className="font-label-caps text-sm text-[#BA1A1A] tracking-widest uppercase mb-2">Surface Finish</h3>
              <p className="text-white/70">Premium hand-selected surface, treated for maximum durability.</p>
            </div>
            <div>
              <h3 className="font-label-caps text-sm text-[#BA1A1A] tracking-widest uppercase mb-2">Hardware Compatibility</h3>
              <p className="text-white/70">Pre-routed and compatible with heavy-duty industry standard hardware.</p>
            </div>
            <div>
              <h3 className="font-label-caps text-sm text-[#BA1A1A] tracking-widest uppercase mb-2">Quality Rating</h3>
              <p className="text-white/70">Meets and exceeds CE standards for premium commercial and residential environments.</p>
            </div>
          </div>
        </section>

        {/* Product Details (Infographic Detail Images) Section */}
        {product.detailImages && product.detailImages.length > 0 && (
          <section className="mb-16">
            <h2 className="font-headline-md text-3xl md:text-4xl text-[#1A1A1A] uppercase tracking-widest mb-10 border-b border-gray-300 pb-4">
              Product Details
            </h2>
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
              {product.detailImages.map((img, idx) => (
                <div key={idx} className="w-full bg-[#1A1A1A]/5 border border-black/10 overflow-hidden rounded-none shadow-sm">
                  <img 
                    alt={`${product.name} Detail ${idx + 1}`} 
                    className="w-full h-auto object-cover opacity-95 hover:opacity-100 transition-opacity duration-500" 
                    src={img}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-gray-300 pt-16">
            <div className="flex justify-between items-end mb-10">
              <h2 className="font-headline-md text-3xl md:text-4xl text-[#1A1A1A] uppercase tracking-widest">Curated Pairings</h2>
              <Link href="/products" className="text-sm font-label-caps tracking-widest uppercase text-[#BA1A1A] hover:text-[#1A1A1A] transition-colors border-b border-[#BA1A1A] pb-1">View All</Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map(rel => {
                return (
                  <Link href={`/product-detail?id=${rel.id}`} key={rel.id} className="relative group aspect-square overflow-hidden bg-[#1A1A1A] cursor-pointer rounded-none block">
                    {/* Background Image */}
                    <img 
                      src={rel.images[0]} 
                      alt={rel.name} 
                      className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 opacity-70 group-hover:opacity-20" 
                    />
                    
                    {/* Default State: Bottom Centered Title */}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-center transition-opacity duration-500 group-hover:opacity-0">
                      <h3 className="text-white font-label-caps text-base md:text-lg tracking-[0.2em] uppercase text-center drop-shadow-md">
                        {rel.name}
                      </h3>
                    </div>

                    {/* Hover State: Centered Title + Description + Red Line */}
                    <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-white font-headline-md text-2xl md:text-3xl tracking-wider uppercase mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {rel.name}
                      </h3>
                      <p className="text-white/80 font-body-md text-base leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100 line-clamp-3">
                        {rel.desc}
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
