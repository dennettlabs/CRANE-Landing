"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  const refs = useRef<HTMLElement[]>([]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    refs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);
  const track = (el: HTMLElement | null) => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  return (
    <>
      {/* Hero */}
      <section className="w-full hero-bg pt-40 pb-28 md:pb-36 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.03em] leading-[0.95] text-[#1a1d2e] max-w-4xl animate-fade-up delay-100">
            We are a TechBio company mapping the extremes of biology.
          </h1>
          <p className="mt-7 text-[18px] md:text-[20px] text-[#1a1d2e]/50 max-w-2xl leading-[1.7] animate-fade-up delay-200">
            Biology is the most powerful manufacturing technology on Earth. We build the computational infrastructure to program it for the harshest industrial constraints.
          </p>
        </div>
      </section>

      {/* The Barrier */}
      <section className="w-full border-t border-[#1a1d2e]/[0.05] page-bg" ref={track}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-28 md:py-36">
          <div className="grid md:grid-cols-12 gap-12 reveal" ref={track}>
            <div className="md:col-span-12 lg:col-span-10 lg:col-start-2">
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-extrabold tracking-[-0.02em] leading-[1.05] text-[#1a1d2e] mb-10 max-w-3xl">
                Nature&apos;s archive is vast.<br />Industry&apos;s tools are limited.
              </h2>
              
              <div className="space-y-8 pl-0 md:pl-10 border-l-0 md:border-l-[3px] border-[#2b5ea8]/20 max-w-4xl">
                <p className="text-[18px] md:text-[22px] text-[#1a1d2e]/70 leading-[1.65] font-medium tracking-[-0.01em]">
                  For billions of years, evolution has engineered proteins capable of surviving boiling acid, deep-sea pressure, and arctic ice. 
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1a1d2e]/50 leading-[1.75]">
                  Yet modern manufacturing still relies on toxic petrochemicals because discovering these natural biological machines using traditional wet-lab methods is too slow, too expensive, and relies entirely on blind luck.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The TechBio Paradigm */}
      <section className="w-full hero-bg border-t border-[#1a1d2e]/[0.05]" ref={track}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-28 md:py-36">
          <div className="grid md:grid-cols-12 gap-12 reveal" ref={track}>
            <div className="md:col-span-12 lg:col-span-10 lg:col-start-2">
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-extrabold tracking-[-0.02em] leading-[1.05] text-[#1a1d2e] mb-10 max-w-3xl">
                Engineering biology through physics.
              </h2>
              
              <div className="space-y-8 pl-0 md:pl-10 border-l-0 md:border-l-[3px] border-[#1a1d2e]/10 max-w-4xl">
                <p className="text-[18px] md:text-[22px] text-[#1a1d2e]/70 leading-[1.65] font-medium tracking-[-0.01em]">
                  Dennett Labs replaces trial-and-error with computation.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#1a1d2e]/50 leading-[1.75]">
                  Our platform, CRANE, uses physics-informed AI to simulate how millions of unmapped protein sequences will fold and behave under extreme thermal and chemical stress. We don&apos;t guess. We compute the exact molecular machines required to power sustainable industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="w-full border-t border-[#1a1d2e]/[0.05] page-bg" ref={track}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-28 md:py-36">
          <div className="max-w-3xl mx-auto text-center reveal" ref={track}>
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-extrabold tracking-[-0.02em] leading-[1.05] text-[#1a1d2e] mb-8">
              A crane, not a skyhook
            </h2>
            <div className="text-[16px] md:text-[18px] text-[#1a1d2e]/50 leading-[1.75] space-y-6 max-w-2xl mx-auto">
              <p>
                The name is a deliberate nod to Daniel Dennett&apos;s concept from <em>Darwin&apos;s Dangerous Idea</em>. A crane is a grounded, algorithmic process that builds complex design from the bottom up—as opposed to a &ldquo;skyhook,&rdquo; which relies on magic.
              </p>
              <p>
                CRANE does exactly this: it builds functional, predictive insight from raw biological data. No magic. Just physics and computation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
