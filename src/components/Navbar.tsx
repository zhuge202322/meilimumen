"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-edge h-20 bg-surface/90 dark:bg-surface-dim/90 backdrop-blur-md shadow-sm transition-all duration-300 ease-in-out">
      <Link href="/" className="font-headline-lg text-headline-lg tracking-tighter text-primary dark:text-primary-fixed whitespace-nowrap">
        Beautiful Sunshine
      </Link>
      <div className="hidden md:flex gap-6 items-center font-headline-md text-headline-md whitespace-nowrap">
        <Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-80" href="/">Home</Link>
        <Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-80" href="/products">Products</Link>
        <Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-80" href="/about">About Us</Link>
        <Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-80" href="/b2b-inquiry">Inquiry</Link>
        <Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-80" href="/portfolio">Portfolio</Link>
        <Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-80" href="/cart">Cart</Link>
        <Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-80" href="/customization">Customization</Link>
      </div>
      {/* Desktop Actions */}
      <div className="hidden lg:flex items-center gap-6">
        <Link className="px-6 py-2 bg-primary text-white hover:bg-primary/90 transition-colors font-label-lg tracking-wide rounded-none" href="/b2b-inquiry">Inquiry</Link>
        <Link href="/cart" className="relative text-on-surface hover:text-primary transition-colors group flex items-center justify-center">
          <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#BA1A1A] text-white text-[10px] font-bold px-1.5 py-0.5 min-w-[18px] text-center rounded-sm">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}