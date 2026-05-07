import Image from "next/image";

export default function Contact() {
  return (
    <main className="pt-32 pb-section-gap px-margin-edge max-w-container-max mx-auto">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="font-headline-xl text-headline-xl text-primary mb-6">Partner With Us</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Submit your project details for custom architectural woodwork. Our specialists typically review and respond to inquiries within 24 hours.
        </p>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Form Column */}
        <div className="lg:col-span-8 bg-surface-container-lowest ambient-shadow rounded-xl p-8 lg:p-12">
          <form className="space-y-12">
            {/* Section 1: Company Info */}
            <fieldset>
              <legend className="font-headline-md text-headline-md text-primary mb-8 border-b border-outline-variant/30 pb-2 w-full">
                Company Information
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 uppercase" htmlFor="company_name">Company Name *</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background transition-colors" id="company_name" name="company_name" placeholder="e.g. Acme Architecture" required type="text" />
                </div>
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 uppercase" htmlFor="contact_name">Primary Contact *</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background transition-colors" id="contact_name" name="contact_name" placeholder="Full Name" required type="text" />
                </div>
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 uppercase" htmlFor="email">Business Email *</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background transition-colors" id="email" name="email" placeholder="contact@company.com" required type="email" />
                </div>
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 uppercase" htmlFor="phone">Phone Number</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background transition-colors" id="phone" name="phone" placeholder="+86 19017111088" type="tel" />
                </div>
              </div>
            </fieldset>

            {/* Section 2: Project Details */}
            <fieldset>
              <legend className="font-headline-md text-headline-md text-primary mb-8 border-b border-outline-variant/30 pb-2 w-full">
                Project Requirements
              </legend>
              <div className="space-y-8">
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 uppercase" htmlFor="project_name">Project Name *</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background transition-colors" id="project_name" name="project_name" placeholder="e.g. The Highland Residences" required type="text" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 uppercase" htmlFor="product_type">Product Type *</label>
                    <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background transition-colors" id="product_type" name="product_type" required defaultValue="">
                      <option disabled value="">Select Category</option>
                      <option value="doors">Custom Doors</option>
                      <option value="windows">Windows</option>
                      <option value="wardrobes">Cabinets & Wardrobes</option>
                      <option value="other">Other Architectural Elements</option>
                    </select>
                  </div>
                  <div className="relative">
                    <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 uppercase" htmlFor="quantity">Estimated Quantity *</label>
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background transition-colors" id="quantity" min="1" name="quantity" placeholder="Number of units" required type="number" />
                  </div>
                </div>
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 uppercase" htmlFor="details">Project Description</label>
                  <textarea className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background transition-colors resize-none" id="details" name="details" placeholder="Please describe the requirements and any specific architectural details..." rows={4}></textarea>
                </div>
              </div>
            </fieldset>

            {/* Submit */}
            <div className="pt-6 flex justify-end">
              <button className="bg-primary text-on-primary px-8 py-4 rounded font-label-caps text-label-caps hover:bg-primary-container hover:shadow-lg transition-all duration-300 tracking-widest uppercase flex items-center gap-2" type="submit">
                Submit Inquiry
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar / Contact Info */}
        <div className="lg:col-span-4 space-y-8">
          {/* Contact Card */}
          <div className="bg-surface-container-low ambient-shadow rounded-xl p-8">
            <h3 className="font-headline-md text-headline-md text-primary mb-6">Global Sales Department</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">location_on</span>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Headquarters</p>
                  <p className="font-body-md text-body-md text-on-background">
                    Room 501, Building 33, No. 157 Minzu Avenue,<br />
                    Qingxiu District, Nanning City,<br />
                    Guangxi Province, China
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">mail</span>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Email</p>
                  <a className="font-body-md text-body-md text-primary hover:underline" href="mailto:info@BrySun.com">info@BrySun.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">phone</span>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Direct Line</p>
                  <p className="font-body-md text-body-md text-on-background">+86 19017111088 (潘丽华)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div className="bg-tertiary-container text-on-tertiary-container rounded-xl p-8 ambient-shadow relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10">
              <span className="material-symbols-outlined text-9xl">verified</span>
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-tertiary-fixed mb-4 text-3xl">schedule</span>
              <h4 className="font-headline-md text-headline-md text-tertiary-fixed mb-2">24-Hour Response</h4>
              <p className="font-body-md text-body-md opacity-90">
                Our dedicated project managers review all architectural specifications within one business day to ensure swift project commencement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}