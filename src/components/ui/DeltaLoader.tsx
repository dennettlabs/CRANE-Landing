"use client";

import { useEffect, useState } from "react";

const TELEMETRY_MESSAGES = [
  "INGESTING RAW SEQUENCE STOICHIOMETRY...",
  "CALCULATING TITRATION CURVES...",
  "EVALUATING EVOLUTIONARY PERPLEXITY...",
  "RELAXING STERIC CLASHES...",
  "SYNTHESIZING LEADERBOARD...",
];

interface DeltaLoaderProps {
  message?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function DeltaLoader({ message, className = "", size = "md" }: DeltaLoaderProps) {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    if (message) return;
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % TELEMETRY_MESSAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [message]);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }[size];

  return (
    <div className={`flex flex-col items-center justify-center p-6 select-none ${className}`}>
      <style jsx>{`
        @keyframes greenLogoLoop {
          0% {
            clip-path: inset(100% 0 0 0);
            transform: rotate(0deg) scale(0.9);
            opacity: 0.4;
          }
          55% {
            clip-path: inset(0 0 0 0);
            transform: rotate(0deg) scale(1);
            opacity: 1;
          }
          75% {
            clip-path: inset(0 0 0 0);
            transform: rotate(360deg) scale(1);
            opacity: 1;
          }
          100% {
            clip-path: inset(0 0 0 0);
            transform: rotate(360deg) scale(1);
            opacity: 1;
          }
        }
        .animate-green-logo {
          animation: greenLogoLoop 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          transform-origin: center;
        }
      `}</style>

      {/* Official Logo /dennettlabslogo.png masked in Vibrant Emerald Green */}
      <div className={`relative flex items-center justify-center ${sizeClasses}`}>
        <div
          className="w-full h-full bg-emerald-500 animate-green-logo drop-shadow-[0_0_12px_rgba(16,185,128,0.4)]"
          style={{
            WebkitMaskImage: 'url("/dennettlabslogo.png")',
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskImage: 'url("/dennettlabslogo.png")',
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        />
      </div>



      {/* Monospaced Telemetry Ticker */}
      <div className="mt-4 text-center">
        <p className="text-[#1a1d2e]/60 dark:text-white/60 text-sm leading-relaxed transition-opacity duration-300">
          {message || TELEMETRY_MESSAGES[msgIndex]}
        </p>
      </div>
    </div>
  );
}
