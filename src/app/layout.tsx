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
  description: "Candidate Ranking for Adaptive Novel Enzymes — Physics-informed AI for industrial biotechnology",
  metadataBase: new URL("https://dennettlabs.com"),
  openGraph: {
    title: "CRANE | Dennett Labs",
    description: "Candidate Ranking for Adaptive Novel Enzymes — Physics-informed AI for industrial biotechnology",
    url: "https://dennettlabs.com",
    siteName: "Dennett Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRANE | Dennett Labs",
    description: "Candidate Ranking for Adaptive Novel Enzymes — Physics-informed AI for industrial biotechnology",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
