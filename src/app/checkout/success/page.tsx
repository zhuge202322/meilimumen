import React from 'react';
import Link from 'next/link';

export default function CheckoutSuccessPage() {
  return (
    <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-[80vh] flex flex-col items-center justify-center pt-[120px] px-8 text-center">
      <div className="w-20 h-20 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-8">
        <span className="material-symbols-outlined text-white text-4xl">check</span>
      </div>
      
      <h1 className="font-headline-md text-3xl lg:text-4xl uppercase tracking-widest mb-6">
        Order Received
      </h1>
      
      <p className="text-[#4A4A4A] max-w-lg mb-12 leading-relaxed">
        Thank you for your inquiry. Our B2B accounts team has received your order details and will be in touch shortly with a formal invoice and shipping estimates.
      </p>
      
      <Link href="/" className="bg-[#1A1A1A] text-white py-4 px-10 font-label-caps text-xs uppercase tracking-widest hover:bg-[#BA1A1A] transition-colors duration-300 rounded-none">
        Return to Home
      </Link>
    </div>
  );
}
