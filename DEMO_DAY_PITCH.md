# CRANE — AI Demo Day Pitch and Q&A Reference

**Dennett Labs** | Nairobi, Kenya  
**Event:** AI Demo Day — August 8, 2026  
**Pipeline:** CRANE V1 (Computational Retrosynthetic and Algorithmic Enzyme Engineering)

---

## The Pitch

### The Problem

Companies that manufacture products like laundry detergents, plastics recycling systems, or pharmaceuticals all depend on specialized biological proteins called enzymes. Finding the right enzyme for a specific industrial process currently requires:

- **6 to 12 months** of laboratory trial and error (directed evolution)
- **Millions of dollars** per screening campaign
- A **greater than 99% failure rate** — the vast majority of candidates tested in the lab do not survive real industrial conditions

The alternative — running brute-force 3D protein simulations on every possible candidate — would require years of supercomputer time. It is computationally intractable.

### The Solution

CRANE is an AI platform that performs this entire search computationally, before a single dollar is spent in the lab.

Instead of engineering proteins from scratch, CRANE searches nature's archive of extremophile organisms — bacteria and archaea that already survive in boiling acid springs, frozen tundras, and deep-sea volcanic vents. These organisms have spent three billion years evolving proteins that thrive in extreme heat, extreme pH, and harsh chemical environments.

CRANE runs these natural sequences through a series of AI and physics-based filters:

1. A high-speed Rust pre-filter eliminates sequences that cannot be manufactured at industrial scale.
2. A 650-million parameter protein language model checks whether each sequence follows the rules of natural protein evolution.
3. A molecular dynamics simulation tests each surviving candidate under the client's exact industrial conditions — their specific temperature, pH, and chemical environment.
4. A final scoring engine synthesizes all upstream results into a ranked commercial leaderboard.

The output is a clean, prioritized shortlist of enzyme candidates — each one validated against real operating conditions — ready for immediate laboratory synthesis.

### The Numbers

| Metric | Traditional Approach | CRANE |
|--------|---------------------|-------|
| Time to find a viable enzyme | 6-12 months | Minutes of GPU compute |
| Cost per screening campaign | Millions of dollars | Orders of magnitude cheaper |
| Failure rate | >99% of lab candidates fail | Failures eliminated computationally before lab spend |

### Where We Are

- Working V1 pipeline — runs end-to-end from raw protein sequences to a ranked commercial leaderboard.
- Validated against UniProt gold-standard enzymes with high prediction accuracy.
- Live landing page and waitlist at dennettlabs.com.
- Currently seeking first enterprise pilot partners.

### Target Markets

CRANE is not limited to one industry. The underlying physics is the same — only the input constraints change.

- **Laundry and Dish Detergents** — Alkaline proteases, pH 10-13, 60-85 degrees C. Novozymes and BASF spend hundreds of millions here.
- **Plastics Recycling** — PET degradation enzymes that survive 70-90 degree C heat reactors.
- **Pharmaceuticals** — Stereospecific synthesis with zero side-product formation.
- **Textile Processing** — Bio-polishing enzymes that remove microfibrils without degrading fiber strength.
- **Leather Bioprocessing** — Selective keratin breakdown preserving collagen matrix.
- **Biofuels and Bioenergy** — Ethanol-resistant enzymes for dense fermentation reactors.
- **Agriculture** — Phosphate-solubilizing enzymes for soil health.
- **Mining and Metallurgy** — Bioleaching enzymes that operate at pH as low as 1.0.
- **Food and Beverage** — Starch liquefaction at high viscosity and elevated temperatures.
- **Waste Management** — Lipid and polysaccharide hydrolysis in heterogeneous municipal waste.

Each of these verticals represents a multi-billion dollar industrial enzyme market.

---

## Possible Questions and Answers

### Business and Market

**"What is your business model?"**

We are a platform. A client gives us their manufacturing constraints — temperature, pH, chemical environment — and we deliver a ranked shortlist of enzyme candidates. We can charge per screening campaign or on a subscription basis for ongoing R&D support. The unit economics are extremely favorable because our marginal cost is GPU compute, not lab technicians and reagents.

**"Who is your target customer?"**

Industrial manufacturers and biotech companies that rely on enzymes in their production processes. This includes consumer goods companies (detergents), chemical companies (plastics recycling), pharmaceutical companies (drug synthesis), and contract research organizations (CROs) that run enzyme screening on behalf of their clients.

**"How big is this market?"**

The global industrial enzymes market is valued at over 7 billion dollars and growing at roughly 6-7% annually. The detergent enzyme segment alone is worth over 1.5 billion dollars. Every major industrial vertical we target — pharma, food, mining, textiles — has its own multi-billion dollar enzyme supply chain.

**"Who is your competition?"**

The incumbents are Novozymes (now part of Chr. Hansen), BASF, and DuPont/IFF. They spend hundreds of millions on traditional directed evolution — wet-lab campaigns that take months and have high failure rates. On the AI side, Zymergen was acquired by Ginkgo Bioworks, but their approach still required heavy wet-lab integration. Our differentiator is that we do the screening entirely computationally, targeting the client's specific industrial operating conditions — not just generic protein stability.

**"How do you make money before you have enterprise clients?"**

We are pre-revenue and focused on securing our first pilot partner. The value proposition is clear: we can dramatically reduce the time and cost of enzyme discovery. We are confident in converting early interest into a paid proof-of-concept engagement with a manufacturing partner.

**"Is this just for big companies?"**

No. That is actually part of the opportunity. Smaller biotech companies and contract research organizations cannot afford million-dollar directed evolution campaigns. CRANE gives them access to the same screening power at a fraction of the cost. We level the playing field.

**"What does a pilot engagement look like?"**

A client tells us their industrial conditions — the pH, temperature, and chemical environment of their manufacturing vat. We run CRANE against that constraint set and deliver a ranked shortlist of candidate enzymes within days. They then take those candidates into their own lab for wet-lab validation. If our top candidates perform as predicted, that is the proof point for a longer-term contract.

**"Why Nairobi?"**

Kenya has a growing biotech ecosystem and direct access to some of the most biodiverse extremophile environments on Earth — the East African Rift Valley, Lake Magadi (one of the most alkaline lakes in the world), and numerous geothermal hot springs. The biology we are mining computationally is literally in our backyard. We also operate at significantly lower cost than comparable teams in the US or Europe.

---

### Technical (Only Answer If Asked)

**"How does the AI actually work?"**

CRANE uses a four-gate hierarchical funnel. Gate 0 is a Rust-based microsecond pre-filter that checks basic biophysical viability — things like whether the protein can physically fold and remain soluble in water. Gate 1 uses a 650-million parameter protein language model from Meta to check whether the sequence follows the rules of natural protein evolution. Gate 2 runs molecular dynamics simulations using OpenMM to test each candidate under the client's exact industrial conditions — we titrate the pH, set the temperature, and calculate the steric relaxation energy to see if the active site holds together. Gate 3 synthesizes everything into a 0-100 fitness score.

**"Is this validated? How do you know it works?"**

Yes. We benchmarked CRANE against experimentally characterized enzymes from UniProt — the global protein database. For example, we asked CRANE to predict the optimal pH and temperature of Taq polymerase from its amino acid sequence alone. The actual pH is 7.5 and CRANE predicted 7.5 — a delta of zero. Across our gold-standard benchmark, we achieved sub-0.5 pH unit accuracy on four of six test enzymes.

**"What models do you use?"**

We use Meta's ESM-2 (facebook/esm2_t33_650M_UR50D) — a 33-layer, 650-million parameter protein language model trained on 250 million protein sequences. For molecular dynamics, we use OpenMM with implicit solvent (OBC2 generalized Born model) and L-BFGS energy minimization. Structure prediction uses ESMFold. The pre-filtering layer is written in Rust for speed.

**"What about AlphaFold?"**

AlphaFold2 is extraordinary for single-sequence structure prediction, but it was not designed for high-throughput industrial screening. Running AlphaFold on millions of candidate sequences would take months of GPU time. CRANE uses lighter-weight proxy signals — evolutionary perplexity and targeted molecular dynamics — to filter out non-viable candidates cheaply, reserving expensive 3D simulation only for the top survivors.

**"What is an extremophile?"**

An extremophile is an organism that thrives in conditions that would kill most life — boiling temperatures, extreme acidity or alkalinity, high salinity, or intense radiation. These organisms have evolved proteins that are naturally stable under conditions that match harsh industrial environments. Instead of engineering new proteins from scratch, CRANE searches this natural archive to find ones that already work.

**"What are your current limitations?"**

Our V1 model shows an outlier deviation on enzymes with extreme alkaline optima above pH 11.5 — these occupy a sparse region of our training data. This is a known limitation and a target for V2 improvement. We are also currently focused on monomeric enzymes (single-chain proteins). Multi-subunit enzyme complexes are on the roadmap.

---

### Founder and Team

**"Tell me about yourself / the team."**

[Prepare your own answer here — your background, what led you to this problem, any relevant experience in biotech, AI, or computational biology.]

**"Do you have scientific advisors?"**

[Prepare your own answer — mention any advisors, mentors, or academic collaborators if applicable.]

---

### Investment and Traction

**"Are you raising?"**

[Prepare your own answer — whether you are fundraising, at what stage, and what the capital would be used for.]

**"Do you have any letters of intent or pilot agreements?"**

[Prepare your own answer — any early interest, conversations with potential clients, or pipeline.]

**"What would you do with your first 100K / 500K / 1M?"**

[Prepare your own answer — typical priorities would be: GPU compute infrastructure, expanding the training dataset, hiring a wet-lab validation partner, and securing a first pilot client.]

---

*Dennett Labs — dennettlabs.com*
