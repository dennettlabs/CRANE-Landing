import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dennett AI Labs — AI-Powered Enzyme Discovery for Industrial Biotechnology",
    template: "%s | Dennett AI Labs",
  },
  description: "Dennett AI Labs builds computational infrastructure for programmable biology. Our CRANE platform uses physics-informed AI to discover, simulate, and rank extremophile enzymes for industrial manufacturing — replacing months of wet-lab trial-and-error with hours of computation.",
  metadataBase: new URL("https://dennettlabs.com"),
  keywords: [
    "enzyme discovery", "computational biology", "protein engineering",
    "protein language models", "molecular dynamics simulation",
    "molecular docking", "extremophile enzymes", "thermostable enzymes",
    "industrial biotechnology", "biocatalysis", "protein folding",
    "protein structure prediction", "bioinformatics platform",
    "enzyme screening", "green chemistry", "programmable biology",
    "synthetic biology", "directed evolution", "pH stability",
    "thermodynamic simulation", "biophysical screening",
    "high-throughput screening", "enzyme engineering", "industrial enzymes",
    "TechBio", "biotech AI", "computational screening",
    "protein design", "de novo protein", "metagenomics",
    "computational enzyme design", "enzyme optimization", "Dennett AI Labs",
  ],
  openGraph: {
    title: "Dennett AI Labs — AI-Powered Enzyme Discovery",
    description: "Physics-informed AI infrastructure for discovering extremophile enzymes. We computationally screen millions of protein sequences to find the exact industrial catalysts your manufacturing process needs.",
    url: "https://dennettlabs.com",
    siteName: "Dennett AI Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Dennett Labs — Programmable Biology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dennett AI Labs — AI-Powered Enzyme Discovery",
    description: "Physics-informed AI infrastructure for discovering extremophile enzymes. Computational screening of millions of protein sequences for industrial biotechnology.",
    images: ["/opengraph-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dennettlabs.com/#organization",
      "name": "Dennett AI Labs",
      "alternateName": ["Dennett Labs", "DennettLabs"],
      "url": "https://dennettlabs.com",
      "logo": "https://dennettlabs.com/icon.png",
      "foundingDate": "2026",
      "areaServed": "Worldwide",
      "description": "TechBio company building physics-informed AI infrastructure for enzyme discovery and industrial biotechnology. Specializing in computational screening of extremophile enzymes using protein language models, molecular dynamics simulation, and biophysical docking.",
      "knowsAbout": [
        "Computational Biology",
        "Enzyme Engineering",
        "Protein Language Models",
        "Molecular Dynamics Simulation",
        "Molecular Docking",
        "Extremophile Enzymes",
        "Industrial Biotechnology",
        "Bioinformatics",
        "Protein Folding",
        "Protein Structure Prediction",
        "Directed Evolution",
        "Thermostable Enzymes",
        "pH-Stable Enzymes",
        "Biophysical Screening",
        "Programmable Biology",
        "Synthetic Biology",
        "Green Chemistry",
        "Biocatalysis",
        "Computational Enzyme Design",
        "High-Throughput Screening",
        "Thermodynamic Simulation",
        "Electrostatic Analysis"
      ],
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://dennettlabs.com/#website",
      "url": "https://dennettlabs.com",
      "name": "Dennett AI Labs",
      "description": "AI-powered enzyme discovery for industrial biotechnology",
      "publisher": { "@id": "https://dennettlabs.com/#organization" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://dennettlabs.com/#crane",
      "name": "CRANE",
      "alternateName": "Candidate Ranking for Adaptive Novel Enzymes",
      "applicationCategory": "ScientificApplication",
      "applicationSubCategory": "Computational Biology Platform",
      "operatingSystem": "Web Browser",
      "url": "https://crane.dennettlabs.com",
      "description": "AI-powered enzyme screening platform that uses a multi-gate biophysical funnel — evolutionary fitness analysis, thermodynamic relaxation simulation, and substrate binding prediction — to rank enzyme candidates for industrial manufacturing.",
      "featureList": [
        "Evolutionary Fitness Analysis",
        "Thermodynamic Relaxation Simulation",
        "pH-Dependent Stability Screening",
        "Substrate Binding Affinity Prediction",
        "Protein Structure Prediction & Caching",
        "3D Protein Visualization",
        "Multi-Gate Biophysical Funnel",
        "Industrial Enzyme Candidate Ranking",
        "High-Throughput Computational Screening"
      ],
      "provider": { "@id": "https://dennettlabs.com/#organization" }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <Script 
          src="https://cmp.osano.com/IKrtMdjTv8/b9e54013-d30d-402b-8e1f-6d773149b24c/osano.js" 
          strategy="beforeInteractive" 
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TMK4VCPH');
          `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-CV63FQN085" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CV63FQN085');
          `}
        </Script>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TMK4VCPH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
