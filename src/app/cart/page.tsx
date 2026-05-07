"use client";

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-[70vh] flex flex-col items-center justify-center pt-[120px]">
        <span className="material-symbols-outlined text-6xl mb-6 text-[#6A6A6A]">shopping_cart</span>
        <h1 className="text-2xl font-headline-md uppercase tracking-widest mb-4">Your Cart is Empty</h1>
        <p className="text-[#4A4A4A] mb-8 text-center max-w-md">Looks like you haven't added any products to your cart yet. Discover our curated collections.</p>
        <Link href="/products" className="bg-[#1A1A1A] text-white py-4 px-8 font-label-caps text-xs uppercase tracking-widest hover:bg-[#BA1A1A] transition-colors duration-300 rounded-none">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-screen flex flex-col pt-[140px] pb-24">
      <main className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        
        <h1 className="font-headline-md text-3xl lg:text-4xl text-[#1A1A1A] uppercase tracking-widest mb-12 border-b border-gray-300 pb-6">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-8">
            <div className="hidden md:grid grid-cols-12 gap-4 border-b border-gray-300 pb-4 font-label-caps text-[10px] tracking-widest uppercase text-[#6A6A6A]">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {cart.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-b border-gray-200 pb-8 relative group">
                
                {/* Product Info */}
                <div className="md:col-span-6 flex gap-6 items-center">
                  <Link href={`/product-detail?id=${item.id}`} className="w-24 h-24 bg-[#1A1A1A] flex-shrink-0 relative overflow-hidden block">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                  </Link>
                  <div>
                    <div className="font-label-caps text-[10px] text-[#BA1A1A] tracking-widest uppercase mb-1">{item.category}</div>
                    <Link href={`/product-detail?id=${item.id}`} className="font-headline-md text-lg uppercase tracking-wide hover:text-[#BA1A1A] transition-colors">
                      {item.name}
                    </Link>
                    <button onClick={() => removeFromCart(item.id)} className="text-[#6A6A6A] hover:text-[#BA1A1A] text-xs underline mt-2 block transition-colors">Remove</button>
                  </div>
                </div>

                {/* Price */}
                <div className="md:col-span-2 text-center text-[#4A4A4A] hidden md:block">
                  {item.price > 0 ? `$${item.price.toFixed(2)}` : 'Custom'}
                </div>

                {/* Quantity */}
                <div className="md:col-span-2 flex justify-center">
                  <div className="flex border border-gray-300 rounded-none w-24 h-10">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 flex items-center justify-center text-[#6A6A6A] hover:text-[#BA1A1A] hover:bg-gray-100 transition-colors"
                    >-</button>
                    <input 
                      type="text" 
                      value={item.quantity} 
                      readOnly 
                      className="w-8 text-center text-sm border-none bg-transparent focus:ring-0 p-0"
                    />
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 flex items-center justify-center text-[#6A6A6A] hover:text-[#BA1A1A] hover:bg-gray-100 transition-colors"
                    >+</button>
                  </div>
                </div>

                {/* Total */}
                <div className="md:col-span-2 text-right font-medium text-[#1A1A1A]">
                  {item.price > 0 ? `$${(item.price * item.quantity).toFixed(2)}` : 'Custom'}
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 border border-gray-200 rounded-none sticky top-[140px]">
              <h2 className="font-headline-md text-xl uppercase tracking-widest mb-6 border-b border-gray-200 pb-4">Order Summary</h2>
              
              <div className="space-y-4 font-body-md text-sm text-[#4A4A4A] mb-8">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{cartTotal > 0 ? `$${cartTotal.toFixed(2)}` : 'Custom Quote'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-4 mt-4 text-[#1A1A1A] font-bold text-lg">
                  <span>Total</span>
                  <span>{cartTotal > 0 ? `$${cartTotal.toFixed(2)}` : 'Custom Quote'}</span>
                </div>
              </div>

              <Link href="/checkout" className="w-full bg-[#1A1A1A] text-white py-4 font-label-caps text-xs uppercase tracking-widest flex items-center justify-center hover:bg-[#BA1A1A] transition-colors duration-300 rounded-none block text-center">
                Proceed to Checkout
              </Link>
              
              <p className="text-xs text-[#6A6A6A] mt-6 text-center leading-relaxed">
                Taxes and shipping calculated at checkout. By proceeding, you agree to our Terms of Service.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
