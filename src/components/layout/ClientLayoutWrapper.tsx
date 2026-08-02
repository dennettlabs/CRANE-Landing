"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "header-blur shadow-[0_1px_0_rgba(0,0,0,0.04)]" : ""}`}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 h-20 flex items-center justify-between">
          
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-3 w-48">
            <div className="relative w-9 h-9">
              <Image src="/dennettlabslogo.png" alt="Dennett Labs" fill sizes="36px" className="object-contain brightness-0" />
            </div>
            <span className="text-[17px] font-black tracking-[-0.04em] text-[#1a1d2e] uppercase whitespace-nowrap">
              DENNETT LABS
            </span>
          </Link>

          {/* Centered Nav Links */}
          <nav className="hidden md:flex items-center justify-center gap-12 flex-1">
            <Link href="/about" className="text-[14px] font-semibold text-[#1a1d2e]/50 hover:text-[#1a1d2e] transition-colors tracking-[0.02em]">
              About Us
            </Link>
            <Link href="/contact" className="text-[14px] font-semibold text-[#1a1d2e]/50 hover:text-[#1a1d2e] transition-colors tracking-[0.02em]">
              Talk to Us
            </Link>
          </nav>

          {/* Try CRANE - Right */}
          <div className="w-48 flex justify-end">
            <Link href="/waitlist" className="text-[13px] font-bold bg-[#1a1d2e] text-white px-5 py-2.5 rounded-full hover:bg-[#2b5ea8] transition-colors tracking-[0.02em]">
              Try CRANE
            </Link>
          </div>

        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="relative overflow-hidden bg-[#f0f2f5]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 pt-24 pb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-28 md:mb-40 z-10 relative">
            <div className="max-w-md">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="relative w-8 h-8">
                  <Image src="/dennettlabslogo.png" alt="Dennett Labs" fill sizes="32px" className="object-contain brightness-0" />
                </div>
                <span className="text-[15px] font-black tracking-[-0.04em] text-[#1a1d2e] uppercase whitespace-nowrap">
                  DENNETT LABS
                </span>
              </Link>
              <p className="text-[15px] text-[#1a1d2e]/50 leading-relaxed font-medium">
                The fastest way to find the exact enzyme you need.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-8 md:gap-12 text-[14px] font-semibold tracking-[0.02em]">
              <Link href="/waitlist" className="text-[#1a1d2e]/40 hover:text-[#1a1d2e] transition-colors">Platform</Link>
              <Link href="/about" className="text-[#1a1d2e]/40 hover:text-[#1a1d2e] transition-colors">Science</Link>
              <Link href="/contact" className="text-[#1a1d2e]/40 hover:text-[#1a1d2e] transition-colors">Contact</Link>
              <span className="text-[#1a1d2e]/20 hidden md:block">|</span>
              <span className="text-[#1a1d2e]/40">Nairobi, Kenya</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-[12px] font-medium text-[#1a1d2e]/30 z-10 relative">
            <p>© 2026 Dennett Labs. All rights reserved.</p>
          </div>
        </div>

        {/* MASSIVE BACKGROUND TEXT */}
        <div className="absolute bottom-[-3vw] left-0 right-0 w-full overflow-hidden flex justify-center pointer-events-none select-none">
          <span className="text-[14.5vw] font-black text-[#1a1d2e]/[0.03] tracking-[-0.04em] leading-none whitespace-nowrap">
            DENNETT LABS
          </span>
        </div>
      </footer>
    </div>
  );
}
