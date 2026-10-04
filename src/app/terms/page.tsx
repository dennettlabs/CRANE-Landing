import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Dennett Labs and the CRANE platform.",
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-5 md:px-12">
      <h1 className="text-4xl md:text-5xl font-black text-[#1a1d2e] tracking-tight mb-8">Terms of Service</h1>
      
      <div className="text-[#1a1d2e]/80 space-y-8 leading-relaxed">
        <p className="font-semibold text-[#1a1d2e]">Last updated: October 2026</p>
        
        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using the services provided by Dennett Labs (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), 
            including the CRANE platform (Candidate Ranking for Adaptive Novel Enzymes) and our website at dennettlabs.com 
            (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). 
            If you do not agree to these Terms, you may not access or use the Services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">2. Description of Services</h2>
          <p className="mb-4">
            Dennett Labs provides a computational biology platform that uses physics-informed artificial intelligence 
            to discover, simulate, and rank extremophile enzymes for industrial manufacturing. Our Services include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>CRANE Platform:</strong> A web-based tool for computational enzyme screening, ranking, and analysis.</li>
            <li><strong>Research Outputs:</strong> Prioritized shortlists of enzyme candidates, simulation data, and associated reports.</li>
            <li><strong>Website:</strong> Information, resources, and contact services available at dennettlabs.com.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">3. Eligibility</h2>
          <p>
            You must be at least 18 years of age and have the legal capacity to enter into a binding agreement to use our Services. 
            By using the Services, you represent and warrant that you meet these requirements. If you are using the Services on behalf 
            of an organization, you represent that you have the authority to bind that organization to these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">4. Account Registration</h2>
          <p className="mb-4">
            To access certain features of the CRANE platform, you may be required to create an account. You agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate, current, and complete registration information.</li>
            <li>Maintain and promptly update your account information.</li>
            <li>Maintain the security and confidentiality of your login credentials.</li>
            <li>Notify us immediately of any unauthorized use of your account.</li>
            <li>Accept responsibility for all activities that occur under your account.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">5. Acceptable Use</h2>
          <p className="mb-4">
            You agree not to use the Services to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violate any applicable laws, regulations, or third-party rights.</li>
            <li>Reverse-engineer, decompile, or disassemble any aspect of the Services.</li>
            <li>Interfere with or disrupt the integrity or performance of the Services.</li>
            <li>Attempt to gain unauthorized access to the Services or related systems.</li>
            <li>Use the Services for any purpose that is harmful, fraudulent, or deceptive.</li>
            <li>Scrape, mine, or harvest data from the platform without explicit authorization.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">6. Intellectual Property</h2>
          <p className="mb-4">
            All content, features, functionality, algorithms, models, software, databases, and documentation associated 
            with the Services are and will remain the exclusive property of Dennett Labs and its licensors. This includes 
            but is not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The CRANE computational engine and its underlying AI models.</li>
            <li>Proprietary protein screening and simulation methodologies.</li>
            <li>Website design, text, graphics, logos, and visual identity.</li>
            <li>All software code, algorithms, and data structures.</li>
          </ul>
          <p className="mt-4">
            You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Services 
            solely for their intended purpose and in accordance with these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">7. Your Data</h2>
          <p>
            You retain ownership of any data, inputs, or materials that you submit to the CRANE platform (&quot;Your Data&quot;). 
            By submitting Your Data, you grant Dennett Labs a limited license to process, analyze, and use Your Data solely 
            for the purpose of providing the Services to you. We will not share Your Data with third parties except as 
            described in our <Link href="/privacy" className="text-[#2b5ea8] hover:underline">Privacy Policy</Link> or 
            with your explicit consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">8. Research Outputs &amp; Disclaimers</h2>
          <p className="mb-4">
            The CRANE platform provides <strong>computational predictions and rankings</strong> based on biophysical modeling. 
            You acknowledge and agree that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All results are computational predictions and <strong>do not constitute laboratory validation</strong>.</li>
            <li>Enzyme candidates identified by CRANE must be independently verified through wet-lab experimentation before commercial or industrial use.</li>
            <li>Dennett Labs does not guarantee that any computationally predicted enzyme will perform as modeled in physical conditions.</li>
            <li>Results should not be used as the sole basis for safety-critical, pharmaceutical, or clinical decisions without independent expert review and validation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">9. Service Availability</h2>
          <p>
            We strive to maintain continuous availability of our Services, but we do not guarantee uninterrupted access. 
            The Services may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control. 
            We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time, with or without 
            notice. We will endeavor to provide reasonable advance notice of planned service interruptions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Dennett Labs and its directors, employees, partners, 
            and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
            including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from: 
            (a) your access to or use of, or inability to access or use, the Services; (b) any conduct or content of any 
            third party on the Services; (c) any content obtained from the Services; and (d) unauthorized access, use, 
            or alteration of your transmissions or content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Republic of Kenya, 
            without regard to its conflict of law provisions. Any disputes arising under or in connection with these 
            Terms shall be subject to the exclusive jurisdiction of the courts located in Nairobi, Kenya.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">12. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. If we make material changes, we will notify you 
            by updating the &quot;Last updated&quot; date at the top of this page and, where appropriate, through the 
            email address associated with your account. Your continued use of the Services after any such changes 
            constitutes your acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1d2e] mb-4">13. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:legal@dennettlabs.com" className="text-[#2b5ea8] hover:underline">legal@dennettlabs.com</a> or through our <Link href="/contact" className="text-[#2b5ea8] hover:underline">Contact</Link> page.
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
