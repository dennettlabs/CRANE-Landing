"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

type ConsentChoice = "granted" | "denied" | null;

/**
 * Retrieves the saved cookie consent choice from localStorage.
 * Returns null if no choice has been made yet.
 */
function getSavedConsent(): ConsentChoice {
  if (typeof window === "undefined") return null;
  const saved = localStorage.getItem("cookie-consent");
  if (saved === "granted" || saved === "denied") return saved;
  return null;
}

/**
 * Pushes a Google Consent Mode v2 update to the dataLayer.
 * This is the critical bridge between the banner and GTM/GA4.
 */
function updateGoogleConsent(choice: "granted" | "denied") {
  if (typeof window === "undefined") return;

  // Ensure dataLayer and gtag exist (they're initialized in layout.tsx)
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }

  gtag("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
    functionality_storage: choice,
    personalization_storage: choice,
    security_storage: choice,
  });
}

// Extend Window to include dataLayer for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const saved = getSavedConsent();
    if (saved) {
      // User already made a choice — apply it silently on every page load
      updateGoogleConsent(saved);
    } else {
      // No choice yet — show the banner after a brief delay
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (choice: "granted" | "denied") => {
    // Save to localStorage
    localStorage.setItem("cookie-consent", choice);
    // Update Google Consent Mode
    updateGoogleConsent(choice);
    // Animate out
    setAnimateOut(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 transition-all duration-500 ${
        animateOut
          ? "translate-y-full opacity-0"
          : "translate-y-0 opacity-100 animate-slide-up"
      }`}
    >
      <div className="max-w-[720px] mx-auto relative">
        {/* Glassmorphism card */}
        <div
          className="rounded-2xl border border-[#1a1d2e]/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.88)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
          }}
        >
          <div className="p-5 md:p-6">
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-[15px] font-bold text-[#1a1d2e] tracking-[-0.01em]">
                We value your privacy
              </h3>
              <button
                onClick={() => handleChoice("denied")}
                className="p-1 rounded-lg text-[#1a1d2e]/30 hover:text-[#1a1d2e]/60 hover:bg-[#1a1d2e]/5 transition-all shrink-0"
                aria-label="Dismiss cookie banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Description */}
            <p className="text-[13px] text-[#1a1d2e]/55 leading-[1.65] mb-5 max-w-[540px]">
              We use cookies and similar technologies to understand how you use
              our site and to improve your experience. By accepting, you allow
              us to collect analytics data via Google Analytics. Read our{" "}
              <Link
                href="/privacy"
                className="text-[#2b5ea8] font-medium hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms"
                className="text-[#2b5ea8] font-medium hover:underline"
              >
                Terms of Service
              </Link>
              .
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <button
                onClick={() => handleChoice("granted")}
                className="px-5 py-2.5 rounded-full text-[13px] font-semibold text-white transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-1px] active:translate-y-0"
                style={{
                  background:
                    "linear-gradient(135deg, #2b5ea8 0%, #3d72c4 100%)",
                }}
              >
                Accept All
              </button>
              <button
                onClick={() => handleChoice("denied")}
                className="px-5 py-2.5 rounded-full text-[13px] font-semibold text-[#1a1d2e]/60 border border-[#1a1d2e]/10 hover:border-[#1a1d2e]/25 hover:text-[#1a1d2e]/80 transition-all duration-300 bg-white/50"
              >
                Reject All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
