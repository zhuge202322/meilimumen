import React from 'react';
import Link from 'next/link';

export default function B2BInquiry() {
  return (
    <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-screen flex flex-col pt-[80px]">
      
      {/* Hero Section (Dark Immersive) */}
      <section className="relative w-full h-[50vh] min-h-[400px] bg-[#050505] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax & Dark Overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img 
            src="/images/factory/团队 (4).jpg" 
            alt="Business Inquiry" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#050505]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          <div className="font-label-caps text-base text-[#BA1A1A] tracking-[0.3em] uppercase mb-6">Partner With Us</div>
          <h1 className="font-headline-md text-6xl md:text-8xl text-white uppercase tracking-wide leading-tight mb-8">
            Wholesale & Custom<br/>Inquiries
          </h1>
          <p className="font-body-md text-lg md:text-xl text-white/80 tracking-wide uppercase border-t border-white/20 pt-8 inline-block max-w-2xl">
            Submit your project details for custom architectural woodwork. Our B2B specialists typically review and respond to inquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Layout Grid */}
      <main className="flex-grow w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left: Contact Info & Process */}
          <div className="lg:col-span-4 flex flex-col space-y-16">
            
            {/* Contact Details */}
            <div className="bg-white border border-gray-200 p-10 rounded-none ambient-shadow-sm">
              <h2 className="font-headline-md text-3xl text-[#1A1A1A] uppercase tracking-widest mb-8 border-b border-gray-300 pb-4">
                Direct Contact
              </h2>
              
              <ul className="space-y-8 font-body-md text-base text-[#4A4A4A]">
                <li>
                  <strong className="font-label-caps text-sm text-[#BA1A1A] uppercase tracking-widest block mb-2">Email</strong>
                  <a href="mailto:info@BrySun.com" className="hover:text-[#BA1A1A] transition-colors text-lg">info@BrySun.com</a>
                </li>
                <li>
                  <strong className="font-label-caps text-sm text-[#BA1A1A] uppercase tracking-widest block mb-2">Phone</strong>
                  <a href="tel:+8619017111088" className="hover:text-[#BA1A1A] transition-colors text-lg">+86 19017111088 (潘丽华)</a>
                </li>
                <li>
                  <strong className="font-label-caps text-sm text-[#BA1A1A] uppercase tracking-widest block mb-2">Headquarters</strong>
                  <span className="block leading-relaxed text-lg">Room 501, Building 33, No. 157 Minzu Avenue, Qingxiu District, Nanning City, Guangxi Province, China</span>
                </li>
              </ul>
            </div>

            {/* Small Factory Image Accent */}
            <div className="relative aspect-[4/3] w-full bg-[#1A1A1A] overflow-hidden rounded-none hidden lg:block">
              <img src="/images/factory/工厂照片/5.jpg" alt="Craftsmanship detail" className="w-full h-full object-cover opacity-80" />
            </div>

          </div>

          {/* Right: The Form */}
          <div className="lg:col-span-8">
            <form action="#" className="bg-white border border-gray-200 p-10 md:p-16 rounded-none ambient-shadow-sm space-y-12">
              
              {/* Section 1: Company Info */}
              <fieldset>
                <legend className="font-headline-md text-3xl text-[#1A1A1A] uppercase tracking-widest mb-8 border-b border-gray-300 pb-4 w-full">
                  Company Information
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="font-label-caps text-sm text-[#1A1A1A] font-bold uppercase tracking-widest block mb-3" htmlFor="company_name">Company Name *</label>
                    <input className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#BA1A1A] p-4 focus:ring-0 transition-all font-body-md text-lg text-[#1A1A1A] outline-none rounded-none" id="company_name" name="company_name" placeholder="e.g. Acme Architecture" required type="text"/>
                  </div>
                  <div>
                    <label className="font-label-caps text-sm text-[#1A1A1A] font-bold uppercase tracking-widest block mb-3" htmlFor="contact_name">Primary Contact *</label>
                    <input className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#BA1A1A] p-4 focus:ring-0 transition-all font-body-md text-lg text-[#1A1A1A] outline-none rounded-none" id="contact_name" name="contact_name" placeholder="Full Name" required type="text"/>
                  </div>
                  <div>
                    <label className="font-label-caps text-sm text-[#1A1A1A] font-bold uppercase tracking-widest block mb-3" htmlFor="email">Business Email *</label>
                    <input className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#BA1A1A] p-4 focus:ring-0 transition-all font-body-md text-lg text-[#1A1A1A] outline-none rounded-none" id="email" name="email" placeholder="" required type="email"/>
                  </div>
                  <div>
                    <label className="font-label-caps text-sm text-[#1A1A1A] font-bold uppercase tracking-widest block mb-3" htmlFor="phone">Phone Number</label>
                    <input className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#BA1A1A] p-4 focus:ring-0 transition-all font-body-md text-lg text-[#1A1A1A] outline-none rounded-none" id="phone" name="phone" placeholder="" type="tel"/>
                  </div>
                </div>
              </fieldset>

              {/* Section 2: Project Details */}
              <fieldset>
                <legend className="font-headline-md text-3xl text-[#1A1A1A] uppercase tracking-widest mb-8 border-b border-gray-300 pb-4 w-full">
                  Project Requirements
                </legend>
                <div className="space-y-8">
                  <div>
                    <label className="font-label-caps text-sm text-[#1A1A1A] font-bold uppercase tracking-widest block mb-3" htmlFor="project_name">Project Name *</label>
                    <input className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#BA1A1A] p-4 focus:ring-0 transition-all font-body-md text-lg text-[#1A1A1A] outline-none rounded-none" id="project_name" name="project_name" placeholder="e.g. The Highland Residences" required type="text"/>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="font-label-caps text-sm text-[#1A1A1A] font-bold uppercase tracking-widest block mb-3" htmlFor="product_type">Product Type *</label>
                      <div className="relative">
                        <select className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#BA1A1A] p-4 focus:ring-0 transition-all font-body-md text-lg text-[#1A1A1A] outline-none rounded-none appearance-none cursor-pointer" id="product_type" name="product_type" required>
                          <option value="" disabled selected>Select Category</option>
                          <option value="doors">Interior & Exterior Doors</option>
                          <option value="windows">Aluminum Windows</option>
                          <option value="wardrobes">Cabinets & Millwork</option>
                          <option value="flooring">Engineered Woods & SPC Flooring</option>
                          <option value="other">Other Architectural Elements</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">expand_more</span>
                      </div>
                    </div>
                    <div>
                      <label className="font-label-caps text-sm text-[#1A1A1A] font-bold uppercase tracking-widest block mb-3" htmlFor="quantity">Estimated Quantity *</label>
                      <input className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#BA1A1A] p-4 focus:ring-0 transition-all font-body-md text-lg text-[#1A1A1A] outline-none rounded-none" id="quantity" min="1" name="quantity" placeholder="Number of units / sq meters" required type="text"/>
                    </div>
                  </div>
                  
                  <div>
                    <label className="font-label-caps text-sm text-[#1A1A1A] font-bold uppercase tracking-widest block mb-3" htmlFor="details">Project Description</label>
                    <textarea className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#BA1A1A] p-4 focus:ring-0 transition-all font-body-md text-lg text-[#1A1A1A] outline-none rounded-none resize-none" id="details" name="details" placeholder="Please describe wood species preferences, finish requirements, and any specific architectural details..." rows={4}></textarea>
                  </div>
                </div>
              </fieldset>

              {/* Submit Button */}
              <div className="pt-4 flex justify-end">
                <button className="bg-[#1A1A1A] text-white px-12 py-5 font-label-caps text-base tracking-widest uppercase hover:bg-[#BA1A1A] transition-colors duration-300 flex items-center gap-3 rounded-none w-full md:w-auto justify-center" type="submit">
                  <span>Submit Inquiry</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Process Section (Dark) */}
      <section className="bg-[#050505] text-white py-24 px-8 md:px-16 lg:px-24 border-t border-white/10">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <div className="font-label-caps text-base text-[#BA1A1A] tracking-[0.2em] uppercase mb-4">Our Workflow</div>
            <h2 className="font-headline-md text-4xl md:text-5xl uppercase tracking-widest">How It Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#1A1A1A] text-[#BA1A1A] flex items-center justify-center font-headline-md text-3xl mb-6 rounded-none border border-white/10">1</div>
              <h3 className="font-label-caps text-lg tracking-widest uppercase mb-3">Submit Details</h3>
              <p className="text-white/60 font-body-md text-base leading-relaxed">Provide your project blueprints, quantities, and specific material requirements via our secure portal.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#1A1A1A] text-[#BA1A1A] flex items-center justify-center font-headline-md text-3xl mb-6 rounded-none border border-white/10">2</div>
              <h3 className="font-label-caps text-lg tracking-widest uppercase mb-3">Consultation</h3>
              <p className="text-white/60 font-body-md text-base leading-relaxed">Our specialists review your submission and schedule a call to align on technical specifications and lead times.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#1A1A1A] text-[#BA1A1A] flex items-center justify-center font-headline-md text-3xl mb-6 rounded-none border border-white/10">3</div>
              <h3 className="font-label-caps text-lg tracking-widest uppercase mb-3">Quotation</h3>
              <p className="text-white/60 font-body-md text-base leading-relaxed">Receive a comprehensive, itemized bulk quote including shipping, handling, and estimated delivery dates.</p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#1A1A1A] text-[#BA1A1A] flex items-center justify-center font-headline-md text-3xl mb-6 rounded-none border border-white/10">4</div>
              <h3 className="font-label-caps text-lg tracking-widest uppercase mb-3">Production</h3>
              <p className="text-white/60 font-body-md text-base leading-relaxed">Upon approval, your bespoke elements enter our precision manufacturing line, tracked by our QA team.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}