"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex flex-col bg-surface/90 dark:bg-surface-dim/90 backdrop-blur-md shadow-sm transition-all duration-300 ease-in-out">
      <div className="relative flex justify-between items-center px-4 md:px-16 lg:px-24 h-20 w-full max-w-[1800px] mx-auto">

        {/* Mobile Left: Hamburger */}
        <button
          className="lg:hidden p-2 -ml-2 text-on-surface"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>

        {/* Mobile Logo (Absolutely centered on mobile only) */}
        <Link className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-headline-sm text-lg text-black font-bold tracking-tight flex items-center gap-2" href="/">
          <img src="/logo.png" alt="BrySun Logo" className="h-12 w-auto" />
        </Link>

        {/* Mobile Right: Search & Cart */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            className="p-2 text-on-surface"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          <Link href="/cart" className="relative p-2 text-on-surface group flex items-center justify-center">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#BA1A1A] text-white text-[10px] font-bold px-1.5 py-0.5 min-w-[18px] text-center rounded-sm">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Desktop Centered Menu & Logo Group */}
        <div className="hidden lg:flex items-center justify-center gap-x-12 xl:gap-x-16 mx-auto h-full">
          <Link className="text-black hover:text-[#BA1A1A] transition-colors hover:opacity-80 font-label-lg whitespace-nowrap" href="/about">About Us</Link>
          <Link className="text-black hover:text-[#BA1A1A] transition-colors hover:opacity-80 font-label-lg whitespace-nowrap" href="/products">Products</Link>
          <Link className="text-black hover:text-[#BA1A1A] transition-colors hover:opacity-80 font-label-lg whitespace-nowrap" href="/process">Our Process</Link>
          
          <Link className="flex items-center justify-center px-8 xl:px-12 shrink-0" href="/" aria-label="BrySun Home">
            <img src="/logo.png" alt="BrySun Logo" className="h-14 w-auto" />
          </Link>
          
          <Link className="text-black hover:text-[#BA1A1A] transition-colors hover:opacity-80 font-label-lg whitespace-nowrap" href="/project">Project</Link>
          <Link className="text-black hover:text-[#BA1A1A] transition-colors hover:opacity-80 font-label-lg whitespace-nowrap" href="/values">Values</Link>
          <Link className="text-black hover:text-[#BA1A1A] transition-colors hover:opacity-80 font-label-lg whitespace-nowrap" href="/b2b-inquiry">Inquiry</Link>
        </div>

        {/* Desktop Floating Actions (absolute so they don't push menus off-center) */}
        <div className="hidden lg:flex items-center gap-4 absolute right-4 md:right-16 lg:right-24 top-1/2 -translate-y-1/2">
          <button
            className="p-2 text-on-surface hover:text-primary transition-colors"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          <Link href="/cart" className="relative p-2 text-on-surface hover:text-primary transition-colors group flex items-center justify-center">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#BA1A1A] text-white text-[10px] font-bold px-1.5 py-0.5 min-w-[18px] text-center rounded-sm">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Search Bar Dropdown */}
      {searchOpen && (
        <div className="w-full bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 p-4 animate-in slide-in-from-top-2">
          <form onSubmit={handleSearch} className="max-w-[1800px] mx-auto flex items-center gap-2">
            <button type="submit" className="p-2 text-gray-400 hover:text-on-surface flex items-center justify-center">
              <span className="material-symbols-outlined">search</span>
            </button>
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-on-surface font-body-md"
              autoFocus
            />
            <button type="button" onClick={() => setSearchOpen(false)} className="p-2 text-gray-400 hover:text-on-surface">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </form>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-surface dark:bg-surface-dim border-t border-gray-200 dark:border-gray-800 flex flex-col p-4 space-y-4 shadow-lg absolute top-full left-0 max-h-[80vh] overflow-y-auto">
          <Link onClick={() => setMobileMenuOpen(false)} className="block py-2 text-black hover:text-[#BA1A1A] font-label-lg border-b border-gray-100" href="/about">About Us</Link>
          <Link onClick={() => setMobileMenuOpen(false)} className="block py-2 text-black hover:text-[#BA1A1A] font-label-lg border-b border-gray-100" href="/products">Products</Link>
          <Link onClick={() => setMobileMenuOpen(false)} className="block py-2 text-black hover:text-[#BA1A1A] font-label-lg border-b border-gray-100" href="/process">Our Process</Link>
          <Link onClick={() => setMobileMenuOpen(false)} className="block py-2 text-black hover:text-[#BA1A1A] font-label-lg border-b border-gray-100" href="/project">Project</Link>
          <Link onClick={() => setMobileMenuOpen(false)} className="block py-2 text-black hover:text-[#BA1A1A] font-label-lg border-b border-gray-100" href="/values">Values</Link>
          <Link onClick={() => setMobileMenuOpen(false)} className="block py-2 text-black hover:text-[#BA1A1A] font-label-lg border-b border-gray-100" href="/b2b-inquiry">Inquiry</Link>
        </div>
      )}
    </nav>
  );
}