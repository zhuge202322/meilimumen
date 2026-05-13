import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 md:px-16 lg:px-24 bg-[#EBEBEB] text-[#1A1A1A] mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-x-12 lg:gap-x-20 xl:gap-x-28 w-full max-w-[1800px] mx-auto">
        
        {/* Column 1: Brand */}
        <div className="col-span-1">
          <h2 className="font-headline-md text-xl lg:text-2xl mb-6 uppercase leading-snug">
            Beautiful Sunshine<br/>Building Materials
          </h2>
          <p className="font-body-md text-sm text-[#4A4A4A] max-w-xs leading-relaxed">
            Quality Wooden Doors & Custom Home Solutions.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="col-span-1">
          <h4 className="font-label-caps text-xs font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-4 font-body-md text-sm text-[#4A4A4A]">
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/products">Products</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/customization">Customization</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/about">About Us</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/b2b-inquiry">Inquiry</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/cart">Cart</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/faq">FAQ</Link>
            </li>
            <li>
              <Link className="hover:text-[#BA1A1A] transition-colors" href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="col-span-1">
          <h4 className="font-label-caps text-xs font-bold mb-6 uppercase tracking-wider">Contact Info</h4>
          <ul className="space-y-4 font-body-md text-sm text-[#4A4A4A] pr-4">
            <li>Email: info@BrySun.com</li>
            <li>Phone: +86 19017111088 (潘丽华)</li>
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
        <p>&copy; 2024 Beautiful Sunshine Building Materials Co., Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}