import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Dennett Labs.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-5 md:px-12">
      <h1 className="text-4xl md:text-5xl font-black text-[#1a1d2e] tracking-tight mb-8">Privacy Policy</h1>
      
      <div className="text-[#1a1d2e]/80 space-y-8 leading-relaxed">
        <p className="font-semibold text-[#1a1d2e]">Last updated: October 2026</p>
        
        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">1. Introduction</h2>
          <p>
            Welcome to Dennett Labs ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website dennettlabs.com 
            and our CRANE platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            We collect information that you voluntarily provide to us when you register on the Services, express an interest in obtaining 
            information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Information Provided by You:</strong> We collect names, email addresses, job titles, and other similar information.</li>
            <li><strong>Automatically Collected Information:</strong> We automatically collect certain information when you visit, use or navigate the Services, including through analytics platforms like Google Tag Manager. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our Services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">3. Use of Cookies and Tracking Technologies</h2>
          <p>
            We use cookies, web beacons, and similar tracking technologies to access or store information. We use analytics tools (such as Google Analytics via Google Tag Manager) 
            to help us understand how users interact with our platform. You can control the use of cookies at the individual browser level or through our 
            cookie consent manager.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">4. How We Use Your Information</h2>
          <p className="mb-4">
            We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. Specifically, we use the information we collect or receive:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To facilitate account creation and logon process.</li>
            <li>To send administrative information to you.</li>
            <li>To fulfill and manage your requests or orders.</li>
            <li>To improve our platforms and user experience through analytics.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">5. Contact Us</h2>
          <p>
            If you have questions or comments about this notice, you may email us at <a href="mailto:privacy@dennettlabs.com" className="text-[#2b5ea8] hover:underline">privacy@dennettlabs.com</a> or contact us through our <Link href="/contact" className="text-[#2b5ea8] hover:underline">Contact</Link> page.
          </p>
          <p className="mt-4 font-medium">
            Dennett Labs<br />
            Nairobi, Kenya
          </p>
        </section>
      </div>
    </div>
  );
}
