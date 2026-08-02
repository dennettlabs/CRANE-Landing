"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen hero-bg px-8">
      <Link href="/" className="mb-10 animate-fade-up">
        <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md">
          <Image src="/dennettlabslogo.jpeg" alt="Dennett Labs" fill className="object-cover" />
        </div>
      </Link>

      <div className="w-full max-w-md glass rounded-2xl p-8 md:p-10 animate-fade-up delay-100">
        <div className="text-center mb-8">
          <h1 className="text-[1.6rem] font-extrabold tracking-tight text-[#1a1d2e] mb-2">Welcome back</h1>
          <p className="text-[14px] text-[#1a1d2e]/40">Sign in to your Dennett Labs workspace</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-[11px] font-semibold text-[#1a1d2e]/60 uppercase tracking-[0.1em] mb-2">Email</label>
            <input id="email" type="email" placeholder="name@company.com" required className="input-premium" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-[11px] font-semibold text-[#1a1d2e]/60 uppercase tracking-[0.1em]">Password</label>
              <Link href="#" className="text-[11px] font-medium text-[#2b5ea8]/50 hover:text-[#2b5ea8] transition-colors">Forgot?</Link>
            </div>
            <input id="password" type="password" required className="input-premium" />
          </div>
          <button type="submit" className="btn-premium w-full justify-center mt-1">Sign In</button>
        </form>
        <p className="mt-7 text-center text-[14px] text-[#1a1d2e]/35">
          No account? <Link href="/contact" className="font-medium text-[#2b5ea8]/60 hover:text-[#2b5ea8] transition-colors">Request access</Link>
        </p>
      </div>
    </div>
  );
}
