import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-6 pb-16 px-8 md:px-16 lg:px-24 bg-[#EBEBEB] text-[#1A1A1A] mt-auto md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-x-12 lg:gap-x-20 xl:gap-x-28 w-full max-w-[1800px] mx-auto">
        
        {/* Column 1: Brand */}
        <div className="col-span-1">
          <Link href="/">
            <img src="/logo.png" alt="BrySun Logo" className="h-12 w-auto mb-6" />
          </Link>
          <p className="font-body-md text-sm text-[#4A4A4A] max-w-xs leading-relaxed">
            Quality Wooden Doors & Custom Home Solutions.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a 
              href="https://www.facebook.com/?checkpoint_src=any" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#BA1A1A] hover:border-[#BA1A1A] hover:bg-[#BA1A1A]/5 transition-all duration-300 shadow-sm"
              title="Facebook"
            >
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/hetal-patel-9905062a9/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#BA1A1A] hover:border-[#BA1A1A] hover:bg-[#BA1A1A]/5 transition-all duration-300 shadow-sm"
              title="LinkedIn"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@bs.doorwindowfacto?_r=1&_t=ZP-96oxK8KgpG2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#BA1A1A] hover:border-[#BA1A1A] hover:bg-[#BA1A1A]/5 transition-all duration-300 shadow-sm"
              title="TikTok"
            >
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/8619017111088" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#BA1A1A] hover:border-[#BA1A1A] hover:bg-[#BA1A1A]/5 transition-all duration-300 shadow-sm"
              title="WhatsApp"
            >
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links & Policies */}
        <div className="col-span-1">
          <h4 className="font-label-caps text-xs font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-4 font-body-md text-sm text-[#4A4A4A]">
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/about">About Us</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/products">Products</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/process">Our Process</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/project">Project</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/values">Values</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/inspections">Inspections</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/b2b-inquiry">Inquiry</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/shipping-policy">Shipping Policy</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/refund-policy">Refund Policy</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/payment-methods">Payment Methods</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="col-span-1">
          <h4 className="font-label-caps text-xs font-bold mb-6 uppercase tracking-wider">Contact Info</h4>
          <ul className="space-y-4 font-body-md text-sm text-[#4A4A4A] pr-4">
            <li>Email: info@BrySun.com</li>
            <li>Phone: +86 19017111088 (潘丽华 / Lihua Pan)</li>
            <li className="leading-relaxed">Address: Room 501, Building 33, No. 157 Minzu Avenue, Qingxiu District, Nanning City, Guangxi Province, China</li>
          </ul>
        </div>

        {/* Column 4: Partner Card */}
        <div className="col-span-1">
          {/* Strictly applying straight edges (rounded-none) per global design rules */}
          <div className="bg-white p-8 border border-gray-200 ambient-shadow-sm rounded-none">
            <h4 className="font-headline-md text-2xl mb-2 text-[#1A1A1A]">Partner With Us</h4>
            <p className="font-body-md text-sm text-[#6A6A6A] mb-6">
              Start a Wholesale Partnership
            </p>
            <Link href="/b2b-inquiry" className="block w-full">
              <button className="w-full border border-[#1A1A1A] text-[#1A1A1A] bg-transparent font-label-caps text-[11px] uppercase tracking-widest py-3 px-4 hover:bg-[#1A1A1A] hover:text-white transition-all rounded-none">
                Inquire Now
              </button>
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-[1800px] mx-auto mt-20 flex justify-start text-xs font-body-md text-[#6A6A6A]">
        <p>&copy; 2024 BrySun. All rights reserved.</p>
      </div>
    </footer>
  );
}