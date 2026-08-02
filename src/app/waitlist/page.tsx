"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import DeltaLoader from "@/components/ui/DeltaLoader";

export default function WaitlistPage() {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');
    setErrorMessage('');
    
    try {
      const apiPromise = fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email }),
      });
      
      const delayPromise = new Promise(resolve => setTimeout(resolve, 2500));
      
      const [response] = await Promise.all([apiPromise, delayPromise]);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit to waitlist');
      }
      
      setState('success');
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
      setState('error');
    }
  };

  return (
    <div className="min-h-[85vh] hero-bg flex flex-col items-center justify-center px-6 py-20 relative">
      
      {(state === 'idle' || state === 'error') && (
        <div className="absolute top-8 left-8 hidden md:block">
          <Link href="/" className="flex items-center gap-2 text-[#1a1d2e]/50 hover:text-[#1a1d2e] transition-colors font-semibold text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      )}

      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-[#1a1d2e]/10 p-8 md:p-12 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.06)] relative overflow-hidden">
        
        {(state === 'idle' || state === 'error') && (
          <div className="animate-fade-up">
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="relative w-9 h-9">
                  <Image src="/dennettlabslogo.png" alt="Dennett Labs" fill sizes="36px" className="object-contain brightness-0" />
                </div>
                <span className="text-[17px] font-black tracking-[-0.04em] text-[#1a1d2e] uppercase whitespace-nowrap">
                  DENNETT LABS
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#1a1d2e] tracking-tight mb-3">Join the Waitlist</h1>
              <p className="text-[#1a1d2e]/60 text-sm leading-relaxed">
                We are currently rolling out CRANE to select enterprise partners. Enter your details to secure early access.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {state === 'error' && (
                <div className="p-3 bg-red-50 text-red-600 border border-red-100 rounded-xl text-sm font-medium">
                  {errorMessage}
                </div>
              )}
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-bold text-[#1a1d2e]/50 uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3.5 text-sm text-[#1a1d2e] placeholder-[#1a1d2e]/30 focus:outline-none focus:ring-2 focus:ring-[#2b5ea8]/20 focus:border-[#2b5ea8] transition-all font-medium"
                  placeholder="Dr. Jane Doe"
                />
              </div>
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-bold text-[#1a1d2e]/50 uppercase tracking-widest">Work Email</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3.5 text-sm text-[#1a1d2e] placeholder-[#1a1d2e]/30 focus:outline-none focus:ring-2 focus:ring-[#2b5ea8]/20 focus:border-[#2b5ea8] transition-all font-medium"
                  placeholder="jane@dennettlabs.com"
                />
              </div>
              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full btn-premium py-4 flex items-center justify-center text-sm shadow-lg shadow-[#2b5ea8]/20"
                >
                  Request Access
                </button>
              </div>
            </form>
          </div>
        )}

        {state === 'loading' && (
          <div className="animate-fade-in flex flex-col items-center justify-center py-10">
            <DeltaLoader size="lg" message="SECURING YOUR SPOT..." />
          </div>
        )}

        {state === 'success' && (
          <div className="animate-fade-up flex flex-col items-center text-center py-8">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#1a1d2e] tracking-tight mb-3">You're on the list.</h2>
            <p className="text-[#1a1d2e]/60 text-sm leading-relaxed mb-10 max-w-[280px]">
              We've successfully added you to the CRANE waitlist. We will be in touch shortly with next steps.
            </p>
            <Link href="/" className="btn-outline w-full text-center flex justify-center py-3.5 text-sm">
              Return to Site
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
