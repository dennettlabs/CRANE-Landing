import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Dennett Labs and the CRANE platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-5 md:px-12">
      <h1 className="text-4xl md:text-5xl font-black text-[#1a1d2e] tracking-tight mb-8">Privacy Policy</h1>
      
      <div className="text-[#1a1d2e]/80 space-y-10 leading-relaxed">
        <p className="font-semibold text-[#1a1d2e]">Last updated: October 2026</p>
        
        {/* 1. Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Dennett Labs (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your 
            personal information and your right to privacy.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website 
            at dennettlabs.com and use our CRANE platform. By accessing our services, you agree to the practices described 
            in this policy and our <Link href="/terms" className="text-[#2b5ea8] hover:underline">Terms of Service</Link>.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">2. Information We Collect</h2>
          
          <p className="mb-4 font-semibold text-[#1a1d2e]">Information you provide to us</p>
          <p className="mb-4">
            When you create an account, fill out a contact form, or communicate with us, we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Your name and email address</li>
            <li>Your company or organization name</li>
            <li>Your job title or role</li>
            <li>Any other information you choose to provide in messages or inquiries</li>
          </ul>

          <p className="mb-4 font-semibold text-[#1a1d2e]">Information collected automatically</p>
          <p className="mb-4">
            When you visit our website, we may automatically collect certain technical information, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Device type, browser type, and operating system</li>
            <li>Pages visited, time spent on pages, and navigation paths</li>
            <li>Approximate geographic location (country and city level)</li>
            <li>Referring website or source that directed you to us</li>
            <li>IP address</li>
          </ul>
          <p className="mt-4">
            This information is only collected if you have accepted analytics cookies through our cookie consent banner. 
            If you decline, no tracking information is collected.
          </p>
        </section>

        {/* 3. Cookies & Tracking */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">3. Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar technologies to understand how visitors use our website and to improve your experience. 
            Cookies are small data files stored on your device by your browser.
          </p>
          
          <p className="mb-3 font-semibold text-[#1a1d2e]">Types of cookies we use</p>
          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>
              <strong>Essential cookies:</strong> These are necessary for the website to function properly. They include 
              your cookie consent preference so we remember your choice. These cannot be disabled.
            </li>
            <li>
              <strong>Analytics cookies:</strong> These help us understand how visitors interact with our website — which pages 
              are most popular, how users navigate the site, and where they come from. This data is aggregated and anonymous. 
              These cookies are only set if you accept them.
            </li>
          </ul>

          <p className="mb-4 font-semibold text-[#1a1d2e]">Your choices</p>
          <p>
            When you first visit our website, a consent banner will ask whether you accept or reject analytics cookies. 
            If you reject them, no analytics data is collected and no tracking cookies are placed on your device. 
            You can change your preference at any time by clearing your browser&apos;s stored data and revisiting the site.
          </p>
        </section>

        {/* 4. How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">4. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide, operate, and maintain our services, including the CRANE platform</li>
            <li>To create and manage your account</li>
            <li>To respond to your inquiries and communicate with you</li>
            <li>To understand how our website and platform are used, so we can improve them</li>
            <li>To detect and prevent fraud, abuse, or security incidents</li>
            <li>To comply with legal obligations and enforce our terms</li>
          </ul>
        </section>

        {/* 5. Third-Party Service Providers */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">5. Third-Party Service Providers</h2>
          <p className="mb-4">
            We work with trusted third-party service providers to help us operate our business. 
            These providers only have access to the information necessary to perform their specific function and are 
            contractually obligated to protect your data. Our service providers fall into the following categories:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Analytics providers</strong> — to help us understand website traffic and usage patterns</li>
            <li><strong>Cloud infrastructure providers</strong> — to host our website and platform securely</li>
            <li><strong>Authentication providers</strong> — to manage secure user sign-in</li>
            <li><strong>Email delivery providers</strong> — to send transactional and administrative communications</li>
          </ul>
          <p className="mt-4">
            We do not sell, rent, or trade your personal information to third parties for their own marketing purposes.
          </p>
        </section>

        {/* 6. Data Retention */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">6. Data Retention</h2>
          <p className="mb-4">
            We retain your information only for as long as necessary to fulfill the purposes described in this policy, 
            unless a longer retention period is required by law.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Account data:</strong> Retained for as long as your account is active. You may request deletion at any time.</li>
            <li><strong>Analytics data:</strong> Retained in an aggregated, anonymized form for up to 26 months.</li>
            <li><strong>Contact form submissions:</strong> Retained for up to 12 months, unless an ongoing business relationship exists.</li>
            <li><strong>Cookie consent preferences:</strong> Stored locally on your device until you clear your browser data.</li>
          </ul>
        </section>

        {/* 7. International Data Transfers */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">7. International Data Transfers</h2>
          <p>
            Dennett Labs is based in Nairobi, Kenya. Some of our service providers may process your data in countries 
            outside of Kenya. When your data is transferred internationally, we take appropriate measures to ensure it 
            remains protected in accordance with this policy and applicable data protection laws. These measures include 
            working only with providers that maintain industry-standard security practices and data protection commitments.
          </p>
        </section>

        {/* 8. Your Rights */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">8. Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Correction:</strong> Request that we correct any inaccurate or incomplete information.</li>
            <li><strong>Deletion:</strong> Request that we delete your personal data, subject to certain legal exceptions.</li>
            <li><strong>Portability:</strong> Request a copy of your data in a structured, commonly used format.</li>
            <li><strong>Objection:</strong> Object to our processing of your data for certain purposes.</li>
            <li><strong>Withdrawal of consent:</strong> Withdraw your consent to data processing at any time, without affecting the lawfulness of processing carried out before withdrawal.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:privacy@dennettlabs.com" className="text-[#2b5ea8] hover:underline">privacy@dennettlabs.com</a>. 
            We will respond to your request within 30 days.
          </p>
        </section>

        {/* 9. Children's Privacy */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">9. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed at individuals under the age of 18. We do not knowingly collect personal 
            information from children. If we become aware that we have collected data from a child without parental consent, 
            we will take steps to delete that information promptly.
          </p>
        </section>

        {/* 10. Changes to This Policy */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, 
            or legal requirements. When we make changes, we will update the &quot;Last updated&quot; date at the top of this page. 
            If we make material changes that affect how we handle your personal information, we will notify you through 
            the email address associated with your account, where applicable.
          </p>
        </section>

        {/* 11. Contact Us */}
        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">11. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
            please reach out to us:
          </p>
          <ul className="list-none space-y-2 mt-4">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:privacy@dennettlabs.com" className="text-[#2b5ea8] hover:underline">privacy@dennettlabs.com</a>
            </li>
            <li>
              <strong>Contact page:</strong>{" "}
              <Link href="/contact" className="text-[#2b5ea8] hover:underline">dennettlabs.com/contact</Link>
            </li>
          </ul>
          <p className="mt-6 font-medium">
            Dennett Labs<br />
            Nairobi, Kenya
          </p>
        </section>
      </div>
    </div>
  );
}
