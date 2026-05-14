import React from 'react';

const processes = [
  {
    title: "Estimating",
    desc: "The process begins with a detailed estimation phase where we assess project needs, calculate material requirements, and estimate costs. This initial step ensures all aspects of the project are economically viable and resources are allocated efficiently.",
    icon: "calculate"
  },
  {
    title: "Design",
    desc: "During the design phase, we collaborate with architects and engineers to develop detailed plans and specifications for the project. This phase focuses on innovation, functionality, and ensuring the design meets all regulatory standards and client expectations.",
    icon: "design_services"
  },
  {
    title: "Planning and Sourcing",
    desc: "Planning and sourcing involve strategizing the procurement timeline and selecting suppliers who meet our criteria for quality, reliability, and sustainability. This step sets the foundation for a seamless flow of materials and services throughout the project lifecycle.",
    icon: "event_note"
  },
  {
    title: "Purchasing",
    desc: "With suppliers identified, the purchasing phase involves negotiating contracts, placing orders, and scheduling deliveries. Our aim is to secure the best prices while ensuring material availability aligns with project timelines.",
    icon: "shopping_cart_checkout"
  },
  {
    title: "Quality Control",
    desc: "Quality control is integral to our process. We inspect all materials and services for compliance with our stringent standards. This ensures that only the highest quality products are used, reducing the risk of defects and future maintenance.",
    icon: "fact_check"
  },
  {
    title: "Logistics",
    desc: "Our logistics team expertly manages the transportation and storage of materials. We ensure that logistics operations are streamlined to keep the project on schedule, with materials arriving safely and efficiently at their intended destinations.",
    icon: "local_shipping"
  },
  {
    title: "Customer Satisfaction",
    desc: "Finally, we focus on ensuring customer satisfaction through every phase of the project. Regular progress reports and meetings keep clients informed and involved. Upon project completion, we conduct thorough reviews and follow-ups to guarantee that the final outcome exceeds customer expectations and fosters lasting relationships.",
    icon: "thumb_up"
  }
];

export default function OurProcess() {
  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-edge bg-surface-container-low" id="process">
      <div className="max-w-container-max mx-auto">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest mb-4 block uppercase">
            Our Process
          </span>
          <h2 className="font-headline-lg text-headline-lg text-black mb-6">Supply Chain Management</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Supply chain management is an essential process in multifamily construction projects. It involves the coordination of various activities and suppliers to ensure timely delivery of materials and services at the right costs. The following are the processes involved in supply chain management in a multifamily construction project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {processes.map((proc, idx) => (
            <div key={idx} className="bg-surface p-8 ambient-shadow-sm border-t-4 border-primary hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-2xl">{proc.icon}</span>
              </div>
              <h3 className="font-headline-md text-xl text-black mb-4">{proc.title}</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {proc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}