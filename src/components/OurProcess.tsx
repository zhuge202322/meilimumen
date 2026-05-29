import React from 'react';

const processes = [
  {
    title: "Estimating",
    desc: "According to customers' door styles, sizes, materials and customized requirements, the factory calculates full costs including timber, hardware, labor, packaging and logistics and provides accurate quotations. Overseas clients suffer from inflated prices. We provide accurate quotations to ensure transparency.",
    icon: "calculate"
  },
  {
    title: "Design",
    desc: "Designers customize door structure, colors and processes and produce construction and renderings based on overseas building standards, local climates and customer aesthetics. Clients worry about non-compliant designs and big gap between renderings and real products.",
    icon: "design_services"
  },
  {
    title: "Material Selection",
    desc: "We strictly select imported solid wood, eco-friendly boards and branded hardware, verify material certificates, environmental indicators and moisture-proof performance, and keep samples after purchasing. Overseas clients face inferior materials.",
    icon: "forest"
  },
  {
    title: "Production",
    desc: "We conduct cutting, polishing, painting and assembly per confirmed drawings following foreign trade production standards to control flatness, tightness and paint quality. Overseas clients complain about rough workmanship, batch color difference.",
    icon: "precision_manufacturing"
  },
  {
    title: "Quality Inspection",
    desc: "Full inspection is carried out on finished products to check size accuracy, paint integrity, hardware operation and moisture resistance, with batch sampling and official quality reports. Clients face unstrict inspection.",
    icon: "fact_check"
  },
  {
    title: "Logistics",
    desc: "We adopt shockproof and moisture-proof export packaging, arrange customs declaration documents, cooperate with forwarders for booking and loading, and track logistics in real time. Clients suffer from package damage.",
    icon: "local_shipping"
  },
  {
    title: "After-Sales",
    desc: "We provide after-sales support including installation guidance, parts replacement and quality warranty after goods arrival, and respond to overseas consultations and feedback timely. Clients face delayed cross-border after-sales service.",
    icon: "support_agent"
  },
  {
    title: "Customization",
    desc: "We adapt to international standards to ensure accurate design implementation. We ensure full material traceability and quality. Standard assembly line operation ensures consistent batch product quality. 100% full inspection eliminates defective products.",
    icon: "handyman"
  }
];

export default function OurProcess() {
  return (
    <section className="relative py-16 md:py-section-gap px-4 md:px-margin-edge bg-[#050505]" id="process">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img 
          src="/images/factory/exhibition/1.jpg" 
          alt="Factory Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/70 to-[#050505]"></div>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto">
        <div className="mb-16 text-center max-w-5xl mx-auto">
          <span className="font-label-caps text-[#BA1A1A] tracking-widest mb-4 block uppercase text-lg">
            Our Process
          </span>
          <h2 className="font-headline-xl text-4xl md:text-6xl text-white mb-6">Factory Export Solutions</h2>
          <p className="font-body-lg text-lg md:text-xl text-white/80 leading-relaxed">
            Our factory delivers a complete export solution for doors, custom cabinets and all types of windows. Featuring accurate quotation, international custom design, premium material selection, standardized production, full quality inspection, professional logistics and 24/7 cross-border after-sales service, we ensure reliable and worry-free purchasing for global clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((proc, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-[#BA1A1A]/20 rounded-full flex items-center justify-center mb-5 text-[#BA1A1A]">
                <span className="material-symbols-outlined text-2xl">{proc.icon}</span>
              </div>
              <h3 className="font-headline-md text-lg md:text-xl text-white mb-4">{proc.title}</h3>
              <p className="font-body-md text-sm md:text-base text-white/70 leading-relaxed">
                {proc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}