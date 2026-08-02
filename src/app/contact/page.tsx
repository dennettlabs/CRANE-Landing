"use client";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center min-h-screen hero-bg">
      <div className="w-full max-w-xl mx-auto pt-40 pb-24 px-8">
        <div className="text-center mb-14 animate-fade-up">
          <h1 className="text-[2.8rem] md:text-[3.2rem] font-extrabold tracking-[-0.02em] text-[#1a1d2e] mb-4">Initiate a Pilot</h1>
          <p className="text-[16px] md:text-[18px] text-[#1a1d2e]/60 leading-[1.7]">
            Tell us the exact constraints of your industrial process. We will compute the biology required to survive it.
          </p>
        </div>

        <div className="glass rounded-2xl p-8 md:p-10 animate-fade-up delay-200">
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-[11px] font-semibold text-[#1a1d2e]/60 uppercase tracking-[0.1em] mb-2">First Name</label>
                <input id="first-name" type="text" placeholder="Jane" className="input-premium" />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-[11px] font-semibold text-[#1a1d2e]/60 uppercase tracking-[0.1em] mb-2">Last Name</label>
                <input id="last-name" type="text" placeholder="Doe" className="input-premium" />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-[11px] font-semibold text-[#1a1d2e]/60 uppercase tracking-[0.1em] mb-2">Company / Facility</label>
              <input id="company" type="text" placeholder="e.g. Acme Tannery" className="input-premium" />
            </div>
            <div>
              <label htmlFor="email" className="block text-[11px] font-semibold text-[#1a1d2e]/60 uppercase tracking-[0.1em] mb-2">Work Email</label>
              <input id="email" type="email" placeholder="jane@company.com" className="input-premium" />
            </div>
            <div>
              <label htmlFor="process" className="block text-[11px] font-semibold text-[#1a1d2e]/60 uppercase tracking-[0.1em] mb-2">Industrial Constraints</label>
              <textarea id="process" rows={5} className="input-premium resize-none" placeholder="Specify pH, temperature, substrate, and chemical environment..." />
            </div>
            <button type="submit" className="btn-premium w-full justify-center mt-2">
              Submit Constraints
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
