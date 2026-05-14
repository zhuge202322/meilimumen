import React from 'react';

const values = [
  {
    title: "Commitment to Quality",
    subtitle: "",
    desc: "At BRYSUN, we are committed to the highest standards of quality in every product and service we offer. We employ rigorous testing and quality assurance processes to ensure that every offering not only meets but exceeds industry standards and client expectations.",
    icon: "verified"
  },
  {
    title: "Innovation",
    subtitle: "Pioneering Solutions",
    desc: "We foster a culture of innovation and creativity, believing that the key to future success lies in our ability to anticipate market trends and needs. Our team continuously explores new technologies, materials, and processes that can improve efficiency and deliver superior products.",
    icon: "lightbulb"
  },
  {
    title: "Integrity",
    subtitle: "Ethical Practices",
    desc: "Reliability is the cornerstone of our client relationships. With BRYSUN, you can expect a partner who is fully committed to your project's success, delivering consistent results on time and within budget.",
    icon: "handshake"
  },
  {
    title: "Sustainability",
    subtitle: "Environmental Stewardship",
    desc: "We are dedicated to reducing our environmental footprint and promoting sustainable practices throughout our operations. This involves utilizing eco-friendly materials, minimizing waste, and maximizing energy efficiency.",
    icon: "eco"
  },
  {
    title: "Customer Focus",
    subtitle: "Client-Centric Approach",
    desc: "Understanding and meeting the needs of our clients is paramount. We strive to provide personalized service and build long-term relationships by listening to our clients, adapting to their needs, and consistently delivering value.",
    icon: "support_agent"
  },
  {
    title: "Teamwork",
    subtitle: "Collaboration and Respect",
    desc: "We believe in the power of teamwork and collaboration. Our team is our most valuable asset, and we foster a supportive and inclusive environment where every member is respected, valued, and encouraged to contribute.",
    icon: "groups"
  },
  {
    title: "Accountability",
    subtitle: "Responsibility for Actions",
    desc: "We hold ourselves accountable for our performance and the outcomes of our actions. This accountability extends to our commitment to meet deadlines, budget constraints, and the high expectations we set for ourselves and for our partners.",
    icon: "gavel"
  }
];

export default function Values() {
  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-edge bg-surface" id="values">
      <div className="max-w-container-max mx-auto">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest mb-4 block uppercase">
            Our Values
          </span>
          <h2 className="font-headline-lg text-headline-lg text-black mb-6">At BrySun, we focus on well-crafted door products and building materials.</h2>
          <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed space-y-2">
            <p>We pursue lasting durability, elegant aesthetics and natural warmth for global spaces.</p>
            <p>We regard every door as the spiritual harbor of a home,</p>
            <p>and we always put service and integrity as our everlasting value.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="p-8 border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-black text-white rounded-none flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">{val.icon}</span>
              </div>
              <h3 className="font-headline-md text-xl text-black mb-1">{val.title}</h3>
              {val.subtitle && <p className="font-label-caps text-xs text-primary uppercase tracking-widest mb-4">{val.subtitle}</p>}
              {!val.subtitle && <div className="h-4"></div>}
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}