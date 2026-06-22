import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Gauge, Flame, Weight, Droplets, Leaf, ShieldCheck, Wrench, ArrowRight, Layers, CircleDot,
} from "lucide-react";
import tyreCutaway from "@/assets/tyre-cutaway.jpg";
import treadMacro from "@/assets/tread-macro.jpg";
import heroTyre from "@/assets/hero-tyre.png";
import { PageHero, PageShell } from "@/components/layout";

export const Route = createFileRoute("/science")({
  head: () => ({
    meta: [
      { title: "Science of Grip — Tyre Engineering & Technology | Qasr Al Bustan" },
      { name: "description", content: "Discover the science behind premium truck tyres — tread compounds, steel belts, heat resistance, wet grip and load engineering by Qasr Al Bustan." },
      { property: "og:title", content: "The Science of Grip — Tyre Engineering" },
      { property: "og:description", content: "How premium truck tyres are engineered: compounds, sidewalls, tread design and performance science." },
    ],
  }),
  component: SciencePage,
});

const specs = [
  { icon: Gauge, label: "Tread Design", value: "Multi-zone siping for traction and silence across asphalt and gravel.", stat: "5-Zone" },
  { icon: Flame, label: "Heat Resistance", value: "Silica compound dissipates thermal stress under sustained highway load.", stat: "180°C" },
  { icon: Weight, label: "Load Capacity", value: "Reinforced steel belts engineered for maximum truck payload.", stat: "4500kg" },
  { icon: Droplets, label: "Wet Grip", value: "Wide circumferential grooves channel water away instantly.", stat: "A-Class" },
  { icon: Leaf, label: "Fuel Efficiency", value: "Low rolling resistance compound reduces fleet diesel consumption.", stat: "-12%" },
];

const layers = [
  { t: "Tread Compound", d: "Silica-enriched rubber balancing wet grip and rolling resistance." },
  { t: "Steel Belts", d: "Twin steel belts deliver puncture resistance and high-speed stability." },
  { t: "Nylon Cap Ply", d: "Heat-stable nylon overlay locks tyre geometry at sustained speed." },
  { t: "Sidewall", d: "Reinforced ply construction absorbs impact and resists cuts and abrasion." },
  { t: "Inner Liner", d: "Halobutyl liner maintains pressure with near-zero permeability." },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

function SciencePage() {
  const [active, setActive] = useState(0);

  return (
    <PageShell>
      <PageHero
        eyebrow="02 — The Science"
        title="THE SCIENCE OF"
        accent="GRIP."
        description="Every millimetre of rubber is engineered. Explore the layers, compounds and design choices that define performance at speed, under load and in every UAE climate."
      />

      {/* Specs grid — interactive without rolling tyre */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <Reveal>
            <div className="section-label">Performance Pillars</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight text-ink leading-[0.95]">
              FIVE FORCES, ONE <span className="text-orange">TYRE</span>.
            </h2>
            <p className="mt-5 max-w-md text-ink/60">
              Hover or tap a pillar to reveal how Qasr Al Bustan tyres outperform on each engineering axis demanded by UAE fleets.
            </p>

            <div className="mt-10 space-y-2">
              {specs.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === active;
                return (
                  <button
                    key={s.label}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`w-full text-left grid grid-cols-[auto_1fr_auto] items-center gap-5 border-l-2 py-5 pl-5 pr-3 transition-all duration-500 rounded-r-md ${isActive ? "border-orange bg-white shadow-[var(--shadow-card)]" : "border-ink/10 hover:bg-white/60"}`}
                  >
                    <Icon className={`h-6 w-6 shrink-0 transition-colors ${isActive ? "text-orange" : "text-ink/40"}`} />
                    <div className="min-w-0">
                      <div className={`font-display text-lg tracking-[0.12em] transition-colors ${isActive ? "text-ink" : "text-ink/55"}`}>{s.label.toUpperCase()}</div>
                      <div className={`mt-1 text-xs text-ink/65 overflow-hidden transition-all ${isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>{s.value}</div>
                    </div>
                    <div className={`font-display text-xl tracking-wider shrink-0 transition-colors ${isActive ? "text-orange" : "text-ink/25"}`}>{s.stat}</div>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Static engineering visualisation — NO rolling tyre */}
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="card-soft overflow-hidden bg-white">
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-cream to-paper flex items-center justify-center">
                  <img src={heroTyre} alt="Static cross-section reference of premium truck tyre" loading="lazy" className="h-[85%] w-auto object-contain drop-shadow-2xl" />
                  {/* Annotation pins */}
                  {[
                    { top: "12%", left: "55%", label: "Tread Zone" },
                    { top: "38%", left: "20%", label: "Sidewall" },
                    { top: "62%", left: "70%", label: "Steel Belt" },
                    { top: "82%", left: "40%", label: "Inner Liner" },
                  ].map((p, i) => (
                    <div key={i} className="absolute" style={{ top: p.top, left: p.left }}>
                      <div className="relative">
                        <div className="h-3 w-3 rounded-full bg-orange ring-4 ring-orange/20" />
                        <div className="absolute top-1/2 left-5 -translate-y-1/2 whitespace-nowrap bg-ink text-white text-[10px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 rounded">
                          {p.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-5 border-t border-ink/5 flex items-center justify-between text-xs text-ink/60">
                  <span className="flex items-center gap-2"><CircleDot className="h-3.5 w-3.5 text-orange" /> Reference: QAB R-Series</span>
                  <span className="font-mono">315 / 80 R 22.5</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cutaway / Layers */}
      <section className="py-20 sm:py-28 bg-white border-y border-ink/5">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="section-label">Internal Architecture</div>
            <h2 className="mt-4 max-w-3xl font-display text-4xl sm:text-6xl tracking-tight text-ink leading-[0.95]">
              INSIDE THE <span className="text-orange">RUBBER</span>.
            </h2>
            <p className="mt-5 max-w-2xl text-ink/60">A cinematic reveal of the engineering layers that separate a tyre from a Qasr Al Bustan tyre.</p>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <Reveal delay={0.1}>
              <div className="card-soft overflow-hidden">
                <img src={tyreCutaway} alt="Tyre cutaway showing internal engineering layers" loading="lazy" width={1920} height={1080} className="w-full" />
                <div className="px-5 py-4 border-t border-ink/5 flex items-center justify-between text-[10px] tracking-[0.3em] text-ink/60">
                  <span className="flex items-center gap-2"><Layers className="h-3.5 w-3.5 text-orange" /> CUTAWAY VIEW</span>
                  <span>QAB / R-SERIES</span>
                </div>
              </div>
            </Reveal>

            <div className="space-y-3">
              {layers.map((l, i) => (
                <Reveal key={l.t} delay={0.15 + i * 0.08}>
                  <div className="group grid grid-cols-[auto_1fr] gap-5 border-l-2 border-ink/10 py-4 pl-5 transition-colors hover:border-orange bg-paper rounded-r-md">
                    <span className="font-display text-3xl text-orange/70 transition-colors group-hover:text-orange">0{i + 1}</span>
                    <div>
                      <div className="font-display text-xl tracking-wider text-ink">{l.t.toUpperCase()}</div>
                      <p className="mt-1 text-sm text-ink/60">{l.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tread macro */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="card-soft overflow-hidden">
              <img src={treadMacro} alt="Macro photograph of premium tyre tread pattern" loading="lazy" className="w-full" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="section-label">Tread Geometry</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight text-ink leading-[0.95]">
              GEOMETRY ENGINEERED FOR <span className="text-orange">EVERY KILOMETRE</span>.
            </h2>
            <ul className="mt-7 space-y-4 text-ink/75">
              {[
                ["Multi-pitch blocks", "Reduce harmonic noise across UAE highways."],
                ["3D sipes", "Open under braking for short stopping distances."],
                ["Wide grooves", "Eject water and sand from the contact patch instantly."],
                ["Reinforced shoulders", "Stabilise cornering for fully laden trucks."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 text-orange shrink-0 mt-0.5" />
                  <div><strong className="text-ink">{t}:</strong> <span className="text-ink/65">{d}</span></div>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-orange mt-8">Talk to an engineer <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <div className="section-label">Engineered Locally · Trusted Globally</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight leading-[0.95]">
              SCIENCE IS THE STARTING LINE. <span className="text-orange">PERFORMANCE</span> IS THE PROOF.
            </h2>
          </div>
          <div className="flex gap-4 lg:justify-end">
            <Link to="/products" className="btn-orange">Browse Products <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
