import React from 'react';
import Link from 'next/link';

export default function InspectionsPage() {
  return (
    <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-screen flex flex-col pt-[140px] pb-24">
      <main className="w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-gray-300 pb-10 gap-8">
          <div className="max-w-4xl">
            <h1 className="font-headline-md text-3xl lg:text-5xl text-[#1A1A1A] uppercase tracking-widest mb-6">
              Inspections
            </h1>
            <p className="text-[#4A4A4A] text-lg leading-relaxed">
              Inspections are an essential part of the supply chain management process for BRYSUN. We work with third-party inspection companies that provide objective and impartial assessments of the materials throughout the supply chain, from manufacturing to delivery. By implementing third-party inspections as part of our quality control process, BRYSUN provides customers with the assurance that the materials supplied are of the highest quality and meet all necessary standards.
            </p>
          </div>
        </div>

        {/* Third Party Audits Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Label */}
            <div className="lg:col-span-3">
              <span className="font-label-caps text-[10px] text-[#BA1A1A] tracking-widest uppercase block mb-3">Section 01</span>
              <h2 className="font-headline-md text-3xl text-[#1A1A1A] uppercase tracking-wider leading-tight">
                Third Party Audits
              </h2>
              <div className="w-16 h-1 bg-[#BA1A1A] mt-6"></div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-9 space-y-6">
              <div className="bg-white p-8 md:p-10 ambient-shadow-sm border-l-4 border-[#1A1A1A]">
                <p className="text-[#4A4A4A] text-base leading-relaxed mb-4">
                  Quality is an important part of the supply chain, whether checking quality as raw materials and parts enter the factory, quality inspections during the manufacturing process, or quality checks before goods are shipped to the customer.
                </p>
                <p className="text-[#4A4A4A] text-base leading-relaxed">
                  The quality of raw materials and parts used in manufacturing makes a difference to the finished products sold to customers. By ensuring that purchased materials and parts are of a specific quality as defined by development, manufacturing, or quality departments, your purchasing department helps to maintain the quality of finished goods.
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-[#1A1A1A] text-white p-8 md:p-10">
                <h3 className="font-headline-md text-2xl text-white uppercase tracking-wider mb-6">Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "Validate the strength of your supply chain against requirements",
                    "Assure that suppliers' goods and services are compliant with all requirements",
                    "Minimize the risk of product failures, product recalls, and other compliance issues",
                    "Reduce the risk of your company's liability with documented safety standards",
                    "Protect the reputation of your organization"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-[#BA1A1A] text-xl mt-0.5 shrink-0">check_circle</span>
                      <span className="text-white/90 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="text-[#6A6A6A] text-sm leading-relaxed italic px-2">
                This identification allows for the correct assessment of customs duties and taxes or the shipment value for foreign exchange control. Pre-shipment inspection is also key to helping governments maintain compliance with the WTO Agreement on Customs Valuation.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-300 my-20"></div>

        {/* Pre-shipment Inspection Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Label */}
            <div className="lg:col-span-3">
              <span className="font-label-caps text-[10px] text-[#BA1A1A] tracking-widest uppercase block mb-3">Section 02</span>
              <h2 className="font-headline-md text-3xl text-[#1A1A1A] uppercase tracking-wider leading-tight">
                Preshipment Inspection
              </h2>
              <div className="w-16 h-1 bg-[#BA1A1A] mt-6"></div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-9 space-y-6">
              <div className="bg-white p-8 md:p-10 ambient-shadow-sm border-l-4 border-[#1A1A1A]">
                <p className="text-[#4A4A4A] text-base leading-relaxed">
                  ISO 9001:2015 applies to any organization, regardless of size or industry. More than one million organizations from more than 160 countries have applied the ISO 9001 standard requirements to their quality management systems.
                </p>
              </div>

              {/* Benefits & RoyalCert Inspection Areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 ambient-shadow-sm border-t-4 border-[#BA1A1A]">
                  <h3 className="font-headline-md text-xl text-[#1A1A1A] mb-6">Benefits</h3>
                  <p className="text-[#6A6A6A] text-sm leading-relaxed">
                    RoyalCert conducts an effective inspection of goods, invoices and other documentation to enable proper identification prior to shipment.
                  </p>
                </div>

                <div className="bg-[#1A1A1A] text-white p-8">
                  <h3 className="font-headline-md text-xl text-white mb-6">Inspection Criteria</h3>
                  <ul className="space-y-3">
                    {[
                      { icon: "verified", label: "Quality" },
                      { icon: "inventory_2", label: "Quantity" },
                      { icon: "qr_code_2", label: "Tariff Classification" },
                      { icon: "flight_takeoff", label: "Import Eligibility" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#BA1A1A] text-xl">{item.icon}</span>
                        <span className="text-white/90">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <p className="text-[#6A6A6A] text-sm leading-relaxed italic px-2">
                This identification allows for the correct assessment of customs duties and taxes or the shipment value for foreign exchange control. Pre-shipment inspection is also key to helping governments maintain compliance with the WTO Agreement on Customs Valuation.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-24 bg-[#1A1A1A] text-white p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="font-headline-md text-3xl mb-4">Trust Our Inspection Standards</h2>
            <p className="font-body-md text-white/70">Every BRYSUN product is rigorously inspected to ensure compliance with international standards. Contact us for detailed quality reports.</p>
          </div>
          <Link href="/b2b-inquiry" className="shrink-0">
            <button className="bg-[#BA1A1A] text-white px-10 py-5 font-label-caps text-xs tracking-widest uppercase hover:brightness-110 transition-all duration-300 inline-flex items-center gap-3 rounded-none">
              <span>Request Inspection Report</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </Link>
        </div>

      </main>
    </div>
  );
}