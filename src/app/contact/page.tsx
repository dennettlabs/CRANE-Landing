"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

const emptyForm = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  process: "",
  website: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (field: keyof typeof emptyForm) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  // Handle submission of industrial constraints and pilot inquiry
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      // Submit pilot constraints payload to contact API endpoint
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error?.message || "Failed to send your inquiry.");
      }

      setStatus("success");
      setForm(emptyForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send your inquiry."
      );
    }
  };

  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+254 719 156 232";
  const contactTel = process.env.NEXT_PUBLIC_CONTACT_TEL || `tel:${contactPhone.replace(/\s+/g, "")}`;

  return (
    <div className="flex flex-col items-center min-h-screen hero-bg">
      <div className="w-full max-w-xl mx-auto pt-40 pb-24 px-6 md:px-8">
        <div className="text-center mb-14 animate-fade-up">
          <h1 className="text-[2.8rem] md:text-[3.2rem] font-extrabold tracking-[-0.02em] text-[#1a1d2e] mb-4">
            Initiate a Pilot
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#1a1d2e]/60 leading-[1.7]">
            Tell us the exact constraints of your industrial process. We will compute the biology required to survive it.
          </p>
        </div>

        <div className="glass rounded-2xl p-8 md:p-10 animate-fade-up delay-200">
          {status === "success" && (
            <div
              role="alert"
              aria-live="polite"
              className="mb-6 p-4 bg-green-50/80 backdrop-blur-sm text-green-700 rounded-xl border border-green-200/50 flex items-center gap-3 animate-fade-in"
            >
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
              <p className="font-medium">We received your constraints. We will be in touch.</p>
            </div>
          )}

          {status === "error" && (
            <div
              role="alert"
              aria-live="assertive"
              className="mb-6 p-4 bg-red-50/80 backdrop-blur-sm text-red-700 rounded-xl border border-red-200/50 flex items-center gap-3 animate-fade-in"
            >
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              <p className="font-medium">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot hidden field for bot mitigation */}
            <div className="sr-only absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={updateField("website")}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-[11px] font-semibold text-[#1a1d2e]/60 uppercase tracking-[0.1em] mb-2">
                  First Name
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                  className="input-premium"
                  value={form.firstName}
                  onChange={updateField("firstName")}
                  required
                  autoComplete="given-name"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-[11px] font-semibold text-[#1a1d2e]/60 uppercase tracking-[0.1em] mb-2">
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  className="input-premium"
                  value={form.lastName}
                  onChange={updateField("lastName")}
                  required
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-[11px] font-semibold text-[#1a1d2e]/60 uppercase tracking-[0.1em] mb-2">
                Company / Facility
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="e.g. Acme Tannery"
                className="input-premium"
                value={form.company}
                onChange={updateField("company")}
                required
                autoComplete="organization"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[11px] font-semibold text-[#1a1d2e]/60 uppercase tracking-[0.1em] mb-2">
                Work Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                className="input-premium"
                value={form.email}
                onChange={updateField("email")}
                required
                autoComplete="email"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
              />
            </div>

            <div>
              <label htmlFor="process" className="block text-[11px] font-semibold text-[#1a1d2e]/60 uppercase tracking-[0.1em] mb-2">
                Industrial Constraints
              </label>
              <textarea
                id="process"
                name="process"
                rows={5}
                className="input-premium resize-none"
                placeholder="Specify pH, temperature, substrate, and chemical environment..."
                value={form.process}
                onChange={updateField("process")}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-premium w-full justify-center mt-2 disabled:opacity-70 disabled:pointer-events-none"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending…
                </>
              ) : (
                "Submit Constraints"
              )}
            </button>
          </form>
        </div>

        {/* Direct Contacts Section */}
        <div className="mt-14 animate-fade-up delay-300">
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold text-[#1a1d2e]/45 uppercase tracking-[0.14em]">
              Or Reach Us Directly
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="mailto:support@dennettlabs.com"
              className="glass rounded-2xl p-5 flex flex-col items-center text-center group hover:bg-white/80 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2b5ea8]/10 text-[#2b5ea8] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#1a1d2e]/50 mb-1">
                Support
              </span>
              <span className="text-[13px] font-semibold text-[#1a1d2e] group-hover:text-[#2b5ea8] transition-colors break-all">
                support@dennettlabs.com
              </span>
            </a>

            <a
              href={contactTel}
              className="glass rounded-2xl p-5 flex flex-col items-center text-center group hover:bg-white/80 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2b5ea8]/10 text-[#2b5ea8] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#1a1d2e]/50 mb-1">
                Telephone
              </span>
              <span className="text-[13px] font-semibold text-[#1a1d2e] group-hover:text-[#2b5ea8] transition-colors">
                {contactPhone}
              </span>
              <span className="text-[11px] text-[#1a1d2e]/45 mt-1">
                Mon–Fri, 9am–6pm EAT
              </span>
            </a>

            <div className="glass rounded-2xl p-5 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-[#2b5ea8]/10 text-[#2b5ea8] flex items-center justify-center mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#1a1d2e]/50 mb-1">
                Headquarters
              </span>
              <span className="text-[13px] font-semibold text-[#1a1d2e]">
                Nairobi, Kenya
              </span>
              <span className="text-[11px] text-[#1a1d2e]/45 mt-1">
                Dennett Labs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
