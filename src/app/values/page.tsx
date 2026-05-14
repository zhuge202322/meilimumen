import React from 'react';
import Link from 'next/link';

const values = [
  {
    title: "Commitment to Quality",
    subtitle: "",
    desc: "At BRYSUN, we are committed to the highest standards of quality in every product and service we offer. We employ rigorous testing and quality assurance processes to ensure that every offering not only meets but exceeds industry standards and client expectations.",
    icon: "verified",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Innovation",
    subtitle: "Pioneering Solutions",
    desc: "We foster a culture of innovation and creativity, believing that the key to future success lies in our ability to anticipate market trends and needs. Our team continuously explores new technologies, materials, and processes that can improve efficiency and deliver superior products.",
    icon: "lightbulb",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Integrity",
    subtitle: "Ethical Practices",
    desc: "Reliability is the cornerstone of our client relationships. With BRYSUN, you can expect a partner who is fully committed to your project's success, delivering consistent results on time and within budget.",
    icon: "handshake",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sustainability",
    subtitle: "Environmental Stewardship",
    desc: "We are dedicated to reducing our environmental footprint and promoting sustainable practices throughout our operations. This involves utilizing eco-friendly materials, minimizing waste, and maximizing energy efficiency.",
    icon: "eco",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Customer Focus",
    subtitle: "Client-Centric Approach",
    desc: "Understanding and meeting the needs of our clients is paramount. We strive to provide personalized service and build long-term relationships by listening to our clients, adapting to their needs, and consistently delivering value.",
    icon: "support_agent",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Teamwork",
    subtitle: "Collaboration and Respect",
    desc: "We believe in the power of teamwork and collaboration. Our team is our most valuable asset, and we foster a supportive and inclusive environment where every member is respected, valued, and encouraged to contribute.",
    icon: "groups",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Accountability",
    subtitle: "Responsibility for Actions",
    desc: "We hold ourselves accountable for our performance and the outcomes of our actions. This accountability extends to our commitment to meet deadlines, budget constraints, and the high expectations we set for ourselves and for our partners.",
    icon: "gavel",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function ValuesPage() {
  return (
    <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-screen flex flex-col pt-[140px] pb-24">
      <main className="w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-gray-300 pb-10 gap-8">
          <div className="max-w-4xl">
            <h1 className="font-headline-md text-3xl lg:text-5xl text-[#1A1A1A] uppercase tracking-widest mb-6">
              Our Values
            </h1>
            <h2 className="font-headline-md text-2xl text-[#BA1A1A] mb-4">
              At BrySun, we focus on well-crafted door products and building materials.
            </h2>
            <div className="text-[#4A4A4A] text-lg leading-relaxed space-y-2">
              <p>We pursue lasting durability, elegant aesthetics and natural warmth for global spaces.</p>
              <p>We regard every door as the spiritual harbor of a home,</p>
              <p>and we always put service and integrity as our everlasting value.</p>
            </div>
          </div>
        </div>

        {/* Values Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {values.map((val, index) => {
            // First item spans 2 columns on large screens to break the grid monotony
            const isLarge = index === 0;
            
            return (
              <div 
                key={index} 
                className={`group relative overflow-hidden bg-white ambient-shadow-sm flex flex-col h-[450px] ${isLarge ? 'md:col-span-2' : 'col-span-1'}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-1/2 overflow-hidden">
                  <img 
                    src={val.image} 
                    alt={val.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>

                {/* Content Area */}
                <div className="relative mt-auto h-1/2 p-8 bg-white border-t-4 border-[#1A1A1A] group-hover:border-[#BA1A1A] transition-colors duration-300 flex flex-col">
                  {/* Floating Icon */}
                  <div className="absolute -top-6 right-8 w-12 h-12 bg-[#1A1A1A] group-hover:bg-[#BA1A1A] transition-colors duration-300 text-white flex items-center justify-center rounded-none shadow-lg">
                    <span className="material-symbols-outlined">{val.icon}</span>
                  </div>
                  
                  <div className="mb-2">
                    <h3 className="font-headline-md text-2xl text-[#1A1A1A] uppercase tracking-wider">{val.title}</h3>
                    {val.subtitle && (
                      <span className="font-label-caps text-[10px] text-[#BA1A1A] tracking-[0.2em] uppercase mt-1 block">
                        {val.subtitle}
                      </span>
                    )}
                  </div>
                  
                  <p className="font-body-md text-[#6A6A6A] leading-relaxed line-clamp-4 mt-auto">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div className="mt-24 bg-[#1A1A1A] text-white p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 rounded-none">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="font-headline-md text-3xl mb-4">Experience Our Commitment</h2>
            <p className="font-body-md text-white/70">Let our values reflect in your next architectural project. Reach out to our team to discuss your specific requirements.</p>
          </div>
          <Link href="/b2b-inquiry" className="shrink-0">
            <button className="bg-[#BA1A1A] text-white px-10 py-5 font-label-caps text-xs tracking-widest uppercase hover:brightness-110 transition-all duration-300 inline-flex items-center gap-3 rounded-none">
              <span>Contact Us</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </Link>
        </div>

      </main>
    </div>
  );
}