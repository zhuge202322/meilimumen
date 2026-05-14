import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#EBEBEB] text-[#1A1A1A] font-body-md min-h-screen flex flex-col pt-[140px] pb-24">
      <main className="w-full max-w-[1200px] mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="font-headline-md text-3xl lg:text-4xl text-[#1A1A1A] uppercase tracking-widest mb-12 border-b border-gray-300 pb-6">
          Privacy Policy
        </h1>
        <div className="bg-white p-8 md:p-12 ambient-shadow-sm font-body-md text-[#4A4A4A] leading-relaxed">
          <p className="mb-4">Last Updated: April 21, 2026</p>

          <h2 className="font-headline-md text-xl text-[#1A1A1A] uppercase tracking-widest mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">Hainan Beautiful Sunshine Building Materials Co., Ltd. (hereinafter referred to as "BrySun", "we", "us" or "our") operates the website https://www.brysun.com (the "Service"). This Privacy Policy explains how we collect, use, disclose and safeguard your personal information when you visit our website, submit an inquiry, or place an order. By using the Service you agree to the collection and use of information in accordance with this Policy.</p>

          <h2 className="font-headline-md text-xl text-[#1A1A1A] uppercase tracking-widest mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">We only collect information that is necessary to fulfill your order, respond to your inquiries, or improve our Service:</p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li><strong>Identity & Contact Information:</strong> name, company, email address, phone number, shipping address.</li>
            <li><strong>Project Information:</strong> project name, product type, estimated quantity, design preferences and any details you voluntarily share through our inquiry forms.</li>
            <li><strong>Transaction Information:</strong> order history, products purchased, payment confirmation references (we do NOT store full credit card numbers, see Section 5).</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device identifiers, pages visited, referring URLs, cookies and similar tracking technologies used to operate the website securely.</li>
          </ul>

          <h2 className="font-headline-md text-xl text-[#1A1A1A] uppercase tracking-widest mt-8 mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>To process orders, customize products and arrange international shipping.</li>
            <li>To respond to B2B inquiries, provide quotations, and offer after-sale support.</li>
            <li>To send order confirmations, shipping notifications, and policy updates.</li>
            <li>To detect and prevent fraud, abuse, and security incidents.</li>
            <li>To comply with applicable laws, regulations, customs and tax requirements.</li>
            <li>With your explicit consent, to send occasional product updates or promotions (you can unsubscribe at any time).</li>
          </ul>

          <h2 className="font-headline-md text-xl text-[#1A1A1A] uppercase tracking-widest mt-8 mb-4">4. Cookies & Tracking Technologies</h2>
          <p className="mb-4">We use cookies and similar technologies to remember your preferences, keep your shopping cart active, analyze traffic and improve site performance. You can disable cookies in your browser settings; however, certain features (such as the cart and login) may not function properly without them.</p>

          <h2 className="font-headline-md text-xl text-[#1A1A1A] uppercase tracking-widest mt-8 mb-4">5. Payment Security</h2>
          <p className="mb-4">All payments (PayPal, credit card, TT wire transfer) are processed by certified third-party payment providers using TLS encryption and PCI-DSS compliant infrastructure. BrySun does not collect or store your full credit card number, CVV, or banking password. For details on supported payment methods, please see our <a href="/payment-methods" className="text-[#BA1A1A] underline">Payment Methods</a> page.</p>

          <h2 className="font-headline-md text-xl text-[#1A1A1A] uppercase tracking-widest mt-8 mb-4">6. How We Share Information</h2>
          <p className="mb-4">We never sell your personal information. We share data only with:</p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li><strong>Logistics partners</strong> (cross-border carriers, customs brokers) — limited to the information necessary for delivery.</li>
            <li><strong>Payment processors</strong> — limited to transaction information.</li>
            <li><strong>Third-party inspection companies</strong> — for quality and pre-shipment audits, limited to product/order references.</li>
            <li><strong>Government authorities</strong> — when legally required (taxation, customs declaration, court orders).</li>
            <li><strong>Service providers</strong> bound by confidentiality obligations (e.g. hosting, email delivery, analytics).</li>
          </ul>

          <h2 className="font-headline-md text-xl text-[#1A1A1A] uppercase tracking-widest mt-8 mb-4">7. International Data Transfer</h2>
          <p className="mb-4">As a cross-border supplier, your information may be transferred to, stored and processed in countries other than your own (including China where our headquarters is located). We use contractual and technical safeguards to protect your data wherever it is processed.</p>

          <h2 className="font-headline-md text-xl text-[#1A1A1A] uppercase tracking-widest mt-8 mb-4">8. Data Retention</h2>
          <p className="mb-4">We retain order, contract, customs and tax records for the period required by applicable laws (usually no less than 5 years from the order date). Inquiry records are kept for up to 24 months unless you request deletion.</p>

          <h2 className="font-headline-md text-xl text-[#1A1A1A] uppercase tracking-widest mt-8 mb-4">9. Your Rights</h2>
          <p className="mb-4">Subject to applicable law (including GDPR / CCPA where relevant), you have the right to:</p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Access and receive a copy of the personal data we hold about you.</li>
            <li>Request correction of inaccurate or incomplete data.</li>
            <li>Request deletion of your personal data (subject to legal retention obligations).</li>
            <li>Object to or restrict certain processing activities.</li>
            <li>Withdraw consent for marketing communications at any time.</li>
          </ul>
          <p className="mb-4">To exercise these rights, contact us via the email below. We will respond within 30 days.</p>

          <h2 className="font-headline-md text-xl text-[#1A1A1A] uppercase tracking-widest mt-8 mb-4">10. Children's Privacy</h2>
          <p className="mb-4">Our Service is intended for businesses and adults aged 18 or above. We do not knowingly collect personal information from children. If you believe a minor has submitted personal information, please contact us so we can remove it.</p>

          <h2 className="font-headline-md text-xl text-[#1A1A1A] uppercase tracking-widest mt-8 mb-4">11. Changes to This Policy</h2>
          <p className="mb-4">We may update this Privacy Policy periodically. The "Last Updated" date at the top of the page reflects the most recent changes. Your continued use of the Service after such changes indicates your acceptance of the updated terms.</p>

          <h2 className="font-headline-md text-xl text-[#1A1A1A] uppercase tracking-widest mt-8 mb-4">12. Contact Us</h2>
          <p className="mb-4">If you have any questions, concerns or requests regarding this Privacy Policy, please contact us:</p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>By Email: info@brysun.com</li>
            <li>By Mail: Hainan Beautiful Sunshine Building Materials Co., Ltd.</li>
            <li>Room 501, Building 33, No. 157 Minzu Avenue, Qingxiu District, Nanning City, Guangxi Zhuang Autonomous Region, People's Republic of China</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
