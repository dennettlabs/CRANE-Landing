import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRANE | Dennett Labs",
  description: "Candidate Ranking for Adaptive Novel Enzymes — Physics-informed AI for industrial biotechnology. Discover Programmable Biology and Industrial Catalysts via Extremophile Enzymes.",
  metadataBase: new URL("https://dennettlabs.com"),
  openGraph: {
    title: "CRANE | Dennett Labs",
    description: "Discover Programmable Biology and Industrial Catalysts with CRANE. Physics-informed AI discovering Extremophile Enzymes for industrial biotechnology.",
    url: "https://dennettlabs.com",
    siteName: "Dennett Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "CRANE by Dennett Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRANE | Dennett Labs",
    description: "Discover Programmable Biology and Industrial Catalysts with CRANE. Physics-informed AI discovering Extremophile Enzymes for industrial biotechnology.",
    images: ["/opengraph-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://dennettlabs.com/#website",
      "url": "https://dennettlabs.com",
      "name": "Dennett Labs",
      "description": "Programmable Biology and Industrial Catalysts via Extremophile Enzymes",
      "publisher": {
        "@id": "https://dennettlabs.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://dennettlabs.com/#organization",
      "name": "Dennett Labs",
      "url": "https://dennettlabs.com",
      "logo": "https://dennettlabs.com/icon.png",
      "description": "Pioneering Programmable Biology with Physics-informed AI to discover Extremophile Enzymes and Industrial Catalysts."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
