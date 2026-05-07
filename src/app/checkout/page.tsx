"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for B2B order submission
    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      router.push('/checkout/success');
    }, 1500);
  };

  if (cart.length === 0 && !isSubmitting) {
    return (
      <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-[70vh] flex flex-col items-center justify-center pt-[120px]">
        <h1 className="text-2xl font-headline-md uppercase tracking-widest mb-4">Your Cart is Empty</h1>
        <Link href="/products" className="bg-[#1A1A1A] text-white py-4 px-8 font-label-caps text-xs uppercase tracking-widest hover:bg-[#BA1A1A] transition-colors duration-300 rounded-none">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-screen flex flex-col pt-[140px] pb-24">
      <main className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        
        <h1 className="font-headline-md text-3xl lg:text-4xl text-[#1A1A1A] uppercase tracking-widest mb-12 border-b border-gray-300 pb-6">
          Checkout
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left: Billing & Shipping Form */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Contact Info */}
            <section>
              <h2 className="font-headline-md text-xl uppercase tracking-widest mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] tracking-widest uppercase text-[#1A1A1A]">First Name *</label>
                  <input required type="text" className="w-full bg-[#F5F5F5] border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:border-[#BA1A1A] focus:ring-1 focus:ring-[#BA1A1A] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] tracking-widest uppercase text-[#1A1A1A]">Last Name *</label>
                  <input required type="text" className="w-full bg-[#F5F5F5] border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:border-[#BA1A1A] focus:ring-1 focus:ring-[#BA1A1A] transition-colors" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-label-caps text-[10px] tracking-widest uppercase text-[#1A1A1A]">Email Address *</label>
                  <input required type="email" className="w-full bg-[#F5F5F5] border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:border-[#BA1A1A] focus:ring-1 focus:ring-[#BA1A1A] transition-colors" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-label-caps text-[10px] tracking-widest uppercase text-[#1A1A1A]">Company Name (Optional)</label>
                  <input type="text" className="w-full bg-[#F5F5F5] border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:border-[#BA1A1A] focus:ring-1 focus:ring-[#BA1A1A] transition-colors" />
                </div>
              </div>
            </section>

            {/* Shipping Address */}
            <section>
              <h2 className="font-headline-md text-xl uppercase tracking-widest mb-6">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-label-caps text-[10px] tracking-widest uppercase text-[#1A1A1A]">Street Address *</label>
                  <input required type="text" className="w-full bg-[#F5F5F5] border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:border-[#BA1A1A] focus:ring-1 focus:ring-[#BA1A1A] transition-colors" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-label-caps text-[10px] tracking-widest uppercase text-[#1A1A1A]">Apartment, suite, etc. (Optional)</label>
                  <input type="text" className="w-full bg-[#F5F5F5] border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:border-[#BA1A1A] focus:ring-1 focus:ring-[#BA1A1A] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] tracking-widest uppercase text-[#1A1A1A]">City *</label>
                  <input required type="text" className="w-full bg-[#F5F5F5] border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:border-[#BA1A1A] focus:ring-1 focus:ring-[#BA1A1A] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] tracking-widest uppercase text-[#1A1A1A]">Country / Region *</label>
                  <select required className="w-full bg-[#F5F5F5] border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:border-[#BA1A1A] focus:ring-1 focus:ring-[#BA1A1A] transition-colors appearance-none">
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="EU">European Union</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] tracking-widest uppercase text-[#1A1A1A]">State / Province</label>
                  <input type="text" className="w-full bg-[#F5F5F5] border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:border-[#BA1A1A] focus:ring-1 focus:ring-[#BA1A1A] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] tracking-widest uppercase text-[#1A1A1A]">ZIP / Postal Code *</label>
                  <input required type="text" className="w-full bg-[#F5F5F5] border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:border-[#BA1A1A] focus:ring-1 focus:ring-[#BA1A1A] transition-colors" />
                </div>
              </div>
            </section>

            {/* Payment Info */}
            <section>
              <h2 className="font-headline-md text-xl uppercase tracking-widest mb-6">Payment Method</h2>
              <div className="bg-[#F5F5F5] border border-gray-300 p-6 rounded-none">
                <label className="flex items-center gap-4 cursor-pointer">
                  <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-[#BA1A1A] focus:ring-[#BA1A1A] border-gray-400 rounded-none" />
                  <span className="font-body-md text-[#1A1A1A]">B2B Invoice / Wire Transfer (Net 30)</span>
                </label>
                <p className="text-[#6A6A6A] text-sm mt-4 ml-8">
                  For wholesale and custom architectural orders, our accounts team will review your submission and issue a formal invoice with wire transfer details.
                </p>
              </div>
            </section>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 border border-gray-200 rounded-none sticky top-[140px]">
              <h2 className="font-headline-md text-xl uppercase tracking-widest mb-6 border-b border-gray-200 pb-4">Your Order</h2>
              
              <div className="space-y-4 mb-8 max-h-[40vh] overflow-y-auto pr-2">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-16 h-16 bg-[#1A1A1A] flex-shrink-0 relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-90" />
                      <span className="absolute -top-2 -right-2 bg-[#6A6A6A] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-label-caps text-[10px] uppercase tracking-wider text-[#1A1A1A]">{item.name}</h4>
                      <p className="text-xs text-[#6A6A6A]">{item.category}</p>
                    </div>
                    <div className="text-sm text-[#1A1A1A] font-medium">
                      {item.price > 0 ? `$${(item.price * item.quantity).toFixed(2)}` : 'Quote'}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 font-body-md text-sm text-[#4A4A4A] mb-8 border-t border-gray-200 pt-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{cartTotal > 0 ? `$${cartTotal.toFixed(2)}` : 'Custom Quote'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>TBD</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-4 mt-4 text-[#1A1A1A] font-bold text-lg">
                  <span>Total</span>
                  <span className="text-[#BA1A1A]">{cartTotal > 0 ? `$${cartTotal.toFixed(2)}` : 'Custom Quote'}</span>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#1A1A1A] text-white py-4 font-label-caps text-xs uppercase tracking-widest flex items-center justify-center hover:bg-[#BA1A1A] transition-colors duration-300 rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Processing...</span>
                ) : (
                  <span>Place Order</span>
                )}
              </button>
            </div>
          </div>

        </form>
      </main>
    </div>
  );
}
