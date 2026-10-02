import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Computational Biology & Enzyme Engineering",
  description:
    "Dennett AI Labs is a TechBio company that uses physics-informed AI to discover extremophile enzymes for industrial biotechnology. We replace wet-lab trial-and-error with computational screening — simulating protein stability, folding, and binding across millions of sequences.",
  openGraph: {
    title: "About Us — Dennett AI Labs",
    description:
      "TechBio company building physics-informed AI infrastructure for enzyme discovery. Mapping the extremes of biology for industrial manufacturing.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
