import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Start an Enzyme Discovery Pilot",
  description:
    "Tell us your industrial constraints — pH, temperature, substrate — and we'll compute the exact enzymes your manufacturing process needs. Start a CRANE pilot today.",
  openGraph: {
    title: "Contact — Dennett AI Labs",
    description:
      "Initiate an enzyme discovery pilot. Specify your industrial constraints and we compute the biology.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
