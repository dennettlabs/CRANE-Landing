"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Search, Bell, LayoutDashboard, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  const [activeVertical, setActiveVertical] = useState("Laundry & Dish Detergents");
  const refs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    refs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const track = (el: HTMLElement | null) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  const verticalData: Record<string, { env: string; temp: string; challenge: string; catalyst: string; score: string }> = {
    "Laundry & Dish Detergents": {
      env: "Alkaline Wash (pH 10.0 - 13.5)",
      temp: "60°C - 85°C Thermal Cycle",
      challenge: "Lysine deprotonation mitigation via Arginine salt-bridge stabilization.",
      catalyst: "Alkaline Protease AprB",
      score: "98.4 / 100",
    },
    "Textile Processing": {
      env: "Bio-Polishing Bath (pH 4.5 - 6.0)",
      temp: "50°C - 70°C Continuous Flow",
      challenge: "Cellulose micro-fibril shear resistance without fiber tensile degradation.",
      catalyst: "Endoglucanase CelA",
      score: "96.8 / 100",
    },
    "Leather Bioprocessing": {
      env: "Tanning Vat (pH 11.0 - 13.0)",
      temp: "35°C - 55°C Sulfide-Free Bath",
      challenge: "Selective keratin breakdown preserving collagen structural matrix.",
      catalyst: "Keratinase KerZ",
      score: "99.1 / 100",
    },
    "Plastics Recycling": {
      env: "Aqueous Depolymerization (pH 8.0 - 9.0)",
      temp: "70°C - 90°C Heat Reactor",
      challenge: "PET ester bond hydrolysis under continuous thermal volatility.",
      catalyst: "PETase Mod-7",
      score: "94.2 / 100",
    },
    "Biofuels & Bioenergy": {
      env: "Dense Fermentation (pH 3.5 - 5.0)",
      temp: "45°C - 65°C Ethanol Reactor",
      challenge: "Product inhibition resistance in high-molarity organic solvent.",
      catalyst: "Beta-Glucosidase BglX",
      score: "97.5 / 100",
    },
    "Agriculture": {
      env: "Soil Microbiome (pH 6.0 - 7.5)",
      temp: "15°C - 35°C Field Conditions",
      challenge: "Phosphate solubilization without competitive rhizosphere inhibition.",
      catalyst: "Phytase PhyM",
      score: "96.1 / 100",
    },
    "Mining & Metallurgy": {
      env: "Acid Mine Drainage (pH 1.0 - 3.0)",
      temp: "40°C - 70°C Bioleaching Vat",
      challenge: "Heavy metal sulfide oxidation under severe acidic corrosion.",
      catalyst: "Oxidoreductase Ferrox-1",
      score: "98.9 / 100",
    },
    "Pharmaceuticals": {
      env: "Chiral Synthesis Bath (pH 7.0 - 8.0)",
      temp: "20°C - 40°C Precision Reactor",
      challenge: "Stereospecific enantiomeric resolution with zero side-product formation.",
      catalyst: "Ketoreductase KRED-9",
      score: "99.5 / 100",
    },
    "Food & Beverage": {
      env: "Syrup Processing (pH 4.0 - 5.5)",
      temp: "60°C - 75°C Continuous Column",
      challenge: "Starch liquefaction at high viscosity and elevated temperatures.",
      catalyst: "Alpha-Amylase AmyL",
      score: "97.8 / 100",
    },
    "Waste Management": {
      env: "Anoxic Digestor (pH 6.5 - 8.0)",
      temp: "35°C - 55°C Sludge Tank",
      challenge: "Complex polysaccharide and lipid hydrolysis in heterogeneous municipal waste.",
      catalyst: "Lipase LipZ-4",
      score: "95.4 / 100",
    },
  };

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-screen hero-bg flex flex-col justify-center items-center text-center px-8 md:px-12">
        <div className="max-w-[1000px] mx-auto z-10 pt-20">
          <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-extrabold tracking-[-0.03em] leading-[0.95] text-[#1a1d2e] animate-fade-up">
            Programmable<br />
            Biology
          </h1>
          <p className="mt-10 text-[18px] md:text-[20px] text-[#1a1d2e]/60 leading-[1.8] max-w-[650px] mx-auto animate-fade-up delay-200">
            Nature already built the enzyme you need. We use AI to find it, test it, and hand you a ranked shortlist—before you spend a single dollar in the lab.
          </p>
          <div className="mt-14 animate-fade-up delay-300">
            <Link href="/waitlist" className="btn-premium">
              Launch CRANE Platform
            </Link>
          </div>
        </div>
      </section>

      {/* MEET CRANE - MACBOOK PRO LAPTOP FRAME CONTAINING WHITE DASHBOARD */}
      <section className="w-full border-t border-[#1a1d2e]/[0.05] hero-bg" ref={track}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-28 md:py-36">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center reveal" ref={track}>

            {/* Left Column: Clean Text Stack */}
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-extrabold tracking-[-0.02em] leading-[1.05] text-[#1a1d2e]">
                Meet CRANE
              </h2>
              <p className="text-[20px] md:text-[22px] font-semibold text-[#2b5ea8] leading-[1.4] tracking-[-0.01em]">
                Three billion years of evolution, compressed into 300 milliseconds.
              </p>
              <p className="text-[16px] text-[#1a1d2e]/70 leading-[1.8]">
                <strong className="text-[#1a1d2e] font-bold">CRANE</strong> (Candidate Ranking for Adaptive Novel Enzymes) leverages the DNA of extremophiles—organisms thriving in boiling acid springs and frozen tundras—to solve complex industrial chemistry problems.
              </p>
              <p className="text-[16px] text-[#1a1d2e]/70 leading-[1.8]">
                By mapping the known protein universe against specific thermal and pH stressors, our physics-informed neural networks accurately simulate how these wild enzymes will fold, bind, and perform in extreme, real-world environments.
              </p>
            </div>

            {/* Right Column: MacBook Pro Laptop Frame */}
            <div className="lg:col-span-8">
              <div className="relative mx-auto max-w-4xl">

                {/* Laptop Screen Lid */}
                <div className="bg-[#121214] rounded-t-xl pt-1.5 pb-1.5 px-1.5 shadow-[0_-2px_20px_rgba(0,0,0,0.1)] relative border border-[#2a2a2e]">

                  {/* Webcam dot */}
                  <div className="w-[4px] h-[4px] bg-black rounded-full mx-auto mb-1.5" />

                  {/* Screen with fixed aspect ratio - content is clipped like a real screenshot */}
                  <div className="relative w-full rounded-sm overflow-hidden bg-white" style={{ aspectRatio: '16 / 10' }}>

                    {/* Dashboard content scaled down inside the screen */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="origin-top-left w-full h-full overflow-hidden flex flex-row text-left font-sans">

                        {/* Sidebar */}
                        <div className="w-[140px] bg-[#f8fafc] p-3 border-r border-[#e2e8f0] flex flex-col shrink-0">
                          <div className="flex items-center gap-1.5 mb-5">
                            <div
                              className="w-4 h-4 bg-emerald-500 shrink-0"
                              style={{
                                WebkitMaskImage: 'url("/dennettlabslogo.png")',
                                WebkitMaskSize: "contain",
                                WebkitMaskRepeat: "no-repeat",
                                WebkitMaskPosition: "center",
                              }}
                            />
                            <span className="font-extrabold text-[10px] text-[#1a1d2e] tracking-tight">CRANE AI</span>
                          </div>
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-[#2b5ea8] text-white font-semibold text-[8px]">
                              <LayoutDashboard className="w-2.5 h-2.5" /> Dashboard
                            </div>
                            {["Screening", "Library", "3D Viewer", "Team"].map((n) => (
                              <div key={n} className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[#1a1d2e]/60 text-[8px] font-medium">
                                <div className="w-2.5 h-2.5 rounded bg-[#1a1d2e]/10" />
                                {n}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Main content area */}
                        <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden bg-white">
                          {/* Top bar */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 bg-[#f1f5f9] rounded-full px-3 py-1 w-48">
                              <Search className="w-2.5 h-2.5 text-[#1a1d2e]/40" />
                              <span className="text-[7px] text-[#1a1d2e]/40">Search enzyme or sequence...</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-[#f1f5f9] flex items-center justify-center">
                                <Bell className="w-2.5 h-2.5 text-[#1a1d2e]/50" />
                              </div>
                              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#2b5ea8] to-emerald-500 flex items-center justify-center text-[6px] font-bold text-white">AT</div>
                            </div>
                          </div>

                          {/* Hero banner */}
                          <div className="relative rounded-xl bg-[#2b5ea8] p-4 text-white overflow-hidden shadow-sm">
                            <div className="relative z-10 space-y-1.5">
                              <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#1e3a8a] text-white text-[6px] font-bold uppercase tracking-widest">
                                <span className="w-1 h-1 rounded-full bg-emerald-400" /> LIVE SCREENING
                              </div>
                              <h3 className="text-[11px] font-extrabold text-white">Bacillus subtilis AprB Protease Simulation</h3>
                              <p className="text-[7px] text-white/80 leading-relaxed max-w-[280px]">
                                Evaluating 10,000 extremophile sequences against pH 10.5 &amp; 65°C thermal stress.
                              </p>
                            </div>
                          </div>

                          {/* Candidate cards */}
                          <div className="space-y-1.5">
                            <div className="text-[7px] font-bold text-[#1a1d2e] uppercase tracking-wider">Prioritized Candidates</div>
                            <div className="grid grid-cols-3 gap-2">
                              {[
                                { name: "AprB Protease", score: "98.4", tag: "TOP 1%" },
                                { name: "CelA Endoglucanase", score: "96.8", tag: "STABLE" },
                                { name: "KerZ Keratinase", score: "99.1", tag: "ZERO STERIC" },
                              ].map((c) => (
                                <div key={c.name} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-2 space-y-1">
                                  <span className="text-[5px] px-1 py-0.5 rounded bg-emerald-500/10 text-emerald-700 font-bold border border-emerald-500/20">{c.tag}</span>
                                  <div className="text-[7px] font-bold text-[#1a1d2e]">{c.name}</div>
                                  <div className="flex items-center justify-between pt-1 border-t border-[#e2e8f0]">
                                    <span className="font-mono text-[7px] font-bold text-emerald-600">{c.score}</span>
                                    <span className="text-[6px] px-1.5 py-0.5 rounded bg-[#1a1d2e]/5 text-[#1a1d2e]/70 font-bold">Analyze</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right analytics sidebar */}
                        <div className="w-[130px] bg-[#f8fafc] p-3 border-l border-[#e2e8f0] shrink-0 hidden md:flex flex-col gap-3">
                          <div className="text-[7px] font-bold text-[#1a1d2e] uppercase tracking-wider">Stats</div>
                          <div className="flex flex-col items-center py-2">
                            <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#2b5ea8] to-emerald-500 p-[3px]">
                              <div className="w-full h-full bg-[#f8fafc] rounded-full flex flex-col items-center justify-center">
                                <span className="font-mono text-[11px] font-extrabold text-[#1a1d2e]">98.4%</span>
                                <span className="text-[5px] text-emerald-600 font-bold uppercase tracking-widest">FITNESS</span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white border border-[#e2e8f0] rounded-lg p-2 space-y-1">
                            <div className="text-[6px] font-bold text-[#1a1d2e]">pH Stability</div>
                            <div className="flex items-end gap-[2px] h-8">
                              <div className="flex-1 bg-[#1a1d2e]/10 rounded-t h-[35%]" />
                              <div className="flex-1 bg-[#1a1d2e]/20 rounded-t h-[55%]" />
                              <div className="flex-1 bg-[#2b5ea8] rounded-t h-[80%]" />
                              <div className="flex-1 bg-emerald-500 rounded-t h-[100%]" />
                              <div className="flex-1 bg-emerald-400 rounded-t h-[90%]" />
                            </div>
                          </div>
                          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-2">
                            <div className="flex items-center gap-1 text-emerald-700 font-bold text-[6px]">
                              <ShieldCheck className="w-2.5 h-2.5" /> APPROVED
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop bottom: hinge + base */}
                <div className="relative">
                  {/* Hinge connector */}
                  <div className="w-[85%] h-[4px] bg-[#1a1a1c] mx-auto" />
                  {/* Base plate (keyboard deck) */}
                  <div className="w-[102%] -ml-[1%] h-[8px] bg-[#e2e8f0] rounded-b-lg shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex items-center justify-center border-t border-[#cbd5e1]">
                    <div className="w-16 h-[2px] bg-[#94a3b8] rounded-full mt-px" />
                  </div>
                </div>

                {/* Desk surface shadow */}
                <div className="w-[85%] h-4 bg-black/15 blur-md mx-auto rounded-full -mt-1" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE FUNNEL */}
      <section className="w-full border-t border-[#1a1d2e]/[0.05] page-bg" ref={track}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-28 md:py-36">
          <div className="max-w-2xl mb-20 reveal" ref={track}>
            <h2 className="text-[2.5rem] md:text-[3rem] font-extrabold tracking-[-0.02em] leading-[1.05] text-[#1a1d2e]">
              A computational funnel that finds the needle.
            </h2>
          </div>

          <div className="reveal" ref={track}>
            {[
              {
                num: "01",
                title: "Sequence Sourcing & Filtering",
                text: "We source biological data from Earth's most resilient organisms. We instantly filter out candidates that cannot be manufactured or scaled in commercial production.",
              },
              {
                num: "02",
                title: "Evolutionary Stability Test",
                text: "We check each candidate against the mathematical rules of natural protein structure to ensure it is stable, reliable, and functional.",
              },
              {
                num: "03",
                title: "Environmental Stress Simulation",
                text: "We test top candidates in a digital environment set to your exact operating conditions. We expose the protein to a wide spectrum of industrial stress—verifying whether its chemical structure holds firm or breaks down.",
              },
              {
                num: "04",
                title: "Actionable Shortlist Delivery",
                text: "We score every candidate on resilience and catalytic performance, delivering a clean, prioritized shortlist ready for laboratory synthesis.",
              },
            ].map((step, i) => (
              <div key={step.num} className={`grid grid-cols-12 gap-6 md:gap-12 py-12 ${i > 0 ? "border-t border-[#1a1d2e]/[0.05]" : ""}`}>
                <div className="col-span-2 md:col-span-1">
                  <span className="text-[2.5rem] font-extralight text-[#1a1d2e]/20">{step.num}</span>
                </div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="text-[1.35rem] font-bold text-[#1a1d2e] mb-1">{step.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-7 md:col-start-6">
                  <p className="text-[16px] text-[#1a1d2e]/60 leading-[1.75]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="w-full border-t border-[#1a1d2e]/[0.05] hero-bg" ref={track}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-32 md:py-40">
          <div className="grid md:grid-cols-12 gap-12 reveal" ref={track}>
            <div className="md:col-span-12 lg:col-span-10 lg:col-start-2">
              <h2 className="text-[3rem] md:text-[4rem] font-extrabold tracking-[-0.02em] leading-[1] text-[#1a1d2e] mb-14">
                The solutions already exist.<br />We just have to compute them.
              </h2>

              <div className="space-y-8 pl-0 md:pl-12 border-l-0 md:border-l-[3px] border-[#2b5ea8]/20">
                <p className="text-[20px] md:text-[24px] text-[#1a1d2e]/70 leading-[1.6] font-medium tracking-[-0.01em] max-w-4xl">
                  Nature has already engineered proteins capable of surviving Earth&apos;s most extreme environments. We use advanced AI to search this massive genetic archive and compute the exact catalysts that will transform your manufacturing process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS - RESTORED HOVER PILLS & STUDIO DISPLAY MONITOR FRAME */}
      <section className="w-full hero-bg" ref={track}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-28 md:py-36">
          <div className="max-w-3xl mb-20 reveal" ref={track}>
            <h2 className="text-[2.5rem] md:text-[3rem] font-extrabold tracking-[-0.02em] leading-[1.05] text-[#1a1d2e]">
              You define the constraints.<br />We compute the biology.
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start reveal" ref={track}>

            {/* Left Column: Restored Rounded Pills with Royal Blue Hover */}
            <div className="lg:col-span-5">
              <h3 className="text-[13px] font-bold text-[#1a1d2e]/50 uppercase tracking-[0.1em] mb-7 border-b border-[#1a1d2e]/10 pb-4">
                Industrial Verticals
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {Object.keys(verticalData).map((ind) => {
                  const isSelected = activeVertical === ind;
                  return (
                    <button
                      key={ind}
                      onClick={() => setActiveVertical(ind)}
                      onMouseEnter={() => setActiveVertical(ind)}
                      className={`px-4 py-2 rounded-full border text-[14px] font-medium transition-all duration-300 flex items-center gap-2 ${isSelected
                          ? "bg-[#2b5ea8] text-white border-[#2b5ea8] shadow-sm scale-[1.02]"
                          : "bg-white text-[#1a1d2e]/80 border-[#1a1d2e]/15 hover:bg-[#f8fafc] hover:border-[#1a1d2e]/30"
                        }`}
                    >
                      <span>{ind}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Desktop Monitor Frame */}
            <div className="lg:col-span-7">
              <div className="relative mx-auto max-w-3xl">

                {/* Monitor Screen Bezel */}
                <div className="bg-[#121214] rounded-xl pt-1.5 pb-1.5 px-1.5 shadow-[0_-2px_20px_rgba(0,0,0,0.1)] border border-[#2a2a2e] relative">

                  {/* Top sensor dot */}
                  <div className="w-[3px] h-[3px] bg-black rounded-full mx-auto mb-1.5" />

                  {/* Screen with constrained aspect ratio */}
                  <div className="relative w-full rounded-sm overflow-hidden bg-white" style={{ aspectRatio: '16 / 10' }}>
                    <div className="absolute inset-0 overflow-hidden p-4 md:p-5 font-sans text-[#1a1d2e] space-y-4">

                      {/* Monitor Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e2e8f0] pb-3">
                        <div>
                          <div className="font-mono text-[7px] text-[#1a1d2e]/40 uppercase tracking-widest mb-0.5">SELECTED VERTICAL</div>
                          <h4 className="text-base md:text-lg font-extrabold text-[#1a1d2e] leading-tight">{activeVertical}</h4>
                        </div>
                        <div className="px-2.5 py-1 rounded-md bg-[#2b5ea8]/10 border border-[#2b5ea8]/20 text-[#2b5ea8] font-mono text-[8px] font-bold uppercase tracking-widest">
                          CRANE-v0.1
                        </div>
                      </div>

                      {/* Parameters */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-3">
                          <div className="font-mono text-[7px] text-[#1a1d2e]/40 uppercase tracking-widest mb-0.5">TARGET ENVIRONMENT</div>
                          <div className="text-[11px] font-bold text-[#1a1d2e]">{verticalData[activeVertical].env}</div>
                        </div>
                        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-3">
                          <div className="font-mono text-[7px] text-[#1a1d2e]/40 uppercase tracking-widest mb-0.5">THERMAL WINDOW</div>
                          <div className="text-[11px] font-bold text-[#1a1d2e]">{verticalData[activeVertical].temp}</div>
                        </div>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-3 space-y-2">
                        <div>
                          <div className="font-mono text-[7px] text-[#1a1d2e]/40 uppercase tracking-widest mb-0.5">ENZYMATIC CHALLENGE</div>
                          <p className="text-[9px] text-[#1a1d2e]/80 leading-relaxed font-medium">{verticalData[activeVertical].challenge}</p>
                        </div>
                        <div className="border-t border-[#e2e8f0] pt-2 flex items-center justify-between">
                          <div>
                            <span className="font-mono text-[7px] text-[#1a1d2e]/40 uppercase tracking-widest block">CATALYST</span>
                            <span className="text-[11px] font-bold text-emerald-600">{verticalData[activeVertical].catalyst}</span>
                          </div>
                          <div className="text-right">
                            <span className="font-mono text-[7px] text-[#1a1d2e]/40 uppercase tracking-widest block">SCORE</span>
                            <span className="font-mono text-sm font-bold text-[#1a1d2e]">{verticalData[activeVertical].score}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Monitor Stand */}
                <div className="flex flex-col items-center">
                  {/* Neck */}
                  <div className="w-12 h-10 bg-[#cbd5e1] border-x border-[#94a3b8]" />
                  {/* Base pedestal */}
                  <div className="w-40 h-[4px] bg-[#e2e8f0] rounded-full shadow-md border-t border-[#cbd5e1] flex items-center justify-center" />
                </div>

                {/* Desk surface shadow */}
                <div className="w-36 h-3 bg-black/15 blur-md mx-auto rounded-full -mt-0.5" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full border-t border-[#1a1d2e]/[0.05] hero-bg" ref={track}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-28 md:py-36 text-center reveal" ref={track}>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-extrabold tracking-[-0.02em] leading-[1.05] text-[#1a1d2e] mb-5">
            Ready to discover your next industrial catalyst?
          </h2>
          <p className="text-[17px] text-[#1a1d2e]/50 max-w-md mx-auto mb-10 leading-[1.7]">
            Input your target temperature, pH, and manufacturing constraints. The CRANE platform instantly computes a verified shortlist of natural enzymes ready for your process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/waitlist" className="btn-premium">
              Launch CRANE Platform <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-outline">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
